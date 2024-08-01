import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../component-Styles/Brands.css";
import { Link } from 'react-router-dom';


export default function Brands() {
    // const scrollRef = useRef(null);

    // useEffect(() => {
    //     const scrollContainer = scrollRef.current;
    //     const scrollInterval = setInterval(() => {
    //         if (scrollContainer) {
    //             const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    //             if (scrollContainer.scrollLeft < maxScrollLeft) {
    //                 scrollContainer.scrollLeft += 2; // Adjust the scroll speed here
    //             } else {
    //                 scrollContainer.scrollLeft = 0; // Reset to the start
    //             }
    //         }
    //     }, 80); // Adjust the interval here (1000ms = 1 second)

    //     return () => clearInterval(scrollInterval);
    // }, []);

    return (
        <div className="brands-scroll">
             {/* ref={scrollRef} */}
        <Link to='/saras'> <img className="brand-image" style={{width:'280px',height:'250px',margin:'25px 0 0 0'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9e-rhjPT_Ej9yCWyIUZa-AqoOFRC1z1e2EA-c1_2CjGxK897rKsGhQ_3qJtVwIeS4yO8&usqp=CAU" alt="pic4" /></Link>
        <Link to='/eastern'> <img className="brand-image" style={{width:'250px',height:'180px',margin:'65px 0 0 0'}} src="https://www.logotypes101.com/logos/565/935FECC60DDC2955484EF6B5A7685202/easternlogo.png" alt="pic2" /></Link>
        <Link to='/bramins'> <img className="brand-image" style={{width:'340px',height:'250px',margin:'30px 0 0 0'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSO1A_f2In_syaLyynFZ1hc5wOxIOnTDLrQ&s" alt="pic3" /></Link>
        <Link to='/kitchen'> <img className="brand-image" style={{width:'340px',height:'250px',margin:'30px 0 0 0'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBCy5bzW3h9KOVXczy2l_N7i7TWRIr1mMrw&s" alt="pic1" /></Link>
        <Link to='/bismi'> <img className="brand-image" style={{width:'270px',height:'150px',margin:'75px 0 0 0'}} src="http://bismifoodproducts.com/images/logo.svg" alt="pic4" /></Link>

    </div>
    );
}
