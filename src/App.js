import logo from './logo.svg';
import './App.css';
import LoginSignup from './Login_Signup';
import ShopersStop from './Shopers_Stop';
import AddItem from './components/addItems';
import CheckItem from './components/checkItems';
import Item from './components/Item';

import Upload from './upload';

import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginSignup />}/>
        <Route path='/Shopers_Stop' element={<ShopersStop />}/>
        <Route path='/Shopers_Stop/Add_Items' element={<AddItem />}/>
        <Route path='/Shopers_Stop/Check_Items' element={<CheckItem />}/>
        <Route path='/Shopers_Stop/Item' element={<Item />}/>
        {/* <Route path='/' element={<Upload />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
