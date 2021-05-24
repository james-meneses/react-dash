import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    // it's the  model (db table) we want to store on mirage
    // we have to set the type (in this case, Model, which comes from miragejs) 
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
       {
         id: 1, 
         title: 'Consultoria de SEO', 
         type: 'deposit',
         category: 'Dev',
         amount: 5000,
         createdAt: new Date('2021-05-20 10:00:00'),
       }, 
       {
         id: 2,
         title: 'Aluguel',
         type: 'withdraw',
         category: 'Contas',
         amount: 2100,
         createdAt: new Date('2021-05-21 12:00:00'),
       },
       {
         id: 3,
         title: 'Mercado',
         type: 'withdraw',
         category: 'Contas',
         amount: 800,
         createdAt: new Date('2021-05-18 21:00:00'),
       }
      ]
    })
  },
  routes () {
    //the server will run on the /api folder
    this.namespace = 'api'
  
    //the 
    this.get("/transactions", () => {
      return this.schema.all('transaction')
    })
  
    this.post('/transactions', (schema, request) => {
      // since we are sending data with js object format
      // we need to parse it to the JSON format
      const data = JSON.parse(request.requestBody)

      // schema is the database
      // here we create the model and assign the data
      return schema.create('transaction', data)
    })
  }

})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
