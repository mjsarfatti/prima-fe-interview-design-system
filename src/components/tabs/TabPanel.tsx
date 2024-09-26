import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ITabPanel {
  isSelected: boolean;
  uniqueId: string;
  index: number;
  children: ReactNode;
}

interface IStyledTabPanel {
  isSelected: boolean;
}

export const TabPanel = ({
  isSelected,
  uniqueId,
  index,
  children,
}: ITabPanel) => (
  <StyledTabPanel
    key={index}
    id={`${uniqueId}-tabpanel-${index}`}
    role="tabpanel"
    tabIndex={0}
    aria-labelledby={`${uniqueId}-tab-${index}`}
    isSelected={isSelected}
  >
    {children}
  </StyledTabPanel>
);

const StyledTabPanel = styled.div<IStyledTabPanel>`
  /* Hide non-selected */
  ${(props) =>
    !props.isSelected &&
    css`
      display: none;
    `}
`;
