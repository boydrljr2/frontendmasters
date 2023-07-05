import styled from 'styled-components';
import { mgaTheme, typeScale, serifFont, sansSerifFont } from '../utils';


//Styled Button Components

const Button = styled.button`
  padding: 16px 16px;
  margin: 8px;
  font-family: ${sansSerifFont};
  font-size: ${typeScale.header5};
  text-align: center;
  border-radius: 2px;
  min-width: 100px;
  color: ${mgaTheme.neutralColorWhite};
  background-color: ${mgaTheme.primaryColorDark};
  border: '2px solid ' ${mgaTheme.primaryColorDark};
  cursor: pointer;
  transition: background-color 0.2s linear, color 0.2s linear;
`;

//// Primary Button
export const PrimaryButton = styled(Button)`
  
  &:hover {
    background-color: ${mgaTheme.primaryColorMedium};
    border-color: ${mgaTheme.primaryColorMedium};
  }

  &:focus {
    background-color: ${mgaTheme.primaryColorMedium};
    border-color: ${mgaTheme.primaryColorDark};
  }

  &:active {
    background-color: ${mgaTheme.primaryColorMedium};
    border-color: ${mgaTheme.primaryColorDark};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${mgaTheme.primaryColorDisabled};
    border-color: ${mgaTheme.primaryColorDisabled};
  }
`;

//// Secondary Button

export const SecondaryButton = styled(Button)`
  color: ${mgaTheme.primaryColorDark};
  background-color: ${mgaTheme.neutralColorWhite};
  border-color: ${mgaTheme.primaryColorDark};

  &:hover {
    color: ${mgaTheme.neutralColorWhite};
    background-color: ${mgaTheme.primaryColorMedium};
    border-color: ${mgaTheme.primaryColorMedium};
  }

  &:focus {
    color: ${mgaTheme.neutralColorWhite};
    background-color: ${mgaTheme.primaryColorMedium};
    border-color: ${mgaTheme.primaryColorDark};
  }

  &:active {
    color: ${mgaTheme.neutralColorWhite};
    background-color: ${mgaTheme.primaryColorMedium};
    border-color: ${mgaTheme.primaryColorDark};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${mgaTheme.primaryColorDisabled};
    background-color: ${mgaTheme.neutralColorWhite};
    border-color: ${mgaTheme.primaryColorDisabled};
  }
`;

//// Tertiary Button

export const TertiaryButton = styled(Button)`
  color: ${mgaTheme.primaryColorDark};
  background-color: ${mgaTheme.neutralColorWhite};
  border-color: ${mgaTheme.neutralColorWhite};

  &:hover {
    color: ${mgaTheme.primaryColorMedium};
    background-color: ${mgaTheme.neutralColorWhite};
    border-color: ${mgaTheme.neutralColorWhite};
  }

  &:focus {
    color: ${mgaTheme.primaryColorMedium};
    background-color: ${mgaTheme.neutralColorWhite};
    border-color: ${mgaTheme.primaryColorMedium};
  }

  &:active {
    color: ${mgaTheme.primaryColorMedium};
    background-color: ${mgaTheme.neutralColorWhite};
    border-color: ${mgaTheme.neutralColorWhite};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${mgaTheme.primaryColorDisabled};
    background-color: ${mgaTheme.neutralColorWhite};
    border-color: ${mgaTheme.neutralColorWhite};
  }
`;
