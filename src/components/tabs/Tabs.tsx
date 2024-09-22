import styled from "styled-components";
import { useState } from "react";
import { TTab } from "../../types";
import { TabList } from "./TabList";
import { TabContent } from "./TabContent";

interface ITabs {
  tabs: TTab[];
  variant?: "pill" | "underline";
}

export const Tabs = ({ tabs, variant = "pill" }: ITabs) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledTabs>
      <TabList
        variant={variant}
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent>{tabs[activeTab].content}</TabContent>
    </StyledTabs>
  );
};

const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing["xl"]};
`;
