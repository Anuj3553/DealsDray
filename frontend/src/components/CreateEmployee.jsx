// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from "axios"
// const CreateEmployee = () => {
//     let navigate = useNavigate();
//     let [name, setName] = useState("")
//     let [email, setEmail] = useState('')
//     let [phone, setPhone] = useState()
//     let [designation, setDesignation] = useState()
//     let [gender, setGender] = useState("")
//     let [course, setCourse] = useState([])
//     let [image, setImage] = useState()

//     let formHandle = (e) => {
//         e.preventDefault()
//         let payload = {
//             name: name,
//             email: email,
//             phone: phone,
//             image: image,
//             designation: designation,
//             gender: gender,
//             course: course
//         }

//         if (!name || !email || !phone || !designation || !gender || !course || !image) {
//             alert("To Create Employee Fill all the fields..!")
//         }
//         else {
//             axios.post("http://localhost:4001/employees", payload, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             })
//                 .then((e) => { alert(e.data) })
//                 .catch(() => { console.log("can not register"); })

//             navigate("/employee-list")
//         }}

//         let handleCourseChange = (e) => {
//             const course1 = e.target.value;
//             const isChecked = e.target.checked;
//             if (isChecked) {
//                 setCourse(course.concat(course1));
//             }
//             else {
//                 setCourse(course.filter(item => item !== course1));
//             }
//         };

//         return (
//             <div className=' max-w-[940px]  h-[600px] border-4 border-blue-900 mx-auto relative top-[-80px] shadow-xl scale-75 p-[30px]'>
//                 <h1 className='text-center font-bold text-2xl my-3'>Create Employee</h1>
//                 <div className='border border-red-600 max-w-[300px] mx-auto my-5 p-8'>
//                     <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Enter Full Name' type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
//                     <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Enter Email' type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
//                     <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Enter Phone Number' type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} />

//                     {/* designation dropdown */}
//                     <label htmlFor="">Designation</label>
//                     <select onChange={(e) => { setDesignation(e.target.value); }} name='designation' required className="block appearance-auto w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
//                         <option value="HR">HR</option>
//                         <option value="Manager">Manager</option>
//                         <option value="Sales">Sales</option>
//                     </select>

//                     {/* Gender radio button */}
//                     <label htmlFor="">Gender : </label><br />
//                     <input type="radio" id="male" name="gender" value={gender} onChange={(e) => { setGender("Male") }} />
//                     <label for="male"> Male </label>
//                     <input type="radio" id="female" name="gender" value={gender} onChange={(e) => { setGender("Female") }} />
//                     <label for="female"> Female </label><br></br>

//                     {/* Courses check boxes */}
//                     <label>Course :</label><br />
//                     <input type="checkbox" id="MCA" name="course" value="MCA" checked={course.includes('MCA')} onChange={handleCourseChange} />
//                     <label for="MCA"> MCA </label>
//                     <input type="checkbox" id="BCA" name="course" value="BCA" checked={course.includes('BCA')} onChange={handleCourseChange} />
//                     <label for="BCA"> BCA </label>
//                     <input type="checkbox" id="BSC" name="course" value="BSC" checked={course.includes('BSC')} onChange={handleCourseChange} />
//                     <label for="BSC"> BSC </label><br />

//                     {/* file upload */}
//                     <label htmlFor="">Upload your photo</label><br />
//                     <input accept="image/jpeg, image/png" type="file" name='image' onChange={(e) => { setImage(e.target.files[0]) }} /><br />

//                     <button className='bg-red-300 ml-5 rounded-lg p-1' onClick={formHandle}>Register Me</button>
//                 </div>

//             </div>
//         )
//     }

//     export default CreateEmployee




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const CreateEmployee = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [gender, setGender] = useState('');
//   const [course, setCourse] = useState([]);
//   const [image, setImage] = useState();

//   const formHandle = (e) => {
//     e.preventDefault();

//     if (!name || !email || !phone || !designation || !gender || course.length === 0 || !image) {
//       alert("To create an employee, please fill out all fields.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("phone", phone);
//     formData.append("image", image);
//     formData.append("designation", designation);
//     formData.append("gender", gender);
//     formData.append("course", JSON.stringify(course)); // Convert array to JSON string

//     axios.post("http://localhost:4001/employees", formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//     .then((response) => {
//       alert(response.data);
//       navigate("/employee-list");
//     })
//     .catch(() => {
//       console.log("Cannot register employee.");
//     });
//   };

//   const handleCourseChange = (e) => {
//     const courseValue = e.target.value;
//     const isChecked = e.target.checked;
//     if (isChecked) {
//       setCourse([...course, courseValue]);
//     } else {
//       setCourse(course.filter(item => item !== courseValue));
//     }
//   };

//   return (
//     <div className='max-w-[940px] h-[600px] border-4 border-blue-900 mx-auto relative top-[-80px] shadow-xl scale-75 p-[30px]'>
//       <h1 className='text-center font-bold text-2xl my-3'>Create Employee</h1>
//       <div className='border border-red-600 max-w-[300px] mx-auto my-5 p-8'>
//         <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Full Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Phone Number' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

//         {/* Designation dropdown */}
//         <label htmlFor="designation">Designation</label>
//         <select onChange={(e) => setDesignation(e.target.value)} name='designation' required className="block appearance-auto w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
//           <option value="">Select Designation</option>
//           <option value="HR">HR</option>
//           <option value="Manager">Manager</option>
//           <option value="Sales">Sales</option>
//         </select>

//         {/* Gender radio buttons */}
//         <label htmlFor="gender">Gender:</label><br />
//         <input type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={() => setGender("Male")} />
//         <label htmlFor="male"> Male </label>
//         <input type="radio" id="female" name="gender" value="Female" checked={gender === 'Female'} onChange={() => setGender("Female")} />
//         <label htmlFor="female"> Female </label><br />

//         {/* Courses checkboxes */}
//         <label>Course:</label><br />
//         <input type="checkbox" id="MCA" name="course" value="MCA" checked={course.includes('MCA')} onChange={handleCourseChange} />
//         <label htmlFor="MCA"> MCA </label>
//         <input type="checkbox" id="BCA" name="course" value="BCA" checked={course.includes('BCA')} onChange={handleCourseChange} />
//         <label htmlFor="BCA"> BCA </label>
//         <input type="checkbox" id="BSC" name="course" value="BSC" checked={course.includes('BSC')} onChange={handleCourseChange} />
//         <label htmlFor="BSC"> BSC </label><br />

//         {/* File upload */}
//         <label htmlFor="image">Upload your photo</label><br />
//         <input accept="image/jpeg, image/png" type="file" name='image' onChange={(e) => setImage(e.target.files[0])} /><br />

//         <button className='bg-red-300 ml-5 rounded-lg p-1' onClick={formHandle}>Register Me</button>
//       </div>
//     </div>
//   );
// };

// export default CreateEmployee;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SERVER_PORT = process.env.SERVER_PORT || "http://localhost:4001";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState([]);

  const formHandle = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !designation || !gender || course.length === 0) {
      alert("To create an employee, please fill out all fields.");
      return;
    }

    const formData = {
      name,
      email,
      phone,
      designation,
      gender,
      course
    };

    axios.post(`${SERVER_PORT}/employees`, formData)
      .then((response) => {
        alert(response.data);
        navigate("/employee-list");
      })
      .catch(() => {
        console.log("Cannot register employee.");
      });
  };

  const handleCourseChange = (e) => {
    const courseValue = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setCourse([...course, courseValue]);
    } else {
      setCourse(course.filter(item => item !== courseValue));
    }
  };

  return (
    <div className='max-w-[940px] h-[600px] border-4 border-blue-900 mx-auto relative top-[-80px] shadow-xl scale-75 p-[30px]'>
      <h1 className='text-center font-bold text-2xl my-3'>Create Employee</h1>
      <div className='border border-red-600 max-w-[300px] mx-auto my-5 p-8'>
        <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Full Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Phone Number' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

        {/* Designation dropdown */}
        <label htmlFor="designation">Designation</label>
        <select onChange={(e) => setDesignation(e.target.value)} name='designation' required className="block appearance-auto w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>

        {/* Gender radio buttons */}
        <label htmlFor="gender">Gender:</label><br />
        <input type="radio" id="male" name="gender" value="Male" checked={gender === 'Male'} onChange={() => setGender("Male")} />
        <label htmlFor="male"> Male </label>
        <input type="radio" id="female" name="gender" value="Female" checked={gender === 'Female'} onChange={() => setGender("Female")} />
        <label htmlFor="female"> Female </label><br />

        {/* Courses checkboxes */}
        <label>Course:</label><br />
        <input type="checkbox" id="MCA" name="course" value="MCA" checked={course.includes('MCA')} onChange={handleCourseChange} />
        <label htmlFor="MCA"> MCA </label>
        <input type="checkbox" id="BCA" name="course" value="BCA" checked={course.includes('BCA')} onChange={handleCourseChange} />
        <label htmlFor="BCA"> BCA </label>
        <input type="checkbox" id="BSC" name="course" value="BSC" checked={course.includes('BSC')} onChange={handleCourseChange} />
        <label htmlFor="BSC"> BSC </label><br />

        <button className='bg-red-300 ml-5 rounded-lg p-1' onClick={formHandle}>Register Me</button>
      </div>
    </div>
  );
};

export default CreateEmployee;
