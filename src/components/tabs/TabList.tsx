import styled, { css } from "styled-components";
import { Tab } from "./Tab";
import { TTab } from "../../types";

interface ITabList {
  title: string;
  tabs: TTab[];
  variant: "pill" | "underline";
  activeTab: number;
  setActiveTab: (index: number) => void;
  selectNext: () => void;
  selectPrevious: () => void;
  uniqueId: string;
}

export const TabList = ({
  title,
  tabs,
  variant,
  activeTab,
  setActiveTab,
  selectNext,
  selectPrevious,
  uniqueId,
}: ITabList) => {
  return (
    <StyledTablist variant={variant} role="tablist" aria-label={title}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          variant={variant}
          isSelected={index === activeTab}
          handleClick={() => setActiveTab(index)}
          selectNext={selectNext}
          selectPrevious={selectPrevious}
          badge={tab.badge ?? tab.badge}
          uniqueId={uniqueId}
          index={index}
        >
          {tab.title}
        </Tab>
      ))}
    </StyledTablist>
  );
};

const StyledTablist = styled.div<{ variant?: "pill" | "underline" }>`
  display: flex;
  gap: ${(props) => props.theme.spacing["xs"]};
  margin: 0 -${(props) => props.theme.spacing["s"]};
  padding: 5px ${(props) => props.theme.spacing["s"]};
  overflow-x: scroll;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Underline variant */
  ${(props) =>
    props.variant === "underline" &&
    css`
      gap: ${(props) => props.theme.spacing["xl"]};
    `}

  @media ${(props) => props.theme.media.mobileOnly} {
    gap: ${(props) => props.theme.spacing["2xs"]};

    /* Underline variant */
    ${(props) =>
      props.variant === "underline" &&
      css`
        gap: ${(props) => props.theme.spacing["l"]};
      `}
  }
`;
