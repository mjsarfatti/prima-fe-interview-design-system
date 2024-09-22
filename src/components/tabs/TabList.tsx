import styled, { css } from "styled-components";
import { TabTitle } from "./TabTitle";
import { TTab } from "../../types";

interface ITabList {
  tabs: TTab[];
  variant: "pill" | "underline";
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export const TabList = ({
  tabs,
  variant,
  activeTab,
  setActiveTab,
}: ITabList) => {
  return (
    <StyledTabList variant={variant}>
      {tabs.map((tab, index) => (
        <TabTitle
          key={index}
          variant={variant}
          isSelected={index === activeTab}
          handleClick={() => setActiveTab(index)}
          badge={tab.badge ?? tab.badge}
        >
          {tab.title}
        </TabTitle>
      ))}
    </StyledTabList>
  );
};

const StyledTabList = styled.div<{ variant?: "pill" | "underline" }>`
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
`;
