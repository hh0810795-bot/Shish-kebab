
import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- عروض خاصة جديدة ---
  {
    id: 'offer-99-mokattam',
    name: 'عرض الـ 99 جنيه (المقطم) 🔥',
    description: 'ساندوتش كفتة بلدي + ساندوتش بطاطس فارم + باكيت بطاطس + كولا + مخلل. واخدين المقطم كلها في حتة تانية! 😱',
    price: 99,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
  {
    id: 'offer-new-1',
    name: 'عرض التوفير (فرخة كاملة)',
    description: 'فرخة تكا أو شيش + 2 أرز بسمتي + 2 ملوخية + 2 لسان عصفور + سلطات + عيش',
    price: 325,
    category: 'عروض خاصة',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
  {
    id: 'offer-new-2',
    name: 'عرض الصحاب (ميكس)',
    description: 'نص فرخة تكا أو شيش + نص كفتة + 2 أرز بسمتي + 2 ملوخية + 2 لسان عصفور + سلطة + عيش',
    price: 325,
    category: 'عروض خاصة',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
  {
    id: 'offer-new-3',
    name: 'عرض العيلة (فرخة ونص)',
    description: 'فرخة ونص شيش + نص كفتة + سلطة + عيش',
    price: 499,
    category: 'عروض خاصة',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
  {
    id: 'offer-new-4',
    name: 'عرض الكيف (كباب + كفتة)',
    description: 'كيلو كباب + نص كيلو كفتة هدية + سلطة + عيش',
    price: 1200,
    category: 'عروض خاصة',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },
  {
    id: 'offer-new-5',
    name: 'عرض المزاج (كباب + شيش)',
    description: 'نص كباب + ربع شيش طاووق هدية + سلطة + عيش',
    price: 600,
    category: 'عروض خاصة',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isOffer: true,
  },

  // --- ركن ساندوتشات الفراخ ---
  {
    id: 'ch-sand-1',
    name: 'ساندوتش شيش طاووق (وسط)',
    description: 'قطع شيش طاووق متبلة ومشوية على الفحم في عيش فينو',
    price: 70,
    category: 'ساندوتشات فراخ',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ch-sand-2',
    name: 'ساندوتش شيش طاووق (كبير)',
    description: 'قطع شيش طاووق متبلة ومشوية على الفحم حجم كبير',
    price: 90,
    category: 'ساندوتشات فراخ',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ch-sand-3',
    name: 'ساندوتش صدور مشوية (وسط)',
    description: 'صدور دجاج متبلة ومشوية صحية',
    price: 60,
    category: 'ساندوتشات فراخ',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ch-sand-4',
    name: 'ساندوتش صدور مشوية (كبير)',
    description: 'صدور دجاج متبلة ومشوية حجم كبير',
    price: 80,
    category: 'ساندوتشات فراخ',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ch-sand-5',
    name: 'ساندوتش بانيه / كريسبي (وسط)',
    description: 'صدور دجاج مقلية مقرمشة',
    price: 60,
    category: 'ساندوتشات فراخ',
    image: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ch-sand-6',
    name: 'ساندوتش بانيه / كريسبي (كبير)',
    description: 'صدور دجاج مقلية مقرمشة حجم كبير',
    price: 80,
    category: 'ساندوتشات فراخ',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ch-sand-7',
    name: 'ساندوتش تشكن بوب (وسط)',
    description: 'قطع دجاج صغيرة مقرمشة',
    price: 45,
    category: 'ساندوتشات فراخ',
    image: 'https://images.unsplash.com/photo-1569691899455-5984ea1bd985?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ch-sand-8',
    name: 'ساندوتش تشكن بوب (كبير)',
    description: 'قطع دجاج صغيرة مقرمشة حجم كبير',
    price: 60,
    category: 'ساندوتشات فراخ',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ch-sand-9',
    name: 'ساندوتش فراخ رول',
    description: 'رول دجاج محشي ومقطع',
    price: 70,
    category: 'ساندوتشات فراخ',
    image: 'https://images.unsplash.com/photo-1619860860774-1e2e17343432?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },

  // --- ركن المعجنات والمكرونة ---
  {
    id: 'pastry-1',
    name: 'سمبوسة لحمة (4 قطع)',
    description: 'سمبوسة مقرمشة بحشوة اللحم المفروم',
    price: 50,
    category: 'معجنات ومكرونة',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pastry-2',
    name: 'سمبوسة لحمة (6 قطع)',
    description: 'طبق سمبوسة عائلي بحشوة اللحم',
    price: 65,
    category: 'معجنات ومكرونة',
    image: 'https://images.unsplash.com/photo-1630402244249-f470a1a052a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pastry-3',
    name: 'سمبوسة جبنة (4 قطع)',
    description: 'سمبوسة مقرمشة بحشوة الجبنة',
    price: 40,
    category: 'معجنات ومكرونة',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pastry-4',
    name: 'سمبوسة جبنة (6 قطع)',
    description: 'طبق سمبوسة عائلي بحشوة الجبنة',
    price: 50,
    category: 'معجنات ومكرونة',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'side-1',
    name: 'أرز بسمتي',
    description: 'أرز بسمتي أصفر بالكاري',
    price: 30,
    category: 'معجنات ومكرونة',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'side-2',
    name: 'أرز شعرية',
    description: 'أرز مصري بالشعرية',
    price: 25,
    category: 'معجنات ومكرونة',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'side-3',
    name: 'باكت تشكن بوب بالجبنة',
    description: '6 قطع تشكن بوب غرقانة في صوص الجبنة',
    price: 40,
    category: 'معجنات ومكرونة',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pasta-1',
    name: 'اسباجتي صلصة',
    description: 'مكرونة اسباجتي بالصلصة الحمراء',
    price: 40,
    category: 'معجنات ومكرونة',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pasta-2',
    name: 'اسباجتي بولونيز',
    description: 'مكرونة اسباجتي باللحمة المفرومة والصلصة',
    price: 50,
    category: 'معجنات ومكرونة',
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pasta-3',
    name: 'اسباجتي وايت صوص',
    description: 'مكرونة بصوص الكريمة الأبيض',
    price: 50,
    category: 'معجنات ومكرونة',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pasta-4',
    name: 'مكرونة فرن لحمة',
    description: 'طاجن مكرونة قلم باللحمة المفرومة في الفرن',
    price: 60,
    category: 'معجنات ومكرونة',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pasta-5',
    name: 'نجرسكو فراخ',
    description: 'مكرونة بالصوص الأبيض وقطع الدجاج والموتزاريلا',
    price: 70,
    category: 'معجنات ومكرونة',
    image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },

  // --- ركن الكريب ---
  {
    id: 'crepe-1',
    name: 'كريب شيش طاووق',
    description: 'كريب محشو قطع شيش طاووق',
    price: 115,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crepe-2',
    name: 'كريب كفتة',
    description: 'كريب محشو كفتة مشوية',
    price: 85,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crepe-3',
    name: 'كريب فاهيتا فراخ',
    description: 'كريب فاهيتا دجاج مع الخضروات',
    price: 110,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crepe-4',
    name: 'كريب سجق',
    description: 'كريب سجق بلدي',
    price: 90,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crepe-5',
    name: 'كريب هوت دوج',
    description: 'كريب هوت دوج',
    price: 75,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crepe-6',
    name: 'كريب بطاطس (فارم)',
    description: 'كريب بطاطس فارم فريتس',
    price: 65,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crepe-7',
    name: 'كريب زينجر',
    description: 'كريب دجاج زينجر حار',
    price: 105,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crepe-8',
    name: 'كريب برجر',
    description: 'كريب محشو قطع برجر لحم',
    price: 95,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crepe-9',
    name: 'كريب ميكس لحوم',
    description: 'مزيج من اللحوم المختلفة',
    price: 120,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crepe-10',
    name: 'كريب ميكس فراخ',
    description: 'مزيج من أنواع الدجاج المختلفة',
    price: 120,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crepe-11',
    name: 'كريب مشروم',
    description: 'كريب بحشوة المشروم',
    price: 85,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crepe-12',
    name: 'كريب بانية / كريسبي',
    description: 'كريب دجاج بانية مقرمش',
    price: 105,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'crepe-13',
    name: 'كريب مكسيكانو',
    description: 'شيش + سوسيس',
    price: 95,
    category: 'كريب',
    image: 'https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },

  // --- ركن الدجاج علي الفحم ---
  {
    id: 'char-ch-1',
    name: 'فرخة تكا / شيش',
    description: 'فرخة كاملة مشوية على الفحم بتتبيلة التكا أو الشيش',
    price: 325,
    category: 'دجاج ع الفحم',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'char-ch-2',
    name: 'نص فرخة مشوي تكا / شيش',
    description: 'نصف دجاجة مشوية على الفحم',
    price: 175,
    category: 'دجاج ع الفحم',
    image: 'https://images.unsplash.com/photo-1606756790138-7c488390b157?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'char-ch-3',
    name: 'ربع فرخة ورك',
    description: 'ربع دجاجة (ورك) مشوي',
    price: 90,
    category: 'دجاج ع الفحم',
    image: 'https://images.unsplash.com/photo-1588741366114-118c7c93544d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'char-ch-4',
    name: 'ربع فرخة صدر',
    description: 'ربع دجاجة (صدر) مشوي',
    price: 100,
    category: 'دجاج ع الفحم',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'char-ch-5',
    name: 'فرخة مسحب (مخلي)',
    description: 'دجاجة كاملة مخلية ومشوية على الفحم',
    price: 330,
    category: 'دجاج ع الفحم',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'char-ch-6',
    name: 'نص فرخة مسحب (مخلي)',
    description: 'نصف دجاجة مخلية ومشوية على الفحم',
    price: 180,
    category: 'دجاج ع الفحم',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'char-ch-7',
    name: 'كيلو شيش طاووق',
    description: 'كيلو صافي شيش طاووق مشوي',
    price: 425,
    category: 'دجاج ع الفحم',
    image: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'char-ch-8',
    name: 'كيلو صدور مشوي',
    description: 'كيلو صدور دجاج مشوية',
    price: 425,
    category: 'دجاج ع الفحم',
    image: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },

  // --- ركن اللحوم علي الفحم ---
  {
    id: 'meat-1',
    name: 'كيلو كباب بتلو',
    description: 'كيلو كباب بتلو فاخر مشوي على الفحم',
    price: 1200,
    category: 'لحوم ع الفحم',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-2',
    name: 'كيلو كفتة بلدي',
    description: 'كيلو كفتة بلدي مشوية',
    price: 480,
    category: 'لحوم ع الفحم',
    image: 'https://images.unsplash.com/photo-1503146617094-1b1b514b8744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-3',
    name: 'كيلو طرب ضاني',
    description: 'كيلو طرب ضاني دسم ولذيذ',
    price: 620,
    category: 'لحوم ع الفحم',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-4',
    name: 'كيلو مشكل (كباب وكفتة)',
    description: 'نصف كيلو كباب ونصف كيلو كفتة',
    price: 800,
    category: 'لحوم ع الفحم',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-5',
    name: 'كيلو سجق بلدي',
    description: 'كيلو سجق بلدي مشوي',
    price: 450,
    category: 'لحوم ع الفحم',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-6',
    name: 'كيلو ميكس جريل',
    description: 'تشكيلة رائعة من (كباب، كفتة، طرب، سجق، شيش، صدور، ربع فراخ)',
    price: 500,
    category: 'لحوم ع الفحم',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-7',
    name: 'نص كيلو ميكس جريل',
    description: '2 قطعة كباب + 4 صوابع كفتة + 3 قطع صدور + 3 قطع شيش',
    price: 300,
    category: 'لحوم ع الفحم',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },

  // --- ركن ساندوتشات اللحوم ---
  {
    id: 'meat-sand-1',
    name: 'ساندوتش كباب بتلو (وسط/كبير)',
    description: 'ساندوتش كباب بتلو',
    price: 170,
    category: 'ساندوتشات لحوم',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc3f3a58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-sand-2',
    name: 'ساندوتش كباب بتلو (سوري)',
    description: 'ساندوتش كباب بتلو في عيش سوري',
    price: 225,
    category: 'ساندوتشات لحوم',
    image: 'https://images.unsplash.com/photo-1627662168806-43254062363a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-sand-3',
    name: 'ساندوتش كفتة بلدي (وسط)',
    description: 'ساندوتش كفتة بلدي مشوية',
    price: 50,
    category: 'ساندوتشات لحوم',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-sand-4',
    name: 'ساندوتش كفتة بلدي (كبير)',
    description: 'ساندوتش كفتة بلدي كبير',
    price: 70,
    category: 'ساندوتشات لحوم',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-sand-5',
    name: 'ساندوتش طرب (وسط/كبير)',
    description: 'ساندوتش طرب ضاني',
    price: 135,
    category: 'ساندوتشات لحوم',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-sand-6',
    name: 'ساندوتش سجق مشوي (كبير)',
    description: 'سجق بلدي مشوي',
    price: 75,
    category: 'ساندوتشات لحوم',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-sand-7',
    name: 'ساندوتش هوت دوج مكسيكان (وسط)',
    description: 'هوت دوج بالخلطة المكسيكية',
    price: 45,
    category: 'ساندوتشات لحوم',
    image: 'https://images.unsplash.com/photo-1627054238569-633ca914d79e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-sand-8',
    name: 'ساندوتش هوت دوج مكسيكان (كبير)',
    description: 'هوت دوج مكسيكي حجم كبير',
    price: 60,
    category: 'ساندوتشات لحوم',
    image: 'https://images.unsplash.com/photo-1627054238569-633ca914d79e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-sand-9',
    name: 'حواوشي لحمة بلدي',
    description: 'رغيف حواوشي بلدي',
    price: 50,
    category: 'ساندوتشات لحوم',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meat-sand-10',
    name: 'برجر كلاسيك',
    description: 'ساندوتش برجر لحم كلاسيك',
    price: 90,
    category: 'ساندوتشات لحوم',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },

  // --- وجباتنا ---
  {
    id: 'meal-1',
    name: 'وجبة ربع فرخة ورك',
    description: 'ربع فرخة ورك + أرز بسمتي + طحينة + ثومية + عيش',
    price: 120,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1588741366114-118c7c93544d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-2',
    name: 'وجبة ربع فرخة صدر',
    description: 'ربع فرخة صدر + أرز بسمتي + طحينة + ثومية + عيش',
    price: 130,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-3',
    name: 'وجبة نص فرخة',
    description: 'نص فرخة + أرز بسمتي + طحينة + ثومية + عيش',
    price: 199,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-4',
    name: 'وجبة نص فرخة مسحب',
    description: 'نص فرخة مخلية + أرز بسمتي + طحينة + ثومية + عيش',
    price: 199,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-5',
    name: 'وجبة صدور مشوية',
    description: 'قطع صدور + أرز بسمتي + طحينة + ثومية + عيش',
    price: 120,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-6',
    name: 'وجبة شيش طاووق',
    description: '4 قطع شيش طاووق + أرز بسمتي + طحينة + ثومية + عيش',
    price: 120,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-7',
    name: 'وجبة شيش + كفتة',
    description: '2 قطعة شيش + 2 صباع كفتة + أرز بسمتي + طحينة + ثومية + عيش',
    price: 120,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-8',
    name: 'وجبة تشكن رول',
    description: '3 قطع رول + أرز بسمتي + طحينة + ثومية + عيش',
    price: 120,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1619860860774-1e2e17343432?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-9',
    name: 'وجبة كباب',
    description: 'قطع كباب + أرز بسمتي + طحينة + ثومية + عيش',
    price: 250,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-10',
    name: 'وجبة فراخ + كفتة',
    description: 'ربع فرخة + 2 صباع كفتة + أرز بسمتي + طحينة + ثومية + عيش',
    price: 165,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-11',
    name: 'وجبة كفتة',
    description: '3 صوابع كفتة + أرز بسمتي + ثومية + طحينة + عيش',
    price: 120,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1503146617094-1b1b514b8744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-12',
    name: 'وجبة السوبر',
    description: 'ربع فراخ + 1 صباع كفتة + أرز بسمتي + طحينة + ثومية + عيش + سمبوسة لحمة + سمبوسة جبنة',
    price: 180,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-13',
    name: 'وجبة ميكس جريل',
    description: '2 قطعة شيش + 1 صباع كفتة + 1 قطعة كباب + أرز بسمتي + طحينة + ثومية + عيش',
    price: 225,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-14',
    name: 'وجبة فراخ بانيه كرسبي',
    description: '4 قطع كرسبي + أرز بسمتي + طحينة + ثومية + عيش',
    price: 120,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-15',
    name: 'وجبة طرب',
    description: '3 قطع طرب + أرز بسمتي + طحينة + ثومية + عيش',
    price: 150,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-16',
    name: 'وجبة كباب وطرب',
    description: '1 قطعة كباب + 2 قطعة طرب + أرز بسمتي + طحينة + ثومية + عيش',
    price: 225,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'meal-17',
    name: 'وجبة التوينز',
    description: '2 ربع فراخ + 4 صوابع كفتة + 1 ملوخية + 2 أرز بسمتي + طحينة + ثومية + عيش',
    price: 280,
    category: 'وجبات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },

  // --- ركن السلطات والمقبلات ---
  {
    id: 'salad-1',
    name: 'مخلل',
    description: 'مخلل مشكل',
    price: 10,
    category: 'سلطات ومقبلات',
    image: 'https://images.unsplash.com/photo-1621259021200-7463f25c2763?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-2',
    name: 'سلطة خضراء',
    description: 'سلطة خضراء بلدي',
    price: 10,
    category: 'سلطات ومقبلات',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-3',
    name: 'سلطة ثومية',
    description: 'ثومية كريمي',
    price: 15,
    category: 'سلطات ومقبلات',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-4',
    name: 'سلطة طحينة',
    description: 'طحينة بالزيت والليمون',
    price: 15,
    category: 'سلطات ومقبلات',
    image: 'https://images.unsplash.com/photo-1621510456681-2330135e5871?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-5',
    name: 'باذنجان مخلل',
    description: 'باذنجان متبل بالخلطة',
    price: 15,
    category: 'سلطات ومقبلات',
    image: 'https://images.unsplash.com/photo-1621259021200-7463f25c2763?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-6',
    name: 'طماطم متبلة',
    description: 'طماطم بالثوم والخل',
    price: 15,
    category: 'سلطات ومقبلات',
    image: 'https://images.unsplash.com/photo-1596396492582-7e7776b978a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-7',
    name: 'باكت بطاطس (وسط)',
    description: 'بطاطس مقلية فارم فريتس',
    price: 30,
    category: 'سلطات ومقبلات',
    image: 'https://images.unsplash.com/photo-1573080496987-a199f8cd75ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'salad-8',
    name: 'باكت بطاطس (كبير)',
    description: 'بطاطس مقلية فارم فريتس حجم كبير',
    price: 50,
    category: 'سلطات ومقبلات',
    image: 'https://images.unsplash.com/photo-1573080496987-a199f8cd75ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },

  // --- شوربة ---
  {
    id: 'soup-1',
    name: 'شوربة خضار',
    description: 'شوربة خضار صحية ولذيذة',
    price: 30,
    category: 'شوربة',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'soup-2',
    name: 'شوربة لسان عصفور',
    description: 'شوربة لسان عصفور المصرية الأصيلة',
    price: 30,
    category: 'شوربة',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'soup-3',
    name: 'شوربة فراخ بالكريمة',
    description: 'شوربة كريمة الدجاج الغنية',
    price: 60,
    category: 'شوربة',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },

  // --- ساندوتشات سوري ---
  {
    id: 'syrian-1',
    name: 'ساندوتش بطاطس فارم سوري',
    description: 'بطاطس فارم في عيش سوري مع الثومية',
    price: 35,
    category: 'ساندوتشات سوري',
    image: 'https://images.unsplash.com/photo-1627662168806-43254062363a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'syrian-2',
    name: 'ساندوتش كباب بتلو سوري',
    description: 'كباب بتلو في عيش سوري',
    price: 225,
    category: 'ساندوتشات سوري',
    image: 'https://images.unsplash.com/photo-1627662168806-43254062363a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'syrian-3',
    name: 'ساندوتش كفتة بلدي سوري',
    description: 'كفتة بلدي في عيش سوري',
    price: 70,
    category: 'ساندوتشات سوري',
    image: 'https://images.unsplash.com/photo-1627662168806-43254062363a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'syrian-4',
    name: 'ساندوتش طرب سوري',
    description: 'طرب في عيش سوري',
    price: 135,
    category: 'ساندوتشات سوري',
    image: 'https://images.unsplash.com/photo-1627662168806-43254062363a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'syrian-5',
    name: 'ساندوتش سجق مشوي سوري',
    description: 'سجق مشوي في عيش سوري',
    price: 75,
    category: 'ساندوتشات سوري',
    image: 'https://images.unsplash.com/photo-1627662168806-43254062363a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'syrian-6',
    name: 'ساندوتش هوت دوج مكسيكان سوري',
    description: 'هوت دوج مكسيكي في عيش سوري',
    price: 60,
    category: 'ساندوتشات سوري',
    image: 'https://images.unsplash.com/photo-1627662168806-43254062363a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'syrian-7',
    name: 'ساندوتش شيش طاووق سوري',
    description: 'شيش طاووق في عيش سوري',
    price: 90,
    category: 'ساندوتشات سوري',
    image: 'https://images.unsplash.com/photo-1627662168806-43254062363a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'syrian-8',
    name: 'ساندوتش صدور مشوية سوري',
    description: 'صدور مشوية في عيش سوري',
    price: 80,
    category: 'ساندوتشات سوري',
    image: 'https://images.unsplash.com/photo-1627662168806-43254062363a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'syrian-9',
    name: 'ساندوتش بانيه / كريسبي سوري',
    description: 'فراخ كريسبي في عيش سوري',
    price: 80,
    category: 'ساندوتشات سوري',
    image: 'https://images.unsplash.com/photo-1627662168806-43254062363a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },

  // --- البوكسات ---
  {
    id: 'box-1',
    name: 'بوكس 2 حواوشي لحمة',
    description: '2 حواوشي لحمة + بطاطس + مخلل + اسبيرو سباتس',
    price: 100,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'box-2',
    name: 'بوكس كفتة + صدور فراخ',
    description: 'كفتة + صدور فراخ + بطاطس + مخلل + اسبيرو سباتس',
    price: 115,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'box-3',
    name: 'بوكس شيش طاووق + تشيكن بوب',
    description: 'شيش طاووق + تشيكن بوب + بطاطس + مخلل + اسبيرو سباتس',
    price: 120,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'box-4',
    name: 'بوكس تشكن بوب + كفتة',
    description: 'تشكن بوب + كفتة + بطاطس + مخلل + اسبيرو سباتس',
    price: 99,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'box-5',
    name: 'بوكس 2 برجر كلاسيك',
    description: '2 برجر كلاسيك + بطاطس + مخلل + 2 اسبيرو سباتس',
    price: 185,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'box-6',
    name: 'بوكس شيش + كفتة',
    description: 'شيش + كفتة + بطاطس + مخلل + اسبيرو سباتس',
    price: 120,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'box-7',
    name: 'بوكس شيش + صدور',
    description: 'شيش + صدور + بطاطس + مخلل + اسبيرو سباتس',
    price: 130,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'box-8',
    name: 'بوكس بطاطس + كفتة',
    description: 'بطاطس + كفتة + مخلل + اسبيرو سباتس',
    price: 99,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'box-9',
    name: 'بوكس كريسبي + بطاطس',
    description: 'كريسبي + بطاطس + مخلل + اسبيرو سباتس',
    price: 99,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'box-10',
    name: 'بوكس هوت دوج مكسيكان + كريسبي',
    description: 'هوت دوج + كريسبي + بطاطس + مخلل + اسبيرو سباتس',
    price: 115,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1627054238569-633ca914d79e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'box-11',
    name: 'بوكس القنبلة 1',
    description: 'كريسبي + بطاطس + كفتة + تشيكن بوب + مخلل + 2 اسبيرو سباتس',
    price: 200,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'box-12',
    name: 'بوكس القنبلة 2',
    description: 'كريسبي + شيش + صدور + تشكن بوب + بطاطس + مخلل + 2 اسبيرو سباتس',
    price: 225,
    category: 'بوكسات',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    customerName: 'أحمد محمود',
    rating: 5,
    comment: 'أحلى مشويات أكلتها في حياتي، الطعم حكاية والخدمة ممتازة!',
    date: '2023-10-15'
  },
  {
    id: '2',
    customerName: 'سارة علي',
    rating: 4,
    comment: 'الأكل وصل سخن وفي ميعاده، الكباب طري جداً.',
    date: '2023-10-20'
  },
  {
    id: '3',
    customerName: 'محمد حسن',
    rating: 5,
    comment: 'أنصح بتجربة طاجن العكاوي، دمار شامل 🔥',
    date: '2023-11-01'
  }
];
