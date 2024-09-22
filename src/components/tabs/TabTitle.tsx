import styled, { css } from "styled-components";

interface IBaseTabTitle {
  variant: "pill" | "underline";
  isSelected: boolean;
  children?: string;
}

interface ITabTitle extends IBaseTabTitle {
  handleClick: () => void;
}

interface IStyledTabTitle extends IBaseTabTitle {
  onClick: () => void;
}

export const TabTitle = ({
  variant = "pill",
  isSelected = false,
  handleClick,
  ...props
}: ITabTitle) => (
  <StyledTabTitle
    variant={variant}
    isSelected={isSelected}
    onClick={handleClick}
    {...props}
  />
);

const StyledTabTitle = styled.button<IStyledTabTitle>`
  display: block;
  position: relative;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  padding: 0 ${(props) => props.theme.spacing["xs"]};
  border: 1px solid ${(props) => props.theme.color.gray["55"]};
  font-size: ${(props) => props.theme.font.size.regular};
  font-weight: bold;
  color: ${(props) => props.theme.color.slate["10"]};
  background-color: ${(props) => props.theme.color.slate["100"]};
  cursor: pointer;
  transition: all 0.2s ease;

  /* Outline */
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border-radius: 29px;
    border: 2px solid transparent;
    transition: all 0.2s ease;
  }

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
    outline: none;
  }

  &:focus::before {
    border-color: ${(props) => props.theme.color.slate["10"]};
  }

  /* Non-selected state */
  ${(props) =>
    !props.isSelected &&
    css`
      /* Outline */
      &:focus::before {
        border-color: ${(props) => props.theme.color.slate["0"]};
      }
    `}

  /* Underline variant */
  ${(props) =>
    props.variant === "underline" &&
    css`
      padding: 0;
      border: none;
      border-radius: 0;

      &::after {
        display: block;
        content: "";
        width: 100%;
        height: 3px;
        background-color: transparent;
        border-radius: 1.5px;
        transform: translateY(-3px);
        transition: all 0.2s ease;
      }

      /* Outline */
      &::before {
        border-radius: 5px;
      }

      /* Hover, active, focus states */
      &:hover,
      &:active,
      &:focus {
        background-color: ${(props) => props.theme.color.slate["100"]};

        &::after {
          background-color: ${(props) => props.theme.color.gray["45"]};
        }
      }
    `}

/* Selected state (pill) */
${(props) =>
    props.isSelected &&
    props.variant === "pill" &&
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

/* Selected state (underline) */
${(props) =>
    props.isSelected &&
    props.variant === "underline" &&
    css`
      &::after {
        background-color: ${(props) => props.theme.color.slate["10"]};
      }

      /* Hover, active, focus states */
      &:hover,
      &:active,
      &:focus {
        &::after {
          background-color: ${(props) => props.theme.color.slate["10"]};
        }
      }
    `}
`;
