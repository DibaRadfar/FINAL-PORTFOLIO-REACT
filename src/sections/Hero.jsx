import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/Button";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import { Link } from "react-router-dom";

const skills = [
  "React",
  "JavaScript",
  "JQuery",
  "Html",
  "Css",
  "Tailwindcss",
  "Bootstrap",
  "Vite",
  "React Native",
  "Python",
  "Django",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Keras",
  "Qt Designer",
  "Figma",
  "SQLServer",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub Actions",
];
const backgroundDots = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  duration: `${20 + ((index * 17) % 50)}s`,
  delay: `${(index * 7) % 9}s`,
}));

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/DibaRadfar",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.21 0 1.595-.015 2.875-.015 3.265 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/diba-radfar/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V8.999h3.564v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    label: "Twitter",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.964 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zM17.083 19.77h1.833L7.084 4.126H5.117L17.083 19.77z",
  },
];

function Hero() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}

        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
        </div>
        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {backgroundDots.map((dot) => (
            <div
              key={dot.id}
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: "#20B2A6",
                left: dot.left,
                top: dot.top,
                animation: `slow-drift ${dot.duration} ease-in-out infinite`,
                animationDelay: dot.delay,
              }}
            />
          ))}
        </div>
        {/* Content */}
        <div className=" container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 glass text-sm text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Software Engineer · React Specialist
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in animation-delay-100">
                  Crafting
                  <span className="text-primary glow-text">digital</span>
                  <br />
                  experiences with
                  <br />
                  <span className="font-serif italic font-normal text-white">
                    precision.
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                  Hi, I’m Diba, a Software Engineer focused on building
                  performant, user-centric web applications. From complex React
                  architectures to scalable logic, I create digital products
                  that drive engagement and business results. Ready to build
                  something impactful?
                </p>
              </div>

              {/* CTAs */}
              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animation-delay-300 animate-fade-in">
                {/* با کلیک روی این دکمه کاربر مستقیم می‌ره به صفحه لاگین */}
                <Link to="/login" target="_blank">
                  <Button size="lg">
                    Contact Me <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>

                <AnimatedBorderButton
                  href="./../../public/CV/MyResume-80[www.cvbuilder.me].pdf"
                  download
                  fileName="Diba_Radfar_CV.pdf"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">
                  Follow me:{" "}
                </span>
                {[...socialLinks].map(({ href, label, path }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    target="_blank"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            {/* Right Column - Profile Image */}

            <div className="relatice animate-fade-in animation-delay-300">
              {/* Profile Image */}
              <div className="relative max-w-md mx-auto">
                <div
                  className="absolute inset-0 rounded-3xl bg-linear-to-br
                 from-primary/30 via-transparent to-primary/10 blur-2xl
                  animate-pulse"
                />
                <div className="relative glass rounded-3xl p-2 glow-border">
                  <img
                    src="/public/porofıle.png"
                    alt="Profile"
                    className="w-full aspect-4/5 object-cover rounded-4xl"
                  />

                  {/* Floating Badges */}
                  <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">
                        Available for work
                      </span>
                    </div>
                  </div>
                  {/* Stats Badge */}
                  <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-xs text-muted-foreground">
                      Years Exp.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Skills Section  */}
          <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Technologies I work with
            </p>

            <div className="relative overflow-x-hidden">
              <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, idx) => (
                  <div key={idx} className="flex shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
