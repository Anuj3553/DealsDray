// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'


// const EditEmployee = () => {
//   let [name, setName] = useState("")
//   let [email, setEmail] = useState('')
//   let [phone, setPhone] = useState()
//   let [designation, setDesignation] = useState()
//   let [gender, setGender] = useState()
//   let [courses, setCourses] = useState([])
//   let [image, setImage] = useState()


//   let idObj = useParams()
//   let navigate = useNavigate()
//   useEffect(() => {
//     axios.get(`http://localhost:4001/employee-list/${idObj.ID}`)
//       .then((e) => {
//         setName(e.data.name);
//         setEmail(e.data.email);
//         setPhone(e.data.phone)
//         setDesignation(e.data.designation)
//         setGender(e.data.gender)
//         setCourses(e.data.course)
//       })
//       .catch(() => { console.log("erro"); })
//   }, [])

//   // checkBox handling
//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setCourses([...courses, value]);
//     } else {
//       setCourses(courses.filter(course => course !== value));
//     }
//   };

//   let formHandle = (e) => {
//     e.preventDefault()
//     let payload = {
//       name: name,
//       email: email,
//       phone: phone,
//       image: image,
//       designation: designation,
//       gender: gender,
//       course: courses
//     }
//     axios.put(`http://localhost:4001/employee-list/${idObj.ID}`, payload, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//       .then((e) => { alert(e.data); })
//       .catch(() => { console.log("err "); })

//     navigate("/employee-list")

//   }

//   return (
//     <div className=' max-w-[940px]  h-[600px] border-4 border-blue-900 mx-auto relative top-[-90px] shadow-xl scale-75 p-[30px]'>
//       <h1 className='text-center font-bold text-2xl my-3'>Update Employee Data</h1>
//       <div className='border border-red-600 max-w-[300px] mx-auto my-5 p-10'>
//         <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Enter Full Name' type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
//         <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Enter Email' type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
//         <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Enter Phone Number' type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} />

//         {/* designation dropdown */}


//         <label htmlFor="">Designation</label>
//         <select name="gender" value={designation} onChange={(e) => setDesignation(e.target.value)} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
//           <option value="HR">HR</option>
//           <option value="Manager">Manager</option>
//           <option value="Sales">Sales</option>
//         </select>


//         {/* Gender radio button */}

//         <label htmlFor="">Gender : </label><br />
//         <input type="radio" id="male" name="gender" value="Male" checked={gender == 'Male'} onChange={(e) => setGender(e.target.value)} />
//         <label htmlFor="male"> Male </label>
//         <input type="radio" id="female" name="gender" value="Female" checked={gender == 'Female'} onChange={(e) => setGender(e.target.value)} />
//         <label htmlFor="female"> Female </label><br />

//         {/* Courses check boxes */}

//         <label>Course :</label><br />
//         <input type="checkbox" id="MCA" name="course" value="MCA" checked={courses.includes('MCA')} onChange={handleCheckboxChange} />
//         <label htmlFor="MCA"> MCA </label>
//         <input type="checkbox" id="BCA" name="course" value="BCA" checked={courses.includes('BCA')} onChange={handleCheckboxChange} />
//         <label htmlFor="BCA"> BCA </label>
//         <input type="checkbox" id="BSC" name="course" value="BSC" checked={courses.includes('BSC')} onChange={handleCheckboxChange} />
//         <label htmlFor="BSC"> BSC </label>


//         <label htmlFor="">Upload your photo</label><br />
//         <input className="" type="file" name='image' onChange={(e) => { setImage(e.target.files[0]) }} /><br />
//         <button className='bg-red-300 ml-5 rounded-lg p-1' onClick={formHandle}> Update Changes</button>
//       </div>

//     </div>
//   )
// }

// export default EditEmployee




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditEmployee = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [gender, setGender] = useState('');
//   const [courses, setCourses] = useState([]);
//   const [image, setImage] = useState();

//   const { ID } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:4001/employee-list/${ID}`)
//       .then((response) => {
//         setName(response.data.name);
//         setEmail(response.data.email);
//         setPhone(response.data.phone);
//         setDesignation(response.data.designation);
//         setGender(response.data.gender);
//         setCourses(response.data.course);
//       })
//       .catch(() => {
//         console.log("Error fetching employee data.");
//       });
//   }, [ID]);

//   // Checkbox handling
//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setCourses([...courses, value]);
//     } else {
//       setCourses(courses.filter(course => course !== value));
//     }
//   };

//   const formHandle = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("phone", phone);
//     formData.append("designation", designation);
//     formData.append("gender", gender);
//     formData.append("course", courses);
//     if (image) {
//       formData.append("image", image);
//     }

//     axios.put(`http://localhost:4001/employee-list/${ID}`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//       .then((response) => {
//         alert(response.data);
//         navigate("/employee-list");
//       })
//       .catch(() => {
//         console.log("Error updating employee data.");
//       });
//   };

//   return (
//     <div className='max-w-[940px] h-[600px] border-4 border-blue-900 mx-auto relative top-[-90px] shadow-xl scale-75 p-[30px]'>
//       <h1 className='text-center font-bold text-2xl my-3'>Update Employee Data</h1>
//       <div className='border border-red-600 max-w-[300px] mx-auto my-5 p-10'>
//         <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Full Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Phone Number' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

//         {/* Designation dropdown */}
//         <label htmlFor="designation">Designation</label>
//         <select name="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
//           <option value="HR">HR</option>
//           <option value="Manager">Manager</option>
//           <option value="Sales">Sales</option>
//         </select>

//         {/* Gender radio button */}
//         <label htmlFor="gender">Gender: </label><br />
//         <input type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
//         <label htmlFor="male"> Male </label>
//         <input type="radio" id="female" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
//         <label htmlFor="female"> Female </label><br />

//         {/* Courses checkboxes */}
//         <label>Course: </label><br />
//         <input type="checkbox" id="MCA" name="course" value="MCA" checked={courses.includes('MCA')} onChange={handleCheckboxChange} />
//         <label htmlFor="MCA"> MCA </label>
//         <input type="checkbox" id="BCA" name="course" value="BCA" checked={courses.includes('BCA')} onChange={handleCheckboxChange} />
//         <label htmlFor="BCA"> BCA </label>
//         <input type="checkbox" id="BSC" name="course" value="BSC" checked={courses.includes('BSC')} onChange={handleCheckboxChange} />
//         <label htmlFor="BSC"> BSC </label><br />

//         {/* File upload */}
//         <label htmlFor="image">Upload your photo</label><br />
//         <input type="file" name='image' onChange={(e) => setImage(e.target.files[0])} /><br />
//         <button className='bg-red-300 ml-5 rounded-lg p-1' onClick={formHandle}> Update Changes</button>
//       </div>
//     </div>
//   );
// };

// export default EditEmployee;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const SERVER_PORT = process.env.SERVER_PORT || "http://localhost:4001";

const EditEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [courses, setCourses] = useState([]);

  const { ID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${SERVER_PORT}/employee-list/${ID}`)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setDesignation(response.data.designation);
        setGender(response.data.gender);
        setCourses(response.data.course);
      })
      .catch(() => {
        console.log("Error fetching employee data.");
      });
  }, [ID]);

  // Checkbox handling
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCourses([...courses, value]);
    } else {
      setCourses(courses.filter(course => course !== value));
    }
  };

  const formHandle = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      designation,
      gender,
      course: courses
    };

    axios.put(`${SERVER_PORT}/employee-list/${ID}`, formData)
      .then((response) => {
        alert(response.data);
        navigate("/employee-list");
      })
      .catch(() => {
        console.log("Error updating employee data.");
      });
  };

  return (
    <div className='max-w-[940px] h-[600px] border-4 border-blue-900 mx-auto relative top-[-90px] shadow-xl scale-75 p-[30px]'>
      <h1 className='text-center font-bold text-2xl my-3'>Update Employee Data</h1>
      <div className='border border-red-600 max-w-[300px] mx-auto my-5 p-10'>
        <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Full Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Phone Number' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

        {/* Designation dropdown */}
        <label htmlFor="designation">Designation</label>
        <select name="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>

        {/* Gender radio button */}
        <label htmlFor="gender">Gender: </label><br />
        <input type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
        <label htmlFor="male"> Male </label>
        <input type="radio" id="female" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
        <label htmlFor="female"> Female </label><br />

        {/* Courses checkboxes */}
        <label>Course: </label><br />
        <input type="checkbox" id="MCA" name="course" value="MCA" checked={courses.includes('MCA')} onChange={handleCheckboxChange} />
        <label htmlFor="MCA"> MCA </label>
        <input type="checkbox" id="BCA" name="course" value="BCA" checked={courses.includes('BCA')} onChange={handleCheckboxChange} />
        <label htmlFor="BCA"> BCA </label>
        <input type="checkbox" id="BSC" name="course" value="BSC" checked={courses.includes('BSC')} onChange={handleCheckboxChange} />
        <label htmlFor="BSC"> BSC </label><br />

        <button className='bg-red-300 ml-5 rounded-lg p-1' onClick={formHandle}>Update Changes</button>
      </div>
    </div>
  );
};

export default EditEmployee;
