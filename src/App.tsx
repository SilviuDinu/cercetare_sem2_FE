import { useState } from 'react';
import './App.scss';
import './components/Form';
import Form from './components/Form';
import Message from './components/Message';
import Search from './components/Search';
import Selections from './components/Selections';
import { SYMPTOMS } from './constants/symptoms';
import { ENDPOINTS } from './enums/endpoints.enum';
import { MESSAGES } from './enums/messages.enum';

function App() {
  const [options] = useState<any[]>(SYMPTOMS);
  const [filter, setFilter] = useState<any>({
    selected: false,
    searchValue: '',
  });
  const [selected, setSelected] = useState<any>([]);
  const [prediction, setPrediction] = useState<{ id?: number; disease?: string }>();
  const [message, setMessage] = useState<{ type?: string; message?: string }>();

  const onFormSubmit = async (event: Event) => {
    event.preventDefault();
    const ids = selected.map((elem: { id: number; symptom: string }) => {
      return elem.id;
    });
    const reqBody = {
      symptoms: selected,
      ids,
    };

    const response = await fetch(ENDPOINTS.PREDICT_DISEASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqBody),
    });

    if (response.ok) {
      const data = await response.json();
      setPrediction(data);
      setMessage({
        message: MESSAGES.PREDICTION + data.disease,
        type: 'notification',
      });
    }
  };

  const onSearch = (event: Event) => {
    setFilter({ ...filter, searchValue: (event.target as HTMLTextAreaElement).value });
  };

  const onSelect = (option: { id: number; symptom: string }, status: boolean): void => {
    const currentState = [...selected];
    const found = currentState.find((elem: any) => elem.symptom === option.symptom);
    const idx = currentState.indexOf(found);

    if (status === true) {
      setSelected([...selected, option]);
    } else {
      currentState.splice(idx, 1);
      setSelected(currentState);
    }

    setMessage({ message: '' });
  };

  const onRemove = (option: { id: number; symptom: string }): void => {
    const idx = selected.findIndex((elem: any) => elem.symptom === option.symptom);

    selected.splice(idx, 1);
    setSelected([...selected]);
  };

  return (
    <div className="App">
      <div className="App-header">{MESSAGES.HEADER}</div>
      <div className="body">
        <Message isVisible={!!prediction && message} message={message?.message} type={message?.type} />
        <Search value={filter.searchValue} onChange={onSearch}></Search>
        <Selections options={selected} onRemove={onRemove} />
        <Form
          filter={filter}
          onSubmit={onFormSubmit}
          onSelect={onSelect}
          options={options}
          selections={selected}></Form>
      </div>
    </div>
  );
}

export default App;
