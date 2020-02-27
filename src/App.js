import React from 'react'; 
import './App.css';
import NavBar from './components/NavBar';
import SimpleTable from './components/DataTable'

function App() {
  return (
    <div className="App">
      <NavBar/>  
      <SimpleTable/>
    </div>
  );
}

export default App;
