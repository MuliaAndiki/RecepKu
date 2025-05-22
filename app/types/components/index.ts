export interface Popup {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
