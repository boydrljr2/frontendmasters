import styled from 'styled-components';
import { mgaTheme, typeScale, serifFont, sansSerifFont } from '../utils';

export const Select = styled.select`
    padding: 16px 16px;
    margin: 8px;
    text-align: left;
    border: 2px solid ${mgaTheme.primaryColorDark};
    font-family: ${sansSerifFont};

    &:hover {
        border: 2px solid ${mgaTheme.primaryColorMedium};
    }

    `;

export const Label = styled.label`
    display: block;
    padding: 16px 8px 0px 8px;
    margin: 0px;
    font-size: ${typeScale.header5};
    font-family: ${sansSerifFont};
    color: ${mgaTheme.primaryColorDark};
    `;

export const Option = styled.option`
    padding: 8px 8px;
    margin: 8px;
    font-size: ${typeScale.paragraph};
    color: ${mgaTheme.textColorPrimary};
    `;