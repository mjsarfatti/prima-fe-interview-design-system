import styled, { css } from "styled-components";

interface IBadge {
  variant: "neutral" | "positive" | "negative";
  children?: string;
}

export const Badge = styled.span<IBadge>`
  display: inline-block;
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: bold;
  color: ${(props) => props.theme.color.slate["10"]};
  line-height: ${(props) => props.theme.font.height};
  border-radius: 18px;
  padding: ${(props) =>
    props.theme.spacing["3xs"] + " " + props.theme.spacing["2xs"]};
  background-color: ${(props) => props.theme.color.gray["90"]};

  /* Positive variant */
  ${(props) =>
    props.variant === "positive" &&
    css`
      background-color: ${(props) => props.theme.color.positive};
    `}

  /* Negative variant */
  ${(props) =>
    props.variant === "negative" &&
    css`
      background-color: ${(props) => props.theme.color.negative};
    `}
`;
