import LandingNav from '../components/LandingNav';
import '../assets/css/landing-nav.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const Auth = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            })
            navigate('/dashboard')
        } catch (error) {
            if(error.response) {
                console.log(error)
            }
        }
    }

    return(
        <>
            <LandingNav/>
            <div className='login-container'>
                <div className='box-shadow'>
                    <form onSubmit={Auth}>
                        <div className='hr'>
                            <span className='pan'>Login</span>
                        </div>
                        <div className='card-body'>
                            <p>Jika anda memiliki akun, masuk dengan email anda</p>
                            <div className='form-group'>
                                <label className='form-label'>Email</label>
                                <input type='email' placeholder='Masukkan Alamat Email Anda' className='form-input' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Password</label>
                                <input type='password' placeholder='Masukkan Password Anda' className='form-input' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className='card-btn'>
                            <button className='btn-primary'>Masuk</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
} 

export default Login