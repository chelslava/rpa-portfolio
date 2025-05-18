import React, { useState, useRef, useEffect } from 'react';
import './index.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const sections = ['about', 'skills', 'projects', 'testimonials', 'contact'];

  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.current.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) observer.current.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Челищев Вячеслав</h1>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className={`transition-all ${activeSection === 'about' ? 'text-blue-400' : 'hover:text-blue-300'}`}>
              Обо мне
            </button>
            <button onClick={() => scrollToSection('skills')} className={`transition-all ${activeSection === 'skills' ? 'text-blue-400' : 'hover:text-blue-300'}`}>
              Навыки
            </button>
            <button onClick={() => scrollToSection('projects')} className={`transition-all ${activeSection === 'projects' ? 'text-blue-400' : 'hover:text-blue-300'}`}>
              Проекты
            </button>
            <button onClick={() => scrollToSection('testimonials')} className={`transition-all ${activeSection === 'testimonials' ? 'text-blue-400' : 'hover:text-blue-300'}`}>
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contact')} className={`transition-all ${activeSection === 'contact' ? 'text-blue-400' : 'hover:text-blue-300'}`}>
              Контакты
            </button>
          </nav>

          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">

        {/* About Section */}
        <section id="about" className="mb-32 animate-fadeIn">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                <img   src="/images/photo.png"   alt="Фото"   className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 relative"/>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Привет! Я RPA разработчик с опытом автоматизации бизнес-процессов</h2>
              <p className="mb-4 text-gray-300">
                Специализируюсь на создании роботов для автоматизации рутинных задач в различных отраслях. Использую современные технологии RPA для повышения эффективности и снижения ошибок.
              </p>
              <p className="mb-6 text-gray-300">
                Работаю с такими инструментами как PIX, Primo RPA, Sherpa, UiPath, Robocorp,Python, Selenium, и многими другими. Всегда стремлюсь к оптимальным решениям и высокому качеству выполнения проектов.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg font-medium inline-block">
                  Связаться со мной
                </a>
                <a href="#" className="border border-gray-600 hover:border-blue-500 transition-colors px-6 py-3 rounded-lg font-medium inline-block">
                  Скачать резюме
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-8 text-center">Мои навыки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">RPA технологии</h3>
              <div className="space-y-4">
                <SkillBar name="PIX" level="90%" />
                <SkillBar name="Robocorp" level="85%" />
                <SkillBar name="Shepa RPA" level="90%" />
                <SkillBar name="Primo RPA" level="85%" />
                <SkillBar name="UiPath" level="80%" />
              </div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Программирование</h3>
              <div className="space-y-4">
                <SkillBar name="C#" level="90%" />
                <SkillBar name="Python" level="85%" />                
                <SkillBar name="JavaScript" level="75%" />
                <SkillBar name="SQL" level="80%" />
              </div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Инструменты и фреймворки</h3>
              <div className="space-y-4">
                <SkillBar name="Selenium" level="85%" />
                <SkillBar name="Pandas / NumPy" level="80%" />
                <SkillBar name="OpenCV" level="70%" />
                <SkillBar name="Postman" level="75%" />
              </div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Дополнительные навыки</h3>
              <div className="space-y-4">
                <SkillBar name="API Integration" level="80%" />
                <SkillBar name="OCR (Yandex, Tesseract)" level="75%" />
                <SkillBar name="Базы данных" level="85%" />
                <SkillBar name="Работа с Excel" level="90%" />
                <SkillBar name="Git" level="80%" />
                <SkillBar name="Custom Activity" level="70%" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-8 text-center">Мои проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard title="Автоматизация обработки invoice" description="Создан робот для автоматической обработки входящих invoice через email и заполнение данных в SAP." tech={['Sherpa RPA', 'Outlook API', 'SAP']} />
            <ProjectCard title="Парсер даты с сайтов поставщиков" description="Решение для сбора даты ДО/ДУ с сайтов транспортных компаний и заполнения дат в системе 1С." tech={['PIX', 'Regex', '1С','Exchange API']} />
            <ProjectCard title="Отчетный бот" description="Автоматизация создания еженедельных отчетов по продажам из нескольких источников в формате Excel." tech={['Python', 'Pandas', 'Excel']} />
            <ProjectCard title="Интеграция 1С с интернет-магазином" description="Робот для синхронизации товаров, заказов и остатков между 1С и интернет-магазином на WordPress." tech={['UiPath', '1С', 'WordPress REST API']} />
            <ProjectCard title="Обработка PDF-документов" description="Автоматизированное извлечение данных из PDF-файлов и загрузка в базу данных." tech={['Python', 'PyPDF2', 'SQL', "OCR", "Tesseract"]} />
            <ProjectCard title="Чат-бот поддержки" description="Создание чат-бота для автоматического ответа на часто задаваемые вопросы клиентов." tech={['Python', 'NLP', 'Telegram API']} />
            <ProjectCard title="Выгрузка документов из Альта-ГТД" description="Робот для автоматической выгрузки документов из Альта-ГТД в формате PDF и XML." tech={['PIX','UI','Exchange API']} />
            <ProjectCard title="Обработка больничных листов" description="Робот для автоматической обработки больничных листов в БОСС-Кадровик и формирования Excel-отчета." tech={['Primo RPA', 'Outlook API', 'UI', 'Excel']} />
            <ProjectCard title="Кадровый резерв: опрос руководителей" description="Робот отправляет персональные ссылки на опросник руководителям, отслеживает прогресс, напоминает о заполнении и формирует Excel-отчет по результатам." tech={["Python", "mySQL", "Flask", "SMTP", "Excel"]} />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-32 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-8 text-center">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard name="Иван Петров" role="CTO, TechCorp" text="Алексей спас нас от ручного ввода данных. После внедрения его робота мы сэкономили более 100 часов рабочего времени в месяц!" />
            <TestimonialCard name="Ольга Смирнова" role="Руководитель отдела закупок" text="Профессионально, быстро и всегда на связи. Алексей — настоящий эксперт в RPA!" />
            <TestimonialCard name="Андрей Козлов" role="IT-менеджер" text="Уже третий проект с Алексеем — все без замечаний, четко и понятно. Очень доволен результатом." />
            <TestimonialCard name="Екатерина Лебедева" role="Финансовый директор" text="Роботы Алексея помогли нам минимизировать ошибки в отчетах. Это огромный плюс для нашей компании." />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="animate-fadeIn">
          <h2 className="text-3xl font-bold mb-8 text-center">Свяжитесь со мной</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 mb-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Имя</label>
                    <input type="text" id="name" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input type="email" id="email" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ваш email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Тема</label>
                  <input type="text" id="subject" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Тема сообщения" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Сообщение</label>
                  <textarea id="message" rows="6" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ваше сообщение"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg font-medium inline-block">
                  Отправить сообщение
                </button>
              </form>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-blue-500/20 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-400">alex.rpa.dev@example.com</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-blue-500/20 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Телефон</h3>
                <p className="text-gray-400">+7 (999) 123-45-67</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-blue-500/20 p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Локация</h3>
                <p className="text-gray-400">Москва, Россия</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">&copy; 2025 Alex RPA Developer. Все права защищены.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.962 0-1.74-.79-1.74-1.764s.779-1.764 1.74-1.764 1.74.79 1.74 1.764-.778 1.764-1.74 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// Skill Bar Component
function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-medium text-blue-400">{level}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-in-out" style={{ width: level }}></div>
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ title, description, tech }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span key={index} className="text-xs bg-gray-700 px-2 py-1 rounded-md">{item}</span>
        ))}
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ name, role, text }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
      <p className="italic text-gray-300 mb-4">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">{name[0]}</div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}