import { ThemeType } from '@types';

export default {
  font: {
    family: {
      default: "'Fira Sans Condensed', sans-serif",
      secondary: 'Roboto',
      third: "'Roboto', sans-serif",
    },
  },
  colors: {
    background: '#333333',
    ballotBoxBackground: '#dcdde1',
    ballotBoxKeyboard: '#2f3640',
    ballotBoxScreen: '#e3eef9',
    ballotBoxKeyboardButton: '#292e33',
    ballotBoxWhiteButton: '#eeeeee',
    ballotBoxCorrectButton: '#ff841f',
    ballotBoxConfirmButton: '#7daa44',
    lightBorder: '#cccccc',
    darkBorder: '#444444',
    lightText: '#eeeeee',
    darkText: '#333333',
  },
} as Partial<ThemeType>;
