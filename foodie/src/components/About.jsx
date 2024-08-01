import Usernavbar from "./Navbar";
import '../component-Styles/About.css'
import Footer from "./Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function About(){
    useEffect(()=>{
        Aos.init({duration: 3000});
      },[]);

    return(
     <div>
        <Usernavbar/>
        
        <div className="about-head-image">
            <img src="https://images.ctfassets.net/3s5io6mnxfqz/3pLESMFjNopcam5J5qGcoT/0427544b060a8fd29e3c0b68281d56cf/AdobeStock_191057762.jpeg?w=1920"
            style={{width:'100%',height:'83vh'}} alt="pic" />

            <div className="about-head">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>
            {/* <div className="h2-1"> <p > Tasty <b>.</b> Healthy <b>.</b> Beauty</p> </div> */}
                <p className="about-title">About</p>
            </div>
            </div>

            <div className="about-container">
                <p className="about-para" data-aos="fade-left">The name Swastik Spices has been synonymous with purity and high quality. The invention of this invaluable household spice can be traced back to 1958, 
                     when two brands,Swastik and Three Mango were introduced together.Sri Damji Jeevaraj Shah laid down the roots of the brand in the year 1958 at Begum Bazar,
                     Hyderabad in the name ‘Swastik Mirch Store’ as quality ground spices manufacturers. 
                     As a brand, their mission is to provide unique culinary experiences and healthy living solutions for consumers.
                     Their unwavering determination is to improve the quality of life for consumers, customers, and workers by being inventive and consumer-centric.</p>
            </div>
            <div> 
                <img className="about-image" data-aos="zoom-in-up" src="https://www.efghfoods.com/wp-content/uploads/2023/06/Exploring-the-Rich-History-of-Indian-Spices.jpg" alt="pic" />
            </div><br />

            <div>
                <p className="about-para-1" data-aos="fade-right">The name Swastik Spices has been synonymous with purity and high quality. The invention of this invaluable household spice can be traced back to 1958, 
                     when two brands,Swastik and Three Mango were introduced together.Sri Damji Jeevaraj Shah laid down the roots of the brand in the year 1958 at Begum Bazar,
                     Hyderabad in the name ‘Swastik Mirch Store’ as quality ground spices manufacturers. 
                     As a brand, their mission is to provide unique culinary experiences and healthy living solutions for consumers.
                     Their unwavering determination is to improve the quality of life for consumers, customers, and workers by being inventive and consumer-centric.
                </p>
            </div>
            <div className="about-container-1">
                <img className="about-image-1" data-aos="zoom-in-up" src="https://img.freepik.com/premium-photo/spice-background-top-view-seasoning-cups_763111-5096.jpg?w=740"  alt="pic" />
            </div>

          <div>
        <img style={{width:'95%',height:'60vh',margin:'5% 3% 5% 3%'}} src="https://luna-askmen-images.askmen.com/news/sports/_1516983344.gif" alt="pic" />
      </div>

        <Footer/>

    </div>
    )
}