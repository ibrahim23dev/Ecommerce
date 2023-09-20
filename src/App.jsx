import {useState} from 'react'
import Router from './Router/Routes';
import PubLicRoute from './Router/Route/publicRoute';
const App=()=>{
  const [allRoutes, setAllroute] = useState([...PubLicRoute])
  console.log(allRoutes);
  return<Router allRoutes={allRoutes} />
}

export default App;
