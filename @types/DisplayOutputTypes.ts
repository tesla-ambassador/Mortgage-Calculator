export type DisplayOutputTypes = {
  displayTotal: string;
  displaySubtotal: string;
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  handleDisplayTotalChange: (newValue: string) => void;
  handleDisplaySubtotalChange: (newValue: string) => void;
};
