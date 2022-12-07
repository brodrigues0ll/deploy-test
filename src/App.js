import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [taskArr, setTaskArr] = useState([]);



  function add() {
    setTaskArr([...taskArr, input]);
    document.querySelector('input').value = '';
  }

  function remove({ target }) {
    const index = target.parentNode.parentNode.rowIndex;
    const table = document.querySelector('table');
    table.deleteRow(index);
  }


  return (
    <div className="App">
      <h1>Task List</h1>

      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button type='button' onClick={add}>Add</button>

      <div className='table'>
        <table >
          <thead>
            <tr key="">
              <th>Task</th>
            </tr>
            <tr key=""></tr>
          </thead>

          <tbody>
            {taskArr.map((item, index) => (
              <tr key={index}>
                <td>
                  {item}
                  <p onClick={remove}>✖</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
