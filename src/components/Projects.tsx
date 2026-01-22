import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../contexts/LanguageContext";
import type { Project } from "../Types";

// Keeping static data for images/links, but using translations for text
const projectsData = [
  {
    image: "/projects/artworks.png",
    liveUrl: "https://artworks-gallery.vercel.app/",
    githubUrl: "https://github.com/d3cryptex/artworks-gallery",
    stack: ["Angular", "TypeScript", "SCSS", "Jest"]
  },
  {
    image: "/projects/finance.png",
    liveUrl: "https://artworks-gallery.vercel.app/",
    githubUrl: "https://github.com/d3cryptex/Financial-News-App",
    stack: ["Angular", "TypeScript", "SCSS", "Node.js", "Nest.js", "MySQL"]
  },
  {
    image: "/projects/messanger.png",
    githubUrl: "https://github.com/d3cryptex/Simple-MessagingApp",
    stack: ["JavaScript", "HTML", "CSS"]
  },
  {
    image: "/projects/loader.png",
    githubUrl: "https://github.com/d3cryptex/Delusive-Loader",
    stack: ["C++", "WinAPI"]
  },
  {
    image: "/projects/portfolio.png",
    liveUrl: "https://d3cryptex.vercel.app/",
    githubUrl: "https://github.com/d3cryptex/Portfolio",
    stack: ["JavaScript", "SCSS", "HTML"]
  },
  {
    image: "/projects/delusive.png",
    liveUrl: "https://delusive.pro/",
    stack: ["React", "TypeScript", "Tailwind CSS"]
  }
];

const Projects = () => {
    const { t } = useLanguage();
    const projectItems = t('projects.items') as any[];

    return (
        <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
             <h2 className="font-display font-medium text-3xl md:text-4xl text-white mb-16 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-white/20"></span>
                {t('projects.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.isArray(projectItems) && projectItems.map((project: any, idx: number) => {
                    const data = projectsData[idx];
                    return (
                        <div key={idx} className="group relative bg-white/[0.03] hover:bg-white/[0.05] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-video w-full bg-black/50 relative overflow-hidden">
                                {data.image ? (
                                    <img src={data.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-white/10 text-4xl font-display">
                                        {project.title[0]}
                                    </div>
                                )}
                            </div>
                            
                            <div className="p-6">
                                <h3 className="font-display font-bold text-xl text-white mb-2">{project.title}</h3>
                                <p className="text-secondary text-sm mb-4 line-clamp-3">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {data.stack.map((tech: string) => (
                                        <span key={tech} className="text-xs font-mono text-secondary/70 bg-white/5 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex gap-4">
                                    {data.githubUrl && (
                                        <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary opacity-70 hover:opacity-100 transition-opacity">
                                            <FontAwesomeIcon icon={faGithub} size="lg" />
                                        </a>
                                    )}
                                    {data.liveUrl && (
                                        <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary opacity-70 hover:opacity-100 transition-opacity">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
