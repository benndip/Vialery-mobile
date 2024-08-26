import { ReactNode } from 'react';

export type RootStackParamList = {
  BottomNavigation: undefined;
  Splash: undefined;
  Onboarding: undefined;
  AuthStack: undefined;
  Details: undefined;
  VideoDetails: undefined;
  Search: undefined;
  Deposit: undefined;
};

export interface LayoutProps extends TopNavActionsProps {
  children: ReactNode | ReactNode[];
}
export interface TopNavActionsProps {
  onBack?: () => void
  showPurse?: boolean
  showSearch?: boolean
  showHeart?: boolean
  onHeart?: () => void
}

export interface ItemType {
  videoUrl?: string;
  audioUrl?: string;
  bgImage?: string;
  modelUrl?: string;
  title?: string;
  description?: string;
  id: number;
  height?: number;
}
