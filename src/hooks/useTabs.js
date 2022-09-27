import { useState } from 'react';
const content = [
  {
    tab: 'Section 1',
    content: '섹션 1이지롱 :)',
  },
  {
    tab: 'Section 2',
    content: '섹션 2임다 :)',
  },
  {
    tab: 'Section 3',
    content: 'Hello3~~! :)',
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIdx, setCurrentIdx] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx,
  };
};

const Tabs = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, idx) => (
        <button key={section.tab} onClick={() => changeItem(idx)}>
          {section.tab}
        </button>
      ))}
      <hr />
      <div>{currentItem.content}</div>
    </div>
  );
};

export default Tabs;
