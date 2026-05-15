import { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { contactInfo } from '../data/siteData';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div>
      <SEO
        title="Contact Us"
        description="Contact KICS UET Lahore for research collaboration, technology services, professional training, or general inquiries. Phone, email and address."
        breadcrumbs={[{ label: 'Contact', url: '/contact' }]}
      />
      <PageHero
        title="Contact Us"
        subtitle="Reach out to our team for research collaboration, services, training, or general inquiries."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info panel */}
            <AnimateOnScroll animation="reveal-left" className="lg:col-span-2">
              <div className="bg-hero-gradient rounded-2xl p-7 text-white h-full bg-dot-pattern">
                <span className="eyebrow">Get in Touch</span>
                <h2 className="text-2xl font-heading font-bold mb-5 text-white">Contact Information</h2>
                <div className="space-y-5 mb-8">
                  <a href={`tel:${contactInfo.phone}`} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-gold flex items-center justify-center flex-shrink-0 transition-colors">
                      <FiPhone size={16} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">Phone</p>
                      <p className="text-white text-sm font-medium">{contactInfo.phone}</p>
                    </div>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-gold flex items-center justify-center flex-shrink-0 transition-colors">
                      <FiMail size={16} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">Email</p>
                      <p className="text-white text-sm font-medium">{contactInfo.email}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <FiMapPin size={16} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">Address</p>
                      <p className="text-white text-sm leading-relaxed">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mb-6">
                  <p className="text-white/50 text-xs mb-3 uppercase tracking-wider">Department Contacts</p>
                  <div className="space-y-3">
                    {contactInfo.contacts.map((c) => (
                      <div key={c.name} className="bg-white/8 rounded-lg p-3">
                        <p className="text-gold text-xs font-semibold">{c.role}</p>
                        <p className="text-white text-sm font-medium">{c.name}</p>
                        <p className="text-white/55 text-xs">{c.title}</p>
                        <p className="text-white/55 text-xs mt-0.5 flex items-center gap-1"><FiPhone size={10} /> {c.phone}{c.cell ? ` | ${c.cell}` : ''}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {[
                    { Icon: FaFacebookF, href: contactInfo.socials.facebook },
                    { Icon: FaTwitter,   href: contactInfo.socials.twitter },
                    { Icon: FaLinkedinIn,href: contactInfo.socials.linkedin },
                  ].map(({ Icon, href }, i) => (
                    <a key={i} href={href} target="_blank" rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all duration-200">
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll animation="reveal-right" className="lg:col-span-3">
              <span className="eyebrow">Send a Message</span>
              <h2 className="section-title mb-6">We'd Love to Hear From You</h2>

              {sent && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm flex items-center gap-2">
                  ✅ Thank you! Your message has been sent. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                  ].map(field => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-semibold text-slate-700 mb-1.5">{field.label}</label>
                      <input id={field.id} type={field.type} placeholder={field.placeholder} required
                        value={form[field.id]} onChange={e => setForm({ ...form, [field.id]: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
                  <input id="subject" type="text" placeholder="How can we help?" required
                    value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea id="message" rows={5} placeholder="Tell us about your inquiry…" required
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                  <FiSend size={15} /> Send Message
                </button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <AnimateOnScroll>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <iframe
                title="KICS Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.7!2d74.3080!3d31.4804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c526d4f5a5%3A0xef3b22b4e2f7cc13!2sUniversity%20of%20Engineering%20and%20Technology%2C%20Lahore!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
