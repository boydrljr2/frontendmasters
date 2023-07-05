import { primary, neutral, success, error, warning } from './colors';
import { sansSerifFont, serifFont, typeScale } from './typography';

export const mgaTheme = {

    primaryColorDark: primary[100],
    primaryColorMedium: primary[200],
    primaryColorLight: primary[300],
    primaryColorDisabled: primary[400],
    primaryColorException: primary[500],

    neutralColorWhite: neutral[100],
    neutralColor2: neutral[200],
    neutralColor3: neutral[300],
    neutralColor4: neutral[400],
    neutralColor5: neutral[500],
    neutralColorBlack: neutral[600],

    // Text theme
    sansSerifFont, serifFont,
    textColorPrimary: neutral[600],
    textColorInverted: neutral[100],

    h1: typeScale.header1, 
    h2: typeScale.header2,
    h3: typeScale.header3,
    h4: typeScale.header4,
    h5: typeScale.header5,

    helperText: typeScale.helperText,
    caption: typeScale.caption,

    // Form Element theme
    formElementBackground: neutral[100],

};
