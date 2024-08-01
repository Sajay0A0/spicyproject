import Footer from "./Footer";
import "../component-Styles/Spicedet.css"
import Usernavbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Spicedetails(){

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
                <Link className="img-1"  to='/spice'><img className="img-1" src= "https://5.imimg.com/data5/SELLER/Default/2023/6/319183425/RB/BN/VT/99990780/dry-red-chilli-500x500.webp" width={450} height={250}  alt="pic" /></Link>
            </div>

            <div className="t-2">
                <Link to='/spice'><img className="img-2" src= "https://www.futuroorganic.com/wp-content/uploads/2020/03/Turmeric-Sticks.jpg" width={350} height={250}  alt="pic" /></Link>
                <div>
                    <p className="p-2">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
            </div>

            <div className="t-1">
                <div>
                    <p className="p-1">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
                <Link className="img-1"  to='/spice'><img className="img-1" src= "https://www.mambon.in/cdn/shop/products/Malli_2048x.jpg?v=1605974327" width={450} height={250}  alt="pic" /></Link>
            </div>

            <div className="t-2">
            <Link to='/spice'><img className="img-2" src= "https://assets.clevelandclinic.org/transform/65ddb397-7835-4b21-b30b-d123be3cb5c8/blackPepper-185067429-770x533-1_jpg" width={350} height={250}  alt="pic" /></Link>

                <div>
                    <p className="p-2">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
            </div>

            <div className="t-1">
                <div>
                    <p className="p-1">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
                <Link className="img-1"  to='/spice'><img className="img-1" src= "https://spicebasket.com/cdn/shop/products/fennel-seeds-perum-jeerakam-959587.jpg?v=1688466715" width={450} height={250}  alt="pic" /></Link>

            </div>

            <div className="t-2">
            <Link to='/spice'><img className="img-2" src= "https://kjmal.b-cdn.net/media/36106/uluva.jpg" width={350} height={250}  alt="pic" /></Link>
            <div>
                    <p className="p-2">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
            </div>

            <div className="t-1">
                <div>
                    <p className="p-1">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
                <Link className="img-1"  to='/spice'><img className="img-1" src= "https://static.langimg.com/photo/imgsize-531650,msid-75046640/malayalam-samayam.jpg" width={350} height={250}  alt="pic" /></Link>

            </div>

            <Footer/>
        </div>
    )
}