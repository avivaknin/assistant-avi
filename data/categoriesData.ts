import type { MainCategory } from '../types';
import { 
    HeartIcon, 
    BankIcon, 
    PhoneIcon, 
    MapIcon, 
    TvIcon, 
    CameraIcon, 
    MonitorIcon,
    BookOpenIcon,
    WrenchScrewdriverIcon,
    HomeIcon,
    ShieldIcon,
    BookmarkIcon,
    FitnessIcon,
    PlaneIcon,
    WaveIcon,
    ButterflyIcon,
    MusicNoteIcon,
    ChartBarIcon,
    ShieldCheckIcon,
    StarOfDavidIcon,
    PowerPlugIcon,
    MenorahIcon,
    AiIcon,
    SparklesIcon,
    ShoppingBagIcon,
    PencilIcon,
    FilmIcon
} from '../components/icons';

import { financeSubCategories } from './category-details/financeData';
import { communicationSubCategories } from './category-details/communicationData';
import { transportationSubCategories } from './category-details/transportationData';
import { entertainmentSubCategories } from './category-details/entertainmentData';
import { memoriesSubCategories } from './category-details/memoriesData';
import { securityPrivacySubCategories } from './category-details/securityPrivacyData';
import { computersSubCategories } from './category-details/computersData';
import { learningSubCategories } from './category-details/learningData';
import { servicesSubCategories } from './category-details/servicesData';
import { travelSubCategories } from './category-details/travelData';
import { homeSubCategories } from './category-details/homeData';
import { oceanSubCategories } from './category-details/oceanData';
import { artSubCategories } from './category-details/artData';
import { investmentsSubCategories } from './category-details/investmentsData';
import { securityMilitarySubCategories } from './category-details/securityMilitaryData';
import { jewishTraditionSubCategories } from './category-details/jewishTraditionData';
import { jewishHistorySubCategories } from './category-details/jewishHistoryData';
import { appliancesSubCategories } from './category-details/appliancesData';
import { foodSubCategories } from './category-details/foodData';
import { maintenanceSubCategories } from './category-details/maintenanceData';
import { natureSubCategories } from './category-details/natureData';
import { aiSubCategories } from './category-details/aiData';
import { healthSubCategories } from './category-details/healthData';
import { securityEmergencySubCategories } from './category-details/securityEmergencyData';
import { 
    aiAdvancedSubCategories,
    aiAdvBusinessSubCategories,
    aiAdvTechSubCategories,
    aiAdvLeisureSubCategories,
    aiAdvInspirationSubCategories,
    aiAdvMedicineSubCategories,
    aiAdvEducationSubCategories
} from './category-details/aiAdvancedData';
import { contentCreationSubCategories } from './category-details/contentCreationData';
import { leisureEntertainmentSubCategories } from './category-details/leisureEntertainmentData';


export const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

const initialCategories: MainCategory[] = [
    {
        id: 'cat-ai',
        text: 'AI',
        icon: AiIcon,
        displayMode: 'grid',
        colorClasses: { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' },
        subCategories: aiSubCategories,
    },
    {
        id: 'cat-ai-advanced',
        text: 'AI מתקדם',
        icon: SparklesIcon,
        displayMode: 'grid',
        colorClasses: { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' },
        subCategories: aiAdvancedSubCategories,
    },
    {
        id: 'cat-finance',
        text: 'כספים וכלכלה',
        icon: BankIcon,
        colorClasses: { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-700', hoverBorder: 'hover:border-green-500' },
        subCategories: financeSubCategories,
    },
    {
        id: 'cat-communication',
        text: 'תקשורת וקשרים',
        icon: PhoneIcon,
        colorClasses: { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' },
        subCategories: communicationSubCategories,
    },
    {
        id: 'cat-transportation',
        text: 'תחבורה ונסיעות',
        icon: MapIcon,
        colorClasses: { bg: 'bg-yellow-100', border: 'border-yellow-300', text: 'text-yellow-700', hoverBorder: 'hover:border-yellow-500' },
        subCategories: transportationSubCategories,
    },
    {
        id: 'cat-entertainment',
        text: 'בידור ופנאי',
        icon: TvIcon,
        colorClasses: { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-700', hoverBorder: 'hover:border-purple-500' },
        subCategories: entertainmentSubCategories,
    },
    {
        id: 'cat-photos',
        text: 'תמונות וזכרונות',
        icon: CameraIcon,
        colorClasses: { bg: 'bg-pink-100', border: 'border-pink-300', text: 'text-pink-700', hoverBorder: 'hover:border-pink-500' },
        subCategories: memoriesSubCategories,
    },
    {
        id: 'cat-computer-basics',
        text: 'יסודות המחשב',
        icon: MonitorIcon,
        colorClasses: { bg: 'bg-indigo-100', border: 'border-indigo-300', text: 'text-indigo-700', hoverBorder: 'hover:border-indigo-500' },
        subCategories: computersSubCategories,
    },
    {
        id: 'cat-learning',
        text: 'למידה והתפתחות',
        icon: BookOpenIcon,
        colorClasses: { bg: 'bg-orange-100', border: 'border-orange-300', text: 'text-orange-700', hoverBorder: 'hover:border-orange-500' },
        subCategories: learningSubCategories,
    },
     {
        id: 'cat-food',
        text: 'אוכל ומתכונים',
        icon: ShoppingBagIcon, 
        colorClasses: { bg: 'bg-amber-100', border: 'border-amber-300', text: 'text-amber-700', hoverBorder: 'hover:border-amber-500' },
        subCategories: foodSubCategories,
    },
    {
        id: 'cat-maintenance',
        text: 'תחזוקת הבית',
        icon: WrenchScrewdriverIcon,
        colorClasses: { bg: 'bg-cyan-100', border: 'border-cyan-300', text: 'text-cyan-700', hoverBorder: 'hover:border-cyan-500' },
        subCategories: maintenanceSubCategories,
    },
    {
        id: 'cat-security',
        text: 'אבטחה ופרטיות',
        icon: ShieldIcon,
        colorClasses: { bg: 'bg-gray-200', border: 'border-gray-400', text: 'text-gray-700', hoverBorder: 'hover:border-gray-500' },
        subCategories: securityPrivacySubCategories,
    },
    {
        id: 'cat-security-emergency',
        text: 'בטחון וחירום',
        icon: ShieldIcon,
        colorClasses: { bg: 'bg-red-200', border: 'border-red-400', text: 'text-red-800', hoverBorder: 'hover:border-red-600' },
        subCategories: securityEmergencySubCategories,
    },
    {
        id: 'cat-health',
        text: 'בריאות ואיכות חיים',
        icon: FitnessIcon,
        colorClasses: { bg: 'bg-lime-100', border: 'border-lime-300', text: 'text-lime-700', hoverBorder: 'hover:border-lime-500' },
        subCategories: healthSubCategories,
    },
    {
        id: 'cat-services',
        text: 'שירותים ומידע',
        icon: BookmarkIcon,
        colorClasses: { bg: 'bg-lime-100', border: 'border-lime-300', text: 'text-lime-700', hoverBorder: 'hover:border-lime-500' },
        subCategories: servicesSubCategories,
    },
    {
        id: 'cat-travel',
        text: 'טיולים בחו"ל ובארץ',
        icon: PlaneIcon,
        colorClasses: { bg: 'bg-sky-100', border: 'border-sky-300', text: 'text-sky-700', hoverBorder: 'hover:border-sky-500' },
        subCategories: travelSubCategories,
    },
    {
        id: 'cat-home',
        text: 'בית ומשפחה',
        icon: HomeIcon,
        colorClasses: { bg: 'bg-fuchsia-100', border: 'border-fuchsia-300', text: 'text-fuchsia-700', hoverBorder: 'hover:border-fuchsia-500' },
        subCategories: homeSubCategories,
    },
    {
        id: 'cat-ocean',
        text: 'ים, חופים ושייט',
        icon: WaveIcon,
        colorClasses: { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-700', hoverBorder: 'hover:border-teal-500' },
        subCategories: oceanSubCategories,
    },
    {
        id: 'cat-nature',
        text: 'טבע ובעלי חיים',
        icon: ButterflyIcon,
        colorClasses: { bg: 'bg-emerald-100', border: 'border-emerald-300', text: 'text-emerald-700', hoverBorder: 'hover:border-emerald-500' },
        subCategories: natureSubCategories,
    },
    {
        id: 'cat-art',
        text: 'אומנות',
        icon: MusicNoteIcon,
        colorClasses: { bg: 'bg-amber-100', border: 'border-amber-300', text: 'text-amber-700', hoverBorder: 'hover:border-amber-500' },
        subCategories: artSubCategories,
    },
    {
        id: 'cat-investments',
        text: 'השקעות',
        icon: ChartBarIcon,
        colorClasses: { bg: 'bg-violet-100', border: 'border-violet-300', text: 'text-violet-700', hoverBorder: 'hover:border-violet-500' },
        subCategories: investmentsSubCategories,
    },
    {
        id: 'cat-security-military',
        text: 'ביטחון וצבא',
        icon: ShieldCheckIcon,
        colorClasses: { bg: 'bg-stone-200', border: 'border-stone-400', text: 'text-stone-700', hoverBorder: 'hover:border-stone-500' },
        subCategories: securityMilitarySubCategories,
    },
    {
        id: 'cat-jewish-history',
        text: 'היסטוריה יהודית',
        icon: StarOfDavidIcon,
        colorClasses: { bg: 'bg-cyan-100', border: 'border-cyan-300', text: 'text-cyan-700', hoverBorder: 'hover:border-cyan-500' },
        subCategories: jewishHistorySubCategories,
    },
    {
        id: 'cat-appliances',
        text: 'מכשירים',
        icon: PowerPlugIcon,
        colorClasses: { bg: 'bg-slate-200', border: 'border-slate-400', text: 'text-slate-700', hoverBorder: 'hover:border-slate-500' },
        subCategories: appliancesSubCategories,
    },
    {
        id: 'cat-jewish-tradition',
        text: 'מסורת יהודית',
        icon: MenorahIcon,
        colorClasses: { bg: 'bg-yellow-100', border: 'border-yellow-300', text: 'text-yellow-700', hoverBorder: 'hover:border-yellow-500' },
        subCategories: jewishTraditionSubCategories,
    },
    {
        id: 'cat-temp-test',
        text: 'זמני',
        icon: WrenchScrewdriverIcon,
        colorClasses: { bg: 'bg-slate-100', border: 'border-slate-300', text: 'text-slate-600', hoverBorder: 'hover:border-slate-500' },
        displayMode: 'grid',
        subCategories: [
            {
                id: 'sub-cat-cinema',
                text: 'קולנוע',
                icon: FilmIcon,
                colorClasses: { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' },
                questions: []
            }
        ],
    },
    // Hidden AI Categories
    {
      id: 'hidden-ai-health',
      text: 'AI - בריאות ואיכות חיים',
      icon: HeartIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: { bg: 'bg-lime-100', border: 'border-lime-300', text: 'text-lime-700', hoverBorder: 'hover:border-lime-500' },
      subCategories: healthSubCategories,
    },
    {
      id: 'hidden-ai-finance',
      text: 'AI - כספים וכלכלה',
      icon: BankIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-700', hoverBorder: 'hover:border-green-500' },
      subCategories: financeSubCategories,
    },
    {
      id: 'hidden-ai-content',
      text: 'AI - יצירת תוכן',
      icon: PencilIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: { bg: 'bg-orange-100', border: 'border-orange-300', text: 'text-orange-700', hoverBorder: 'hover:border-orange-500' },
      subCategories: contentCreationSubCategories,
    },
    {
      id: 'hidden-ai-leisure',
      text: 'AI - בידור ופנאי',
      icon: SparklesIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-700', hoverBorder: 'hover:border-purple-500' },
      subCategories: leisureEntertainmentSubCategories,
    },
    {
      id: 'hidden-ai-art',
      text: 'AI - אומנות',
      icon: MusicNoteIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: { bg: 'bg-pink-100', border: 'border-pink-300', text: 'text-pink-700', hoverBorder: 'hover:border-pink-500' },
      subCategories: artSubCategories,
    },
    {
      id: 'hidden-ai-learning',
      text: 'AI - למידה והתפתחות',
      icon: BookOpenIcon,
      isHidden: true,
      parentId: 'cat-ai',
      colorClasses: { bg: 'bg-sky-100', border: 'border-sky-300', text: 'text-sky-700', hoverBorder: 'hover:border-sky-500' },
      subCategories: learningSubCategories,
    },
    // Hidden Advanced AI Categories
    {
      id: 'hidden-ai-adv-business',
      text: 'AI מתקדם - ניתוח עסקי ונתונים',
      icon: ChartBarIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: { bg: 'bg-indigo-100', border: 'border-indigo-300', text: 'text-indigo-700', hoverBorder: 'hover:border-indigo-500' },
      subCategories: aiAdvBusinessSubCategories,
    },
    {
      id: 'hidden-ai-adv-tech',
      text: 'AI מתקדם - טכנולוגיה ותכנות',
      icon: MonitorIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: { bg: 'bg-sky-100', border: 'border-sky-300', text: 'text-sky-700', hoverBorder: 'hover:border-sky-500' },
      subCategories: aiAdvTechSubCategories,
    },
    {
      id: 'hidden-ai-adv-leisure',
      text: 'AI מתקדם - פנאי ובידור',
      icon: FilmIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-700', hoverBorder: 'hover:border-rose-500' },
      subCategories: aiAdvLeisureSubCategories,
    },
    {
      id: 'hidden-ai-adv-inspiration',
      text: 'AI מתקדם - השראה ויצירתיות',
      icon: SparklesIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: { bg: 'bg-amber-100', border: 'border-amber-300', text: 'text-amber-700', hoverBorder: 'hover:border-amber-500' },
      subCategories: aiAdvInspirationSubCategories,
    },
    {
      id: 'hidden-ai-adv-medicine',
      text: 'AI מתקדם - רפואה ובריאות',
      icon: HeartIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: { bg: 'bg-red-100', border: 'border-red-300', text: 'text-red-700', hoverBorder: 'hover:border-red-500' },
      subCategories: aiAdvMedicineSubCategories,
    },
    {
      id: 'hidden-ai-adv-education',
      text: 'AI מתקדם - חינוך ולמידה',
      icon: BookOpenIcon,
      isHidden: true,
      parentId: 'cat-ai-advanced',
      colorClasses: { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', hoverBorder: 'hover:border-blue-500' },
      subCategories: aiAdvEducationSubCategories,
    },
];

export const getInitialCategories = (): MainCategory[] => {
  // Deep copy to prevent mutation of the original array
  return JSON.parse(JSON.stringify(initialCategories));
};