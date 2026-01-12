
import { Template } from './types';
import { DeveloperTemplate } from './components/templates/DeveloperTemplate';
import { DesignerTemplate } from './components/templates/DesignerTemplate';
import { BusinessTemplate } from './components/templates/BusinessTemplate';

export const TEMPLATES: Template[] = [
  {
    id: 'developer',
    name: 'Modern Developer',
    previewImage: 'https://picsum.photos/seed/dev/600/400',
    component: DeveloperTemplate,
  },
  {
    id: 'designer',
    name: 'Creative Designer',
    previewImage: 'https://picsum.photos/seed/design/600/400',
    component: DesignerTemplate,
  },
  {
    id: 'business',
    name: 'Professional Business',
    previewImage: 'https://picsum.photos/seed/biz/600/400',
    component: BusinessTemplate,
  },
];

export const FORMAL_FONTS = [
  { name: 'Inter (Modern Sans)', value: 'Inter' },
  { name: 'Lato (Clean Sans)', value: 'Lato' },
  { name: 'Playfair Display (Elegant Serif)', value: 'Playfair Display' },
  { name: 'Merriweather (Formal Serif)', value: 'Merriweather' },
];

export const SKILL_CATEGORIES = ['Language', 'Web', 'Database', 'Tool', 'AI/ML'];
