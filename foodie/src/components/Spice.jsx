import React, { useContext, useState } from "react";
import Footer from "./Footer";
import Usernavbar from "./Navbar";
import '../component-Styles/Spice.css';
import { useNavigate } from "react-router-dom";
import Sidenav from "./Sidenav";
import { myContext } from "./Context"; // Correct import path
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Spice() {
  const { product } = useContext(myContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Number of products to display per page

  const spice = product.filter((p) => p.catogery === 'powder'); // Fix typo: 'category'

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = spice.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const totalPages = Math.ceil(spice.length / productsPerPage);

  function handle(productID){
    navigate(`/description${productID}`)
  }

  return (
    <div>
      <Usernavbar />
      <div className="spice-img">
        <img src="https://vktpl.com/wp-content/uploads/2021/12/spices-2-1-scaled.jpg" style={{ width: '100%', height: '88vh' }} alt="pic" />
        <div className="spice-head">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          </style>
          <div style={{ display: 'flex', position: 'absolute', margin: '30% 0 0 75%', backgroundColor: '#154f30', width: '80px', height: '80px', padding: '5px 0 0 13px', borderRadius: '80px', }}>
            <p style={{ textDecoration: 'none' }}>
              <h3 style={{ fontFamily: 'cursive', color: '#cc8f1f', }}><i>SPi <br /> CES</i></h3>
            </p>
          </div>
          <h1 className="spice-title">Powders</h1>
        </div>
      </div>
      <Sidenav />
      <div className="spice-content">
        <div className="spice-txt">
          <p className="head2-1">THE TASTY</p>
          <p className="head2-2 display-4">SPICY POWDERS</p>
          <p className="head2-3">" The perfect balance of spices is what defines the essence of great flavor"</p>
        </div>
        <img className="spice-container" src="https://5.imimg.com/data5/SELLER/Default/2023/8/332243849/JG/QP/OL/154705477/redchilipowder1-500x500.jpg" alt="pic" />
      </div>
      <div className="product-grid">
        {currentProducts.map((product) => (
          <Card
            className="body"
            key={product._id}>
            <Card.Img
              className="image-img"
              style={{ height: "15rem", width: "15rem" ,padding: '10px 0 15px 15px'
              }}
              variant="top"
              src={product.image}
              onClick={()=>handle(product._id)}
            />
            <Card.Body>
              <Card.Title className="image-txt" >{product.prod_name}</Card.Title>
              <Card.Text  className="image-txt">₹{product.price}/-</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="pagination">
        <Button onClick={prevPage} disabled={currentPage === 1}>Prev</Button>
        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </Button>
        ))}
        <Button onClick={nextPage} disabled={currentPage === totalPages}>Next</Button>
      </div>
      <Footer />
    </div>
  );
}
