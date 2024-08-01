import '../component-Styles/Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";






export default function Footer(){

    return(
        <div>
            <footer className="footer">
                <p className="footer-head">&copy; 2024click a foto.all rights reserved</p>

                <div className='footer-body'>
                    <section className='col-lg-3'>
                    <p style={{display:'flex',position:'absolute',margin:'4% 76% 0 0px'}}>Spices are aromatic substances derived from plants, used to enhance the flavor and aroma of food. They come in various forms, such as powders, seeds, or dried herbs, adding depth and complexity to dishes worldwide.</p>

                        <div className='logo'> <h3 style={{fontFamily:'cursive',color:'#cc8f1f',}}><i>SPi <br /> CES</i></h3></div>

                    </section>

                    <section className='col-lg-3'>
                    <span className='body-head'>Quick Link</span>
                    <li className='li'><Link className='text-decoration-none foot-li' to='/'><p><span >Home</span></p></Link></li>
                    <li className='li'><Link className='text-decoration-none foot-li' to='/about'><p><span >About Us</span></p></Link></li>
                    <li className='li'><Link className='text-decoration-none foot-li' to='/contact'><p><span >Contacts</span></p></Link></li>
                    </section>

                    <section className='col-lg-3'>
                    <span className='body-head'>Catagory</span>
                    <li className='li'><Link className='text-decoration-none foot-li' to='/spice'><p><span>Spices</span></p></Link></li>
                    <li className='li'><Link className='text-decoration-none foot-li' to='/masala'><p><span>Masalas</span></p></Link></li>
                    <li className='li'><Link className='text-decoration-none foot-li' to='/pickle'><p><span>Pickles</span></p></Link></li>

                    </section>

                    <section className='col-lg-3'>
                    <span className='body-head-1'>Contact</span>
                   <p><span> Phone :+91 6839489649</span><span style={{margin:'5px 0 0 31%'}}> :+91 6839489649</span></p>
                    <p><span>Mail : infospice@gmail.com</span></p>
                    {/* <p><span>address address address address address address</span></p> */}

                    </section>
                </div>
                    <section className='col-lg-12 social-icon'>
                    <p className='icons'><FaFacebookF /></p>
                    <p className='icons'><FaXTwitter/></p>
                    <p className='icons'><FaLinkedinIn/></p>
                    <p className='icons'><FiInstagram/></p>
                    </section>
                  <div>
                    {/* <u style={{margin:'10px 20px 0 39%'}}>*_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*</u> */}
                    </div>
                <br />
            </footer>
        </div>
    )
}