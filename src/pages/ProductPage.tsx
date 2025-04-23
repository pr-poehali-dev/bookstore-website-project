
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  ShoppingCart,
  Heart,
  Share2,
  FileText,
  Headphones,
  Bookmark,
  Check,
  Truck
} from "lucide-react";
import { featuredProducts } from "@/lib/data";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // В реальном приложении здесь был бы API запрос по ID
  const product = featuredProducts.find(p => p.id === id) || featuredProducts[0];
  
  // Похожие товары
  const relatedProducts = featuredProducts
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Хлебные крошки */}
          <div className="text-sm mb-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Главная
            </Link>
            {' > '}
            <Link to="/catalog" className="text-muted-foreground hover:text-foreground">
              Каталог
            </Link>
            {' > '}
            <span className="text-foreground">{product.title}</span>
          </div>
          
          {/* Основная информация о товаре */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Изображение товара */}
              <div>
                <AspectRatio ratio={3/4} className="bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={product.image || "/placeholder.svg"} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Информация о товаре */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">Бестселлер</Badge>
                  {product.discount && (
                    <Badge variant="destructive" className="text-xs">-{product.discount}%</Badge>
                  )}
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.title}</h1>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < product.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.reviews} отзывов
                  </span>
                </div>
                
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-bold">{product.price} ₽</span>
                  {product.oldPrice && (
                    <span className="text-muted-foreground line-through">{product.oldPrice} ₽</span>
                  )}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Автор</p>
                      <p className="text-sm text-muted-foreground">
                        {product.author || "Коллектив авторов"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                      <Bookmark className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Издательство</p>
                      <p className="text-sm text-muted-foreground">
                        {product.publisher || "BookEdu"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                      <FileText className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Формат</p>
                      <p className="text-sm text-muted-foreground">
                        {product.format || "Печатная книга, Электронная книга, Аудиокнига"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                      <Truck className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Доставка</p>
                      <p className="text-sm text-muted-foreground">
                        Доставка по России — от 2 дней
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex border rounded-md">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={decrementQuantity}
                      className="h-10 rounded-r-none"
                    >
                      -
                    </Button>
                    <div className="flex items-center justify-center w-12 border-l border-r">
                      {quantity}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={incrementQuantity}
                      className="h-10 rounded-l-none"
                    >
                      +
                    </Button>
                  </div>
                  
                  <Button className="flex-1" size="lg">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    В корзину
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Детальная информация о товаре */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <Tabs defaultValue="description">
              <TabsList className="mb-6">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="space-y-4">
                <p>
                  {product.description || "Представляем вам лучший образовательный материал, который поможет освоить новые знания и навыки. Этот продукт создан лучшими экспертами в своей области и получил положительные отзывы от тысяч пользователей."}
                </p>
                <p>
                  В этом издании собраны все необходимые материалы, которые помогут вам:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Быстро освоить новые концепции и методики</li>
                  <li>Применить полученные знания на практике</li>
                  <li>Повысить свой профессиональный уровень</li>
                  <li>Открыть новые возможности для карьерного роста</li>
                </ul>
                <p>
                  Этот материал отлично подойдет как для новичков, так и для опытных специалистов, которые хотят углубить свои знания в данной области.
                </p>
              </TabsContent>
              
              <TabsContent value="characteristics">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Автор</span>
                    <span className="font-medium">{product.author || "Коллектив авторов"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Издательство</span>
                    <span className="font-medium">{product.publisher || "BookEdu"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Год издания</span>
                    <span className="font-medium">2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Количество страниц</span>
                    <span className="font-medium">352</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Переплет</span>
                    <span className="font-medium">Твердый</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Формат</span>
                    <span className="font-medium">60х90/16 (145x215 мм)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ISBN</span>
                    <span className="font-medium">978-5-00000-000-0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Вес</span>
                    <span className="font-medium">450 г</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium">Отзывы покупателей</h3>
                      <p className="text-sm text-muted-foreground">
                        {product.reviews} отзывов, средняя оценка {product.rating} из 5
                      </p>
                    </div>
                    <Button>Написать отзыв</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Примеры отзывов */}
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Анна С.</span>
                        <div className="flex">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < 5 ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">12 августа 2023</p>
                      <p>Отличная книга! Материал изложен понятно и структурированно. Рекомендую всем, кто интересуется этой темой.</p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Михаил К.</span>
                        <div className="flex">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < 4 ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">5 июля 2023</p>
                      <p>Давно искал хороший учебник по этой теме. Эта книга превзошла все мои ожидания! Практические задания особенно полезны.</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">Загрузить еще отзывы</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Похожие товары */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
