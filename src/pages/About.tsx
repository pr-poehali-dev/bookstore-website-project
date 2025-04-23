
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Book, 
  Users, 
  GraduationCap, 
  Clock, 
  MapPin,
  Phone,
  Mail,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Баннер */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">О нас</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              BookEdu — ваш надежный партнер в мире образовательной литературы и учебных материалов с 2010 года.
            </p>
          </div>
        </section>
        
        {/* Наша миссия */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Наша миссия</h2>
                <p className="text-lg mb-4">
                  Мы стремимся сделать качественное образование доступным для каждого, 
                  предоставляя широкий выбор книг и учебных материалов от ведущих авторов и издательств.
                </p>
                <p className="text-lg mb-6">
                  BookEdu — это не просто магазин. Это сообщество людей, объединенных любовью к знаниям 
                  и стремлением к постоянному развитию.
                </p>
                <Button size="lg" asChild>
                  <Link to="/catalog">Наш каталог</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Наша команда" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Наши преимущества */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Почему клиенты выбирают нас
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                    <Book className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">50 000+ товаров</h3>
                  <p className="text-muted-foreground">
                    Огромный выбор книг, курсов и материалов по всем направлениям
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">100 000+ клиентов</h3>
                  <p className="text-muted-foreground">
                    Нам доверяют тысячи клиентов по всей России и за рубежом
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Эксперты</h3>
                  <p className="text-muted-foreground">
                    Профессиональные консультанты помогут с выбором
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">13 лет</h3>
                  <p className="text-muted-foreground">
                    Работаем на рынке образовательной литературы с 2010 года
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Наша команда */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Наша команда
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Анна Смирнова", role: "Основатель и CEO", image: "/placeholder.svg" },
                { name: "Дмитрий Петров", role: "Директор по развитию", image: "/placeholder.svg" },
                { name: "Елена Козлова", role: "Главный редактор", image: "/placeholder.svg" },
                { name: "Иван Соколов", role: "Руководитель отдела продаж", image: "/placeholder.svg" }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 rounded-lg overflow-hidden aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Наши партнеры */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Наши партнеры
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Partner ${i}`}
                    className="h-12 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Контакты */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Контакты
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Адрес</h3>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Образовательная, 42<br />
                        БЦ "Библиотека", 3 этаж
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Телефон</h3>
                      <p className="text-muted-foreground">
                        +7 (999) 123-45-67<br />
                        Пн-Пт: 9:00 - 20:00, Сб-Вс: 10:00 - 18:00
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        info@bookedu.ru<br />
                        support@bookedu.ru
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Социальные сети</h3>
                      <div className="flex space-x-4 mt-2">
                        {['Facebook', 'Instagram', 'VK', 'Telegram'].map((social) => (
                          <Button key={social} variant="outline" size="icon" className="rounded-full">
                            {social.charAt(0)}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground">Карта с расположением офиса</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
