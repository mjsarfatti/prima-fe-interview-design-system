import styled from "styled-components";
import uniqid from "uniqid";
import { useRef, useState } from "react";
import { TTab } from "../../types";
import { TabList } from "./TabList";
import { TabPanels } from "./TabPanels";

interface ITabList {
  title: string;
  tabs: TTab[];
  variant?: "pill" | "underline";
}

export const Tabs = ({ title, tabs, variant = "pill" }: ITabList) => {
  const [activeTab, setActiveTab] = useState(0);
  const uniqueRef = useRef(uniqid.time());

  const selectNext = () => {
    let newActiveTab = activeTab + 1;
    if (newActiveTab >= tabs.length) newActiveTab = 0;
    setActiveTab(newActiveTab);
  };

  const selectPrevious = () => {
    let newActiveTab = activeTab - 1;
    if (newActiveTab < 0) newActiveTab = tabs.length - 1;
    setActiveTab(newActiveTab);
  };

  return (
    <StyledTabs>
      <TabList
        title={title}
        variant={variant}
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectNext={selectNext}
        selectPrevious={selectPrevious}
        uniqueId={uniqueRef.current}
      />
      <TabPanels
        tabs={tabs}
        activeTab={activeTab}
        uniqueId={uniqueRef.current}
      />
    </StyledTabs>
  );
};

const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing["xl"]};
`;
