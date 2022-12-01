export interface FontFamilyType {
  /** Fira Sans Condensed */
  default: string;
  /** Roboto */
  secondary: string;
  /** sans-serif */
  third: string;
}

export interface FontTypes {
  family: FontFamilyType;
}

export interface ColorsType {
  background: string;
  ballotBoxBackground: string;
  ballotBoxKeyboard: string;
  ballotBoxScreen: string;
  ballotBoxKeyboardButton: string;
  ballotBoxWhiteButton: string;
  ballotBoxCorrectButton: string;
  ballotBoxConfirmButton: string;
  lightBorder: string;
  darkBorder: string;
  lightText: string;
  darkText: string;
}

export interface ThemeType {
  font: FontTypes;
  colors: ColorsType;
}

export interface ThemeProvider {
  theme: ThemeType;
}
