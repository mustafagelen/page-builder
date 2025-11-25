export type ElementType =
  | "header"
  | "footer"
  | "card"
  | "text-content"
  | "slider";

export interface ElementPosition {
  x: number;
  y: number;
  width: number | string;
  height: number | string;
  zIndex: number;
}

export interface ElementContent {
  text?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

export interface SidebarItem {
  type: ElementType;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  defaultWidth: number | string;
  defaultHeight: number | string;
}
