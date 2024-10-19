import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import store from './redux/store'; 
import App from './App'; 


//Jag är medveten om att jag anväder ett äldre sätt , men jag fastnade med min css när jag använde den metod som finns i den nya versionen av react/ den läraren visade på lektionen.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
