import type { ExtensionContentProps } from '../lib/types';
import ExtensionCard from './ExtensionCard';

function ExtensionContent({
  filteredData,
  handleToggle 
}: ExtensionContentProps) {
  
  return (
    <div className='grid grid-cols-3 gap-6'>
      {filteredData.map((item) => {
        return (
          <Extensio
          nCard
            key={item.name}
            logo={item.logo}
            name={item.name}
            description={item.description}
            isActive={item.isActive}
            handleToggle={() => handleToggle(item.name)}
          />
        );
      })}
    </div>
  );
}

export default ExtensionContent;
