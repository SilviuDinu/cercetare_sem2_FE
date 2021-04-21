import { useState } from 'react';
import './App.scss';
import './components/Form'
import Form from './components/Form';
import Search from './components/Search';
import Selections from './components/Selections';
import { SYMPTOMS } from './constants/symptoms';
import { ENDPOINTS } from './enums/endpoints.enum';
import { MESSAGES } from './enums/messages.enum';
import _ from 'lodash';

function App() {
  const [options, setOptions] = useState<any[]>(SYMPTOMS);
  const [filter, setFilter] = useState<any>({
    selected: false,
    searchValue: ''
  });
  const [selected, setSelected] = useState<any>([]);
  const [previousReq, setPreviousReq] = useState<any>(null);

  const onFormSubmit = async (event: Event) => {
    event.preventDefault();
    const ids = selected.map((elem: { id: number; symptom: string }) => {
      return elem.id;
    });
    const reqBody = {
      symptoms: selected,
      ids,
    };
    if (_.isEqual(reqBody, previousReq)) {
      return;
    }
    setPreviousReq(reqBody);
    const response = await fetch(ENDPOINTS.PREDICT_DISEASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqBody),
    });
    console.log(response);
  };

  const onSearch = (event: Event) => {
    setFilter(
      {...filter,
        searchValue: (event.target as HTMLTextAreaElement).value
      });
  }

  const onSelect = (option: { id: number; symptom: string }, status: boolean): void => {
    const currentState = [...selected];
    const found = currentState.find((elem: any) => elem.symptom === option.symptom)
    const idx = currentState.indexOf(found);

    if (status === true) {
      setSelected([...selected, option]);
    } else {
      currentState.splice(idx, 1);
      setSelected(currentState);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        {MESSAGES.HEADER}
      </div>
      <div className="body">
        <Search
          value={filter.searchValue}
          onChange={onSearch}>
        </Search>
        <Selections options={selected}/>
        <Form
          filter={filter}
          onSubmit={onFormSubmit}
          onSelect={onSelect}
          options={options}>
        </Form>
      </div>
    </div>
  );
}

export default App;
