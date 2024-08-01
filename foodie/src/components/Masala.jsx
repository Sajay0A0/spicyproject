import Footer from "./Footer";
import Usernavbar from "./Navbar";
import '../component-Styles/Masala.css';
import { useNavigate } from "react-router-dom";
import Sidenav from "./Sidenav";
import { myContext } from "./Context";
import { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export default function Masala() {
  const { product } = useContext(myContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  const email = localStorage.getItem("userEmail");

  const masala = product.filter((p) => p.catogery === 'masala');

  console.log("masala", product, masala);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = masala.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const totalPages = Math.ceil(masala.length / productsPerPage);

  return (
    <div>
      <Usernavbar />
      <div className="masalas-img">
        <img src="https://www.naf.in/assets/images/mixedwholebanner.jpg"
          style={{ width: '100%', height: '83vh' }} alt="pic" />
        <div className="masala-head">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
          </style>
          <h1 className="masala-title">Masalas</h1>
        </div>
      </div>
      <Sidenav />
      <div className="masalas-content">
        <div className="masala-text">
          <p className="head1-1">THE SPECIAL</p>
          <p className="head1-2 display-4">MASALA MIX</p>
          <p className="head1-3">"The right blend of Spices is what determines the characteristic taste of a region's cuisine"</p>
        </div>
        <img className="masala-container" src="https://glebekitchen.com/wp-content/uploads/2019/04/garammasalafrontground.jpg" alt="pic" />
      </div>

      <div className="product-grid">
        {currentProducts.map((product) => (
          <Card
            className="body"
            key={product._id}>
            <Card.Img
              className="image-img"
              style={{ height: "15rem", width: "15rem" }}
              variant="top"
              src={product.image}
            />
            <Card.Body>
              <Card.Title className="image-txt">{product.prod_name} </Card.Title>
              <Card.Text className="image-txt">₹{product.price}/-</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="pagination">
        <Button onClick={prevPage} disabled={currentPage === 1}>Prev</Button>
        {[...Array(totalPages)].map((_, index) => (
          <Button key={index + 1} onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}>
            {index + 1}
          </Button>
        ))}
        <Button onClick={nextPage} disabled={currentPage === totalPages}>Next</Button>
      </div>

      <Footer />
    </div>
  );
}
