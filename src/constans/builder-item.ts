import { SidebarItem } from '@/src/types/builder';

export const BUILDER_ITEMS: SidebarItem[] = [
  {
    type: 'header',
    label: 'Header',
    defaultWidth: '100%',
    defaultHeight: 80,
  },
  {
    type: 'card',
    label: 'Content Card',
    defaultWidth: 300,
    defaultHeight: 200,
  },
  {
    type: 'text-content',
    label: 'Text Block',
    defaultWidth: 400,
    defaultHeight: 'auto',
  },
  {
    type: 'slider',
    label: 'Image Slider',
    defaultWidth: '100%',
    defaultHeight: 400,
  },
  {
    type: 'footer',
    label: 'Footer',
    defaultWidth: '100%',
    defaultHeight: 60,
  },
];