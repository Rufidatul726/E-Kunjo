import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <h1>E-KUNJO</h1>
        <h3>A GOOD HELP FOR PLANT-LOVERS</h3>
      </header>
      <body className="App-body">
        <div className='App-Servdiv' id='App-OurServices'>
          <h1>Our Services</h1>
        </div>
        <div className='App-Servdiv'>
            <ul>
                <div className='Services'><li>Find Nursery</li></div>
                <div className='Services'><li>Get Plant Information</li></div>
                <div className='Services'><li>Get Fertilizer Amount</li></div>
                <div className='Services'><li>Detect Disease</li></div>
            </ul>
        </div>
      </body>
    </div>
  );
}

export default App;
