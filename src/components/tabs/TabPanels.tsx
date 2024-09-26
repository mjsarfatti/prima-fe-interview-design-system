import styled from "styled-components";
import { TabPanel } from "./TabPanel";
import { TTab } from "../../types";

interface ITabPanels {
  tabs: TTab[];
  activeTab: number;
  uniqueId: string;
}

export const TabPanels = ({ tabs, activeTab, uniqueId }: ITabPanels) => {
  return (
    <StyledTabPanels>
      {tabs.map((tab, index) => (
        <TabPanel
          key={index}
          isSelected={index === activeTab}
          uniqueId={uniqueId}
          index={index}
        >
          {tab.content}
        </TabPanel>
      ))}
    </StyledTabPanels>
  );
};

const StyledTabPanels = styled.div``;
