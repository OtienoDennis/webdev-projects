import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    const newValue = e.target.value;

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('sortBy', newValue);
    setSearchParams(newSearchParams);
  }

  return (
    <Select
      options={options}
      type='white'
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
