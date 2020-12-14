import './App.css';
import {configNotification} from './Services/firbaseService';

function App() {
  return (
    <div>
        <button onClick={configNotification}>configNotification</button>
    </div>
  );
}

export default App;
