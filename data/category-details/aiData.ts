import type { SubCategory } from '../../types';
import { 
    PencilIcon, 
    BookOpenIcon, 
    MusicNoteIcon, 
    SparklesIcon,
    HeartIcon,
    BankIcon,
} from '../../components/icons';

export const aiSubCategories: SubCategory[] = [
  {
    id: 'ai-health-main-link',
    text: 'בריאות ואיכות חיים',
    icon: HeartIcon,
    colorClasses: { bg: 'bg-lime-100', border: 'border-lime-300', text: 'text-lime-700', hoverBorder: 'hover:border-lime-500' },
    questions: [],
    linkedCategoryId: 'hidden-ai-health'
  },
  {
    id: 'ai-finance-main-link',
    text: 'כספים וכלכלה',
    icon: BankIcon,
    colorClasses: { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-700', hoverBorder: 'hover:border-green-500' },
    questions: [],
    linkedCategoryId: 'hidden-ai-finance'
  },
  {
    id: 'ai-content-main-link',
    text: 'יצירת תוכן',
    icon: PencilIcon,
    colorClasses: { bg: 'bg-orange-100', border: 'border-orange-300', text: 'text-orange-700', hoverBorder: 'hover:border-orange-500' },
    questions: [],
    linkedCategoryId: 'hidden-ai-content'
  },
  {
    id: 'ai-leisure-main-link',
    text: 'בידור ופנאי',
    icon: SparklesIcon,
    colorClasses: { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-700', hoverBorder: 'hover:border-purple-500' },
    questions: [],
    linkedCategoryId: 'hidden-ai-leisure'
  },
  {
    id: 'ai-art-main-link',
    text: 'אומנות',
    icon: MusicNoteIcon,
    colorClasses: { bg: 'bg-pink-100', border: 'border-pink-300', text: 'text-pink-700', hoverBorder: 'hover:border-pink-500' },
    questions: [],
    linkedCategoryId: 'hidden-ai-art'
  },
  {
    id: 'ai-learning-main-link',
    text: 'למידה והתפתחות',
    icon: BookOpenIcon,
    colorClasses: { bg: 'bg-sky-100', border: 'border-sky-300', text: 'text-sky-700', hoverBorder: 'hover:border-sky-500' },
    questions: [],
    linkedCategoryId: 'hidden-ai-learning'
  },
];