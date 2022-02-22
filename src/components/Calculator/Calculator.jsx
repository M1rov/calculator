import React, {useState} from 'react';
import './Calculator.scss'

const Calculator = () => {
  const [input, setInput] = useState('');

  const calculate = () => {
    // eslint-disable-next-line no-eval
    setInput(prev => eval(prev));

  }

  return (
    <div className="calculator">
      <div className="calculator__header">
        <input
          value={input}
          disabled
          type="text"
          className="calculator__screen"
        />
      </div>
      <table className='calculator__operators'>
        <tr>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}7`)}
            >
              7
            </button>
          </td>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}8`)}
            >
              8
            </button>
          </td>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}9`)}
            >
              9
            </button>
          </td>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}+`)}
            >
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}6`)}
            >
              6
            </button>
          </td>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}5`)}
            >
              5
            </button>
          </td>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}4`)}
            >
              4
            </button>
          </td>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}-`)}
            >
              -
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}3`)}
            >
              3
            </button>
          </td>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}2`)}
            >
              2
            </button>
          </td>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}1`)}
            >
              1
            </button>
          </td>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}/`)}
            >
              ÷
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClick={() => setInput('')}
            >
              C
            </button>
          </td>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}0`)}
            >
              0
            </button>
          </td>
          <td>
            <button
              onClick={calculate}
            >
              =
            </button>
          </td>
          <td>
            <button
              onClick={() => setInput(prev => `${prev}*`)}
            >
              x
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Calculator;