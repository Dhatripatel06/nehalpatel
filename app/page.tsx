'use client'

import { useState } from 'react'
import { Menu, X, Mail, Phone, MapPin, ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    setIsMenuOpen(false)
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                NP
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {['Home', 'About', 'Experience', 'Skills', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-secondary/20'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top">
              {['Home', 'About', 'Experience', 'Skills', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 rounded-lg hover:bg-secondary/20 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-secondary/20 text-primary rounded-full text-sm font-medium">
                Professional Portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
              Nehal <span className="text-gradient">Patel</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              Fashion Designer & Horticulture Educator
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Empowering women through skill development and entrepreneurship in fashion design, culinary arts, and sustainable agriculture.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-medium"
              >
                Learn More
              </button>
            </div>

            {/* Contact Info Quick */}
            <div className="mt-12 space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone size={20} />
                <a href="tel:9909242453">9909242453</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
                <a href="mailto:nehalpatel19777@gmail.com">nehalpatel19777@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={20} />
                <span>Bhavnagar, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-1">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-muted">
                  <Image
                    src="/passport.jpeg"
                    alt="Nehal Patel - Professional Headshot"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 animate-in fade-in duration-700">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 25 years of experience , I am a dedicated fashion designer and horticulture educator committed to empowering women through skill development and entrepreneurship.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I hold a Bachelor of Commerce degree from S.N.D.T. Mahila College, Bhavnagar, and have completed specialized training in Fashion Design and Entrepreneurship Development Programs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My passion lies in creating sustainable opportunities for women in rural and urban areas through comprehensive training in fashion design, pickle making, herbal products, and organic gardening.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-border hover:border-primary transition-colors">
                <h3 className="text-xl font-bold text-primary mb-2">Education</h3>
                <p className="text-muted-foreground">B.Com from S.N.D.T. Mahila College </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl border border-border hover:border-accent transition-colors">
                <h3 className="text-xl font-bold text-accent mb-2">Location</h3>
                <p className="text-muted-foreground">Bhavnagar, Gujarat, India</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl border border-border hover:border-secondary transition-colors">
                <h3 className="text-xl font-bold text-secondary mb-2">Experience</h3>
                <p className="text-muted-foreground">25+ years </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Professional Experience
          </h2>
          <div className="space-y-8 animate-in fade-in duration-700">
            {[
              {
                title: 'Fashion Design Lecturer',
                company: 'Soham Institute',
                period: '',
                description: 'Teaching fashion design principles, garment construction, and professional styling to aspiring designers.',
              },
              {
                title: 'Trainer - Women Empowerment',
                company: 'Piparla, Bhavnagar',
                period: '',
                description: 'Conducting specialized training programs for women in pickle making, herbal product creation, and sustainable agriculture practices.',
              },
              {
                title: 'Horticulture Trainer & Deputy Director',
                company: 'Directorate of Horticulture, Bagayat Kacher, Navapar, Bhavnagar',
                period: '',
                description: 'Leading women training initiatives in seed saving, microgreens cultivation, organic fertilizer production, and sustainable gardening practices.',
              },
            ].map((job, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{job.title}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <span className="text-muted-foreground text-sm md:text-base font-medium mt-2 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8 animate-in fade-in duration-700">
            {[
              {
                title: 'Fashion & Design',
                skills: ['Fashion Design', 'Garment Construction', 'Hand-made Jewelry', 'Drawing', 'Painting'],
                icon: '✨',
              },
              {
                title: 'Horticulture & Organic',
                skills: ['Gardening', 'Seed Saving', 'Growing Microgreens', 'Organic Fertilizers', 'Kitchen Canning'],
                icon: '🌱',
              },
              {
                title: 'Entrepreneurship',
                skills: ['Herbal Products', 'Natural Lip Balm Making', 'Herbal Hair Oils', 'Herbal Lotion', 'Public Speaking'],
                icon: '💼',
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Work & Achievements
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Moments from my training sessions, workshops, and women empowerment initiatives across Bhavnagar
          </p>
          <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-700">
            {[
              {
                image: '/papapa.jpeg',
                title: 'Women Empowerment Workshop',
                description: 'Training session with women from the community on culinary arts and skill development.',
              },
              {
                image: '/pip.jpeg',
                title: 'Community Training Program',
                description: 'Interactive session teaching traditional food preparation and preservation techniques.',
              },
              {
                image: '/piparla.jpeg',
                title: 'Piparla Training Initiative',
                description: 'Leading women training programs in Piparla, Bhavnagar for pickle making and herbal products.',
              },
              {
                image: '/trainer.jpeg',
                title: 'Professional Training Session',
                description: 'Dedicated to women empowerment through education and skill development.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-border hover:border-primary transition-all duration-300"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Certifications & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-700">
            {[
              {
                title: 'Fashion Designer Certification',
                issuer: 'CR Bhatt Institute',
                year: '',
                link: 'https://drive.google.com/file/d/1XyidBVwo7EIib0BEDg0MgIrPI1T5gobh/view',
              },
              {
                title: 'Entrepreneurship Development Programme (EDP)',
                issuer: 'SHUBHAM & NABARD',
                year: '',
                link: 'https://drive.google.com/file/d/189xx42LFflGRV0uHGMIYizGAIbv2Svr-/view',
              },
              {
                title: 'Fashion Design Training',
                issuer: 'SHUBHAM & NABARD',
                year: '',
                link: 'https://drive.google.com/file/d/1J8lNzYj2LVizmtgzLTFwWsSSrVUecIBY/view',
              },
              {
                title: 'Fashion Design Lecturer Certification',
                issuer: 'Professional Development',
                year: '',
                link: 'https://drive.google.com/file/d/1LJJvmA8mFsGOvxMkBM95cqU-50dDv619/view',
              },
              {
                title: 'Horticulture Trainer Certification',
                issuer: 'Directorate of Horticulture',
                year: '',
                link: 'https://drive.google.com/file/d/1QHFiHMdY1pvVI2yPuyiQzUCWWB9d7c4A/view',
              },
              {
                title: 'Work Experience Certificate',
                issuer: 'Professional Experience',
                year: '',
                link: 'https://drive.google.com/file/d/15y_DQi7dRujiOEfIctJCwBzyK4mPleRn/view',
              },
              
              
            ].map((cert, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏆</div>
                  <div className="flex-1">
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-foreground mb-1 hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
                      >
                        {cert.title}
                      </a>
                    ) : (
                      <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
                    )}
                    <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                    <p className="text-primary font-medium text-sm">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Get In Touch
          </h2>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border p-12">
            <p className="text-center text-lg text-muted-foreground mb-12">
              I'd love to hear from you! Whether you're interested in training programs, consultation, or collaboration, feel free to reach out.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a
                href="tel:9909242453"
                className="flex flex-col items-center p-6 bg-background rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <Phone className="text-primary mb-4" size={32} />
                <span className="font-semibold text-foreground mb-2">Phone</span>
                <span className="text-muted-foreground text-center text-sm hover:text-primary transition-colors">
                  9909242453
                </span>
              </a>

              <a
                href="mailto:nehalpatel19777@gmail.com"
                className="flex flex-col items-center p-6 bg-background rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <Mail className="text-primary mb-4" size={32} />
                <span className="font-semibold text-foreground mb-2">Email</span>
                <span className="text-muted-foreground text-center text-sm hover:text-primary transition-colors">
                  nehalpatel19777@gmail.com
                </span>
              </a>

              <div className="flex flex-col items-center p-6 bg-background rounded-xl border border-border">
                <MapPin className="text-primary mb-4" size={32} />
                <span className="font-semibold text-foreground mb-2">Location</span>
                <span className="text-muted-foreground text-center text-sm">
                  Bhavnagar, Gujarat, India
                </span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Available for consulting, training programs, and women empowerment initiatives
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-background border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">
            © 2025 Nehal Patel. All rights reserved.
          </p>
          <p className="text-sm opacity-75">
            Empowering women through education, skill development, and entrepreneurship.
          </p>
        </div>
      </footer>
    </div>
  )
}
