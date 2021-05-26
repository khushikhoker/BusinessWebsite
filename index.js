import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

{/* <div className="container-fluid nav bg">
    <div className='row'>
        <div classname="col-10 mx-auto">
            
        </div>
    </div>
</div> */}