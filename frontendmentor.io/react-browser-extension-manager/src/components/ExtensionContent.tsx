import type { ExtensionContentProps } from '../lib/types';
import ExtensionCard from './ExtensionCard';

function ExtensionContent({
  filteredData,
  handleToggle,
  removeSelected,
}: ExtensionContentProps) {
  return (
    <div className='grid lg:grid-cols-3 gap-6'>
      {filteredData.map((item) => {
        return (
          <ExtensionCard
            key={item.name}
            logo={item.logo}
            name={item.name}
            description={item.description}
            isActive={item.isActive}
            handleToggle={() => handleToggle(item.name)}
            removeSelected={() => removeSelected(item.name)}
          />
        );
      })}
    </div>
  );
}

export default ExtensionContent;
