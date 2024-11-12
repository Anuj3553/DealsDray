// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import { Link, useParams } from 'react-router-dom'
// import Button from '@mui/material/Button';

// const DashBord = () => {
//   let [name, setname] = useState("")
//   let ID = useParams()

//   useEffect(()=>{
//     axios.get(`http://localhost:4001/user/${ID.ID}`)
//     .then((e)=>{
//       setname(e.data)
    
//     })
//     .catch(()=>{console.log("unable to fetch data in Edit comp");})
// },[])

//   return (
//     <div>
//       <div id='navbar' className='bg-gray-300  '>
//         <ul className='flex gap-24 px-10'>
//           <li>Home</li>
//           <li><Button variant="text"><Link to='/create-employee'> Create Employee</Link></Button> </li>
//           <li><Button variant="text"><Link to="/employee-list">  Employee list </Link></Button> </li>
//           <li className='p-2 text-red-500 border border-dashed border-red-400 '>{name}</li>
//           <li>Logout</li>
//         </ul>
//       </div>
//       <h1 className='bg-yellow-200'>DashBord</h1>
//       <p>Wellcome to admin panel</p>
//     </div>
//   )
// }

// export default DashBord




import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
const SERVER_PORT = process.env.SERVER_PORT || "http://localhost:4001";

const DashBord = () => {
  let [name, setName] = useState("");
  let ID = useParams();

  useEffect(() => {
    axios.get(`${SERVER_PORT}/user/${ID.ID}`)
      .then((e) => {
        setName(e.data);
      })
      .catch(() => { console.log("Unable to fetch data in Dashboard component."); });
  }, [ID.ID]);

  return (
    <div>
      <div id='navbar' className='bg-pink-300'>
        <ul className='flex gap-24 px-10'>

         <li><Button variant="text"><Link to='/'>Home</Link></Button></li>
          {/* <li>Home</li> */}
          <li><Button variant="text"><Link to='/create-employee'>Create Employee</Link></Button></li>
          <li><Button variant="text"><Link to="/employee-list">Employee List</Link></Button></li>
          <li className='p-3 text-red-600 border border-dashed border-blue-600'>{name}</li>
          <li><Button variant="text"><Link to='/'>Logout</Link></Button></li>
        </ul>
      </div>
      <h1 className='bg-yellow-200'>Dashboard</h1>
      <p>Welcome to the Admin panel....</p>
    </div>
  );
}

export default DashBord;
