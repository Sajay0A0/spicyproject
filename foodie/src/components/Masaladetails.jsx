import { Link } from "react-router-dom";
import Footer from "./Footer";
import Usernavbar from "./Navbar";




export default function Masaladetails(){

    return(
        <div>
            <Usernavbar/>
            <img src="https://mitracafe.co.in/wp-content/uploads/2017/06/spices.jpg" style={{width:'100%',height:'90vh'}} alt="oic" />
            <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>
            <h2 style={{marginBottom:'6%'}}></h2>
            </div>

            <div className="t-1">
                <div>
                    <p className="p-1">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
                <Link className="img-1"  to='/masala'><img className="img-1" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPPP-keViXPoAyRMctuviXVe9eOMmWV5z0w&s" width={450} height={250}  alt="pic" /></Link>
            </div>

            <div className="t-2">
                <Link to='/masala'><img className="img-2" src= "https://www.foodrepublic.com/img/gallery/is-it-possible-to-eat-raw-cinnamon-sticks/l-intro-1703688025.jpg" width={350} height={250}  alt="pic" /></Link>
                <div>
                    <p className="p-2">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
            </div>

            <div className="t-1">
                <div>
                    <p className="p-1">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
                <Link className="img-1"  to='/masala'><img className="img-1" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBf0BBMZO6mzAZLS1IbkRcdD6P37cVt84x4w&s" width={450} height={250}  alt="pic" /></Link>
            </div>

            <div className="t-2">
            <Link to='/masala'><img className="img-2" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjR90OsctRLt2vgXA6UmwfxKHEQYRUJrZ3OQ&s" width={350} height={250}  alt="pic" /></Link>

                <div>
                    <p className="p-2">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
            </div>

            <div className="t-1">
                <div>
                    <p className="p-1">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
                <Link className="img-1"  to='/masala'><img className="img-1" src= "https://www.farmersspice.com/cdn/shop/products/1_800x.jpg?v=1645561174" width={450} height={250}  alt="pic" /></Link>

            </div>

            <div className="t-2">
            <Link to='/masala'><img className="img-2" src= "https://i0.wp.com/www.offersrilanka.com/wp-content/uploads/2021/07/100-Pure-Organic-Ceylon-Cardamom-Seeds-From-Sri-Lanka-High-Quality-Spices.jpg?fit=500%2C497&ssl=1" width={350} height={250}  alt="pic" /></Link>
            <div>
                    <p className="p-2">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
            </div>

            <div className="t-1">
                <div>
                    <p className="p-1">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
                <Link className="img-1"  to='/masala'><img className="img-1" src= "https://www.keralaspicesonline.com/wp-content/uploads/2022/11/IMG_5618-jpg.webp" width={450} height={250}  alt="pic" /></Link>

            </div>
            <Footer/>
        </div>
    )
}