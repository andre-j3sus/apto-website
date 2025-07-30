import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            APTO
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Centro de Explicações de Benfica
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Apoio Pedagógico Total - A sua solução completa para o sucesso
            académico
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Com mais de 30 anos de experiência, oferecemos as mais aptas
            soluções de apoio ao estudo em todos os graus de ensino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-education-red hover:bg-white/90 font-semibold px-8 py-4 text-lg"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("about")?.offsetTop,
                  behavior: "smooth",
                })
              }
            >
              Saiba Mais
            </Button>
            <Button
              size="lg"
              className="bg-white text-education-red hover:bg-white/90 font-semibold px-8 py-4 text-lg"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("contact")?.offsetTop,
                  behavior: "smooth",
                })
              }
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
