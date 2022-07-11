import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import { App } from './App';

createServer ({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
    return [
      {
        id: 1,
        title: 'Transaction 1',
        amount: 400,
        type: 'deposit',
        category: 'Food',
        createdAt: new Date()
      }
/*       {
        id: 3,
        title: 'Transaction 2',
        amount: 500,
        type: 'roubo',
        category: '1533',
        createdAt: new Date()
      } */
    ]   
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
