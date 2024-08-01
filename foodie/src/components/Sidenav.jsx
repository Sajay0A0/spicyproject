import { Link } from "react-router-dom";
import "../component-Styles/Sidenav.css";

export default function Sidenav() {
    return (
        <div className="side-nav">
            <div>
                <Link className='btn side-txt' to='/spice'>
                    <img src="https://cdn-icons-png.freepik.com/512/4786/4786835.png" alt="pic" style={{ width: '30px', height: '30px' }} />
                    <p style={{ padding: '5px 0 0 10px' }}>Spices</p>
                </Link>
                <Link className='btn side-txt' to='/masala'>
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/garam-masala-2454323-2046015.png" alt="pic" style={{ width: '30px', height: '30px' }} />
                    <p style={{ padding: '5px 0 0 10px' }}>Masalas</p>
                </Link>
                <Link className='btn side-txt' to='/pickle'>
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/jars-1596741-1355916.png" alt="pic" style={{ width: '30px', height: '30px' }} />
                    <p style={{ padding: '5px 0 0 10px' }}>Pickles</p>
                </Link>
            </div>
        </div>
    );
}
