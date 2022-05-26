import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddAReview from './DashBoard/AddAReview';
import AddProduct from './DashBoard/AddProduct';
import DashBoard from './DashBoard/DashBoard';
import MakeAdmin from './DashBoard/MakeAdmin';
import ManageProduct from './DashBoard/ManageProduct';
import MyOrder from './DashBoard/MyOrder';
import MyProfile from './DashBoard/MyProfile';
import Home from './Home/Home';
import Login from './Page/Login';
import Navbar from './Page/Navbar';
import Notfound from './Page/Notfound';
import SignUp from './Page/SignUp';
import Footer from './Shared/Footer';
import RequireAuth from './Shared/RequireAuth';
import ToolsAndPartsDetails from './Tools/ToolsAndPartsDetails';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='dashboard' element={
          <RequireAuth>
          <DashBoard></DashBoard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='addReview' element={<AddAReview></AddAReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
        </Route>
        <Route path='/toolsParts/:toolsId' element={
          <RequireAuth>
            <ToolsAndPartsDetails></ToolsAndPartsDetails>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
