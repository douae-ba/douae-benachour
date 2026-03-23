import { useState } from "react";
import { ExternalLink, Award, CheckCircle, X, ZoomIn } from "lucide-react";

const certifications = [
  {
    title: "The Modern JavaScript for Beginners",
    issuer: "Udemy",
    date: "9 juillet 2025",
    link: "https://ude.my/UC-e270cb42-b46d-42f2-bbed-396f0648fb54",
    image: "/certif/javascript.jpg",
    badge: "4.5h",
    issuerColor: "#a435f0", // Udemy purple
    issuerInitials: "U",
  },
  {
    title: "10h - Agile Project Management",
    issuer: "PM Coaching",
    date: "28 octobre 2025",
    link: "#",
    image: "/certif/agile.jpg",
    badge: "10h",
    issuerColor: "#1f2830",
    issuerInitials: "PM",
  },
  {
    title: "EF SET English Certificate — C1 Advanced",
    issuer: "EF SET",
    date: "26 octobre 2025",
    link: "https://cert.efset.org/7cNG5U",
    image: "/certif/efset.jpg",
    badge: "66/100",
    issuerColor: "#6c3fc5",
    issuerInitials: "EF",
  },
  {
    title: "French Proficiency Certificate — B2",
    issuer: "Rosetta Stone",
    date: "25 juin 2025",
    link: "#",
    image: "/certif/rosetta.jpg",
    badge: "256/400",
    issuerColor: "#0a5c8a",
    issuerInitials: "RS",
  },
];

const categoryColors = {
  Development: "text-primary bg-primary/10 border-primary/20",
  Management: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Language: "text-violet-400 bg-violet-400/10 border-violet-400/20",
};

const IssuerBadge = ({ initials, color }) => (
  <div
    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
    style={{ backgroundColor: color + "22", border: `1px solid ${color}44` }}
  >
    <span className="text-xs font-bold" style={{ color }}>
      {initials}
    </span>
  </div>
);

const CertPlaceholder = ({ title }) => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-surface">
    <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center">
      <Award className="w-8 h-8 text-primary/40" />
    </div>
    <span className="text-xs text-muted-foreground/50 text-center px-4 leading-relaxed">
      {title}
    </span>
  </div>
);

export const Certifications = () => {
  const [lightbox, setLightbox] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wide uppercase animate-fade-in">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Certifications &{" "}
            <span className="font-serif italic font-normal text-white">
              achievements.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Continuous learning drives my growth. Here are some of the
            certifications I've earned to deepen my technical expertise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in transition-all duration-500 hover:glow-border"
              style={{ animationDelay: `${100 * idx}ms` }}
            >
              {/* Certificate image preview */}
              <div
                className="relative overflow-hidden aspect-video cursor-pointer"
                onClick={() => setLightbox(idx)}
              >
                {imgErrors[idx] ? (
                  <CertPlaceholder title={cert.title} />
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={() =>
                      setImgErrors((prev) => ({ ...prev, [idx]: true }))
                    }
                  />
                )}

                {/* Score/duration badge */}
                {cert.badge && (
                  <div className="absolute top-3 left-3 glass rounded-full px-2.5 py-1 text-xs font-semibold text-primary">
                    {cert.badge}
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full glass">
                    <ZoomIn className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 space-y-4">
                {/* Issuer + category */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <IssuerBadge
                      initials={cert.issuerInitials}
                      color={cert.issuerColor}
                    />
                    <span className="text-sm text-muted-foreground truncate">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border/40">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    <span>{cert.date}</span>
                  </div>
                  {cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="flex justify-center mt-14 animate-fade-in animation-delay-600">
          <div className="glass rounded-full px-6 py-3 flex items-center gap-3">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Always learning —{" "}
              <span className="text-foreground font-medium">
                more certifications in progress
              </span>
            </span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-md animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full glass-strong rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            {imgErrors[lightbox] ? (
              <div className="aspect-video">
                <CertPlaceholder title={certifications[lightbox].title} />
              </div>
            ) : (
              <img
                src={certifications[lightbox].image}
                alt={certifications[lightbox].title}
                className="w-full object-contain max-h-[70vh]"
              />
            )}

            {/* Bottom bar */}
            <div className="p-4 flex items-center justify-between border-t border-border/40">
              <div className="flex items-center gap-3">
                <IssuerBadge
                  initials={certifications[lightbox].issuerInitials}
                  color={certifications[lightbox].issuerColor}
                />
                <div>
                  <p className="font-semibold text-sm">
                    {certifications[lightbox].title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {certifications[lightbox].issuer} ·{" "}
                    {certifications[lightbox].date}
                  </p>
                </div>
              </div>
              {certifications[lightbox].link !== "#" && (
                <a
                  href={certifications[lightbox].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-primary hover:underline flex-shrink-0"
                >
                  Verify <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};