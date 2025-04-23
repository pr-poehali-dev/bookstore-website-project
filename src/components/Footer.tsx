
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">О BookEdu</h3>
            <p className="text-sm opacity-80">
              Ваш надежный источник качественных книг и образовательных материалов.
              Мы помогаем людям расти и развиваться через знания.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catalog" className="opacity-80 hover:opacity-100 transition-opacity">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  О нас
                </Link>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">
                Адрес: ул. Книжная, 42, Москва
              </li>
              <li className="opacity-80">
                Телефон: +7 (999) 123-45-67
              </li>
              <li className="opacity-80">
                Email: info@bookedu.ru
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Новостная рассылка</h3>
            <p className="text-sm opacity-80 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать новости о скидках и новинках.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-white/10 border-0 focus-visible:ring-offset-primary text-white"
              />
              <Button variant="secondary">
                Подписаться
              </Button>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Следите за нами</h4>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-secondary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-secondary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-secondary-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm opacity-70">
          <p>© 2023 BookEdu. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
