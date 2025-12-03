import { Filling, NavItem, PriceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Начинки', href: '#catalog' },
  { label: 'Капкейки', href: '#cupcakes' },
  { label: 'Мои работы', href: '#gallery' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Как заказать', href: '#contact' },
];

export const FILLINGS: Filling[] = [
  // Bento
  {
    id: 'b1',
    name: 'Ягодная начинка',
    description: 'Шоколадный или ванильный бисквит, крем-чиз + ягода на выбор: малина, вишня или клубника.',
    imageUrl: 'https://picsum.photos/seed/berrycake/400/400',
    category: 'bento',
  },
  {
    id: 'b2',
    name: 'Сникерс',
    description: 'Шоколадный бисквит, шоколадный ганаш, карамель с орешками.',
    imageUrl: 'https://picsum.photos/seed/snickers/400/400',
    category: 'bento',
  },
  {
    id: 'b3',
    name: 'Тропик',
    description: 'Ванильный бисквит, кокосовый крем-чиз, конфи из манго.',
    imageUrl: 'https://picsum.photos/seed/tropic/400/400',
    category: 'bento',
  },
  {
    id: 'b4',
    name: 'Орео',
    description: 'Шоколадный бисквит, крем-чиз, шоколадный крем с печеньем Орео.',
    imageUrl: 'https://picsum.photos/seed/oreo/400/400',
    category: 'bento',
  },
  {
    id: 'b5',
    name: 'Банан-карамель',
    description: 'Шоколадный бисквит, бананово-карамельная начинка, крем-чиз.',
    imageUrl: 'https://picsum.photos/seed/banana/400/400',
    category: 'bento',
  },

  // Standard
  {
    id: 's1',
    name: 'Чёрный лес с вишней',
    description: 'Шоколадный бисквит, вишневое конфи, крем-чиз.',
    imageUrl: 'https://picsum.photos/seed/blackforest/400/400',
    category: 'standard',
  },
  {
    id: 's2',
    name: 'Баунти',
    description: 'Ванильный бисквит, кокосовый крем с миндалём, кокосовый крем-чиз.',
    imageUrl: 'https://picsum.photos/seed/bounty/400/400',
    category: 'standard',
  },
  {
    id: 's3',
    name: 'Тёмный шоколад с малиной',
    description: 'Шоколадный бисквит, ганаш на темном шоколаде, малиновое конфи.',
    imageUrl: 'https://picsum.photos/seed/darkchoco/400/400',
    category: 'standard',
  },
  {
    id: 's4',
    name: 'Пина колада',
    description: 'Ванильный бисквит, кокосовый крем, ананасовый конфи, крем-чиз.',
    imageUrl: 'https://picsum.photos/seed/pinacolada/400/400',
    category: 'standard',
  },
  {
    id: 's5',
    name: 'Манго-маракуйя',
    description: 'Ванильный бисквит, крем-чиз, конфи манго и маракуйя.',
    imageUrl: 'https://picsum.photos/seed/mangostd/400/400',
    category: 'standard',
  },

  // Premium
  {
    id: 'p1',
    name: 'Фисташка-Малина',
    description: 'Шоколадный бисквит, фисташковый крем, малиновое конфи.',
    imageUrl: 'https://picsum.photos/seed/pistachio/400/400',
    category: 'premium',
  },
  {
    id: 'p2',
    name: 'Сникерс',
    description: 'Шоколадный бисквит, шоколадный ганаш, карамель с орешками.',
    imageUrl: 'https://picsum.photos/seed/snickers_prem/400/400',
    category: 'premium',
  },
  {
    id: 'p3',
    name: 'Малиновый рай',
    description: 'Шоколадный бисквит, малиновый мусс, малиновое конфи, сливочный крем.',
    imageUrl: 'https://picsum.photos/seed/raspberry_paradise/400/400',
    category: 'premium',
  },
  {
    id: 'p4',
    name: 'Муссовый лес',
    description: 'Ванильный или шоколадный бисквит, клубничный и черничный мусс, крем на белом шоколаде.',
    imageUrl: 'https://picsum.photos/seed/mousse_forest/400/400',
    category: 'premium',
  },
  {
    id: 'p5',
    name: 'Шоколад-Абрикос',
    description: 'Шоколадный бисквит, солёная карамель, абрикосовое конфи, шоколадный крем.',
    imageUrl: 'https://picsum.photos/seed/choco_apricot/400/400',
    category: 'premium',
  },
];

export const PRICES: { category: string; items: PriceItem[] }[] = [
  {
    category: 'Бенто Торты',
    items: [
      { id: 'bp1', title: 'Бенто (рисунок/текст)', price: 'от 1 600 ₽', detail: 'Входит любой текст или рисунок' },
      { id: 'bp2', title: 'Сахарная картинка', price: '+ 150 ₽', detail: 'На весь торт или элемент' },
    ],
  },
  {
    category: 'Стиль Ламбет (Винтаж)',
    items: [
      { id: 'lp1', title: 'Бенто Ламбет (в боксе)', price: '1 800 ₽', isHighlight: true },
      { id: 'lp2', title: 'Бенто Ламбет (тубус)', price: '2 100 ₽', isHighlight: true },
      { id: 'lp3', title: 'Декор Ламбет (1 кг)', price: '+ 450 ₽', detail: 'Блестки, бантики, свечка' },
      { id: 'lp4', title: 'Декор Ламбет (2 кг)', price: '+ 650 ₽', detail: 'Блестки, бантики, свечка' },
    ],
  },
  {
    category: 'Базовые Цены (за 1 кг)',
    items: [
      { id: 'cp1', title: 'Бисквитные (Стандарт)', price: '2 200 ₽/кг', detail: 'Заказ от 2 кг' },
      { id: 'cp2', title: 'Бисквитные (Премиум)', price: '2 500 ₽/кг', detail: 'Заказ от 2 кг' },
    ],
  },
  {
    category: 'Упаковка и Декор',
    items: [
      { id: 'd1', title: 'Торт в тубусе', price: '+ 300-450 ₽', detail: 'Зависит от размера' },
      { id: 'd2', title: 'Сложные фигурки', price: 'Индивидуально', detail: 'Заказ за 3-4 дня' },
    ],
  },
];

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/79629445777',
  telegram: 'https://t.me/ilona_cakee',
  instagram: 'https://instagram.com/ilonacakes',
};