import './App.scss';
import Calculator from "./Calculator/Calculator";
import {useState} from "react";

function App() {
  const [history, setHistory] = useState([])

  return (
    <div className="App">
      <Calculator setHistory={setHistory}/>
      <div className="history">
        {
          history.length ?
            history.map(expression =>
              <div className='history__expression'>
                {expression}
              </div>
            )
            :
            'History will be here'
        }
      </div>
    </div>
  );
}

export default App;
