import { SubCategory } from '../../types';
import { AiIcon } from '../../components/icons';
import {
  leisureEntertainmentSubCategories,
  aiAdvBusinessSubCategories,
  aiAdvTechSubCategories,
} from './otherSubCategories';

export const aiAdvancedSubCategories: SubCategory[] = [
  ...aiAdvBusinessSubCategories,
  ...aiAdvTechSubCategories,
  {
    id: 'q-ai-adv-1',
    text: 'מהי בינה מלאכותית מתקדמת?',
    categoryId: 'ai-advanced',
    icon: AiIcon,
  },
  {
    id: 'q-ai-adv-2',
    text: 'כיצד משתמשים בלמידת מכונה לצורך ניתוח נתונים?',
    categoryId: 'ai-advanced',
    icon: AiIcon,
  },
  {
    id: 'q-ai-adv-3',
    text: 'מהו בלוקציין ואיך הוא קשור ל-AI?',
    categoryId: 'ai-advanced',
    icon: AiIcon,
  },
  {
    id: 'q-ai-adv-4',
    text: 'כיצד ניתן לשלב רובוטיקה ובינה מלאכותית בתעשייה?',
    categoryId: 'ai-advanced',
    icon: AiIcon,
  },
  {
    id: 'q-ai-adv-5',
    text: 'מהם אתגרים אתיים בבינה מלאכותית מתקדמת?',
    categoryId: 'ai-advanced',
    icon: AiIcon,
  },
  {
    id: 'q-ai-adv-6',
    text: 'איך בינה מלאכותית מתקדמת יכולה לשפר חוויית לקוח?',
    categoryId: 'ai-advanced',
    icon: AiIcon,
  },
  {
    id: 'q-ai-adv-7',
    text: 'מהו NLP וכיצד הוא משמש באפליקציות AI מתקדמות?',
    categoryId: 'ai-advanced',
    icon: AiIcon,
  },
  {
    id: 'q-ai-adv-8',
    text: 'מהו עיבוד תמונה בעזרת AI?',
    categoryId: 'ai-advanced',
    icon: AiIcon,
  },
  {
    id: 'q-ai-adv-9',
    text: 'כיצד למידת חיזוק (Reinforcement Learning) עובדת?',
    categoryId: 'ai-advanced',
    icon: AiIcon,
  },
  {
    id: 'q-ai-adv-10',
    text: 'איך AI יכול לעזור בניתוח שוק ומגמות עסקיות?',
    categoryId: 'ai-advanced',
    icon: AiIcon,
  },
];
