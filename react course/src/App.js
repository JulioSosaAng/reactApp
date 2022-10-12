import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import GreetingSyled from './components/pure/greetingSyled';
import Clock from './components/pure/classToFuncional';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
          {/* componente de listado de tareas */}
          {/* <GreetingSyled name='Julio'></GreetingSyled> */}
          {/* ejercicio clock segundo ejercicio */}
          {/* <Clock></Clock> */}
         
          {/* gestion de eventos */}
          <Father></Father>
          {/* <TaskListComponent></TaskListComponent> */}
          
      {/* </header> */}
     
    </div>
  );
}

export default App;
