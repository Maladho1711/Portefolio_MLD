import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { socialLinks } from '../config/socialLinks';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi du message');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setIsSubmitting(false);
      // Gestion des erreurs réseau vs erreurs serveur
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setError('Erreur de connexion. Vérifiez votre connexion internet et réessayez.');
      } else {
        setError(error instanceof Error ? error.message : 'Erreur lors de l\'envoi du message. Veuillez réessayer.');
      }
      
      // Effacer l'erreur après 5 secondes
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: socialLinks.email,
      link: `mailto:${socialLinks.email}`
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: socialLinks.phone,
      link: `tel:${socialLinks.phone.replace(/\s/g, '')}`
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: socialLinks.location,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-12">
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="!pt-4 sm:!pt-6 !pb-4 sm:!pb-6">
        <div className="relative text-center">
          {/* Éléments décoratifs améliorés */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl"
            ></motion.div>
            <div
              className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge amélioré */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 border-blue-200 dark:border-blue-800 rounded-full text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-400 mb-4 shadow-xl"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-full shadow-lg"
                />
                <span>Collaborons ensemble</span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400 rounded-full shadow-lg"
                />
              </motion.div>

              {/* Titre amélioré */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight">
                Me{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                  className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent"
                >
                  Contacter
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. 
                Je serais ravi d'échanger avec vous sur vos besoins.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact Content */}
      <Section background="white" padding="lg" className="!pt-4 sm:!pt-6 !pb-4 sm:!pb-6">
        <div className="relative">
          {/* Éléments décoratifs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-0 w-48 h-48 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400 mb-4 shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                  />
                  <span>Informations de contact</span>
                </motion.div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                  Restons en{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                    contact
                  </span>
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed"
              >
                Je suis toujours ouvert aux discussions sur de nouveaux projets, 
                des opportunités de collaboration ou simplement pour échanger 
                sur les dernières tendances du développement web.
              </motion.p>

              <div className="space-y-4 sm:space-y-5">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 rounded-xl flex items-center justify-center shadow-xl flex-shrink-0 relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                      <contact.icon size={18} className="sm:w-5 sm:h-5 text-white relative z-10" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">{contact.title}</p>
                      <a
                        href={contact.link}
                        className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
              </div>

              {/* Disponibilité */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 sm:mt-8 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
                <div className="relative p-4 sm:p-5 bg-blue-50/90 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-blue-200 dark:border-blue-800 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-2 h-2 bg-green-500 rounded-full shadow-lg"
                    ></motion.div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Disponibilité</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Actuellement <span className="text-green-600 dark:text-green-400 font-semibold">disponible</span> pour 
                    de nouveaux projets. Je réponds généralement sous <strong className="text-gray-900 dark:text-white">24h</strong>.
                  </p>
                </div>
              </motion.div>
            </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="relative overflow-hidden group">
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="text-center py-12 relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                  >
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-6 drop-shadow-lg" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4"
                  >
                    Message{' '}
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                      envoyé !
                    </span>
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </motion.p>
                </motion.div>
              ) : (
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400 mb-4 shadow-lg"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                      />
                      <span>Formulaire de contact</span>
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                      Envoyez-moi un{' '}
                      <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                        message
                      </span>
                    </h2>
                  </motion.div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg"
                    >
                      <p className="text-sm text-red-700 dark:text-red-400 font-semibold">
                        {error}
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Votre nom *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-700 shadow-sm hover:shadow-md"
                        placeholder="Thierno Sadou Barry"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Votre email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-700 shadow-sm hover:shadow-md"
                        placeholder="thiernosadoubarry@gmail.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Votre numéro de téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-700 shadow-sm hover:shadow-md"
                        placeholder="+224 623 436 513"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Votre message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 transition-all duration-200 resize-none hover:border-blue-300 dark:hover:border-blue-700 shadow-sm hover:shadow-md"
                        placeholder="Décrivez votre projet ou votre question..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        disabled={isSubmitting}
                        className="group shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-blue-500/30 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <motion.div
                              whileHover={{ rotate: 45 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                            Envoyer le message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              )}
            </Card>
          </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
