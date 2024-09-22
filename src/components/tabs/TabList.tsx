import styled, { css } from "styled-components";
import { useState } from "react";
import { TabTitle } from "./TabTitle";
import { TabType } from "../../types";

interface ITabList {
  tabs: TabType[];
  variant: "pill" | "underline";
}

export const TabList = ({ tabs, variant = "pill" }: ITabList) => {
  const [activeTab, setActiveTab] = useState(0);

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
  align-items: flex-end;
  align-content: flex-start;
  gap: ${(props) => props.theme.spacing["xs"]};

  /* Underline variant */
  ${(props) =>
    props.variant === "underline" &&
    css`
      gap: ${(props) => props.theme.spacing["xl"]};
    `}
`;
