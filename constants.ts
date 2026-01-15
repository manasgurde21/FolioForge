
import { Template } from './types';
import { DeveloperTemplate } from './components/templates/DeveloperTemplate';
import { DesignerTemplate } from './components/templates/DesignerTemplate';
import { BusinessTemplate } from './components/templates/BusinessTemplate';
import { 
    MinimalistTemplate, 
    GlassTemplate, 
    BoldTemplate, 
    GradientTemplate, 
    SplitTemplate, 
    ArtGalleryTemplate, 
    RetroTemplate 
} from './components/templates/NewTemplates';

export const TEMPLATES: Template[] = [
  {
    id: 'developer',
    name: 'Modern Developer',
    previewImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    component: DeveloperTemplate,
  },
  {
    id: 'designer',
    name: 'Creative Designer',
    previewImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80',
    component: DesignerTemplate,
  },
  {
    id: 'business',
    name: 'Professional Business',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    component: BusinessTemplate,
  },
  {
    id: 'minimalist',
    name: 'Clean Minimalist',
    previewImage: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80',
    component: MinimalistTemplate,
  },
  {
    id: 'glass',
    name: 'Glassmorphism',
    previewImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80',
    component: GlassTemplate,
  },
  {
    id: 'bold',
    name: 'Bold Brutalist',
    previewImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    component: BoldTemplate,
  },
  {
    id: 'gradient',
    name: 'Gradient Flow',
    previewImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80',
    component: GradientTemplate,
  },
  {
    id: 'split',
    name: 'Split Screen',
    previewImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    component: SplitTemplate,
  },
  {
    id: 'artgallery',
    name: 'Art Gallery',
    previewImage: 'https://images.unsplash.com/photo-1507643179173-61786aa32968?auto=format&fit=crop&w=600&q=80',
    component: ArtGalleryTemplate,
  },
  {
    id: 'retro',
    name: 'Retro Terminal',
    previewImage: 'https://images.unsplash.com/photo-1558494949-efc5270f3c03?auto=format&fit=crop&w=600&q=80',
    component: RetroTemplate,
  },
];

export const FORMAL_FONTS = [
  { name: 'Inter (Modern Sans)', value: 'Inter' },
  { name: 'Lato (Clean Sans)', value: 'Lato' },
  { name: 'Playfair Display (Elegant Serif)', value: 'Playfair Display' },
  { name: 'Merriweather (Formal Serif)', value: 'Merriweather' },
];

export const SKILL_CATEGORIES = ['Language', 'Web', 'Database', 'Tool', 'AI/ML'];
