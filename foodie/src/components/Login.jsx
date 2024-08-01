import { Link } from "react-router-dom"
import "../component-Styles/Login.css"

export default function Login(){

    return(
        <div className="main-div">
          <div className="" style={{border:'solid 1px black',backgroundColor:'white',width:'390px',borderRadius:'10px',height:'440px',margin:'10% 0 0 35%'}}>
            <p className="login-head display-6"> Login</p>
            {/* <label className="login-txt">Username</label><br />
            <input className="login-box" type="text" placeholder="Username" /><br /> */}
            <label className="login-txt">Email</label><br />
            <input className="login-box" type="text" placeholder="Email" /><br />
            <label className="login-txt">Password</label><br />
            <input className="login-box"  type="text" placeholder="Password" />
            <div>
            <button className="login-btn">Login</button>
            <p className="para-sign">Are you sure for the Signup..?<Link style={{textDecoration:'none',color:'black',fontWeight:'bolder'}} to='/signup'>Please SignUp</Link></p>
            <Link to='/signup' className="btn border-2 login-btn1">SignUp</Link>

            </div>
          </div>
        </div>
    )
}