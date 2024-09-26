import styled, { css } from "styled-components";
import { KeyboardEvent, useEffect, useRef } from "react";
import { Badge } from "../badge/Badge";
import { TBadge } from "../../types";

interface IBaseTab {
  variant: "pill" | "underline";
  isSelected: boolean;
}

interface ITab extends IBaseTab {
  children?: string;
  badge?: TBadge;
  handleClick: () => void;
  selectNext: () => void;
  selectPrevious: () => void;
  uniqueId: string;
  index: number;
}

interface IStyledTab extends IBaseTab {
  onClick: () => void;
}

export const Tab = ({
  variant = "pill",
  isSelected = false,
  badge,
  children,
  handleClick,
  selectNext,
  selectPrevious,
  uniqueId,
  index,
  ...props
}: ITab) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isSelected && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isSelected]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      selectNext();
    } else if (event.key === "ArrowLeft") {
      selectPrevious();
    }
  };

  return (
    <StyledTab
      variant={variant}
      isSelected={isSelected}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
      type="button"
      id={`${uniqueId}-tab-${index}`}
      role="tab"
      tabIndex={isSelected ? undefined : -1}
      aria-selected={isSelected}
      aria-controls={`${uniqueId}-tabpanel-${index}`}
      ref={buttonRef}
    >
      {children}
      {badge && (
        <Badge variant={badge.variant ?? badge.variant}>{badge.title}</Badge>
      )}
    </StyledTab>
  );
};

export const StyledTab = styled.button<IStyledTab>`
  display: block;
  position: relative;
  height: 50px;
  line-height: 50px;
  border-radius: calc(50px / 2);
  padding: 0 ${(props) => props.theme.spacing["s"]};
  border: 1px solid ${(props) => props.theme.color.gray["80"]};
  font-size: ${(props) => props.theme.font.size.regular};
  font-weight: bold;
  text-wrap: nowrap;
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
    border-radius: calc(50px / 2 + 4px);
    border: 2px solid transparent;
    transition: all 0.2s ease;
  }

  /* Hover state */
  &:hover {
    background-color: ${(props) => props.theme.color.slate["90"]};
    border-color: ${(props) => props.theme.color.gray["70"]};
  }

  /* Active state */
  &:active {
    background-color: ${(props) => props.theme.color.slate["80"]};
    border-color: ${(props) => props.theme.color.gray["80"]};
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
          background-color: ${(props) => props.theme.color.gray["70"]};
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

  & ${Badge} {
    vertical-align: 1px;
    margin-left: ${(props) => props.theme.spacing["2xs"]};
  }

  @media ${(props) => props.theme.media.mobileOnly} {
    height: 42px;
    line-height: 42px;
    border-radius: calc(42px / 2);
    padding: 0 ${(props) => props.theme.spacing["xs"]};

    /* Outline */
    &::before {
      border-radius: calc(42px / 2 + 4px);
    }

    /* Underline variant */
    ${(props) =>
      props.variant === "underline" &&
      css`
        padding: 0;
        border-radius: 0;

        /* Outline */
        &::before {
          border-radius: 5px;
        }
      `}
  }
`;
