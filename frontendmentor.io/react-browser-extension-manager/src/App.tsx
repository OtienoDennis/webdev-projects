import ExtensionContent from './components/ExtensionContent';
import FilterActions from './components/FilterActions';
import Header from './components/Header';

function App() {
  return (
    <div className='text-[var(--text-clr)] dark:text-[#ededed] max-w-7xl m-auto '>
      <Header />
      <FilterActions />
      <ExtensionContent />
    </div>
  );
}

export default App;
