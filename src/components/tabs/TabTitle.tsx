import { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface ITabTitle {
  $variant: "pill" | "underline";
  $isSelected: boolean;
  handleClick: () => void;
  children?: string;
}

export const TabTitle = ({
  $variant = "pill",
  $isSelected = false,
  ...props
}: ITabTitle) => (
  <StyledTabTitle $variant={$variant} $isSelected={$isSelected} {...props} />
);

const StyledTabTitle = styled.button<ITabTitle>`
  display: block;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  padding: 0 ${(props) => props.theme.spacing["xs"]};
  border: 1px solid ${(props) => props.theme.color.gray["55"]};
  font-size: ${(props) => props.theme.font.size.regular};
  font-weight: bold;
  color: ${(props) => props.theme.color.slate["10"]};
  background-color: ${(props) => props.theme.color.slate["100"]};
  outline: 2px solid transparent;
  outline-offset: 2px;
  cursor: pointer;
  transition: all 0.2s ease;

  /* Hover state */
  &:hover {
    background-color: ${(props) => props.theme.color.slate["90"]};
    border-color: ${(props) => props.theme.color.gray["45"]};
  }

  /* Active state */
  &:active {
    background-color: ${(props) => props.theme.color.slate["80"]};
    border-color: ${(props) => props.theme.color.gray["55"]};
  }

  /* Focus state */
  &:focus {
    outline-color: ${(props) => props.theme.color.slate["10"]};
  }

  /* Selected state */
  ${(props) =>
    props.$isSelected &&
    css`
      color: ${(props) => props.theme.color.white};
      background-color: ${(props) => props.theme.color.slate["10"]};
      border-color: ${(props) => props.theme.color.slate["10"]};

      /* Hover state */
      &:hover {
        background-color: ${(props) => props.theme.color.slate["20"]};
        border-color: ${(props) => props.theme.color.slate["20"]};
      }

      /* Active state */
      &:active {
        background-color: ${(props) => props.theme.color.slate["30"]};
        border-color: ${(props) => props.theme.color.slate["30"]};
      }
    `}
`;
