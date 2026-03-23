import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable and readable code for web applications and software projects.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building efficient applications that load fast and perform smoothly.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with teams, mentors, and peers to develop meaningful projects.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring modern technologies and approaches to solve real-world problems.",
  },
];
export const About = () => {
    return ( 
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/*left column*/}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">Building impactful software,
                        <span className="font-serif italic font-normal text-white">
                        {" "}one project at a time.
                    </span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
  I'm Douae Benachour, a 4th-year Computer Engineering student.
  I love turning ideas into practical and interactive web applications that
  people enjoy using.
</p>
<p>
  I'm passionate about exploring different areas of software development and
  working with a variety of technologies. I enjoy building both frontend and
  backend features, and I’m always eager to learn and adapt to new tools and
  challenges.
</p>
<p>
  Outside of coding, I enjoy exploring new technologies, learning best
  practices, and working on projects that strengthen my skills for future
  opportunities.
</p>
</div>

<div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
  <p className="text-lg font-medium italic text-foreground">
    "My mission is to create web applications that are not just functional,
    but intuitive and enjoyable — products that users love and developers
    can maintain with ease."
  </p>
</div>
                    </div>
                    {/*Right column -Highlights*/}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item,idx)=>{
                            return (<div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay:`${(idx+1)*100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </section>
    ) 
};