
import { Product } from "@/components/ProductCard";

export const featuredProducts: Product[] = [
  {
    id: "1",
    title: "Атлант расправил плечи",
    author: "Айн Рэнд",
    type: "book",
    price: 1200,
    oldPrice: 1500,
    image: "/placeholder.svg",
    isBestseller: true,
    rating: 4.8,
  },
  {
    id: "2",
    title: "Полное руководство по JavaScript",
    author: "Дэвид Фланаган",
    type: "book",
    price: 2400,
    image: "/placeholder.svg",
    rating: 4.6,
  },
  {
    id: "3",
    title: "Курс по искусственному интеллекту",
    type: "course",
    price: 7900,
    oldPrice: 9900,
    image: "/placeholder.svg",
    isNew: true,
    rating: 4.9,
  },
  {
    id: "4",
    title: "1984",
    author: "Джордж Оруэлл",
    type: "book",
    price: 750,
    image: "/placeholder.svg",
    isBestseller: true,
    rating: 4.7,
  },
  {
    id: "5",
    title: "Английский язык для начинающих",
    type: "material",
    price: 1800,
    image: "/placeholder.svg",
    isNew: true,
    rating: 4.5,
  },
  {
    id: "6",
    title: "Великий Гэтсби",
    author: "Ф. Скотт Фицджеральд",
    type: "book",
    price: 900,
    image: "/placeholder.svg",
    rating: 4.4,
  },
  {
    id: "7",
    title: "Python для анализа данных",
    author: "Уэс Маккинни",
    type: "book",
    price: 2100,
    image: "/placeholder.svg",
    rating: 4.8,
  },
  {
    id: "8",
    title: "Курс по дизайн-мышлению",
    type: "course",
    price: 5900,
    oldPrice: 7900,
    image: "/placeholder.svg",
    rating: 4.6,
  },
];

export const categories = [
  {
    id: "books",
    title: "Книги",
    description: "Художественная и научная литература",
    icon: "📚",
  },
  {
    id: "courses",
    title: "Курсы",
    description: "Онлайн-курсы по различным дисциплинам",
    icon: "🎓",
  },
  {
    id: "materials",
    title: "Учебные материалы",
    description: "Пособия и методические материалы",
    icon: "📝",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Елена Смирнова",
    avatar: "/placeholder.svg",
    text: "BookEdu изменил мой подход к обучению. Качественные материалы и быстрая доставка!",
    rating: 5,
  },
  {
    id: 2,
    name: "Алексей Петров",
    avatar: "/placeholder.svg",
    text: "Я нашел здесь книги, которых не было нигде. Огромный выбор и отличные цены.",
    rating: 4,
  },
  {
    id: 3,
    name: "Мария Иванова",
    avatar: "/placeholder.svg",
    text: "Прошла курс по маркетингу, приобретенный на BookEdu. Материал изложен понятно и структурировано.",
    rating: 5,
  },
];
