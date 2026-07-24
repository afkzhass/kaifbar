import { MenuCategory } from '../types';

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'salads',
    title: 'Салаты & Закуски',
    subtitle: 'Свежие овощи, авторские заправки и традиционные нарезки',
    iconName: 'Salad',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    items: [
      {
        id: 'sal-1',
        name: 'Цезарь с курицей',
        category: 'salads',
        price: 3190,
        description: 'Хрустящие листья салата айсберг, сочное куриное филе, томаты черри, пармезан и наш фирменный классический соус.',
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'sal-2',
        name: 'Салат Ачу-чук',
        category: 'salads',
        price: 1590,
        description: 'Традиционный легкий восточный салат из свежайших помидоров, сладкого лука и жгучего перца.',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
        tags: ['vegetarian', 'spicy']
      },
      {
        id: 'sal-3',
        name: 'Свежий салат',
        category: 'salads',
        price: 1790,
        description: 'Огурцы, томаты, зелень, болгарский перец, заправка на выбор (масло или сметана).',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
        tags: ['vegetarian']
      },
      {
        id: 'sal-4',
        name: 'Греческий салат',
        category: 'salads',
        price: 2590,
        description: 'Свежие овощи, маслины, нежный сыр фета, оливковое масло первого отжима и орегано.',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80',
        tags: ['vegetarian']
      },
      {
        id: 'sal-5',
        name: 'Восточный салат',
        category: 'salads',
        price: 3290,
        description: 'Сочная обжаренная вырезка говядины с хрустящими овощами и пикантным восточным соусом.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
        tags: ['chef']
      },
      {
        id: 'sal-6',
        name: 'Баклажан хрустящий',
        category: 'salads',
        price: 2890,
        description: 'Обжаренные до хрустящей корочки баклажаны с томатами, кинзой и сладким соусом чили.',
        image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'sal-7',
        name: 'Оливье',
        category: 'salads',
        price: 2790,
        description: 'Классический салат с нежным мясом, отварными овощами, зеленым горошком и домашним майонезом.',
        image: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'sal-8',
        name: 'Салат Малибу',
        category: 'salads',
        price: 2790,
        description: 'Куриное филе, копчености, свежие огурцы, сыр и легкая майонезная заправка с сухариками.',
        image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'sal-9',
        name: 'Кавказская нарезка',
        category: 'salads',
        price: 2990,
        description: 'Ассорти свежих сезонных овощей, стручковый перец и изобилие ароматной зелени.',
        image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'sal-10',
        name: 'Селедка по-русски',
        category: 'salads',
        price: 2790,
        description: 'Филе слабосоленой сельди с отварным картофелем, маринованным луком и укропом.',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'sal-11',
        name: 'Разнасол',
        category: 'salads',
        price: 2790,
        description: 'Домашние соленые огурчики, хрустящие квашеные томаты, квашеная капуста и чеснок.',
        image: 'https://images.unsplash.com/photo-1589135233689-d531f8252a55?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'sal-12',
        name: 'Фруктовая нарезка',
        category: 'salads',
        price: 5990,
        description: 'Сезонное ассорти из сочных фруктов и ягод.',
        image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'soups',
    title: 'Первые Блюда',
    subtitle: 'Наваристые бульоны, ароматические азиатские и домашние супы',
    iconName: 'Soup',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    items: [
      {
        id: 'soup-1',
        name: 'Том Ям',
        category: 'soups',
        price: 3190,
        displayPrice: '3 190 / 3 390 тг',
        description: 'Легендарный тайский острый суп на кокосовом молоке с дарами моря или курицей, грибами цаогу и яркими специями.',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
        tags: ['hit', 'spicy', 'chef'],
        variants: [
          { id: 'ty-chicken', name: 'С курицей', price: 3190 },
          { id: 'ty-shrimp', name: 'С креветками & морепродуктами', price: 3390 }
        ]
      },
      {
        id: 'soup-2',
        name: 'Рамен',
        category: 'soups',
        price: 2790,
        displayPrice: '2 790 - 3 190 тг',
        description: 'Наваристый азиатский суп с лапшой ручной работы, ароматным бульоном, нежным мясом и яйцом.',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        tags: ['hit'],
        variants: [
          { id: 'ramen-chicken', name: 'С курицей', price: 2790 },
          { id: 'ramen-beef', name: 'С говядиной', price: 2990 },
          { id: 'ramen-seafood', name: 'С морепродуктами', price: 3190 }
        ]
      },
      {
        id: 'soup-3',
        name: 'Солянка мясная',
        category: 'soups',
        price: 2490,
        description: 'Насыщенный домашний суп с мясными деликатесами, маслинами, лимоном и сметаной.',
        image: 'https://images.unsplash.com/photo-1588566565463-180a5b2090d2?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'soup-4',
        name: 'Чечевичный крем-суп',
        category: 'soups',
        price: 2190,
        description: 'Бархатистый крем-суп из красной чечевицы со сухариками и долькой лимона.',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
        tags: ['vegetarian']
      },
      {
        id: 'soup-5',
        name: 'Шорпа бар',
        category: 'soups',
        price: 2890,
        description: 'Традиционный прозрачный суп из молодой баранины с крупным картофелем и зеленью.',
        image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'soup-6',
        name: 'Куриный суп домашний',
        category: 'soups',
        price: 2190,
        description: 'Легкий и сытный суп с домашней лапшой, куриным филе и перепелиным яйцом.',
        image: 'https://images.unsplash.com/photo-1594756297462-e274da896e04?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'soup-7',
        name: 'Пельмени с бульоном',
        category: 'soups',
        price: 2790,
        description: 'Нежные домашние пельмени в прозрачном говяжьем бульоне с зеленью и сметаной.',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'mains',
    title: 'Горячие Блюда',
    subtitle: 'Восточные хиты, паста, стейки и рыбы на любой вкус',
    iconName: 'Utensils',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    items: [
      {
        id: 'main-1',
        name: 'Қазан кебаб',
        category: 'mains',
        price: 4290,
        description: 'Обжаренное до золотистой корочки мясо барашка с нежным рассыпчатым картофелем и специями.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        tags: ['hit', 'chef']
      },
      {
        id: 'main-2',
        name: 'Традиционный Плов',
        category: 'mains',
        price: 2590,
        description: 'Рассыпчатый плов с сочным мясом говядины, нутом, желтой морковью и специями.',
        image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'main-3',
        name: 'Манты домашние',
        category: 'mains',
        price: 2690,
        description: 'Тонкое тесто с рубленым мясом и сочным луком, приготовленные на пару.',
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'main-4',
        name: 'Лагман Гуйру',
        category: 'mains',
        price: 2790,
        description: 'Тянутая лапша со стручковым перцем, мясом и крупно нарезанными овощами в подливе.',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'main-5',
        name: 'Лагман Цомян',
        category: 'mains',
        price: 2890,
        description: 'Жареная тянутая лапша с говядиной, овощами и пикантными соусами.',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'main-6',
        name: 'Паста Фетучини с курицей и грибами',
        category: 'mains',
        price: 2790,
        description: 'Итальянская паста в густом сливочном соусе с куриным филе, шампиньонами и пармезаном.',
        image: 'https://images.unsplash.com/photo-1621996346565-e3def616403c?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'main-7',
        name: 'Паста Фетучини с креветками',
        category: 'mains',
        price: 2890,
        description: 'Нежные тигровые креветки с пастой фетучини в белом сливочно-чесночном соусе.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
        tags: ['chef']
      },
      {
        id: 'main-8',
        name: 'Паста Карбонара',
        category: 'mains',
        price: 2790,
        description: 'Классическая спагетти с хрустящей беконом, желтком, сливками и сыром Пармезан.',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'main-9',
        name: 'Бефстроганов с пюре',
        category: 'mains',
        price: 2990,
        description: 'Нежные полоски говядины в сливочно-грибном соусе с воздушным картофельным пюре.',
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'main-10',
        name: 'Куриное филе с грибами в сливочном соусе',
        category: 'mains',
        price: 2890,
        description: 'Сочное куриное филе со шампиньонами в сливках, подается с рассыпчатым рисом.',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'main-11',
        name: 'Мясо по-тайски с рисом',
        category: 'mains',
        price: 2890,
        description: 'Пикантные кусочки говядины с болгарским перцем, кунжутом и соусом соя-чили, с рисом.',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
        tags: ['spicy']
      },
      {
        id: 'main-12',
        name: 'Курица по-тайски с рисом',
        category: 'mains',
        price: 2790,
        description: 'Обжаренная курица с азиатскими овощами и традиционным тайским соусом.',
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'main-13',
        name: 'Курица в кисло-сладком соусе',
        category: 'mains',
        price: 2890,
        description: 'Кусочки курицы в хрустящем кляре с ананасами и болгарским перцем, с гарниром из риса.',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'main-14',
        name: 'Картошка по-домашнему',
        category: 'mains',
        price: 2890,
        description: 'Обжаренный картофель с луком, грибами и рубленой зеленью.',
        image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'main-15',
        name: 'Стейк из куриного филе',
        category: 'mains',
        price: 3790,
        description: 'Нежный стейк из куриного филе на гриле со специями.',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'main-16',
        name: 'Сазан жареный (1 кг)',
        category: 'mains',
        price: 6000,
        weightOrVolume: '1 кг',
        description: 'Свежеобжаренный речной сазан с хрустящей корочкой и лимоном.',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'main-17',
        name: 'Карась жареный',
        category: 'mains',
        price: 2990,
        weightOrVolume: '0.4 кг',
        description: 'Хрустящий карась, обжаренный с золотистым луком.',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'grill',
    title: 'Мангал & Шашлык',
    subtitle: 'Ароматные блюда на открытых углях с дымком',
    iconName: 'Flame',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    items: [
      {
        id: 'shash-1',
        name: 'Стейк Рибай',
        category: 'grill',
        price: 5790,
        description: 'Премиальный отруб мраморной говядины до идеальной степени прожарки со специями.',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80',
        tags: ['chef', 'hit']
      },
      {
        id: 'shash-2',
        name: 'Шашлык из Баранины',
        category: 'grill',
        price: 3390,
        description: 'Классика жанра, приготовленная на открытом огне по фирменному маринаду.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'shash-3',
        name: 'Шашлык из Говядины',
        category: 'grill',
        price: 3290,
        description: 'Сочная отборная мякоть говядины с тонким ароматом древесных углей.',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shash-4',
        name: 'Люля-Кебаб',
        category: 'grill',
        price: 2790,
        description: 'Нежный рубленый мясной кебаб с восточными пряностями и луком.',
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'shash-5',
        name: 'Шашлык из Утки',
        category: 'grill',
        price: 2790,
        description: 'Ароматное утиное филе на мангале с румяной корочкой.',
        image: 'https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shash-6',
        name: 'Шашлык из Куриного Филе',
        category: 'grill',
        price: 2690,
        description: 'Диетическое и сочное филе цыпленка, маринованное в нежных специях.',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shash-7',
        name: 'Куриные крылья на мангале',
        category: 'grill',
        price: 2590,
        description: 'Хрустящие куриные крылышки с дымком мангала.',
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'shash-8',
        name: 'Окорочка на мангале',
        category: 'grill',
        price: 2590,
        description: 'Сочные куриные окорочка в фирменном маринаде.',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'fastfood',
    title: 'Фаст-Фуд & Закуски',
    subtitle: 'Бургеры, кесадилья, клубные сэндвичи и снеки',
    iconName: 'Sandwich',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    items: [
      {
        id: 'ff-1',
        name: 'Бургер с говядиной и фри',
        category: 'fastfood',
        price: 3190,
        description: 'Сочная говяжья котлета, расплавленный сыр, свежие овощи и фирменный соус в мягкой булочке, с картофелем фри.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'ff-2',
        name: 'Бургер с курицей и фри',
        category: 'fastfood',
        price: 3090,
        description: 'Хрустящее куриное филе, сыр чеддер, свежий салат и соус, подается с картофелем фри.',
        image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'ff-3',
        name: 'Кесадилья с курицей',
        category: 'fastfood',
        price: 2990,
        description: 'Мексиканская лепешка тортилья с поджаренной курицей, тянущимся сыром и овощами.',
        image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'ff-4',
        name: 'Клаб сэндвич с фри',
        category: 'fastfood',
        price: 2990,
        description: 'Трехэтажный тост с курицей, ветчиной, сыром, томатами и картофелем фри.',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'ff-5',
        name: 'Пивные креветки',
        category: 'fastfood',
        price: 3190,
        description: 'Обжаренные креветки в специях с лимоном и соусом.',
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'ff-6',
        name: 'Бараньи семечки',
        category: 'fastfood',
        price: 2990,
        description: 'Хрустящие обжаренные ребрышки ягненка со специями.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'ff-7',
        name: 'Куриные крылья в BBQ',
        category: 'fastfood',
        price: 2690,
        description: 'Сочные крылышки в карамелизированном соусе барбекю.',
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'ff-8',
        name: 'Сырные палочки',
        category: 'fastfood',
        price: 1690,
        description: 'Обжаренные до золотистой корочки палочки моцареллы с тянущимся сыром.',
        image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'ff-9',
        name: 'Наггетсы',
        category: 'fastfood',
        price: 1490,
        description: 'Хрустящие кусочки куриного филе в панировке.',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'ff-10',
        name: 'Картофель фри',
        category: 'fastfood',
        price: 1190,
        description: 'Классический золотистый картофель фри.',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'ff-11',
        name: 'Картофельные дольки',
        category: 'fastfood',
        price: 1190,
        description: 'Ароматный картофель по-деревенски со специями.',
        image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'sets',
    title: 'Сэты & Ассорти',
    subtitle: 'Большие сеты для компаний и пивные наборы',
    iconName: 'Package',
    type: 'sets',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    items: [
      {
        id: 'set-1',
        name: 'Ассорти шашлыков «Макс»',
        category: 'sets',
        price: 21990,
        description: 'Грандиозный сет сочного мяса на углях для большой компании (баранина, говядина, люля, куриные крылья, окорочка) с соусами и овощами.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
        tags: ['hit', 'chef']
      },
      {
        id: 'set-2',
        name: 'Ассорти шашлыков «Мини»',
        category: 'sets',
        price: 14990,
        description: 'Сет ассорти из мяса на углях для 2-3 человек со свежим луком и соусом.',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'set-3',
        name: 'Мясной Микс',
        category: 'sets',
        price: 21990,
        description: 'Богатый выбор мясных деликатесов и жареных мясных блюд для дружной компании.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'set-4',
        name: 'Рыбный сет жареный',
        category: 'sets',
        price: 9990,
        description: 'Ассорти жареной рыбы с лимоном, соусами и зеленью.',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'set-5',
        name: 'Пивной Сет №1',
        category: 'sets',
        price: 4990,
        description: 'Картофельные дольки, луковые кольца, наггетсы, охотничьи колбаски, чесночные гренки, соусы.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'set-6',
        name: 'Пивной Сет №2',
        category: 'sets',
        price: 5490,
        description: 'Чечил, луковые кольца, сырные палочки, азиатские крылышки, картофель фри, чипсы, соусы.',
        image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      }
    ]
  },
  {
    id: 'garnishes',
    title: 'Гарниры & Соусы',
    subtitle: 'Дополнения к главным блюдам, хлеб и авторские соусы',
    iconName: 'Layers',
    type: 'food',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    items: [
      {
        id: 'gar-1',
        name: 'Шампиньоны с луком',
        category: 'garnishes',
        price: 1790,
        description: 'Обжаренные шампиньоны со репчатым луком на сливочном масле.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'gar-2',
        name: 'Овощи гриль',
        category: 'garnishes',
        price: 1790,
        description: 'Цукини, баклажаны, перец и томаты на мангале.',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'gar-3',
        name: 'Рис белый отварной',
        category: 'garnishes',
        price: 1190,
        description: 'Рассыпчатый отварной рис.',
        image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'gar-4',
        name: 'Картофельное пюре',
        category: 'garnishes',
        price: 1190,
        description: 'Воздушное пюре со сливочным маслом.',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'gar-5',
        name: 'Лепешка традиционная',
        category: 'garnishes',
        price: 500,
        description: 'Свежеиспеченная пышная тандырная лепешка.',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'gar-6',
        name: 'Лаваш',
        category: 'garnishes',
        price: 500,
        description: 'Тонкий армянский лаваш.',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'sauce-all',
        name: 'Фирменные соусы (в ассортименте)',
        category: 'garnishes',
        price: 590,
        description: 'Выбор соусов: BBQ, Сырный, Шашлычный, Тартар, Кетчуп, Сметана, Майонез, Сальса острый, Кисло-сладкий.',
        image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 's-bbq', name: 'BBQ', price: 590 },
          { id: 's-cheese', name: 'Сырный', price: 590 },
          { id: 's-shashlik', name: 'Шашлычный', price: 590 },
          { id: 's-tartar', name: 'Тартар', price: 590 },
          { id: 's-ketchup', name: 'Кетчуп', price: 590 },
          { id: 's-smetana', name: 'Сметана', price: 590 },
          { id: 's-mayo', name: 'Майонез', price: 590 },
          { id: 's-salsa', name: 'Сальса острый 🌶️', price: 590 },
          { id: 's-sweet-sour', name: 'Кисло-сладкий', price: 590 }
        ]
      }
    ]
  },
  {
    id: 'drinks_soft',
    title: 'Безалкогольный Бар',
    subtitle: 'Кофе, лимонады, авторские чаи и охлажденные напитки',
    iconName: 'Coffee',
    type: 'bar',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    items: [
      {
        id: 'cof-1',
        name: 'Капучино / Ice Капучино',
        category: 'drinks_soft',
        price: 1390,
        description: 'Классический эспрессо со взбитым молоком и нежной пеной.',
        image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'cof-2',
        name: 'Латте / Ice Латте',
        category: 'drinks_soft',
        price: 1490,
        description: 'Мягкий кофейный напиток на основе эспрессо и большого количества молока.',
        image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cof-3',
        name: 'Раф',
        category: 'drinks_soft',
        price: 1890,
        description: 'Нежный десертный кофе на сливках с ванильным сахаром.',
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cof-4',
        name: 'Флэт уайт',
        category: 'drinks_soft',
        price: 2190,
        description: 'Двойной эспрессо с бархатистой микропеной молока.',
        image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cof-5',
        name: 'Бамбл кофе',
        category: 'drinks_soft',
        price: 2190,
        description: 'Освежающий слойка эспрессо, карамельного сиропа и апельсинового сока со льдом.',
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'cof-6',
        name: 'Американо / Ice Американо',
        category: 'drinks_soft',
        price: 990,
        description: 'Классический эспрессо с горячей или ледяной водой.',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'cof-7',
        name: 'Эспрессо',
        category: 'drinks_soft',
        price: 890,
        description: 'Крепкий насыщенный кофейный шот.',
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 'lem-all',
        name: 'Освежающие Лимонады',
        category: 'drinks_soft',
        price: 2190,
        displayPrice: '1.0л / 2 190 тг | 0.5л / 1 390 тг',
        description: 'Натуральные авторские лимонады с фруктами и ягодами на выбор: Манго-маракуйя, Цитрусовый, Ягодный, Клубника-апельсин, Киви-лайм, Мохито, Мохито с малиной.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
        tags: ['hit'],
        variants: [
          { id: 'lem-1l-mm', name: 'Манго-маракуйя (1.0 л)', price: 2190 },
          { id: 'lem-05l-mm', name: 'Манго-маракуйя (0.5 л)', price: 1390 },
          { id: 'lem-1l-cit', name: 'Цитрусовый (1.0 л)', price: 2190 },
          { id: 'lem-05l-cit', name: 'Цитрусовый (0.5 л)', price: 1390 },
          { id: 'lem-1l-berry', name: 'Ягодный (1.0 л)', price: 2190 },
          { id: 'lem-05l-berry', name: 'Ягодный (0.5 л)', price: 1390 },
          { id: 'lem-1l-straw', name: 'Клубника-апельсин (1.0 л)', price: 2190 },
          { id: 'lem-05l-straw', name: 'Клубника-апельсин (0.5 л)', price: 1390 },
          { id: 'lem-1l-kiwi', name: 'Киви-лайм (1.0 л)', price: 2190 },
          { id: 'lem-05l-kiwi', name: 'Киви-лайм (0.5 л)', price: 1390 },
          { id: 'lem-1l-mohito', name: 'Мохито (1.0 л)', price: 2190 },
          { id: 'lem-05l-mohito', name: 'Мохито (0.5 л)', price: 1390 },
          { id: 'lem-1l-rasp', name: 'Мохито с малиной (1.0 л)', price: 2190 },
          { id: 'lem-05l-rasp', name: 'Мохито с малиной (0.5 л)', price: 1390 }
        ]
      },
      {
        id: 'icetea-all',
        name: 'Домашний Ice Tea (1.0 л)',
        category: 'drinks_soft',
        price: 2190,
        description: 'Холодный чай собственного приготовления: Персик, Клубника, Вишня.',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 'it-peach', name: 'Персик (1.0 л)', price: 2190 },
          { id: 'it-straw', name: 'Клубника (1.0 л)', price: 2190 },
          { id: 'it-cherry', name: 'Вишня (1.0 л)', price: 2190 }
        ]
      },
      {
        id: 'tea-author',
        name: 'Авторские Чайники (1.0 л / 0.4 л)',
        category: 'drinks_soft',
        price: 2200,
        displayPrice: '1.0л / 2 200 тг | 0.4л / 1 290 тг',
        description: 'Ташкентский, Марокканский, Ягодный, Фруктовый, Облепиховый, Малина-Имбирь, Чай по-казахски.',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
        tags: ['hit'],
        variants: [
          { id: 't-tash-1l', name: 'Ташкентский (1.0 л)', price: 2200 },
          { id: 't-tash-04l', name: 'Ташкентский (0.4 л)', price: 1290 },
          { id: 't-marok-1l', name: 'Марокканский (1.0 л)', price: 2200 },
          { id: 't-marok-04l', name: 'Марокканский (0.4 л)', price: 1290 },
          { id: 't-berry-1l', name: 'Ягодный (1.0 л)', price: 2200 },
          { id: 't-berry-04l', name: 'Ягодный (0.4 л)', price: 1290 },
          { id: 't-fruit-1l', name: 'Фруктовый (1.0 л)', price: 2200 },
          { id: 't-fruit-04l', name: 'Фруктовый (0.4 л)', price: 1290 },
          { id: 't-oble-1l', name: 'Облепиховый (1.0 л)', price: 2200 },
          { id: 't-oble-04l', name: 'Облепиховый (0.4 л)', price: 1290 },
          { id: 't-rasp-1l', name: 'Малина-Имбирь (1.0 л)', price: 2200 },
          { id: 't-rasp-04l', name: 'Малина-Имбирь (0.4 л)', price: 1290 },
          { id: 't-kz-1l', name: 'Чай по-казахски (1.0 л)', price: 2200 },
          { id: 't-kz-04l', name: 'Чай по-казахски (0.4 л)', price: 1290 }
        ]
      },
      {
        id: 'tea-classic',
        name: 'Классический Чай (Черный / Зеленый)',
        category: 'drinks_soft',
        price: 1190,
        displayPrice: '1.0л / 1 190 тг | 0.2л / 490 тг',
        description: 'Отборные сорта черного и зеленого листового чая.',
        image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 'tc-black-1l', name: 'Черный чай (1.0 л)', price: 1190 },
          { id: 'tc-black-02l', name: 'Черный чай (0.2 л)', price: 490 },
          { id: 'tc-green-1l', name: 'Зеленый чай (1.0 л)', price: 1190 },
          { id: 'tc-green-02l', name: 'Зеленый чай (0.2 л)', price: 490 }
        ]
      },
      {
        id: 'sd-cola',
        name: 'Coca-Cola',
        category: 'drinks_soft',
        price: 1100,
        displayPrice: '0.5л / 1 100 тг | 1.0л / 1 500 тг',
        description: 'Газированный напиток Coca-Cola.',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 'coke-05', name: 'Coca-Cola 0.5 л', price: 1100 },
          { id: 'coke-1l', name: 'Coca-Cola 1.0 л', price: 1500 }
        ]
      },
      {
        id: 'sd-fanta',
        name: 'Fanta',
        category: 'drinks_soft',
        price: 1100,
        displayPrice: '0.5л / 1 100 тг | 1.0л / 1 500 тг',
        description: 'Освежающий апельсиновый напиток Fanta.',
        image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 'fanta-05', name: 'Fanta 0.5 л', price: 1100 },
          { id: 'fanta-1l', name: 'Fanta 1.0 л', price: 1500 }
        ]
      },
      {
        id: 'sd-sprite',
        name: 'Sprite',
        category: 'drinks_soft',
        price: 1100,
        displayPrice: '0.5л / 1 100 тг | 1.0л / 1 500 тг',
        description: 'Лимонно-лаймовый газированный напиток Sprite.',
        image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 'sprite-05', name: 'Sprite 0.5 л', price: 1100 },
          { id: 'sprite-1l', name: 'Sprite 1.0 л', price: 1500 }
        ]
      },
      {
        id: 'sd-energy',
        name: 'Энергетические напитки',
        category: 'drinks_soft',
        price: 1100,
        description: 'Gorilla (1 100 тг) / Red Bull (1 490 тг).',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 'gorilla', name: 'Gorilla (0.45 л)', price: 1100 },
          { id: 'redbull', name: 'Red Bull (0.25 л)', price: 1490 }
        ]
      },
      {
        id: 'sd-water',
        name: 'Минеральная вода',
        category: 'drinks_soft',
        price: 600,
        description: 'Вода бутилированная с газом / без газа или Borjomi.',
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 'water-05', name: 'Вода 0.5 л (с/без)', price: 600 },
          { id: 'water-1l', name: 'Вода 1.0 л (с/без)', price: 800 },
          { id: 'borjomi', name: 'Borjomi (0.5 л)', price: 1490 }
        ]
      },
      {
        id: 'sd-piko',
        name: 'Сок Piko (1.0 л)',
        category: 'drinks_soft',
        price: 1890,
        description: 'Соки Piko в ассортименте (апельсин, яблоко, вишня, персик).',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'bar_strong',
    title: 'Барная Карта: Алкоголь',
    subtitle: 'Премиальный виски, коньяк, коктейли, разливное и бутылочное пиво',
    iconName: 'Wine',
    type: 'bar',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    items: [
      {
        id: 'cocktails-all',
        name: 'Алкогольные Коктейли',
        category: 'bar_strong',
        price: 2190,
        displayPrice: '2 190 - 2 590 тг',
        description: 'Авторские и классические барные коктейли.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
        tags: ['hit'],
        variants: [
          { id: 'c-rumcola', name: 'Rum-Cola', price: 2190 },
          { id: 'c-sunrise', name: 'Tequila Sunrise', price: 2190 },
          { id: 'c-mojito', name: 'Mojito', price: 2190 },
          { id: 'c-gintonic', name: 'Gin Tonic', price: 2190 },
          { id: 'c-longisland', name: 'Long Island', price: 2590 },
          { id: 'c-aperol', name: 'Aperol Spritz', price: 2190 },
          { id: 'c-jagerbomb', name: 'Jäger Bomb', price: 2290 }
        ]
      },
      {
        id: 'whiskey-all',
        name: 'Виски & Ликеры (50 мл)',
        category: 'bar_strong',
        price: 1590,
        description: 'Шотландский, ирландский виски и травяной ликер Jägermeister.',
        image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 'w-william', name: 'William Lawson’s (50 мл)', price: 1590 },
          { id: 'w-ballan', name: 'Ballantine’s (50 мл)', price: 1790 },
          { id: 'w-jager', name: 'Jagermeister (50 мл)', price: 1890 },
          { id: 'w-jameson', name: 'Jameson (50 мл)', price: 2190 },
          { id: 'w-chivas12', name: 'Chivas Regal 12 (50 мл)', price: 3290 },
          { id: 'w-glenlivet', name: 'The Glenlivet (50 мл)', price: 3390 },
          { id: 'w-chivas18', name: 'Chivas Regal 18 (50 мл)', price: 3690 }
        ]
      },
      {
        id: 'beer-tap',
        name: 'Разливное Пиво',
        category: 'bar_strong',
        price: 990,
        description: 'Свежее холодное разливное пиво.',
        image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80',
        tags: ['hit'],
        variants: [
          { id: 'b-praga', name: 'Прага (0.5 л)', price: 990 },
          { id: 'b-firm', name: 'Фирменное KAIF (0.5 л)', price: 1290 }
        ]
      },
      {
        id: 'beer-bot',
        name: 'Бутылочное Пиво',
        category: 'bar_strong',
        price: 1190,
        description: 'Импортное и премиальное бутылочное пиво.',
        image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 'bb-gus', name: 'Gus', price: 1190 },
          { id: 'bb-miller', name: 'Miller (0.33 л)', price: 1790 },
          { id: 'bb-corona', name: 'Corona Extra (0.33 л)', price: 2490 }
        ]
      },
      {
        id: 'beer-mix',
        name: 'Пивной Микс Ассорти',
        category: 'bar_strong',
        price: 4590,
        description: 'Большая тарелка к пиву: Арахис, Курт, чипсы, Фисташки, Чечел.',
        image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=600&q=80',
        tags: ['hit']
      },
      {
        id: 'tequila-gin-rum',
        name: 'Текила / Джин / Ром (50 мл)',
        category: 'bar_strong',
        price: 1590,
        description: 'Крепкие мировые алкогольные бренды.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 't-gold', name: 'Olmeca Gold (50 мл)', price: 1890 },
          { id: 't-silver', name: 'Olmeca Silver (50 мл)', price: 1890 },
          { id: 'g-beefeater', name: 'Beefeater Gin (50 мл)', price: 1690 },
          { id: 'g-propeller', name: 'Propeller Gin (50 мл)', price: 1790 },
          { id: 'r-oakheart', name: 'Oakheart Rum (50 мл)', price: 1590 },
          { id: 'r-havana', name: 'Havana Club Rum (50 мл)', price: 1790 }
        ]
      },
      {
        id: 'vodka-cognac',
        name: 'Водка & Коньяк (50 мл)',
        category: 'bar_strong',
        price: 790,
        description: 'Классическая водка и благородный коньяк.',
        image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 'v-kyzyl', name: 'Kyzylzhar (50 мл)', price: 790 },
          { id: 'v-hort', name: 'Хортиця (50 мл)', price: 790 },
          { id: 'v-nemiroff', name: 'Nemiroff (50 мл)', price: 1290 },
          { id: 'v-absolut', name: 'Absolut (50 мл)', price: 1590 },
          { id: 'v-abslim', name: 'Absolut Lime (50 мл)', price: 1690 },
          { id: 'k-kz3', name: 'Казахстан 3* (50 мл)', price: 1290 },
          { id: 'k-kz5', name: 'Казахстан 5* (50 мл)', price: 1490 },
          { id: 'k-ararat3', name: 'Ararat 3* (50 мл)', price: 1390 },
          { id: 'k-ararat5', name: 'Ararat 5* (50 мл)', price: 1590 }
        ]
      },
      {
        id: 'wine-champ',
        name: 'Вина & Шампанское (Карта вин)',
        category: 'bar_strong',
        price: 7000,
        displayPrice: '7 000 - 20 000 тг',
        description: 'Изысканная винная карта красных, белых тихих вин и игристого шампанского.',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 'w-red-white', name: 'Вино в ассортименте (бутылка)', price: 7000 },
          { id: 'w-champ', name: 'Шампанское в ассортименте (бутылка)', price: 5000 }
        ]
      },
      {
        id: 'snacks-beer',
        name: 'Снеки к пиву',
        category: 'bar_strong',
        price: 990,
        description: 'Арахис, Чечел, Фисташки, Чипсы, Курт.',
        image: 'https://images.unsplash.com/photo-1621996346565-e3def616403c?auto=format&fit=crop&w=600&q=80',
        variants: [
          { id: 'sb-peanut', name: 'Арахис', price: 990 },
          { id: 'sb-chechel', name: 'Чечел', price: 1190 },
          { id: 'sb-pist', name: 'Фисташки', price: 1490 },
          { id: 'sb-chips', name: 'Чипсы', price: 1290 },
          { id: 'sb-kurt', name: 'Курт', price: 990 }
        ]
      }
    ]
  }
];

export const TOPPINGS_DATA = [
  { id: 'top-choc', name: 'Шоколад', price: 790 },
  { id: 'top-lemon', name: 'Лимон', price: 200 },
  { id: 'top-honey', name: 'Мед', price: 300 },
  { id: 'top-milk', name: 'Молоко', price: 200 },
  { id: 'top-syrup', name: 'Сироп', price: 200 }
];
