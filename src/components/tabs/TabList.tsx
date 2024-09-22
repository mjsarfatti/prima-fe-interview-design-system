import styled from "styled-components";
import { TabTitle } from "./TabTitle";
import { useState } from "react";
import { BadgeType } from "../badge/Badge";

type Tab = {
  title: string;
  content: React.ReactNode;
  badge?: BadgeType;
};

interface ITabList {
  tabs: Tab[];
  variant: "pill" | "underline";
}

export const TabList = ({ tabs, variant = "pill" }: ITabList) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledTabList>
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

const StyledTabList = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: flex-start;
  gap: ${(props) => props.theme.spacing["xs"]};
`;
