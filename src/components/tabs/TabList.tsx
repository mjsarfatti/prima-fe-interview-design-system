import styled from "styled-components";
import { TabTitlePill } from "./TabTitle";

interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabListProps {
  tabs: Tab[];
  activeTab?: number;
  onTabChange?: (index: number) => void;
}

const StyledTabList = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: flex-start;
  gap: ${(props) => props.theme.spacing["xs"]};
`;

export const TabList: React.FC<TabListProps> = ({
  tabs /*activeTab, onTabChange*/,
}) => (
  <StyledTabList>
    {tabs.map((tab, index) => (
      <TabTitlePill
        key={index}
        title={tab.title}
        /* isActive={index === activeTab}
        onClick={() => onTabChange(index)} */
      />
    ))}
  </StyledTabList>
);
