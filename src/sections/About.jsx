import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import BackgroundImg from "../assets/123456.jpg";
import ProfileImg from "../assets/profile-1.jpg";
import Button from "../components/Button";

function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={BackgroundImg}
          alt="background image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to background" />
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*Left Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Front-End Developer
              </span>
            </div>
            {/*Headline*/}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Linn G — a newly educated front-end developer--Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc
                ligula, euismod id ligula sit amet, aliquet elementum neque.
                Donec vel velit leo.
              </p>
            </div>

            {/*CTA */}
            <div>
              <Button size="lg">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            {/*Social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                Find me here:
              </span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/*Right Content */}

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="relative">
                <img
                  src={ProfileImg}
                  alt="Picture of woman"
                  className="w-80 aspect-[5/5] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
