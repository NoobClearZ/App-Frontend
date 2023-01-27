import LandingNav from './LandingNav';
import '../assets/css/landing-nav.css'


export default function Login(){
    return(
        <>
            <LandingNav/>
            <div className='login-container'>
                <div className='box-shadow'>
                    <form>
                        <div className='hr'>
                            <span className='pan'>Login</span>
                        </div>
                        <div className='card-body'>
                            <p>Jika anda memiliki akun, masuk dengan email anda</p>
                            <div className='form-group'>
                                <label className='form-label'>Email</label>
                                <input type='email' placeholder='Masukkan Alamat Email Anda' className='form-input' name='email'/>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Password</label>
                                <input type='password' placeholder='Masukkan Password Anda' className='form-input' name='password'/>
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