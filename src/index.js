import {createRoot} from 'react-dom/client';
//import {App} from './App';
import React from 'react';
import Postit from './components/Postit';



const container = document.getElementById('root');
const root = createRoot(container);

//<App />

root.render(
        <Postit/>)
    






