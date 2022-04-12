import { useState } from 'react';
import './App.scss';
import './components/Form';
import Form from './components/Form';
import Message from './components/Message';
import Search from './components/Search';
import Selections from './components/Selections';
import VideoCapture from './components/VideoCapture';
import { SYMPTOMS } from './constants/symptoms';
import { LoadingProvider } from './contexts/LoadingContext';
import { ENDPOINTS } from './enums/endpoints.enum';
import { MESSAGES } from './enums/messages.enum';

function App() {
  const [options] = useState<any[]>(SYMPTOMS);
  const [filter, setFilter] = useState<any>({
    selected: false,
    searchValue: '',
  });
  const [showVideoCapture, setShowVideoCapture] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>([]);
  const [agreedToTerms, setAgreedToTerms] = useState<any>(false);
  const [prediction, setPrediction] = useState<{ id?: number; disease?: string; probability: string }>();
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
      setShowVideoCapture(data && data.disease?.toLowerCase().includes('depression'));
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
      <LoadingProvider>
        <div className="body" style={{ marginBottom: 64 }}>
          <Message isVisible={!!prediction && message} message={message?.message} type={message?.type} />

          {showVideoCapture ? (
            !agreedToTerms ? (
              <div className="row" style={{ textAlign: 'left' }}>
                Our diagnosis model predicts that your symptoms are tied to <b>depression</b>. We estimate a
                <b>
                  {' '}
                  {String((Number(prediction?.probability) * 100).toFixed(2))}
                  {'%'}
                </b>{' '}
                chance.
                <div className="row">
                  In order to further continue the diagnosis process we would need a few pictures of your face to
                  analyze your emotions.
                </div>
                <div className="row">
                  Please rest assured that these pictures are not stored on the server side and they are deleted after
                  use.
                </div>
                <div className="row">Do you agree to continue?</div>
                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                  <button type="submit" onClick={(e) => setAgreedToTerms(true)}>
                    Agree
                  </button>
                  <button type="submit" onClick={() => setShowVideoCapture(false)}>
                    Back
                  </button>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <VideoCapture />
                <button type="submit" onClick={() => setShowVideoCapture(false)}>
                  Back
                </button>
              </div>
            )
          ) : (
            <>
              <Search value={filter.searchValue} onChange={onSearch}></Search>
              <Selections options={selected} onRemove={onRemove} />
              <Form
                filter={filter}
                onSubmit={onFormSubmit}
                onSelect={onSelect}
                options={options}
                selections={selected}></Form>
            </>
          )}
          {agreedToTerms && prediction && prediction.disease?.toLowerCase().includes('depression') && (
            <button style={{ marginTop: 16 }} onClick={(e) => setShowVideoCapture(!showVideoCapture)}>
              Toggle video recording
            </button>
          )}
        </div>
      </LoadingProvider>
    </div>
  );
}

export default App;
