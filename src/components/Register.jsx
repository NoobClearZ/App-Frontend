import LandingNav from "./LandingNav"
import '../assets/css/landing-nav.css'

export default function Register(){
    return(
        <>
            <LandingNav/>
            <div className='login-container'>
                <div className='box-shadow'>
                    <form>
                        <div className='hr'>
                            <span className='pan'>Register</span>
                        </div>
                        <div className='card-body'>
                            <p className="wide">Daftar Akun Baru</p>
                            <div className='form-group'>
                                <label className='form-label'>Nama Lengkap</label>
                                <input type='text' placeholder='Masukkan Nama Lengkap Anda' className='form-input' name='nama' required/>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Email</label>
                                <input type='email' placeholder='Masukkan Alamat Email Anda' className='form-input' name='email' required/>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Password</label>
                                <input type='password' placeholder='Masukkan Password Anda' className='form-input' name='password' required/>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Konfirmasi Password</label>
                                <input type='password' placeholder='Masukkan Password Anda' className='form-input' name='confirmpassword'/>
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