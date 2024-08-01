import Usernavbar from "./Navbar";
import '../component-Styles/Contact.css';
import Footer from "./Footer";

export default function Contact() {
    return (
        <div>
            <Usernavbar />
            <div className="contact-pic">
                <img src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/health/images/2024/5/13/spices.jpg" alt="pic" style={{ width:'100%',height:'83vh' }} />
                <div className="contact-content">
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>
                    
                    <p className="contact-title">Contact</p>
                    
                </div>
            </div><br />
            <div style={{display:'flex',margin:'50px 0 50px 40px'}}>
                <div style={{border:'solid 1px #dddd',width:'400px',height:'auto',borderRadius:'10px',margin:'auto 30px' }}>
                    <img src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/health/images/2024/5/13/spices.jpg"
                    style={{width:'400px',height:'300px',borderRadius:'10px 10px 0 0'}} alt="pic" />
                    <p style={{justifyContent:'center',textAlign:'center',marginTop:'10px',}}>m klnvlndsnv;n</p>
                </div>

                <div style={{border:'solid 1px #dddd',width:'400px',height:'auto',borderRadius:'10px',margin:'auto 30px'}}>
                    <img src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/health/images/2024/5/13/spices.jpg"
                    style={{width:'400px',height:'300px',borderRadius:'10px 10px 0 0'}} alt="pic" />
                    <p style={{justifyContent:'center',textAlign:'center',marginTop:'10px'}}>m klnvlndsnv;n</p>
                </div>

                <div style={{border:'solid 1px #dddd',width:'400px',height:'auto',borderRadius:'10px', margin:'auto 30px'}}>
                    <img src="https://img.onmanorama.com/content/dam/mm/en/lifestyle/health/images/2024/5/13/spices.jpg"
                    style={{width:'400px',height:'300px',borderRadius:'10px 10px 0 0'}} alt="pic" />
                    <p style={{justifyContent:'center',textAlign:'center',marginTop:'10px'}}>m klnvlndsnv;n</p>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}
