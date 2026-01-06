

export interface PickerProps<T extends number | string> {
  data: T[];
  selectedValue: T;
  onValueChange: (value: T) => void;
}