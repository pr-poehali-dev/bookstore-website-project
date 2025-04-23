
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Gift, 
  TrendingUp 
} from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProducts, categories, testimonials } from "@/lib/data";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Categories Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Выберите категорию
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link 
                  key={category.id} 
                  to={`/catalog?category=${category.id}`}
                  className="block group"
                >
                  <Card className="h-full transition-all group-hover:shadow-md">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                      <Button 
                        variant="link" 
                        className="mt-4 group-hover:text-primary transition-colors"
                      >
                        Перейти <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Популярные товары</h2>
              <Button variant="ghost" asChild>
                <Link to="/catalog" className="flex items-center">
                  Смотреть все <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-12 bg-accent">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Почему выбирают нас
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Огромный выбор</h3>
                <p className="text-muted-foreground">Более 50 000 книг и материалов в нашем каталоге</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Качество</h3>
                <p className="text-muted-foreground">Мы сотрудничаем только с проверенными издательствами</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Экспертиза</h3>
                <p className="text-muted-foreground">Наши специалисты помогут с выбором материалов</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Бонусная программа</h3>
                <p className="text-muted-foreground">Накапливайте баллы и получайте скидки на покупки</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Отзывы наших покупателей
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <div className="text-amber-500">
                          {'★'.repeat(testimonial.rating)}
                          {'☆'.repeat(5 - testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Готовы начать свое образовательное путешествие?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам довольных клиентов и откройте для себя мир знаний вместе с BookEdu.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-primary font-semibold"
              asChild
            >
              <Link to="/catalog">Перейти в каталог</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
