import { useState } from "react"
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Signup(){

    const[name, setName]=useState("")
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const validatePassword = (password) => {
        const errors = {};
        if (password.length < 6) {
            errors.length = "Password must be at least 6 characters long.";
        }
        if (!/\d/.test(password)) {
            errors.number = "Password must contain at least one number.";
        }
        if (!/[!@#$%^&*]/.test(password)) {
            errors.specialChar = "Password must contain at least one special character.";
        }
        return errors;
    };

    const validateEmail = (email) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = "Please enter a valid email address.";
        }
        return errors;
    };


    const handleSubmit = (e)=>{
        e.preventDefault();
        const passwordErrors = validatePassword(password);
        const emailErrors = validateEmail(email);
        const allErrors = {...passwordErrors, ...emailErrors};

        if (Object.keys(allErrors).length>0){
            setErrors(allErrors);
            toast.error("Validation failed. Please correct the errors and try again.", {
                position: "top-center",
            });
            return;
        }

        axios.post('http://localhost:5000/api/foods/signup', {
            name: name,
            mail: email,
            password: password
        })
        .then(res => {
            const json = res.data;
            console.log(json);
            if (json.success) {
                toast.success(`${name} has been registered successfully!`, {
                    position: "top-center",
                });
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                toast.error(json.message || "Enter valid credentials", {
                    position: "top-center",
                });
            }
        })
        .catch(err => {
            console.log(err);
            toast.error("An error occurred. Please try again.", {
                position: "top-center",
            });
        });
    
    };

    return(

        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-5 rounded w-20" style={{border: 'solid 1px black'}}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input 
                            type="text" 
                            placeholder='Enter name'
                            autoComplete='off' 
                            name='name' 
                            className='form-control rounded' 
                            onChange={(e) => setName(e.target.value)}
                            value={name} 
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="email" 
                            placeholder='Enter email' 
                            autoComplete='off' 
                            name='email' 
                            className='form-control rounded'
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setErrors(validateEmail(e.target.value));
                            }}
                            value={email} 
                        />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password" 
                            placeholder='Enter password'
                            name='password' 
                            className='form-control rounded' 
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setErrors(validatePassword(e.target.value));
                            }}
                            value={password} 
                        />
                        {errors.length && <p className="text-danger">{errors.length}</p>}
                        {errors.number && <p className="text-danger">{errors.number}</p>}
                        {errors.specialChar && <p className="text-danger">{errors.specialChar}</p>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded'>Register</button>
                </form>

                <p>Already have an account? <Link to='/login' style={{textDecoration: "none", color: 'black', fontWeight: "bold"}}>Please login here</Link></p>
                <Link to="/login" className="btn btn-default border w-100 rounded text-decoration-none" style={{backgroundColor: '#bb96f7'}}>
                    Login
                </Link>
                <ToastContainer />
            </div>
        </div>
    )
}