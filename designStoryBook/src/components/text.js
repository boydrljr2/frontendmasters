import styled from 'styled-components';
import { mgaTheme, typeScale, serifFont, sansSerifFont } from '../utils';

//Styled Text Components

export const P = styled.p`
    font-family: ${serifFont};
    font-size: ${typeScale.paragraph};
    color: ${mgaTheme.textColorPrimary};
    `;

export const H1 = styled.h1`
    font-family: ${sansSerifFont};
    font-size: ${typeScale.header1};
    color: ${mgaTheme.textColorPrimary};
    `;
export const H2 = styled.h2`
    font-family: ${sansSerifFont};
    font-size: ${typeScale.header2};
    color: ${mgaTheme.textColorPrimary};
    `;
export const H3 = styled.h3`
    font-family: ${sansSerifFont};
    font-size: ${typeScale.header3};
    color: ${mgaTheme.textColorPrimary};
    `;
export const H4 = styled.h4`
    font-family: ${sansSerifFont};
    font-size: ${typeScale.header4};
    color: ${mgaTheme.textColorPrimary};
    `;
export const H5 = styled.h5`
    font-family: ${sansSerifFont};
    font-size: ${typeScale.header5};
    color: ${mgaTheme.textColorPrimary};
    `;