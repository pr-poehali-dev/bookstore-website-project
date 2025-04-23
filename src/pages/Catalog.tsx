
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, FilterX } from "lucide-react";
import { featuredProducts, categories } from "@/lib/data";

const Catalog = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const allProducts = [...featuredProducts, ...featuredProducts.slice(0, 4)]; // Дублируем для демо

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Каталог</h1>
          
          {/* Поисковая строка */}
          <div className="relative mb-8">
            <Input 
              placeholder="Поиск книг, курсов и материалов..." 
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Фильтры */}
            <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Фильтры</h2>
                <Button variant="ghost" size="sm" className="text-xs">
                  <FilterX className="h-3 w-3 mr-1" /> Сбросить
                </Button>
              </div>
              
              <div className="space-y-6">
                {/* Категории */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Категории</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category.id}`} />
                        <Label 
                          htmlFor={`category-${category.id}`}
                          className="text-sm cursor-pointer"
                        >
                          {category.title}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                {/* Цена */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Цена</h3>
                  <Slider
                    defaultValue={[0, 5000]}
                    max={5000}
                    step={100}
                    onValueChange={(value) => setPriceRange(value)}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0]} ₽</span>
                    <span>{priceRange[1]} ₽</span>
                  </div>
                </div>
                
                <Separator />
                
                {/* Формат */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Формат</h3>
                  <div className="space-y-2">
                    {['Печатный', 'Электронный', 'Аудиокнига', 'Видеокурс'].map((format) => (
                      <div key={format} className="flex items-center space-x-2">
                        <Checkbox id={`format-${format}`} />
                        <Label 
                          htmlFor={`format-${format}`}
                          className="text-sm cursor-pointer"
                        >
                          {format}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                {/* Язык */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Язык</h3>
                  <div className="space-y-2">
                    {['Русский', 'Английский', 'Испанский', 'Немецкий'].map((language) => (
                      <div key={language} className="flex items-center space-x-2">
                        <Checkbox id={`language-${language}`} />
                        <Label 
                          htmlFor={`language-${language}`}
                          className="text-sm cursor-pointer"
                        >
                          {language}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                {/* Применить фильтры */}
                <Button className="w-full">Применить фильтры</Button>
              </div>
            </div>
            
            {/* Список товаров */}
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  Найдено {allProducts.length} товаров
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm whitespace-nowrap">Сортировать по:</span>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Популярности" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Популярности</SelectItem>
                      <SelectItem value="price-asc">Цена (по возрастанию)</SelectItem>
                      <SelectItem value="price-desc">Цена (по убыванию)</SelectItem>
                      <SelectItem value="new">Новизне</SelectItem>
                      <SelectItem value="rating">Рейтингу</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProducts.map((product, index) => (
                  <ProductCard key={`${product.id}-${index}`} product={product} />
                ))}
              </div>
              
              {/* Пагинация */}
              <div className="mt-8 flex justify-center">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" disabled>
                    &lt;
                  </Button>
                  <Button variant="default" size="icon">
                    1
                  </Button>
                  <Button variant="outline" size="icon">
                    2
                  </Button>
                  <Button variant="outline" size="icon">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    &gt;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
