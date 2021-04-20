import { useEffect, useState } from 'react';
import './App.scss';
import './components/Form'
import Form from './components/Form';
import { SYMPTOMS } from './constants/symptoms';
import { MESSAGES } from './enums/messages.enum';

function App() {

  const [options, setOptions] = useState<any[]>(SYMPTOMS);

  return (
    <div className="App">
      <div className="App-header">
        {MESSAGES.HEADER}
      </div>
      <div className="body">
        <Form
          options={options}>
        </Form>
      </div>
    </div>
  );
}

export default App;
