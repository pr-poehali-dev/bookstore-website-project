
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Card, 
  CardContent,
} from "@/components/ui/card";
import { 
  MinusCircle, 
  PlusCircle, 
  Trash2, 
  CreditCard, 
  Truck, 
  ShieldCheck 
} from "lucide-react";
import { featuredProducts } from "@/lib/data";

// Имитация корзины для демонстрации
const initialCartItems = featuredProducts.slice(0, 3).map(product => ({
  ...product,
  quantity: 1
}));

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  
  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  // Расчет стоимости
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 0; // В реальном приложении могла бы быть логика скидок
  const shipping = 300;
  const total = subtotal - discount + shipping;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Корзина</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Список товаров */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        {/* Изображение товара */}
                        <div className="w-full sm:w-32 h-32 bg-gray-100">
                          <img 
                            src={item.image || "/placeholder.svg"} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Информация о товаре */}
                        <div className="flex-1 p-4 flex flex-col sm:flex-row justify-between">
                          <div className="mb-4 sm:mb-0">
                            <h3 className="font-medium mb-1 hover:text-primary">
                              <Link to={`/product/${item.id}`}>{item.title}</Link>
                            </h3>
                            <p className="text-sm text-muted-foreground mb-1">
                              {item.author || "Коллектив авторов"}
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              Формат: <span className="ml-1">Печатная книга</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:items-end">
                            <div className="text-lg font-semibold mb-2">
                              {item.price} ₽
                            </div>
                            
                            <div className="flex items-center">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8" 
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <MinusCircle className="h-4 w-4" />
                              </Button>
                              <span className="mx-2">{item.quantity}</span>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8" 
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <PlusCircle className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8 ml-2" 
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Продолжить покупки */}
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link to="/catalog">Продолжить покупки</Link>
                  </Button>
                </div>
              </div>
              
              {/* Сводка заказа */}
              <div>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-bold mb-4">Сводка заказа</h2>
                    
                    {/* Промокод */}
                    <div className="flex space-x-2">
                      <Input 
                        placeholder="Промокод" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline">Применить</Button>
                    </div>
                    
                    <Separator />
                    
                    {/* Расчет стоимости */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Товары ({cartItems.length})</span>
                        <span>{subtotal} ₽</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Скидка</span>
                          <span>-{discount} ₽</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Доставка</span>
                        <span>{shipping} ₽</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Итого</span>
                      <span>{total} ₽</span>
                    </div>
                    
                    <Button className="w-full">Оформить заказ</Button>
                    
                    {/* Гарантии */}
                    <div className="space-y-3 mt-4">
                      <div className="flex items-start gap-2">
                        <CreditCard className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Безопасная оплата</p>
                          <p className="text-xs text-muted-foreground">
                            Мы используем защищенное соединение
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Truck className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Быстрая доставка</p>
                          <p className="text-xs text-muted-foreground">
                            Доставка по всей России
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Гарантия качества</p>
                          <p className="text-xs text-muted-foreground">
                            Возврат и обмен в течение 14 дней
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold mb-2">Ваша корзина пуста</h2>
              <p className="text-muted-foreground mb-6">
                Похоже, вы еще не добавили товары в корзину
              </p>
              <Button asChild>
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
