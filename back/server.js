import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config();

// Validation des variables d'environnement requises
const requiredEnvVars = ['SMTP_USER', 'SMTP_PASS'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Variables d\'environnement manquantes:', missingVars.join(', '));
  console.error('💡 Créez un fichier .env dans le dossier back/ avec les variables requises.');
  process.exit(1);
}

const app = express();
// Render utilise le port défini dans PORT, sinon 3001 pour le développement local
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting pour protéger contre le spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Maximum 5 requêtes par IP toutes les 15 minutes
  message: {
    success: false,
    error: 'Trop de tentatives. Veuillez réessayer dans 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Configuration du transporteur email
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
};

// Route de santé
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

  // Route pour envoyer un email (protégée par rate limiting)
  app.post('/api/contact', contactLimiter, async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      // Validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          error: 'Les champs nom, email et message sont requis' 
        });
      }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Format d\'email invalide'
            });
        }

        // Créer le transporteur
        const transporter = createTransporter();

    // Configuration de l'email
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER, // Email de réception
      replyTo: `${name} <${email}>`, // Permet de répondre directement au client
      subject: `Nouveau message de contact - ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #1f2937;">Nom:</strong> 
              <span style="color: #4b5563;">${name}</span>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #1f2937;">Email:</strong> 
              <span style="color: #2563eb;">${email}</span>
            </p>
            ${phone ? `
            <p style="margin: 10px 0;">
              <strong style="color: #1f2937;">Téléphone:</strong> 
              <span style="color: #4b5563;">${phone}</span>
            </p>
            ` : ''}
            <p style="margin: 10px 0;">
              <strong style="color: #1f2937;">Message:</strong>
            </p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb; margin-top: 10px;">
              <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
            <p>Ce message a été envoyé depuis le formulaire de contact de votre portfolio.</p>
            <p>Vous pouvez répondre directement à cet email pour contacter ${name}.</p>
          </div>
        </div>
      `,
            text: `
        Nouveau message de contact
        
        Nom: ${name}
        Email: ${email}
        ${phone ? `Téléphone: ${phone}` : ''}
        
        Message:
        ${message}
        
        ---
        Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
        Vous pouvez répondre directement à cet email pour contacter ${name}.
      `
        };

        // Envoyer l'email
        await transporter.sendMail(mailOptions);

        // Email de confirmation au client (optionnel)
        if (process.env.SEND_CONFIRMATION === 'true') {
            const confirmationMail = {
                from: process.env.SMTP_USER,
                to: email,
                subject: 'Confirmation de réception - Portfolio',
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Merci pour votre message !</h2>
            <p>Bonjour ${name},</p>
            <p>J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.</p>
            <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
              Cordialement,<br>
              Barry Mamadou Maladho
            </p>
          </div>
        `
            };

            await transporter.sendMail(confirmationMail);
        }

        res.json({
            success: true,
            message: 'Message envoyé avec succès'
        });

    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        res.status(500).json({
            success: false,
            error: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.'
        });
    }
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur backend démarré sur le port ${PORT}`);
    console.log(`📧 Service d'envoi d'emails configuré`);
});

