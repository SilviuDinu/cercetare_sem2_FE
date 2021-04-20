import { useEffect, useState } from 'react';
import './App.scss';
import './components/Form'
import Form from './components/Form';
import Search from './components/Search';
import { SYMPTOMS } from './constants/symptoms';
import { MESSAGES } from './enums/messages.enum';

function App() {
  const [options, setOptions] = useState<any[]>(SYMPTOMS);
  const [filter, setFilter] = useState<any>({
    selected: false,
    searchValue: ''
  })

  const onFormSubmit = (event: Event) => {
    event.preventDefault();
  }

  const onSearch = (event: Event) => {
    setFilter(
      {...filter,
        searchValue: (event.target as HTMLTextAreaElement).value
      });
  }

  const onChecked = (event?: Event, type?: string) => {
    setFilter(
      {...filter,
        selected: !filter.selected
      });
  }

  return (
    <div className="App">
      <div className="App-header">
        {MESSAGES.HEADER}
      </div>
      <div className="body">
        <Search
          value={filter.searchValue}
          onChange={onSearch}
          onChecked={onChecked}>
        </Search>
        <Form
          filter={filter}
          onSubmit={onFormSubmit}
          options={options}>
        </Form>
      </div>
    </div>
  );
}

export default App;
