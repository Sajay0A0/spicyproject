import { useContext, useState } from "react"
import { myContext } from "../components/Context"
import Usernavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import "../component-Styles/Selectbrand.css"

export default function Eastern(){
    const {product} = useContext(myContext);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;
    
    const eastern =product.filter((p) => p.brand === "eastern");

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = eastern.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage (pageNumber);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const totalPages = Math.ceil(eastern.length / productsPerPage)


    return(
        <div>
              <Usernavbar />
      <div className="prod-img">
        <img src="https://www.naf.in/assets/images/mixedwholebanner.jpg"
          style={{ width: '100%', height: '83vh' }} alt="pic" />
        <div className="prod-head">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
          </style>
          <h1 className="prod-title">Masalas</h1>
        </div>
      </div>

      <div className="all-product-grid">
        {currentProducts.map((product) => (
          <Card
            className="body"
            key={product._id}>
            <Card.Img
              className="image"
              style={{ height: "15rem", width: "15rem" }}
              variant="top"
              src={product.image}
            />
            <Card.Body>
              <Card.Title>{product.prod_name} </Card.Title>
              <Card.Text>₹{product.price}/-</Card.Text>
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
      <Footer/>

        </div>
    )
}