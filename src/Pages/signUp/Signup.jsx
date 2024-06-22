import React, { useState } from 'react'
import LoginSide from '../loginSide/LoginSide'
import facebook from '../../assets/button-facebook.png'
import google from '../../assets/button-google.png'
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const validationSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid Email"),
  email: Yup.string().required("Required").email("Invalid Email"),
  // password: Yup.string().required("Required").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password Not Match "),
});

export default function Signup() {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  function showPass() {
    if (showPassword) {
      setShowPassword(false);
      document.getElementById("eye").classList.add('active')
    }
    else {
      setShowPassword(true);
      document.getElementById("eye").classList.remove('active')
    }
  }




  async function submitRegister(values) {
    // let { data } = await axios.post(`${baseUrl}/api/v1/auth/signin`, values)
    //     .catch((err) => {
    //         setloading(false);
    //         setError(err.response.data.message)  //catching the error
    //     })
    // console.log(data);
    // if (data.message == 'success') {
    //     localStorage.setItem('userToken',data.token)
    //     setIsLogin(data.token);
    //     setloading(false);
    //     setError("");
    //     console.log("hi");
    // }
    navigate('/');
  }


  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // validate: validation,
    validationSchema,
    onSubmit: submitRegister
  })
  return (

    <div className="body-wrapper">
      <div className="form-section">
        <div className="form-container">
          <div className="upper-head">
            <Link to="/" className="logo">
              <h2>ملاعب</h2>
            </Link>
          </div>
          <form action="" className="login-form" onSubmit={formik.handleSubmit}>
            <div className="form-cont">
              <h2 className="form-head">اهلا بيك انشآ حساب</h2>
              <div className="register-ancor">
                <span className="register-span">لديك حساب بالفعل؟ </span>
                <a href="login" className="register-btn"> تسجيل دخول</a>
              </div>
              <div className="form-group">
                <label className="form-label">اسمك</label>
                <input type="text" className="form-input custom-input" />
              </div>
              <div className="form-group">
                <label className="form-label">البريد الالكتروني</label>
                <input type="email" className='form-input custom-input' id='email' name='email' placeholder='البريد الالكترونى' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              </div>
              <div className="form-group">
                <label className="form-label">كلمة السر</label>
                <div className="form-input-relative">
                  <span className="icon-placeholder">
                    <i className="las la-lock"></i>
                  </span>
                  <label className="password-show" id='password-show'>
                    <input type="checkbox"
                      onClick={showPass}
                    />
                    <i className="iconsax" icon-name="eye" id='eye'></i>
                  </label>
                  <input type={showPassword ? "text" : "password"} className="form-input custom-input" placeholder="كلمة المرور" />
                </div>
              </div>
              <div className="form-btn-cont">
                <button className="form-btn" type="submit">انشاء حساب</button>
              </div>
              <div className="social-login">
                <a href="#d">
                  <img src={facebook} alt="social-login" />
                </a>
                <a href="#d">
                  <img src={google} alt="social-login" />
                </a>
              </div>
            </div>
          </form>
          <p className="copy-right">حقوق النشر © 2017 ملاعب مصر</p>
        </div>
      </div>
      <LoginSide></LoginSide>
    </div>
  )
}
