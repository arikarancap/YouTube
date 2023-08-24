const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';


// export default {
//   light: {
//     text: '#000',
//     background: '#fff',
//     tint: tintColorLight,
//     tabIconDefault: '#ccc',
//     tabIconSelected: tintColorLight,
//   },
//   dark: {
//     text: '#fff',
//     background: '#000',
//     tint: tintColorDark,
//     tabIconDefault: '#ccc',
//     tabIconSelected: tintColorDark,
//   },
// };
export const COLORS = {
  primary: "#001F2D",
  secondary: "#4D626C",
  white: "#FFF",
  gray: "#74858C",
  black: '#000000',
  lightblack: '#00000099',
  lightgrey: '#D3D3D3',
  grey: '#808080',
  lightblue: '#0094e3',  //Rich Electric Blue
  red: 'red',

};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  semifont: 15,
  medium: 16,
  large: 18,
  semiLarge: 20,
  extraLarge: 24,
};

export const FONTS = {
  SpaceMono: 'SpaceMono-Regular',
  curse: 'Lobster-Regular',
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};