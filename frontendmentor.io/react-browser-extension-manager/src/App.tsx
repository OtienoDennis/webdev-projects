import { useMemo, useState } from 'react';
import ExtensionContent from './components/ExtensionContent';
import FilterActions from './components/FilterActions';
import Header from './components/Header';
import data from './data/data.json';

function App() {
  const [extensionData, setExtensionData] = useState(data || null);
  const [selected, setSelected] = useState('All');

  const filteredData = useMemo(() => {
    switch (selected) {
      case 'Active':
        return extensionData.filter((item) => item.isActive === true);
      case 'Inactive':
        return extensionData.filter((item) => item.isActive === false);
      case 'All':
        return extensionData;
      default:
        return extensionData;
    }
  }, [extensionData, selected]);

  function handleSelected(newSelected: string) {
    setSelected(newSelected);
  }

  function handleToggle(name: string) {
    setExtensionData((prevData) =>
      prevData.map((item) =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    );
  }

  return (
    <div className='text-[var(--text-clr)] dark:text-[#ededed] max-w-7xl m-auto '>
      <Header />
      <FilterActions
        selected={selected}
        setSelected={setSelected}
        handleSelected={handleSelected}
      />
      <ExtensionContent
        filteredData={filteredData}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default App;
