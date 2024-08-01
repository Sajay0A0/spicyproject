import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "./Context";
import Usernavbar from "./Navbar";

export default function Description() {
    const { id } = useParams();
    const { product } = useContext(myContext);

    useEffect(() => {
        console.log("URL ID:", id);
        console.log("Products:", product);
    }, [id, product]);

    // Find the product based on the id from params
    const productDetails = product.find((product) => product._id === id);

    // If productDetails is not found, handle the case
    if (!productDetails) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <Usernavbar />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    paddingLeft: "100px",
                    marginTop: "20px",
                }}
            >
                <img
                    style={{ width: "30rem", marginLeft: "90px", borderRadius: "8px" }}
                    src={productDetails.image}
                    alt={productDetails.prod_name}
                />
                <span style={{ paddingLeft: "10%" }}></span>
                <ul className="pro-ul">
                    <p className="pro-name">{productDetails.prod_name}</p>
                    <li className="pro-li">{productDetails.price}</li>
                    <li className="pro-li">{productDetails.description}</li>
                    <button>ADD TO CART</button>
                </ul>
            </div>
        </div>
    );
}
