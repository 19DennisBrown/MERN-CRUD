

import  './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './routes/Create';
import Update from './routes/Update';
import Users from './routes/Users';

const App = () => {
  return ( 
    <BrowserRouter>
      <main className="">
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </main>
    </BrowserRouter>
   );
}
 
export default App;