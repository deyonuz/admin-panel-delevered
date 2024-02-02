import { Tabs } from "antd";

const TabTitles = ({ items }) => {
  return <Tabs items={items} defaultActiveKey={items[0].key} />;
};

export default TabTitles;
