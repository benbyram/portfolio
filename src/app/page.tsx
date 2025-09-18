export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              Ben Byram
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#services" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Product Strategy &<br />
              <span className="text-blue-600 dark:text-blue-400">UX Consulting</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              I help companies build better products through strategic thinking, user-centered design, and data-driven decision making. 
              Available for contract consulting and full-time product management opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I'm a strategic product professional with a passion for creating user-centered solutions that drive business growth. 
                With experience across multiple industries, I bring a unique perspective to product strategy and user experience design.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Whether you're looking for contract consulting to accelerate your product development or seeking a full-time product manager 
                to lead your team, I'm here to help you achieve your goals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                  <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                  <div className="text-slate-600 dark:text-slate-300">Projects Delivered</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Core Expertise</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 dark:text-slate-300">Product Strategy & Roadmapping</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 dark:text-slate-300">User Research & UX Design</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 dark:text-slate-300">Data-Driven Decision Making</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 dark:text-slate-300">Cross-Functional Team Leadership</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 dark:text-slate-300">Agile Product Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Services</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Comprehensive product and UX consulting services to accelerate your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Product Strategy</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Develop comprehensive product strategies, roadmaps, and go-to-market plans that align with business objectives.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">User Research</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Conduct user interviews, usability testing, and market research to inform product decisions and improve user experience.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">UX Design</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Create intuitive user interfaces and experiences that delight users while meeting business requirements.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Product Management</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Lead cross-functional teams, manage product backlogs, and drive product development from concept to launch.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Analytics & Insights</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Set up product analytics, analyze user behavior, and provide actionable insights to optimize product performance.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Team Leadership</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Build and lead high-performing product teams, establish processes, and foster collaborative culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              A selection of projects showcasing my product strategy and UX expertise
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-xl p-8">
              <div className="mb-4">
                <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  Product Strategy
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                E-commerce Platform Redesign
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Led the complete redesign of a B2B e-commerce platform, resulting in 40% increase in conversion rates 
                and 25% improvement in user satisfaction scores.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm">User Research</span>
                <span className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm">UX Design</span>
                <span className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm">A/B Testing</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-xl p-8">
              <div className="mb-4">
                <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                  Product Management
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Mobile App Launch Strategy
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Developed and executed go-to-market strategy for a fintech mobile app, achieving 100K downloads 
                in the first quarter and 4.5-star app store rating.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm">Market Research</span>
                <span className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm">Product Roadmap</span>
                <span className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm">Launch Strategy</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl p-8">
              <div className="mb-4">
                <span className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                  UX Consulting
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                SaaS Dashboard Optimization
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Redesigned complex analytics dashboard for a SaaS platform, reducing task completion time by 60% 
                and improving user onboarding conversion by 35%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm">Information Architecture</span>
                <span className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm">Wireframing</span>
                <span className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm">Usability Testing</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 rounded-xl p-8">
              <div className="mb-4">
                <span className="bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm font-medium">
                  Digital Transformation
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Legacy System Modernization
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Led digital transformation initiative for enterprise client, modernizing legacy systems and 
                implementing agile processes, resulting in 50% faster time-to-market.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm">Process Improvement</span>
                <span className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm">Change Management</span>
                <span className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm">Team Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Let's Work Together</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Ready to accelerate your product development? I'm available for contract consulting projects 
            and full-time product management opportunities.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Contract Consulting</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Short-term projects, strategic consulting, and specialized expertise for your product challenges.
              </p>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <p>• Product Strategy & Roadmapping</p>
                <p>• UX Research & Design</p>
                <p>• Process Optimization</p>
                <p>• Team Training & Mentoring</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Full-Time Opportunities</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Looking for a strategic product manager to lead your team and drive product success.
              </p>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                <p>• Senior Product Manager</p>
                <p>• Head of Product</p>
                <p>• Product Strategy Lead</p>
                <p>• VP of Product</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:ben@example.com" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/benbyram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <div className="text-xl font-bold mb-2">Ben Byram</div>
            <div className="text-slate-400">Product Strategy & UX Consulting</div>
          </div>
          <div className="text-sm text-slate-500">
            © 2024 Ben Byram. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
