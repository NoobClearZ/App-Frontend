import LandingNav from "../components/LandingNav"
import '../assets/css/landing-nav.css'
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/users", {
                name: name,
                email: email,
                password: password,
                confirmpassword: confirmpassword
            })
            navigate('/login')
        } catch (error) {
            if (error.response) {
                console.log(error)
            }
        }
    }

    return(
        <>
            <LandingNav/>
            <div className='login-container'>
                <div className='box-shadow'>
                    <form onSubmit={Register}>
                        <div className='hr'>
                            <span className='pan'>Daftar</span>
                        </div>
                        <div className='card-body'>
                            <p className="wide">Daftar Akun Baru</p>
                            <div className='form-group'>
                                <label className='form-label'>Nama Lengkap</label>
                                <input type='text' placeholder='Masukkan Nama Lengkap Anda' className='form-input' name='name' value={name} onChange={(e) => setName(e.target.value)} required/>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Email</label>
                                <input type='email' placeholder='Masukkan Alamat Email Anda' className='form-input' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Password</label>
                                <input type='password' placeholder='Masukkan Password Anda' className='form-input' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Konfirmasi Password</label>
                                <input type='password' placeholder='Masukkan Password Anda' className='form-input' name='confirmpassword' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='card-btn'>
                            <input type="submit" value="Daftar" className='btn-primary'/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register