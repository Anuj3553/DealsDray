import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import DashBord from "./components/DashBord";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";


function App() {
  return (<div className="bg-neutral-300 h-auto w-screen">
   <p className="text-black-500 font-bold text-3xl p-7"><u>DealsDray Online Pvt Ltd.</u></p>
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/'></Route>
        <Route element={<Registration/>} path='/register'/>
        <Route element={<DashBord/>} path='/dashbord/:ID'/>
        <Route element={<CreateEmployee/>} path='create-employee'/>
        <Route element={<EmployeeList/>} path="/employee-list"/>
        <Route element={<EditEmployee/>} path="/edit-employee/:ID"/>
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
