import Usernavbar from "./Navbar";
import '../component-Styles/Main.css';
import Footer from "./Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Brands from "./Brands";
import { Link } from "react-router-dom";
import Cards from "./Card";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from "react-router-dom";
// import { IoIosArrowRoundForward } from "react-icons/io";



export default function Main() {
  useEffect(()=>{
    Aos.init({duration: 3000});
  },[]);

  return (
    <div>
      <span style={{margin:'30px 0 40px 0', justifyContent:'center', textAlign:'center', display:'flex'}}>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Cairo+Play:wght@200..1000&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
</style>
        <h2 className="display-5 head-1">Spices</h2>
        <h2 className="display-5 head-2">Showcase</h2>
      </span>
      <Usernavbar />
      <div className="main-pic">
        <img src="https://mitracafe.co.in/wp-content/uploads/2017/06/spices.jpg" style={{width:'100%',height:'90vh'}} alt="pic" />
      
        <div class="content">
       <style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
    <p className="display-3 h1">Spices</p> 
<div className="h1-1"> <p > Tasty <b>.</b> Healthy <b>.</b> Beauty</p> </div>
    </div>
      </div>

      <div className="text-container">
        <p className="h6 display-5 head-3" data-aos="fade-right">Handpicked Spices</p>
        <p className="h2 display-4 head-4" data-aos="fade-right">SPICE BLISS</p>
        <p className="para-1" data-aos="fade-left">
          Spices are aromatic substances derived from plants, used to enhance the flavor
          and aroma of food. They come in various forms, such as powders, seeds,
          or dried herbs, adding depth and complexity to dishes worldwide.
        </p><br />
        <Link to='/spicedet'><button className="button-1" data-aos="zoom-in-up">EXPLORE NOW</button></Link>
      </div>
      <div></div>
          
        <div className="image-container">
        <img data-aos="zoom-in-up"
          src="https://img.freepik.com/premium-photo/bright-spice-background-top-view-collection-seasoning-herbs-indian-food_763111-5072.jpg" 
          alt="pic" useMap="#spiceMap" width={640} style={{borderRadius:'10px',}}
        />
        <div className="content1" data-aos="zoom-in-up"></div>
      </div>  <br />

      <div className="text-container1">
        <p className="h6 display-5 head-3-1" data-aos="fade-right"> The Special</p>
        <p className="h2 display-4 head-4-1" data-aos="fade-right">MASALA MIX</p>
        <p className="para-2" data-aos="fade-left">
        A carefully crafted blend of premium spices that elevates dishes with depth and warmth. 
        This harmonious fusion of aromatic spices adds a hint of magic to every recipe.
         With its rich flavor profile and enticing aroma, it's the perfect secret ingredient.
         Ideal for adding that extra special something to your favorite creations!.
        </p><br />
       <Link to='/masaladet'> <button className="button-1-1" data-aos="zoom-in-up">EXPLORE NOW</button></Link>
      </div>
      <div></div>
      <div className="image-container1">
        <img data-aos="zoom-in-up"
          src="https://fandbrecipes.com/wp-content/uploads/2022/03/Types-of-Indian-Masalas.png" 
          alt="pic" useMap="#spiceMap"  width={620} style={{borderRadius:'10px'}}
         
        />
        <div className="content2" data-aos="zoom-in-up"></div>
      </div><br />

      <div className="text-container">
        <p className="h6 display-5 head-3" data-aos="fade-right">The Tasty</p>
        <p className="h2 display-4 head-4" data-aos="fade-right">SPICE BLISS</p>
        <p className="para-1" data-aos="fade-left">
          Spices are aromatic substances derived from plants, used to enhance the flavor
          and aroma of food. They come in various forms, such as powders, seeds,
          or dried herbs, adding depth and complexity to dishes worldwide.
        </p><br />
       <Link to='/pickledet'><button className="button-1" data-aos="zoom-in-up">EXPLORE NOW</button></Link> 
      </div>
      <div></div>
      <div className="image-container">
        
        <img data-aos="zoom-in-up"
          src="https://static.toiimg.com/photo/108014757.cms" 
          alt="pic" useMap="#spiceMap" width={640} style={{borderRadius:'10px',}}
        />
       
        <div className="content1" data-aos="zoom-in-up"></div>
      </div><br />


        <div style={{margin:'10% 0 0 30px'}}>
          
        <Brands/>

       </div>

       <div>
        <Cards/>

       </div>

      {/* <div>
        <img style={{width:'100%',height:'80vh'}} src="https://luna-askmen-images.askmen.com/news/sports/_1516983344.gif" alt="pic" />
      </div> */}

     
      <Footer/>
    </div>
  );
}
