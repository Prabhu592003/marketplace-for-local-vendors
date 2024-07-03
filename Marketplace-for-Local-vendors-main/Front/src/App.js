
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Loginuser from './componentsuser/Loginuser/Loginuser';
import Logincustomer from './componentcustomer/logincus/Logincustomer';
import CustomerdashBoard from './componentcustomer/Customerdashboard/CustomerdashBoard';
import NavbarUser from './componentsuser/Navbar/NavbarUser';
import Createproduct from './componentsuser/createproduct/Createproduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Productlayoutuser from './componentsuser/productlayoutuser/Productlayoutuser';
import Createcusthread from './componentcustomer/Customercusthread/Createcusthread';
import Customernavbar from './componentcustomer/customernavbar/Customernavbar';
import Yourthreads from './componentcustomer/Customerthreads/Yourthreads';
import Userthreads from './componentsuser/UserThreads/UserThreads';




function App() {
  return (
    <div>
      <ToastContainer />
     <BrowserRouter>
     <Routes>
      
      <Route path = "/" element={<Home/>}/>
      <Route path = "/Loginuser" element={<Loginuser/>}/>
      <Route path = "/Logincustomer" element={<Logincustomer/>}/>
      <Route  path='/customernavbar' element={<Customernavbar/>}> 
        <Route path = "Customerdashboard" element={<CustomerdashBoard/>}/>
        <Route path='CreatecusThread' element={<Createcusthread/>}/>
        <Route path='Customerthreads' element={<Yourthreads/>}/></Route>
       
     
      
      <Route path="/navbaruser" element={<NavbarUser/>} >
      <Route path = "Createproduct"  element={<Createproduct/>}/>
      <Route path ="productlayoutuser" element={<Productlayoutuser/>}/>
      <Route path ="userthreads" element={<Userthreads/>}/>

      </Route>
      

      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
