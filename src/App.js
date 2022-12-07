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

      <table>
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
                <button onClick={remove}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

//    <div>
{/* <table>
<thead>
  <tr>
    <th>Name</th>
    <th>Rotation Period</th>
    <th>Orbital Period</th>
    <th>Diameter</th>
    <th>Climate</th>
    <th>Gravity</th>
    <th>Terrain</th>
    <th>Surface Water</th>
    <th>Population</th>
    <th>Films</th>
    <th>Created</th>
    <th>Edited</th>
    <th>URL</th>
  </tr>
</thead>
{planetList.length > 0 && (
  <tbody>
    {planetList.map((item, index) => (
      <tr key={ index }>
        <td>{item.name}</td>
        <td>{item.rotation_period}</td>
        <td>{item.orbital_period}</td>
        <td>{item.diameter}</td>
        <td>{item.climate}</td>
        <td>{item.gravity}</td>
        <td>{item.terrain}</td>
        <td>{item.surface_water}</td>
        <td>{item.population}</td>
        <td>
          {item.films.map((film, filmIndex) => (
            <p key={ filmIndex }>{ film }</p>))}
        </td>
        <td>{item.created}</td>
        <td>{item.edited}</td>
        <td>{item.url}</td>
      </tr>
    ))}
  </tbody>
)}
</table>
</div> */}