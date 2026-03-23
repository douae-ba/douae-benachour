import { ArrowUpRight,Github } from "lucide-react";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "MediTrack",
  description:
    "A desktop medical management application built with JavaFX, designed to help healthcare professionals manage patients, treatments, and appointments efficiently. The system centralizes medical data, reduces manual errors, and provides statistical insights for better decision-making.",
  image: "/projects/image1.png",
  tags: ["JavaFX", "Java", "MySQL", "MVC"],
  link: "https://drive.google.com/drive/folders/1xeyrLR2I2UdCoaUeZ3jZBQa3WYYQJcXa",
  github: "https://github.com/ikramchahlal/MediTrack",
  },
  {
  title: "Library Management System",
  description:
    "A modern desktop application built with Python and PyQt5 for managing library operations. It includes book and member management, borrowing system with real-time validation, data persistence, and interactive data visualizations using matplotlib.",
  image: "/projects/image2.png",
  tags: ["Python", "PyQt5", "OOP", "Matplotlib"],
  link: "https://github.com/douae-ba/python_project",
  github: "https://github.com/douae-ba/python_project",
},
{
  title: "Eldra",
  description:
    "An Android mobile application designed to help elderly people manage their medications daily. It features a dual interface — a simplified view for seniors and a full supervision dashboard for caregivers — with push notifications, stock tracking, missed dose alerts, and an emergency location module.",
  image: "/projects/image3.png",
  tags: ["Java", "Android", "Firebase", "MVVM", "FCM"],
  link: "https://github.com/douae-ba/eldra/raw/main/doc/",
  github: "https://github.com/douae-ba/eldra",
},
{
  title: "Clubs Management System",
  description:
    "A full-stack web application built with Symfony for managing university student clubs. Students can browse clubs, join activities and events, while administrators manage members and content through a dedicated dashboard.",
  image: "/projects/image4.png",
  tags: ["PHP", "Symfony", "MySQL", "Bootstrap", "Twig"],
  link: "https://github.com/douae-ba/clubs-management",
  github: "https://github.com/douae-ba/clubs-management",
},
];

export const Projects = () => {
    return (<section id="projects" className="py-32 relative overflow-hidden">
        {/*Bg glows*/}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/*Section header*/}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wide uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that
                    <span className="font-serif italic font-normal text-white"> make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
            </div>
            {/*Projects grid*/}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1">
                  {/*image*/}
                  <div className="relative overflow-hidden aspect-video">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
                  {/*overlay links*/}
                  <div className=" absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.link} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"><ArrowUpRight className="w-5 h-5"/></a>
                    <a href={project.github} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"><Github className="w-5 h-5"/></a>
                  </div>
                  </div>
                  {/*content*/}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"/>
                    </div>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag,tagIdx)=>(
                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                      ))}
                    </div>
                  </div>
                  </div>
                ))}
            </div>
            {/* View all button */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
              <a 
   href="https://github.com/douae-ba" 
   target="_blank" 
   rel="noopener noreferrer"
>
   <AnimatedBorderButton>
      View All Projects
      <ArrowUpRight className="w-5 h-5"/>
   </AnimatedBorderButton>
</a>
            </div>
        </div>
    </section>)
};