
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/90 to-primary text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Знания доступны каждому
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6 md:mb-8">
              Откройте для себя мир книг и образовательных материалов. Развивайтесь 
              и учитесь с нашей коллекцией из тысяч изданий!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-primary-foreground font-semibold"
                asChild
              >
                <Link to="/catalog">Смотреть каталог</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link to="/about">Узнать больше</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative z-10 transform rotate-3 transition-transform hover:rotate-0">
              <img 
                src="/placeholder.svg" 
                alt="Коллекция книг и образовательных материалов" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute top-6 -left-6 w-full h-full bg-secondary rounded-lg transform -rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-secondary/20 rounded-full -mt-10 -mr-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-secondary/20 rounded-full -mb-10 -ml-10 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
