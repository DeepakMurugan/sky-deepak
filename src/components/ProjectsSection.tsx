import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import projectConstruction from "@/assets/project-construction.jpg";
import projectRealestate from "@/assets/project-realestate.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import projectWedding from "@/assets/project-wedding.jpg";

const projects = [
  {
    image: projectConstruction,
    title: "IT Corridor Construction Monitoring",
    location: "Chennai",
    problem: "Manual site inspections causing delays",
    solution: "Weekly drone survey with 3D progress models",
    result: "40% faster reporting, zero safety incidents",
  },
  {
    image: projectRealestate,
    title: "Luxury Villa Aerial Showcase",
    location: "Bangalore",
    problem: "Traditional photography lacked scale perspective",
    solution: "4K aerial cinematography + virtual tours",
    result: "3x increase in property inquiries",
  },
  {
    image: projectIndustrial,
    title: "Refinery Thermal Inspection",
    location: "Chennai",
    problem: "Dangerous manual inspections of tall structures",
    solution: "Thermal drone inspection with AI analysis",
    result: "85% reduction in inspection time",
  },
  {
    image: projectWedding,
    title: "Grand Wedding Aerial Coverage",
    location: "Bangalore",
    problem: "Venue too large for ground photography",
    solution: "Multi-drone cinematic setup with live feed",
    result: "Award-winning wedding film delivered",
  },
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -420 : 420, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <span className="label-tag border-primary/30 text-primary bg-primary/5 mb-6">Case Studies</span>
            <h2 className="heading-lg font-heading text-foreground">Featured Projects</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll("left")} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
              <ArrowLeft size={18} className="text-foreground" />
            </button>
            <button onClick={() => scroll("right")} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
              <ArrowRight size={18} className="text-foreground" />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-[340px] sm:w-[400px] snap-start rounded-3xl overflow-hidden bg-background border border-border/60 group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary" />
                {project.location}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">{project.title}</h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex gap-2">
                  <span className="text-destructive font-medium shrink-0">Problem:</span>
                  <span className="text-muted-foreground">{project.problem}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-primary font-medium shrink-0">Solution:</span>
                  <span className="text-muted-foreground">{project.solution}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-emerald-600 font-medium shrink-0">Result:</span>
                  <span className="text-muted-foreground">{project.result}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
