import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Download, Linkedin, MessageCircle, ExternalLink } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsHeaderCompact(currentScrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 500);
  const heroScale = Math.max(0.8, 1 - scrollY / 2000);

  return (
    <div className="bg-gradient-to-br from-[#496270] via-[#9CABDB] to-[#BB9991] min-h-screen">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHeaderCompact
            ? 'bg-[#496270]/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-0'
        }`}
      >
        {isHeaderCompact && (
          <div className="container mx-auto px-6 flex items-center gap-4 animate-fadeIn">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#BB9991] shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Carlos Alejandro Ortega Arceo"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-white">Carlos Alejandro Ortega Arceo</h2>
          </div>
        )}
      </header>

      <section
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-20"
        style={{
          opacity: heroOpacity,
          transform: `scale(${heroScale}) translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#496270]/30 to-[#496270]/60" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://via.placeholder.com/300"
              alt="Carlos Alejandro Ortega Arceo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Carlos Alejandro<br />Ortega Arceo
            </h1>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Guadalajara, Jalisco</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:Carlos2007056@gmail.com" className="hover:text-[#BB9991] transition-colors cursor-pointer">
                  Carlos2007056@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:3314092938" className="hover:text-[#BB9991] transition-colors cursor-pointer">
                  331-409-2938
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Professional Profile</h2>
              <p className="text-white/90 leading-relaxed text-lg">
                Systems engineer with a specialization in quality and continuous improvement, complemented by a
                master's degree in Data Science. Proven expertise in process analysis, data visualization, and
                advanced analytics using tools like Power BI, SQL, Python, and R. Strong background in project
                management, quality assurance, and driving operational excellence through data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white/95 backdrop-blur-sm">
        <section className="container mx-auto px-6 py-20" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
          <h2 className="text-4xl font-bold text-[#496270] mb-12 text-center">Professional Experience</h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#496270] via-[#9CABDB] to-[#BB9991]" />

            <div className="space-y-12">
              <div className="relative pl-20 group">
                <div className="absolute left-4 w-9 h-9 bg-[#BB9991] rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300" />
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#9CABDB]/20">
                  <h3 className="text-2xl font-bold text-[#496270] mb-2">Data Analyst | Strategic Business Analyst</h3>
                  <p className="text-[#BB9991] font-semibold mb-1">Continental Automotive</p>
                  <p className="text-gray-600 mb-4">August 2024 – Present</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2"><span className="text-[#9CABDB] font-bold">•</span> Designed and implemented interactive dashboards in Power BI for strategic decision-making</li>
                    <li className="flex gap-2"><span className="text-[#9CABDB] font-bold">•</span> Automated reporting processes, reducing manual effort by 40%</li>
                    <li className="flex gap-2"><span className="text-[#9CABDB] font-bold">•</span> Analyzed KPIs to identify improvement opportunities and optimize resources</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-20 group">
                <div className="absolute left-4 w-9 h-9 bg-[#9CABDB] rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300" />
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#9CABDB]/20">
                  <h3 className="text-2xl font-bold text-[#496270] mb-2">Continuous Improvement Coordinator</h3>
                  <p className="text-[#BB9991] font-semibold mb-1">Sanmina Corporation</p>
                  <p className="text-gray-600 mb-4">January 2024 – August 2024</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2"><span className="text-[#9CABDB] font-bold">•</span> Led Lean Six Sigma initiatives to improve operational efficiency</li>
                    <li className="flex gap-2"><span className="text-[#9CABDB] font-bold">•</span> Facilitated root cause analysis using 5 Whys and Fishbone diagrams</li>
                    <li className="flex gap-2"><span className="text-[#9CABDB] font-bold">•</span> Reduced defect rates by 25% through process optimization</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-20 group">
                <div className="absolute left-4 w-9 h-9 bg-[#496270] rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300" />
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#9CABDB]/20">
                  <h3 className="text-2xl font-bold text-[#496270] mb-2">Quality Engineer</h3>
                  <p className="text-[#BB9991] font-semibold mb-1">Sanmina Corporation</p>
                  <p className="text-gray-600 mb-4">July 2022 – January 2024</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2"><span className="text-[#9CABDB] font-bold">•</span> Conducted quality audits to ensure compliance with ISO standards</li>
                    <li className="flex gap-2"><span className="text-[#9CABDB] font-bold">•</span> Implemented corrective actions to address non-conformances</li>
                    <li className="flex gap-2"><span className="text-[#9CABDB] font-bold">•</span> Collaborated with cross-functional teams to resolve quality issues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20 bg-gradient-to-b from-transparent to-[#496270]/5">
          <h2 className="text-4xl font-bold text-[#496270] mb-12 text-center">Education</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#BB9991] hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#496270] mb-2">Master's in Data Science</h3>
              <p className="text-[#BB9991] font-semibold mb-1">Universidad Panamericana</p>
              <p className="text-gray-600">2023 – 2024</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#9CABDB] hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#496270] mb-2">B.S. in Systems Engineering</h3>
              <p className="text-[#BB9991] font-semibold mb-1">Universidad Panamericana</p>
              <p className="text-gray-600 mb-2">2018 – 2022</p>
              <p className="text-gray-700">Specialization: Quality and Continuous Improvement</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-[#496270] mb-12 text-center">Certifications</h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              'Yellow Belt in Lean Six Sigma',
              'Green Belt in Lean Six Sigma',
              'Scrum Master Certification',
              'Power BI Data Analyst Associate',
              'Python for Data Science',
              'Advanced SQL for Data Analytics'
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#9CABDB]/20 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#BB9991] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-800 font-semibold">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section ref={skillsRef} className="container mx-auto px-6 py-20 bg-gradient-to-b from-[#496270]/5 to-transparent">
          <h2 className="text-4xl font-bold text-[#496270] mb-12 text-center">Technical Skills</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { name: 'Power BI', level: 95 },
              { name: 'SQL', level: 90 },
              { name: 'Python', level: 85 },
              { name: 'R', level: 80 },
              { name: 'Java', level: 75 },
              { name: 'Excel/VBA', level: 90 },
              { name: 'Tableau', level: 80 },
              { name: 'Machine Learning', level: 75 },
              { name: 'Data Visualization', level: 92 },
              { name: 'Statistical Analysis', level: 88 },
              { name: 'Process Improvement', level: 93 },
              { name: 'Project Management', level: 85 }
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-[#496270]">{skill.name}</span>
                  <span className="font-bold text-[#BB9991]">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#496270] via-[#9CABDB] to-[#BB9991] rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: skillsVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-[#496270] mb-12 text-center">Languages</h2>

          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#BB9991]">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#496270]">Spanish</span>
                <span className="text-lg text-[#BB9991] font-semibold">Native</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#9CABDB]">
              <div className="flex justify-between items-center mb-3">
                <span className="text-2xl font-bold text-[#496270]">English</span>
                <span className="text-lg text-[#BB9991] font-semibold">Advanced (80%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="w-[80%] h-full bg-gradient-to-r from-[#496270] to-[#9CABDB] rounded-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20 bg-gradient-to-b from-transparent to-[#496270]/10">
          <h2 className="text-4xl font-bold text-[#496270] mb-12 text-center">Key Competencies</h2>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-xl">
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-[#BB9991] font-bold text-xl">•</span>
                <span className="flex-1">Advanced expertise in data analysis, visualization, and business intelligence tools</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#9CABDB] font-bold text-xl">•</span>
                <span className="flex-1">Proven track record in Lean Six Sigma methodologies and continuous improvement initiatives</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#496270] font-bold text-xl">•</span>
                <span className="flex-1">Strong analytical mindset with ability to translate complex data into actionable insights</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#BB9991] font-bold text-xl">•</span>
                <span className="flex-1">Experience in cross-functional collaboration and stakeholder management</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#9CABDB] font-bold text-xl">•</span>
                <span className="flex-1">Proficient in statistical analysis, predictive modeling, and machine learning techniques</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#496270] font-bold text-xl">•</span>
                <span className="flex-1">Demonstrated ability to drive process optimization and operational excellence</span>
              </li>
            </ul>
          </div>
        </section>

        <footer className="bg-gradient-to-r from-[#496270] to-[#9CABDB] text-white py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-3xl font-bold">Let's Connect</h2>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:Carlos2007056@gmail.com"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-105 backdrop-blur-sm"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Me</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-105 backdrop-blur-sm"
                  download
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>
              </div>

              <div className="flex gap-6 mt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 backdrop-blur-sm"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                <a
                  href="https://wa.me/523314092938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 backdrop-blur-sm"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>

                <a
                  href="tel:3314092938"
                  className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 backdrop-blur-sm"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>

              <p className="text-white/70 text-center mt-8">
                © 2024 Carlos Alejandro Ortega Arceo. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
