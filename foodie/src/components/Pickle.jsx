import Footer from "./Footer";
import Usernavbar from "./Navbar";
import '../component-Styles/Pickle.css'
import { Link, useNavigate } from "react-router-dom";
import Sidenav from "./Sidenav";
import { myContext } from "./Context";
import { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";

export default function Pickle(){
    const {product}=useContext(myContext)
    const navigate=useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const email=localStorage.getItem("userEmail")

    const pickle=product.filter((p)=>p.catogery==='pickle')
    console.log("pickle",product,pickle);

    
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = pickle.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const totalPages = Math.ceil(pickle.length / productsPerPage);


    return(
        <div>
            <Usernavbar/>
            <div className="pickle-img">
                <img src="https://scontent.fccj1-1.fna.fbcdn.net/v/t1.6435-9/94268032_227457132025758_1974201461571059712_n.jpg?stp=dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=NjFNTsmIOjMQ7kNvgE9nlkk&_nc_ht=scontent.fccj1-1.fna&cb_e2o_trans=q&oh=00_AYA3JcxxbBmx6MbNmWnI5lHb-q_TuZ-AE0Nx7QJPwG12QA&oe=66CC9260" 
                style={{width:'100%',height:'83vh'}} alt="pic" />

                <div className="pickle-head">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                </style>
                <div style={{display:'flex',position:'absolute',margin:'30% 0 0 80%',backgroundColor:'#154f30',width:'80px',height:'80px',padding:'5px 0 0 13px',borderRadius:'80px',}}> <p style={{textDecoration:'none'}}><h3 style={{fontFamily:'cursive',color:'#cc8f1f',}}><i>SPi <br /> CES</i></h3></p></div>

                    {/* <div className="h1-3"> <p >  <b>.</b> Pickles <b>.</b> </p> </div> */}
                    <h1 className="pickle-title">Pickles</h1>
                </div>

            </div>
            <Sidenav/>
            <div className="pickle-content">   
            <div className="pickle-txt">
                <p className="head3-1">THE FLAVORFUL</p>
                <p className="head3-2 display-4">TASTY PICKLES</p>
                <p className="head3-3">"The art of balancing spices is what makes pickles truly unforgettable"</p>

            </div>
            <img className="pickle-container" src="https://media.istockphoto.com/id/1316583859/photo/mango-pickle-or-aam-ka-aachar-or-achar-in-a-bowl-on-wooden-background-theme-with-raw-mangos.jpg?s=612x612&w=0&k=20&c=dQqg5cBILEP-7WJB5LYLYdopSoqZ1ebc9cxXif80DJk=" alt="pic" />
            </div>

            <div className="product-grid">

            { currentProducts.map((product) => (
            
            <Card
              className="body"
             key={product._id}>
            {/* <Card.Link
            className=" bg-white rounded-lg text-dark text-decoration-none"
           style={{paddingLeft:'90%'}} onClick={() => addtolike(product)}
          >
          <Checkbox style={{width:"47px",height:'31px'}} icon={<FavoriteBorder sx={{fontSize:'30px',color:'black'}}/> } checkedIcon={<Favorite sx={{fontSize:'30px',color:'red'}}/>}/>
          </Card.Link> */}

              <Card.Img
                className="image-img"
                style={{ height: "15rem", width: "15rem" }}
                variant="top"
                src={product.image}
                // onClick={() => handleClick(product._id)}
              />
              {/* </Link> */}
              <Card.Body>
                <Card.Title className="image-txt">{product.prod_name} </Card.Title>
                <Card.Text className="image-txt"> ₹{product.price}/-</Card.Text>
                {/* <Card.Text>{product.description} </Card.Text> */}
              </Card.Body>
              {/* <Card.Body className="button">
                <Card.Link
                  className="btn btn-dark bg-white rounded-lg text-dark text-decoration-none"
                   onClick={() => addtocart(product)}
                >
                  <Checkbox style={{width:"200px",height:'31px'}} icon={<AddShoppingCartIcon sx={{fontSize:'30px',color:'black'}}/> }
                   checkedIcon={<ShoppingCartIcon sx={{fontSize:'30px',color:'black'}}/>}/>
                </Card.Link>
              </Card.Body> */}
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