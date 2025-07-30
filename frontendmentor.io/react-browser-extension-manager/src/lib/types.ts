export interface ExtensionItemProps {
  name: string;
  logo: string;
  description: string;
  isActive: boolean;
}

export interface ExtensionContentProps {
  filteredData: ExtensionItemProps[];
  handleToggle: (value: string) => void;
  removeSelected: (value: string) => void;
}

export interface ButtonProps {
  children: string;
}

export interface FilterActionsProps {
  selected: string;
  setSelected: (value: string) => void;
}
