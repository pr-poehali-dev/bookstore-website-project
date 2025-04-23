
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  author?: string;
  type: 'book' | 'course' | 'material';
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    id,
    title,
    author,
    type,
    price,
    oldPrice,
    image,
    isNew,
    isBestseller,
    rating,
  } = product;

  // Форматирование цены в рублях
  const formatPrice = (price: number) => `${price.toLocaleString()} ₽`;

  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-md">
      <div className="relative pt-[70%] overflow-hidden bg-muted">
        <Link to={`/product/${id}`}>
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-primary">Новинка</Badge>
          )}
          {isBestseller && (
            <Badge variant="secondary">Бестселлер</Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="p-4 pb-2 flex-grow">
        <div className="text-xs text-muted-foreground uppercase mb-1">
          {type === 'book' ? 'Книга' : type === 'course' ? 'Курс' : 'Учебный материал'}
        </div>
        <Link to={`/product/${id}`}>
          <CardTitle className="text-base hover:text-primary transition-colors line-clamp-2">
            {title}
          </CardTitle>
        </Link>
        {author && (
          <CardDescription className="text-sm">
            {author}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="p-4 pt-0 pb-2">
        {rating && (
          <div className="flex items-center text-amber-500 mb-2">
            {'★'.repeat(Math.floor(rating))}
            {'☆'.repeat(5 - Math.floor(rating))}
            <span className="text-xs text-muted-foreground ml-1">({rating})</span>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-semibold">{formatPrice(price)}</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>
        
        <Button size="sm" className="w-10 h-10 p-0">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
