import { Link } from "react-router-dom";
import Usernavbar from "./Navbar";
import Footer from "./Footer";

export default function Pickledetails(){

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
                <Link className="img-1"  to='/spice'><img className="img-1" src= "https://media.istockphoto.com/id/1316583859/photo/mango-pickle-or-aam-ka-aachar-or-achar-in-a-bowl-on-wooden-background-theme-with-raw-mangos.jpg?s=612x612&w=0&k=20&c=dQqg5cBILEP-7WJB5LYLYdopSoqZ1ebc9cxXif80DJk=" width={450} height={250}  alt="pic" /></Link>
            </div>

            <div className="t-2">
                <Link to='/spice'><img className="img-2" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82ucCiJmGk0tBwehfqROga2BW0Eg841gfAspgYRbaWBh_PnjWix-rLCnDP52xfn3s_OQ&usqp=CAU" width={350} height={250}  alt="pic" /></Link>
                <div>
                    <p className="p-2">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
            </div>

            <div className="t-1">
                <div>
                    <p className="p-1">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
                <Link className="img-1"  to='/spice'><img className="img-1" src= "https://static.toiimg.com/photo/87847248.cms" width={450} height={250}  alt="pic" /></Link>
            </div>

            <div className="t-2">
            <Link to='/spice'><img className="img-2" src= "https://static.toiimg.com/photo/93734927.cms" width={350} height={250}  alt="pic" /></Link>

                <div>
                    <p className="p-2">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
            </div>

            <div className="t-1">
                <div>
                    <p className="p-1">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
                <Link className="img-1"  to='/spice'><img className="img-1" src= "https://traditionallymodernfood.com/wp-content/uploads/2021/08/puli-inji-inji-puli-inji-curry-14-scaled.jpeg" width={450} height={250}  alt="pic" /></Link>

            </div>

            <div className="t-2">
            <Link to='/spice'><img className="img-2" src= "https://www.goodfoodbar.com/cdn/shop/files/xhdpi_grande_513127ea-c33c-40bd-aead-950cf804b681.webp?v=1694706513" width={350} height={250}  alt="pic" /></Link>
            <div>
                    <p className="p-2">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
            </div>

            <div className="t-1">
                <div>
                    <p className="p-1">k vk nnbnbofnbosbomfbkl skjb fsbnosbs bksbsnsvn vs ocvn</p>
                </div>
                <Link className="img-1"  to='/spice'><img className="img-1" src= "https://www.godavarivantillu.com/cdn/shop/products/GonguraPrawnPickle_644d8b3e-5a2a-47f8-8940-6eef67a70205_600x600.jpg?v=1627597291" width={450} height={250}  alt="pic" /></Link>

            </div>
            <Footer/>


        </div>
    )
}