import React,{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const handlelogin = async () => {
        fetch('http://localhost:5000/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data._id !== undefined) {
                if(data.role == 'admin'){
                    navigate('/admin'); //admin login
                }
                else{
                    //users login
                    navigate("/todolistmain/" + data._id);
                }
                
            } else {
                // Handle unsuccessful login here if needed
                console.log('Login failed');
            }
        })
        .catch(error => {
            // Handle fetch error here
            console.error('Error during login:', error);
        });
    };
    

  return (
    <div id="app" className="min-w-[400px] w-1/2 mx-auto mt-16">
    <div className="max-w-4xl bg-violet-500 p-4 rounded-lg shadow-lg ">
    <div class="w-full max-w-xs mx-auto mt-6">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div> */}
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
        </div>
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
            
        </div>
        <div class="flex items-center justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handlelogin}>
                Sign In
            </button>
            
        </div>
        <p className='text-xs mt-4 text-center'>Don't have an account? <a href='/'><span class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Register</span></a> </p>
        </form>
        
    </div>
    </div>
    </div>
  )
}

export default Login