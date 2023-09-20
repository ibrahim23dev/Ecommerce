import {lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Store from './store/index';
const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={Store}>
    <Suspense>
      <App />
      </Suspense>
      </Provider>
  </BrowserRouter>
);
