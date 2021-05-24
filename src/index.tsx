import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

createServer({
  routes () {
    //the server will run on the /api folder
    this.namespace = 'api'
  
    //the 
    this.get("/transactions", () => {
      return [
              { 
                id: 1,
                title: "Transação 1",
                amount: 400,
                type: 'deposit',
                category: 'Food',
                createdAt: new Date().toLocaleString()
              }
            ]
    })
  }

})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
