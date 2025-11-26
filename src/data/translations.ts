import {
    CpuChipIcon,
    ServerIcon,
    ChartBarIcon,
    UserGroupIcon,
    PaintBrushIcon,
    TruckIcon,
    ShoppingBagIcon,
    AcademicCapIcon,
    BanknotesIcon,
} from '@heroicons/react/24/outline'

export const translations = {
    en: {
        nav: {
            items: [
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
            ],
        },
        hero: {
            badge: 'Latest Updates',
            badgeText: 'Just shipped v1.0',
            title: 'Innovation, strategy and development to transform businesses',
            subtitle:
                'At ROSDEV GROUP we integrate consulting, software factory, ERP, BI, design and branding into a unique ecosystem of solutions - all powered by our own AI: AI Autonomous Assistant, designed to enhance systems and empower operators.',
            ctaPrimary: 'Schedule a meeting',
            ctaSecondary: 'Discover our projects',
        },
        about: {
            title: 'About us',
            headline: 'We believe digital transformation is not an option, but a necessity.',
            description1:
                'ROSDEV GROUP was born with a clear purpose: to unite technology, strategy and creativity to drive business growth.',
            description2:
                'We believe digital transformation is not an option, but a necessity. Our mission is to empower businesses with the tools and strategies they need to thrive in the digital age.',
            description3:
                'We are more than providers: we are your strategic partner. We work closely with you to understand your challenges and unlock new opportunities through technology.',
            features: [
                {
                    id: 'purpose',
                    title: 'Our Purpose',
                    description:
                        'We believe digital transformation is not an option, but a necessity. Our mission is to empower businesses with the tools and strategies they need to thrive in the digital age.',
                },
                {
                    id: 'team',
                    title: 'Expert Team',
                    description:
                        'Our team combines expertise in consulting, development and innovation to deliver comprehensive and sustainable solutions tailored to your unique needs.',
                },
                {
                    id: 'ai',
                    title: 'AI-Powered Innovation',
                    description:
                        "At the core of our vision is AI Autonomous Assistant, our own artificial intelligence that improves existing systems and powers our clients' operators with smarter tools and real-time support.",
                },
            ],
            tagline: 'We are more than providers: we are your strategic partner.',
        },
        services: {
            title: 'Our Services',
            headline: 'Comprehensive solutions powered by cutting-edge technology and strategic thinking',
            description: '',
            items: [
                {
                    name: 'AI Autonomous Assistant',
                    description:
                        'Our own AI solution that enhances existing platforms, automates processes and powers operators to deliver better results.',
                    icon: CpuChipIcon,
                },
                {
                    name: 'ERP & Software Factory',
                    description: 'Robust, scalable systems that optimize operations and drive efficiency.',
                    icon: ServerIcon,
                },
                {
                    name: 'Consulting & BI',
                    description: 'We turn data into strategic decisions through deep analysis and intelligent tools.',
                    icon: ChartBarIcon,
                },
                {
                    name: 'Nearshoring',
                    description: 'Specialized teams that seamlessly integrate into your projects with agility and trust.',
                    icon: UserGroupIcon,
                },
                {
                    name: 'Design & Branding',
                    description: 'We build strong brands and digital experiences that connect with people.',
                    icon: PaintBrushIcon,
                },
            ],
            note: 'All services enhanced by AI Autonomous Assistant',
        },
        projects: {
            title: 'Projects / Case Studies',
            headline: 'Real challenges, real solutions',
            description: "See how we've helped companies transform their operations and achieve their goals.",
            labels: {
                challenge: 'Challenge',
                solution: 'Solution',
                impact: 'Impact',
            },
            items: [
                {
                    name: 'Logistics industry',
                    challenge: 'Inefficient and fragmented processes.',
                    solution: 'A custom ERP, integrated with AI Autonomous Assistant.',
                    impact: '30% reduction in operational costs and improvement in operator response times.',
                    icon: TruckIcon,
                },
                {
                    name: 'Retail',
                    challenge: 'Lack of control over sales data.',
                    solution: 'Real-time BI dashboard with AI insights.',
                    impact: 'Faster and more accurate decisions.',
                    icon: ShoppingBagIcon,
                },
                {
                    name: 'Digital education',
                    challenge: 'Need to scale an educational model.',
                    solution: 'Customized e-learning platform enhanced with AI support.',
                    impact: 'Increased reach and student engagement.',
                    icon: AcademicCapIcon,
                },
                {
                    name: 'Fintech',
                    challenge: 'A brand that did not convey trust.',
                    solution: 'Complete rebranding with a digital-first mindset.',
                    impact: 'Growth in new clients and raised capital.',
                    icon: BanknotesIcon,
                },
            ],
        },
        ecosystem: {
            title: 'ROSDEV Ecosystem',
            description: 'At ROSDEV GROUP we believe in the strength of a collaborative ecosystem.',
            hoomind: {
                title: 'hoomind',
                memberOf: 'Member of: RosDevGroup',
                description: 'Strategic consulting and digital innovation.',
            },
            tinyStudio: {
                title: 'TINY STUDIO',
                memberOf: 'Member of: RosDevGroup',
                description: 'Specialists in branding, design and web development.',
            },
            conclusion: 'With AI Autonomous Assistant, this ecosystem creates a unique advantage: technology, creativity and intelligence working as one.',
            conclusionTitle: 'The Unique Advantage',
        },
        clients: {
            title: 'Trusted by Industry Leaders',
            description: 'Companies and institutions that trust ROSDEV to take their projects to the next level.',
        },
        cta: {
            title: 'Your next step starts today',
            description:
                "Transformation can't wait. With AI Autonomous Assistant, at ROSDEV GROUP we ensure your company is ready for today's challenges and tomorrow's opportunities.",
            primary: 'Chat with us on WhatsApp',
            secondary: 'Fill out the form',
        },
        contact: {
            title: "Let's talk about your project",
            description:
                'Tell us about your goals and we will design a roadmap that combines technology, strategy and execution with AI Autonomous Assistant at the core.',
            addressLabel: 'HQ',
            address: '21331 South Kings Mill Lane, Kingwood, TX 77339, US',
            phoneLabel: 'Phone',
            phone: '832-776-0799',
            emailLabel: 'Email',
            email: 'mvallaro@rosdevgroup.com',
            hoursTitle: 'Business Hours',
            hours: [
                { label: 'Mon - Fri', value: '9:00 am - 6:00 pm' },
                { label: 'Sat - Sun', value: 'Closed' },
            ],
            form: {
                firstName: 'First name',
                lastName: 'Last name',
                email: 'Email',
                phone: 'Phone number',
                message: 'Tell us about your needs',
                submit: 'Schedule a call',
            },
        },
        footer: {
            copyright: 'ROSDEV GROUP (c) 2025 Consulting | ERP | BI | Nearshoring | Branding | AI Solutions.',
        },
    },
    es: {
        nav: {
            items: [
                { id: 'about', label: 'Quiénes' },
                { id: 'services', label: 'Servicios' },
                { id: 'projects', label: 'Proyectos' },
                { id: 'contact', label: 'Contacto' },
            ],
        },
        hero: {
            badge: 'Novedades',
            badgeText: 'Lanzamiento v1.0',
            title: 'Innovación, estrategia y desarrollo para transformar negocios',
            subtitle:
                'En ROSDEV GROUP integramos consultoría, software factory, ERP, BI, diseño y branding en un ecosistema único de soluciones - todo potenciado por nuestra IA propia: AI Autonomous Assistant, creada para mejorar sistemas y potenciar a los operadores.',
            ctaPrimary: 'Agendá una reunión',
            ctaSecondary: 'Conocé nuestros proyectos',
        },
        about: {
            title: 'Quiénes somos',
            headline: 'Creemos que la transformación digital no es una opción, sino una necesidad.',
            description1:
                'ROSDEV GROUP nace con una premisa clara: unir tecnología, estrategia y creatividad para impulsar el crecimiento de las empresas.',
            description2:
                'Creemos que la transformación digital no es una opción, sino una necesidad. Nuestra misión es empoderar a las empresas con las herramientas y estrategias que necesitan para prosperar en la era digital.',
            description3:
                'Somos más que proveedores: somos tu socio estratégico. Trabajamos junto a vos para entender tus desafíos y abrir nuevas oportunidades a través de la tecnología.',
            features: [
                {
                    id: 'purpose',
                    title: 'Nuestro propósito',
                    description:
                        'Creemos que la transformación digital no es una opción, sino una necesidad. Nuestra misión es empoderar a las empresas con las herramientas y estrategias que necesitan para prosperar en la era digital.',
                },
                {
                    id: 'team',
                    title: 'Equipo experto',
                    description:
                        'Combinamos experiencia en consultoría, desarrollo e innovación para ofrecer soluciones integrales y sostenibles, adaptadas a tus necesidades.',
                },
                {
                    id: 'ai',
                    title: 'Innovación con IA',
                    description:
                        'En el corazón de nuestra visión está AI Autonomous Assistant, nuestra IA propia que mejora sistemas existentes y potencia a los operadores con herramientas más inteligentes y soporte en tiempo real.',
                },
            ],
            tagline: 'Somos más que proveedores: somos tu socio estratégico.',
        },
        services: {
            title: 'Nuestros servicios',
            headline: 'Soluciones integrales impulsadas por tecnología de vanguardia y pensamiento estratégico',
            description: '',
            items: [
                {
                    name: 'AI Autonomous Assistant',
                    description:
                        'Nuestra solución de IA propia que mejora plataformas existentes, automatiza procesos y empodera a los operadores para obtener mejores resultados.',
                    icon: CpuChipIcon,
                },
                {
                    name: 'ERP & Software Factory',
                    description: 'Sistemas robustos y escalables que optimizan operaciones y generan eficiencia.',
                    icon: ServerIcon,
                },
                {
                    name: 'Consultoría & BI',
                    description: 'Transformamos datos en decisiones estratégicas mediante un análisis profundo y herramientas inteligentes.',
                    icon: ChartBarIcon,
                },
                {
                    name: 'Nearshoring',
                    description: 'Equipos especializados que se integran de manera ágil y confiable en tus proyectos.',
                    icon: UserGroupIcon,
                },
                {
                    name: 'Diseño & Branding',
                    description: 'Construimos marcas sólidas y experiencias digitales que conectan con las personas.',
                    icon: PaintBrushIcon,
                },
            ],
            note: 'Todos los servicios potenciados por AI Autonomous Assistant',
        },
        projects: {
            title: 'Proyectos / Casos de éxito',
            headline: 'Desafíos reales, soluciones reales',
            description: 'Mirá cómo hemos ayudado a empresas a transformar sus operaciones y alcanzar sus objetivos.',
            labels: {
                challenge: 'Desafío',
                solution: 'Solución',
                impact: 'Impacto',
            },
            items: [
                {
                    name: 'Industria logística',
                    challenge: 'Procesos ineficientes y dispersos.',
                    solution: 'Un ERP a medida, integrado con AI Autonomous Assistant.',
                    impact: '30% menos de costos operativos y mejora en tiempos de respuesta de los operadores.',
                    icon: TruckIcon,
                },
                {
                    name: 'Retail',
                    challenge: 'Falta de control sobre los datos de ventas.',
                    solution: 'Dashboard BI en tiempo real con insights de IA.',
                    impact: 'Decisiones más rápidas y precisas.',
                    icon: ShoppingBagIcon,
                },
                {
                    name: 'Educación digital',
                    challenge: 'Necesidad de escalar un modelo educativo.',
                    solution: 'Plataforma de e-learning personalizada con soporte de IA.',
                    impact: 'Mayor alcance y engagement estudiantil.',
                    icon: AcademicCapIcon,
                },
                {
                    name: 'Fintech',
                    challenge: 'Una marca que no transmitía confianza.',
                    solution: 'Rebranding completo con foco digital.',
                    impact: 'Crecimiento en nuevos clientes y capital levantado.',
                    icon: BanknotesIcon,
                },
            ],
        },
        ecosystem: {
            title: 'Ecosistema ROSDEV',
            description: 'En ROSDEV GROUP creemos en la fuerza de un ecosistema colaborativo.',
            hoomind: {
                title: 'hoomind',
                memberOf: 'Miembro de: RosDevGroup',
                description: 'Consultoría estratégica e innovación digital.',
            },
            tinyStudio: {
                title: 'TINY STUDIO',
                memberOf: 'Miembro de: RosDevGroup',
                description: 'Especialistas en branding, diseño y desarrollo web.',
            },
            conclusion: 'Junto a AI Autonomous Assistant, este ecosistema crea una ventaja única: tecnología, creatividad e inteligencia trabajando en conjunto.',
            conclusionTitle: 'La ventaja única',
        },
        clients: {
            title: 'Elegidos por líderes de la industria',
            description: 'Empresas e instituciones que confían en ROSDEV GROUP para llevar sus proyectos al siguiente nivel.',
        },
        cta: {
            title: 'Tu próximo paso comienza hoy',
            description:
                'La transformación no puede esperar. Con AI Autonomous Assistant, en ROSDEV GROUP aseguramos que tu empresa está preparada para los desafíos de hoy y las oportunidades del futuro.',
            primary: 'Escribinos por WhatsApp',
            secondary: 'Completá el formulario',
        },
        contact: {
            title: 'Hablemos de tu proyecto',
            description:
                'Contanos tus objetivos y diseñamos un roadmap que combine tecnología, estrategia y ejecución con AI Autonomous Assistant en el centro.',
            addressLabel: 'HQ',
            address: '21331 South Kings Mill Lane, Kingwood, TX 77339, US',
            phoneLabel: 'Teléfono',
            phone: '832-776-0799',
            emailLabel: 'Email',
            email: 'mvallaro@rosdevgroup.com',
            hoursTitle: 'Horario comercial',
            hours: [
                { label: 'Lun - Vie', value: '9:00 a. m. - 6:00 p. m.' },
                { label: 'Sáb - Dom', value: 'Cerrado' },
            ],
            form: {
                firstName: 'Nombre',
                lastName: 'Apellido',
                email: 'Email',
                phone: 'Teléfono',
                message: 'Contanos qué necesitás',
                submit: 'Agendar una llamada',
            },
        },
        footer: {
            copyright: 'ROSDEV GROUP (c) 2025 Consultoría | ERP | BI | Nearshoring | Branding | Soluciones con IA',
        },
    },
}
