import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Semester Project 2",
    description:
      "An assignment to make a website that diplays blog posts, with ability to create user and log in",
    image: "/projects/semester-project-2.png",
    tags: ["Html", "API", "Javascript", "Css"],
    link: "https://benevolent-khapse-2cc794.netlify.app/",
    github:
      "https://github.com/Noroff-FEU-Resits/semester-project-2-resit-linngaarder",
  },
  {
    title: "Javascript Framework CA",
    description:
      "An assignment to make a website to display products with a working shopping cart",
    image: "/projects/js-framework-ca.png",
    tags: ["React", "Bootstrap css"],
    link: "https://js-frameworks-ca-linngaarder.netlify.app/",
    github: "https://github.com/linngaarder/js-frameworks-ca-lg",
  },
  {
    title: "Project Exam 2",
    description:
      "An assignment to make a website for a social media company, with ability to create posts, follow-unfollow people ect.",
    image: "/projects/project-exam-2.png",
    tags: ["React", "Bootstrap", "Sass"],
    link: "https://postsocial88.netlify.app/",
    github: "https://github.com/linngaarder/project-exam-2-resit-linngaarder",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-color-card">
              Projects
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A selection of my recent work.
            </p>
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx}>
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4 glass">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex items-center justify-center gap-4 py-4">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary hover:cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
