
import './App.css';
import { useState } from 'react';
import BballData from './components/bball-data';


function App() {
    const [value, setValue] = useState("");

    return (
        <div className="container flex-center">
            <div className="search-box flex-center">
                Basketball teams (2019-2020)
            </div>
              <BballData />
        </div>
    );
}

export default App;
