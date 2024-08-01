import React, { useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgShoppingBag } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import '../component-Styles/Navbar.css';

export default function Usernavbar() {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className='sticky-top navbar'>
            {/* style={{boxShadow:'0px 8px 5px #ddd'}} */}
            <Navbar expand="lg" className="bg-body-tertiar flex px-4 py-2 fixed" >
                <div style={{ margin: 'auto 40px' }}>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 nav-1"
                            style={{ maxHeight: '100px', }}
                            navbarScroll>
                            <Nav><Link className='me-5 text' to='/'>Home</Link></Nav>
                            <Dropdown>
                                <MenuButton className="border-0 me-5 bg-white">
                                    <Link className='text' style={{ marginTop: '-6px', display: 'flex', position: 'relative', }}>Products</Link>
                                </MenuButton>
                                <Menu className='dropdown mt-4'>
                                    <MenuItem><Link className='btn drop-txt' to='/spice'>Spices</Link></MenuItem>
                                    <MenuItem><Link className='btn drop-txt' to='/masala'>Masalas</Link></MenuItem>
                                    <MenuItem><Link className='btn drop-txt' to='/pickle'>Pickles</Link></MenuItem>
                                </Menu>
                            </Dropdown>
                            <Nav><Link className='me-5 text' to='/about'>About us</Link></Nav>
                            <Nav><Link className='me-4 text' to='/contact'>Contact</Link></Nav>
                        </Nav>
                        <div style={{ margin: '0 0 0 15vw', backgroundColor: '#154f30', width: '80px', height: '80px', padding: '5px 0 0 13px', borderRadius: '80px', }}>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <h3 style={{ fontFamily: 'cursive', color: '#cc8f1f', }}><i>SPi <br /> CES</i></h3>
                            </Link>
                        </div>
                        <div style={{ marginLeft: '20vw' }}></div>
                        <Nav>
                            <Nav style={{ marginLeft: '1.5vw' }}>
                                {/* {!searchVisible && ( */}
                                    <Link style={{ backgroundColor: '#154f30', width: '40px', height: '40px', borderRadius: '35px', padding: '5px 0 0 6px' }} onClick={handleSearchClick}>
                                        <IoSearch style={{ color: 'white', fontSize: '28px' }} />
                                    </Link>
                                {/* )} */}
                                {/* {searchVisible && (
                                    <Form className="d-flex" style={{ marginLeft: '0px' }}>
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                        <Button variant="outline-success"><IoSearch style={{fontSize:'20px'}}/></Button>
                                    </Form>
                                )} */}
                            </Nav>
                            <Nav style={{ marginLeft: '1.5vw' }}><Link style={{ backgroundColor: '#154f30', width: '40px', height: '40px', borderRadius: '35px', padding: '6px 0 0 6px' }} to='/2'><MdOutlineFavoriteBorder style={{ color: 'white', fontSize: '28px' }} /></Link></Nav>
                            <Nav className="me-2" style={{ marginLeft: '1.5vw' }}><Link style={{ backgroundColor: '#154f30', width: '40px', height: '40px', borderRadius: '35px', padding: '5px 0 0 6px' }} to='/2'><CgShoppingBag style={{ color: 'white', fontSize: '28px' }} /></Link></Nav>
                        </Nav>
                        <Dropdown>
                            <MenuButton className="border-0 me-0 bg-white">
                                <Link className='text' style={{ marginTop: '-6px', display: 'flex', position: 'relative', }}><FaRegUser style={{ fontSize: '28px' }} /></Link>
                            </MenuButton>
                            <Menu className='dropdown mt-4'>
                                <MenuItem><Link className='btn drop-txt' to='/login'>Login</Link></MenuItem>
                            </Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
}
