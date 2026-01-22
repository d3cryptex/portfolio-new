export type Language = 'en' | 'ua' | 'ru';

export const translations = {
  en: {
    hero: {
      role: "Fullstack Dev",
      and: "&",
      role2: "Reverse Engineer",
      enthusiast: "Enthusiast",
      description: "I build accessible, pixel-perfect, performant, and secure web experiences. Specialized in turning complex problems into elegant solutions.",
      location: "Wrocław, Poland"
    },
    nav: {
      home: "Home",
      about: "About",
      career: "Career",
      works: "Works",
      contact: "Contact"
    },
    about: {
      title: "About Me",
      description1: "I am a Frontend Developer with 1.5+ years of experience building modern, user-friendly web applications. Skilled in TypeScript, React, Angular, and Tailwind with a strong focus on code quality and UX.",
      description2: "Currently expanding into Fullstack Development with Node.js and Nest.js to deliver end-to-end solutions. Passionate about cybersecurity, reverse engineering, and solving complex architectural problems."
    },
    career: {
      title: "My Journey",
      items: [
        {
          year: "2020",
          title: "Started Coding",
          text: "First major interest in programming. I became interested in Reverse Engineering.",
          tooltip: "Discovered programming at IT-ELIT academy. Started exploring game internals and reverse engineering."
        },
        {
          year: "2022",
          title: "Project Downfall",
          text: "Project hiatus due to war in Ukraine.",
          tooltip: "Had to relocate and put projects on hold."
        },
        {
          year: "2022",
          title: "Education",
          text: "Finished school and consciously started developing in IT.",
          tooltip: "Graduated and solidified knowledge in HTML, CSS, JS."
        },
        {
          year: "2022",
          title: "College Admission",
          text: "Started college, diving into frameworks.",
          tooltip: "Learned Angular, React, and TypeScript."
        },
        {
          year: "2024",
          title: "Freelancing",
          text: "Applied skills to real commercial projects.",
          tooltip: "Worked with international clients."
        },
        {
          year: "2025",
          title: "ADCREW Agency",
          text: "Joined ADCREW as a web developer.",
          tooltip: "Fullstack development for marketing tech."
        },
        {
          year: "Now",
          title: "Future Plans",
          text: "Diving deeper into cybersecurity.",
          tooltip: "Focusing on security research and university."
        }
      ]
    },
    projects: {
      title: "Selected Work",
      items: [
        {
          title: "Artworks Gallery",
          description: "ArtGallery is a simple web app where artists can upload, organize, and edit their digital paintings. Add titles, descriptions, and update your artwork anytime. Perfect for beginners to showcase their creativity in a clean and modern interface."
        },
        {
          title: "Financial News App",
          description: "Financial News is a full-stack web application that provides users with real-time financial news and user account management. Built with NestJS for the backend and Angular for the frontend, the project also uses MySQL. It allows users to register, log in, and read curated news articles related to finance, economics, and global market."
        },
        {
          title: "Simple Messaging App",
          description: "A minimalistic chat application built with vanilla JavaScript, HTML, and CSS. It features login/register functionality, message storing in localStorage, and a stylish user interface. This project is designed as a perfect starter template for beginner developers who want to learn basic web development concepts like authentication, DOM manipulation."
        },
        {
          title: "Delusive Loader",
          description: "Lightweight C++ console application that allows users to inject DLL in Rust. Designed for simplicity and efficiency, it provides a direct way to load external libraries into the game for modifying or extending its behavior. The application uses standard Windows API functions to locate the target process and perform injection."
        },
        {
          title: "Old Portfolio",
          description: "My old portfolio website build with Vanilla JavaScript, HTML, and CSS. It a unique green terminal design with sound effects and animations. It was a great project to learn about web development and to showcase my skills."
        },
        {
          title: "Delusive",
          description: "Delusive is a website for my personal brand. This site for sale Rust DLC and for other games."
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      placeholders: {
        name: "John Doe",
        email: "john@example.com",
        message: "Hello, I'd like to talk about..."
      }
    },
    footer: {
      rights: "Daniel. Made with"
    }
  },
  ru: {
    hero: {
      role: "Fullstack Разработчик",
      and: "и",
      role2: "Reverse Engineer",
      enthusiast: "Энтузиаст",
      description: "Я создаю доступные, идеальные, производительные и безопасные веб-приложения. Специализируюсь на превращении сложных задач в элегантные решения.",
      location: "Вроцлав, Польша"
    },
    nav: {
      home: "Главная",
      about: "Обо мне",
      career: "Карьера",
      works: "Работы",
      contact: "Контакты"
    },
    about: {
      title: "Обо мне",
      description1: "Я Frontend-разработчик с опытом более 1.5+ года в создании современных веб-приложений. Владею TypeScript, React, Angular и Tailwind, уделяя особое внимание качеству кода и UX.",
      description2: "Сейчас расширяю компетенции в Fullstack-разработке с Node.js и Nest.js. Увлекаюсь кибербезопасностью, реверс-инжинирингом и решением сложных инженерных задач."
    },
    career: {
      title: "Мой Путь",
      items: [
        {
          year: "2020",
          title: "Начало",
          text: "Первый серьезный интерес к программированию. Увлекся Reverse Engineering.",
          tooltip: "Обучение в академии IT-ELIT. Изучение внутреннего устройства игр."
        },
        {
          year: "2022",
          title: "Пауза",
          text: "Приостановка проектов из-за войны в Украине.",
          tooltip: "Вынужденный переезд и остановка работы."
        },
        {
          year: "2022",
          title: "Образование",
          text: "Окончил школу и осознанно начал развиваться в IT.",
          tooltip: "Укрепил знания в HTML, CSS, JS."
        },
        {
          year: "2022",
          title: "Колледж",
          text: "Поступление в колледж, погружение во фреймворки.",
          tooltip: "Изучение Angular, React и TypeScript."
        },
        {
          year: "2024",
          title: "Фриланс",
          text: "Применение навыков на реальных коммерческих проектах.",
          tooltip: "Работа с международными клиентами."
        },
        {
          year: "2025",
          title: "ADCREW Agency",
          text: "Присоединился к ADCREW как веб-разработчик.",
          tooltip: "Fullstack разработка для маркетинговых технологий."
        },
        {
          year: "Сейчас",
          title: "Планы",
          text: "Углубление в кибербезопасность.",
          tooltip: "Фокус на исследованиях безопасности и университете."
        }
      ]
    },
    projects: {
      title: "Избранные работы",
      items: [
        {
          title: "Artworks Gallery",
          description: "ArtGallery — это простое веб-приложение, где художники могут загружать, систематизировать и редактировать свои цифровые картины. Добавляйте названия, описания и обновляйте работы в любое время. Идеально подходит для новичков, чтобы продемонстрировать своё творчество в чистом и современном интерфейсе."
        },
        {
          title: "Financial News App",
          description: "Financial News — это full-stack веб-приложение, предоставляющее пользователям финансовые новости в реальном времени и управление аккаунтом. Backend на NestJS, frontend на Angular, база данных MySQL. Позволяет регистрироваться, входить в систему и читать новости финансов, экономики и мировых рынков."
        },
        {
          title: "Simple Messaging App",
          description: "Минималистичное приложение для чата, созданное на чистом JavaScript, HTML и CSS. Функции: вход/регистрация, сохранение сообщений в localStorage и стильный интерфейс. Отличный стартовый шаблон для новичков, желающих изучить основы веб-разработки, такие как аутентификация и манипуляции с DOM."
        },
        {
          title: "Delusive Loader",
          description: "Легкое консольное приложение на C++, позволяющее пользователям инжектить DLL в Rust. Разработано для простоты и эффективности, обеспечивает прямой способ загрузки внешних библиотек в игру для модификации или расширения её поведения. Использует стандартные функции Windows API для поиска процесса и инъекции."
        },
        {
          title: "Old Portfolio",
          description: "Мой старый сайт-портфолио, созданный на чистом JavaScript, HTML и CSS. Уникальный дизайн в стиле зеленого терминала со звуковыми эффектами и анимациями. Это был отличный проект для изучения веб-разработки и демонстрации моих навыков."
        },
        {
          title: "Delusive",
          description: "Delusive — веб-сайт моего личного бренда. Сайт для продажи DLC для Rust и других игр."
        }
      ]
    },
    contact: {
      title: "Связаться",
      name: "Имя",
      email: "Email",
      message: "Сообщение",
      send: "Отправить",
      placeholders: {
        name: "Иван Иванов",
        email: "ivan@example.com",
        message: "Привет, я хотел бы обсудить..."
      }
    },
    footer: {
      rights: "Daniel. Сделано с"
    }
  },
  ua: {
    hero: {
      role: "Fullstack Розробник",
      and: "та",
      role2: "Reverse Engineer",
      enthusiast: "Ентузіаст",
      description: "Я створюю доступні, ідеальні, продуктивні та безпечні веб-додатки. Спеціалізуюся на перетворенні складних завдань на елегантні рішення.",
      location: "Вроцлав, Польща"
    },
    nav: {
      home: "Головна",
      about: "Про мене",
      career: "Кар'єра",
      works: "Роботи",
      contact: "Контакти"
    },
    about: {
      title: "Про мене",
      description1: "Я Frontend-розробник з досвідом понад 1.5+ років у створенні сучасних веб-додатків. Володію TypeScript, React, Angular та Tailwind, приділяючи особливу увагу якості коду та UX.",
      description2: "Зараз розширюю компетенції у Fullstack-розробці з Node.js та Nest.js. Захоплююся кібербезпекою, реверс-інжинірингом та вирішенням складних інженерних задач."
    },
    career: {
      title: "Мій Шлях",
      items: [
        {
          year: "2020",
          title: "Початок",
          text: "Перший серйозний інтерес до програмування. Захопився Reverse Engineering.",
          tooltip: "Навчання в академії IT-ELIT. Вивчення внутрішнього устрою ігор."
        },
        {
          year: "2022",
          title: "Пауза",
          text: "Призупинення проектів через війну в Україні.",
          tooltip: "Вимушений переїзд та зупинка роботи."
        },
        {
          year: "2022",
          title: "Освіта",
          text: "Закінчив школу і свідомо почав розвиватися в IT.",
          tooltip: "Зміцнив знання в HTML, CSS, JS."
        },
        {
          year: "2022",
          title: "Коледж",
          text: "Вступ до коледжу, занурення у фреймворки.",
          tooltip: "Вивчення Angular, React та TypeScript."
        },
        {
          year: "2024",
          title: "Фріланс",
          text: "Застосування навичок на реальних комерційних проектах.",
          tooltip: "Робота з міжнародними клієнтами."
        },
        {
          year: "2025",
          title: "ADCREW Agency",
          text: "Приєднався до ADCREW як веб-розробник.",
          tooltip: "Fullstack розробка для маркетингових технологій."
        },
        {
          year: "Зараз",
          title: "Плани",
          text: "Поглиблення в кібербезпеку.",
          tooltip: "Фокус на дослідженнях безпеки та університеті."
        }
      ]
    },
    projects: {
      title: "Вибрані роботи",
      items: [
        {
          title: "Artworks Gallery",
          description: "ArtGallery — це простий веб-додаток, де художники можуть завантажувати, систематизувати та редагувати свої цифрові картини. Додавайте назви, описи та оновлюйте роботи в будь-який час. Ідеально підходить для новачків, щоб продемонструвати свою творчість у чистому та сучасному інтерфейсі."
        },
        {
          title: "Financial News App",
          description: "Financial News — це full-stack веб-додаток, що надає користувачам фінансові новини в реальному часі та керування акаунтом. Backend на NestJS, frontend на Angular, база даних MySQL. Дозваляє реєструватися, входити в систему та читати новини фінансів, економіки та світових ринків."
        },
        {
          title: "Simple Messaging App",
          description: "Мінімалістичний додаток для чату, створений на чистому JavaScript, HTML та CSS. Функції: вхід/реєстрація, збереження повідомлень у localStorage та стильний інтерфейс. Чудовий стартовий шаблон для початківців, які хочуть вивчити основи веб-розробки, такі як автентифікація та маніпуляції з DOM."
        },
        {
          title: "Delusive Loader",
          description: "Легка консольна програма на C++, що дозволяє користувачам інжектити DLL в Rust. Розроблено для простоти та ефективності, забезпечує прямий спосіб завантаження зовнішніх бібліотек у гру для модифікації або розширення її поведінки. Використовує стандартні функції Windows API для пошуку процесу та ін'єкції."
        },
        {
          title: "Old Portfolio",
          description: "Мій старий сайт-портфоліо, створений на чистому JavaScript, HTML та CSS. Унікальний дизайн у стилі зеленого терміналу зі звуковими ефектами та анімаціями. Це був чудовий проект для вивчення веб-розробки та демонстрації моїх навичок."
        },
        {
          title: "Delusive",
          description: "Delusive — веб-сайт мого особистого бренду. Сайт для продажу DLC для Rust та інших ігор."
        }
      ]
    },
    contact: {
      title: "Зв'язатися",
      name: "Ім'я",
      email: "Email",
      message: "Повідомлення",
      send: "Надіслати",
      placeholders: {
        name: "Іван Іванов",
        email: "ivan@example.com",
        message: "Привіт, я хотів би обговорити..."
      }
    },
    footer: {
      rights: "Daniel. Зроблено з"
    }
  }
};
