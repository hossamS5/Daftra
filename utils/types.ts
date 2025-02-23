export interface NavItem {
  id: number;
  title: string;
  visible: boolean;
  icon?: string;
  children?: NavItem[];
  target?: string;
}
