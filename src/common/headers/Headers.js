import React, { useState } from "react";
import "../../assets/css/header.css";
import { FaSearch } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Country from "./country/Country";
import { IoClose } from "react-icons/io5";
// import swistonLogo from "../../assets/img/switon logo.jpg";
import swistonLogo from "../../assets/img/swiston jewlery.gif";

function Headers({ setShow }) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleShow = () => setShow(true);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const [items, setItems] = useState(null);
  const openItems = (index) => {
    setItems((prevTndex) => (prevTndex === index ? null : index));
  };
  return (
    <>
      <div className="" style={{ position: "sticky", top: 0, zIndex: 99 }}>
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          style={{ padding: "25px 0px" }}
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <Link to="/">
                <img
                  src={swistonLogo}
                  alt="swistonLogo"
                  className="swistonLogo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "500px" }}
                navbarScroll
              >
                <Nav.Link
                  href="#action1"
                  className="show_items"
                  onClick={() => openItems(0)}
                >
                  <Link to="/category">
                    <span className="nav-items "> Rings</span>
                  </Link>
                  <div
                    className={`nav_items_category hide_items ${
                      items === 0 ? "open" : " "
                    }`}
                  >
                    <span>
                      <IoClose onClick={closeModal} />
                    </span>
                    <div className="shop_category_name">
                      <div className="shop_name">
                        <h6 className="shop_underline"> Shop By Style</h6>
                        <div className="shop_name_content">
                          <ul className="">
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/3e52030aaf3c4b59b34f7825aaefd475.jpg"
                                alt=""
                              />
                              <p>ENGAGEMENT</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/bdf62790e1fa4a49bc2cfb3c8b686b49.jpg"
                                alt=""
                              />
                              <p>Daily Year</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/3eec2a8167b54bd096102e07f0cb6d3e.jpg"
                                alt=""
                              />
                              <p>Couple Rings</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/94329809fcdf408eb7487e69abd78d21.jpg"
                                alt=""
                              />
                              <p>cocktail</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/Menu/01/r_infinity.jpg"
                                alt=""
                              />
                              <p>infinity</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/01-JAN/Merch/04/CL_menu_2.jpg"
                                alt=""
                              />
                              <p>silver rings</p>
                            </li>
                          </ul>
                          <ul className="" style={{ paddingLeft: "30px" }}>
                            <li className="shop_list_flex">
                              <img
                                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/Menu/01/r_solitaire.jpg"
                                alt=""
                              />
                              <p>solitaire</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/f1cecd6ba83142afa27229492f59391d.jpg"
                                alt=""
                              />
                              <p>platinum</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png"
                                alt=""
                              />
                              <p>bands</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/b127d70ba53c4dbe9fcb2e56553fc911.jpg"
                                alt=""
                              />
                              <p>promise rings</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png"
                                alt=""
                              />
                              <p>bands</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="shop_by_metal_stone ">
                        <div className="shop_name">
                          <h6 className="shop_underline">
                            SHOP BY METAL & STONE
                          </h6>
                          <div className="shop_name_content">
                            <ul>
                              <li className="shop_list_flex">
                                <img
                                  src="https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png"
                                  alt=""
                                />
                                <p>gold</p>
                              </li>
                              <li className="shop_list_flex">
                                <img
                                  src="https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png"
                                  alt=""
                                />
                                <p>diamond</p>
                              </li>
                              <li className="shop_list_flex">
                                <img
                                  src="https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png"
                                  alt=""
                                />
                                <p>gemstone</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="shop_by">
                        <div className="shop_name">
                          <h6 className="shop_underline">SHOP BY</h6>
                          <div className="shop_name_content">
                            <ul>
                              <li className="shop_list_flex">
                                <p>Under ₹ 10k</p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 10k to ₹ 20k</p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 20k to ₹ 30k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 30k to ₹ 50k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 50k to ₹ 70k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>Above ₹ 75k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>for man </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h6 className="shop_underline">SHOW ALL DESIGN</h6>
                      </div>
                      <div className="shop_nav_image">
                        <div className="">
                          <img
                            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/HP%20banner/Down_1/Rings.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Nav.Link>

                <Nav.Link
                  href="#action2"
                  className="show_items"
                  onClick={() => openItems(1)}
                >
                  <span className="nav-items ">Earrings</span>
                  <div
                    className={`nav_items_category hide_items ${
                      items === 1 ? "open" : " "
                    }`}
                  >
                    <span>
                      <IoClose onClick={closeModal} />
                    </span>
                    <div className="shop_category_name">
                      <div className="shop_name">
                        <h6 className="shop_underline"> Shop By Style</h6>
                        <div className="shop_name_content">
                          <ul className="">
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/c4b1660f99f34e688274b930a5a70d8f.jpg"
                                alt=""
                              />
                              <p>studs</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/05cb5d46b065499ca6e50f30724f7e90.jpg"
                                alt=""
                              />
                              <p>jhumkas</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/4868fb10515f42c184cb4e1a58cd03e2.jpg"
                                alt=""
                              />
                              <p>Earcufs</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/bc990516499d4f35b9a320887d91452c.jpg"
                                alt=""
                              />
                              <p>Pearl earrings</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/Menu/01/r_infinity.jpg"
                                alt=""
                              />
                              <p>infinity</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/01-JAN/Merch/04/CL_menu_2.jpg"
                                alt=""
                              />
                              <p>silver rings</p>
                            </li>
                          </ul>
                          <ul className="" style={{ paddingLeft: "30px" }}>
                            <li className="shop_list_flex">
                              <img
                                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/Menu/01/r_solitaire.jpg"
                                alt=""
                              />
                              <p>solitaire</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/f1cecd6ba83142afa27229492f59391d.jpg"
                                alt=""
                              />
                              <p>platinum</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png"
                                alt=""
                              />
                              <p>bands</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/b127d70ba53c4dbe9fcb2e56553fc911.jpg"
                                alt=""
                              />
                              <p>promise rings</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png"
                                alt=""
                              />
                              <p>bands</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="shop_by_metal_stone "
                        style={{ paddingLeft: "30px" }}
                      >
                        <div className="shop_name">
                          <h6 className="shop_underline">
                            SHOP BY METAL & STONE
                          </h6>
                          <div className="shop_name_content">
                            <ul>
                              <li className="shop_list_flex">
                                <img
                                  src="https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png"
                                  alt=""
                                />
                                <p>gold</p>
                              </li>
                              <li className="shop_list_flex">
                                <img
                                  src="https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png"
                                  alt=""
                                />
                                <p>diamond</p>
                              </li>
                              <li className="shop_list_flex">
                                <img
                                  src="https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png"
                                  alt=""
                                />
                                <p>gemstone</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="shop_by" style={{ paddingLeft: "50px" }}>
                        <div className="shop_name">
                          <h6 className="shop_underline">SHOP BY</h6>
                          <div className="shop_name_content">
                            <ul>
                              <li className="shop_list_flex">
                                <p>Under ₹ 10k</p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 10k to ₹ 20k</p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 20k to ₹ 30k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 30k to ₹ 50k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 50k to ₹ 70k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>Above ₹ 75k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>for man </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h6 className="shop_underline">SHOW ALL DESIGN</h6>
                      </div>
                      <div className="shop_nav_image">
                        <div className="">
                          <img
                            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/HP%20banner/Down_1/Stud.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Nav.Link>

                <Nav.Link
                  href="#"
                  className="show_items"
                  onClick={() => openItems(2)}
                >
                  <span className="nav-items"> Bracelets & Bangles </span>
                  <div
                    className={`nav_items_category hide_items ${
                      items === 2 ? "open" : " "
                    }`}
                  >
                    <span>
                      <IoClose onClick={closeModal} />
                    </span>
                    <div className="shop_category_name">
                      <div className="shop_name">
                        <h6 className="shop_underline"> Shop By Style</h6>
                        <div className="shop_name_content">
                          <ul className="">
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/c4b1660f99f34e688274b930a5a70d8f.jpg"
                                alt=""
                              />
                              <p>studs</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/05cb5d46b065499ca6e50f30724f7e90.jpg"
                                alt=""
                              />
                              <p>jhumkas</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/4868fb10515f42c184cb4e1a58cd03e2.jpg"
                                alt=""
                              />
                              <p>Earcufs</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/bc990516499d4f35b9a320887d91452c.jpg"
                                alt=""
                              />
                              <p>Pearl earrings</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/Menu/01/r_infinity.jpg"
                                alt=""
                              />
                              <p>infinity</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/01-JAN/Merch/04/CL_menu_2.jpg"
                                alt=""
                              />
                              <p>silver rings</p>
                            </li>
                          </ul>
                          <ul className="" style={{ paddingLeft: "30px" }}>
                            <li className="shop_list_flex">
                              <img
                                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/Menu/01/r_solitaire.jpg"
                                alt=""
                              />
                              <p>solitaire</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/f1cecd6ba83142afa27229492f59391d.jpg"
                                alt=""
                              />
                              <p>platinum</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png"
                                alt=""
                              />
                              <p>bands</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/b127d70ba53c4dbe9fcb2e56553fc911.jpg"
                                alt=""
                              />
                              <p>promise rings</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png"
                                alt=""
                              />
                              <p>bands</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="shop_by_metal_stone "
                        style={{ paddingLeft: "30px" }}
                      >
                        <div className="shop_name">
                          <h6 className="shop_underline">
                            SHOP BY METAL & STONE
                          </h6>
                          <div className="shop_name_content">
                            <ul>
                              <li className="shop_list_flex">
                                <img
                                  src="https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png"
                                  alt=""
                                />
                                <p>gold</p>
                              </li>
                              <li className="shop_list_flex">
                                <img
                                  src="https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png"
                                  alt=""
                                />
                                <p>diamond</p>
                              </li>
                              <li className="shop_list_flex">
                                <img
                                  src="https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png"
                                  alt=""
                                />
                                <p>gemstone</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="shop_by" style={{ paddingLeft: "50px" }}>
                        <div className="shop_name">
                          <h6 className="shop_underline">SHOP BY</h6>
                          <div className="shop_name_content">
                            <ul>
                              <li className="shop_list_flex">
                                <p>Under ₹ 10k</p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 10k to ₹ 20k</p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 20k to ₹ 30k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 30k to ₹ 50k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 50k to ₹ 70k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>Above ₹ 75k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>for man </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h6 className="shop_underline">SHOW ALL DESIGN</h6>
                      </div>
                      <div className="shop_nav_image">
                        <div className="">
                          <img
                            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/HP%20banner/Down_1/Bracelets.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Nav.Link>
                <Nav.Link
                  href="#action2"
                  className="show_items"
                  onClick={() => openItems(3)}
                >
                  <span className="nav-items"> Solitaries </span>
                  <div
                    className={`nav_items_category hide_items ${
                      items === 3 ? "open" : " "
                    }`}
                  >
                    <span>
                      <IoClose onClick={closeModal} />
                    </span>
                    <div className="shop_category_name">
                      <div className="shop_name">
                        <h6 className="shop_underline"> Shop By Style</h6>
                        <div className="shop_name_content">
                          <ul className="">
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/c4b1660f99f34e688274b930a5a70d8f.jpg"
                                alt=""
                              />
                              <p>studs</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/05cb5d46b065499ca6e50f30724f7e90.jpg"
                                alt=""
                              />
                              <p>jhumkas</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/4868fb10515f42c184cb4e1a58cd03e2.jpg"
                                alt=""
                              />
                              <p>Earcufs</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/bc990516499d4f35b9a320887d91452c.jpg"
                                alt=""
                              />
                              <p>Pearl earrings</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/Menu/01/r_infinity.jpg"
                                alt=""
                              />
                              <p>infinity</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/01-JAN/Merch/04/CL_menu_2.jpg"
                                alt=""
                              />
                              <p>silver rings</p>
                            </li>
                          </ul>
                          <ul className="" style={{ paddingLeft: "30px" }}>
                            <li className="shop_list_flex">
                              <img
                                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/Menu/01/r_solitaire.jpg"
                                alt=""
                              />
                              <p>solitaire</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/f1cecd6ba83142afa27229492f59391d.jpg"
                                alt=""
                              />
                              <p>platinum</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png"
                                alt=""
                              />
                              <p>bands</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/b127d70ba53c4dbe9fcb2e56553fc911.jpg"
                                alt=""
                              />
                              <p>promise rings</p>
                            </li>
                            <li className="shop_list_flex">
                              <img
                                src="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png"
                                alt=""
                              />
                              <p>bands</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="shop_by_metal_stone "
                        style={{ paddingLeft: "30px" }}
                      >
                        <div className="shop_name">
                          <h6 className="shop_underline">
                            SHOP BY METAL & STONE
                          </h6>
                          <div className="shop_name_content">
                            <ul>
                              <li className="shop_list_flex">
                                <img
                                  src="https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png"
                                  alt=""
                                />
                                <p>gold</p>
                              </li>
                              <li className="shop_list_flex">
                                <img
                                  src="https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png"
                                  alt=""
                                />
                                <p>diamond</p>
                              </li>
                              <li className="shop_list_flex">
                                <img
                                  src="https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png"
                                  alt=""
                                />
                                <p>gemstone</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="shop_by" style={{ paddingLeft: "50px" }}>
                        <div className="shop_name">
                          <h6 className="shop_underline">SHOP BY</h6>
                          <div className="shop_name_content">
                            <ul>
                              <li className="shop_list_flex">
                                <p>Under ₹ 10k</p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 10k to ₹ 20k</p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 20k to ₹ 30k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 30k to ₹ 50k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>₹ 50k to ₹ 70k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>Above ₹ 75k </p>
                              </li>
                              <li className="shop_list_flex">
                                <p>for man </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h6 className="shop_underline">SHOW ALL DESIGN</h6>
                      </div>
                      <div className="shop_nav_image">
                        <div className="">
                          <img
                            src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/HP%20banner/Down_1/Bracelets.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Nav.Link>
                <Nav.Link href="#action2" className="show_items">
                  <span className="nav-items"> Mangalsutras</span>
                  <div className="nav_items_category hide_items"></div>
                </Nav.Link>
                <Nav.Link href="#action2" className="show_items">
                  <span className="nav-items"> Necklaces</span>
                  <div className="nav_items_category hide_items"></div>
                </Nav.Link>

                <div className="nav_flex_item" style={{}}>
                  <li className="input-group" style={{ width: "200px" }}>
                    {" "}
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search "
                      onClick={handleShow}
                    />
                    <span className="input-group-text" id="basic-addon1">
                      @
                    </span>
                  </li>
                  <li className="pincode_text pl-3">
                    <p>
                      Delivery & Stores <br /> <span>Enter Pincode</span>
                    </p>
                    <div className="pincode_hide_item">
                      <div className="location_Content">
                        <div className="location_icon">
                          <span>
                            <FaLocationDot />
                          </span>
                        </div>
                        <h6>Enter your Pincode to browse better</h6>
                        <p>
                          Get fastest delivery dates possible, check appointment
                          for trial at home. Find nearby stores & design
                          availability in stores
                        </p>
                        <div className="location_search_btn">
                          <span className="location_btn_icon">
                            <MdMyLocation />
                          </span>
                          <input
                            type="search"
                            name=""
                            id=""
                            className="search_input"
                            placeholder="Enter Valid pincode"
                          />
                          <span className="arrow_btn_icon">
                            {" "}
                            <FaArrowRight />
                          </span>
                        </div>
                        <div className="location_text">
                          <span>Use Your Current Location</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      className="flag"
                      src="https://knowindia.india.gov.in/assets/images/national_flag_inner.jpg"
                      alt=""
                      onClick={openModal}
                    />
                    <Country show={modalVisible} onClose={closeModal} />
                  </li>
                  <li className="nav_icons show_account">
                    <span>
                      <IoIosContact />
                    </span>
                    <div className="hide_account">
                      <div className="your-account">
                        <h4>Your Account</h4>
                        <p>Access account & manage your orders.</p>
                        <button>
                          {" "}
                          <Link to="/register">SignUp</Link>
                        </button>
                        <button>
                          {" "}
                          <Link to="/login">Login In</Link>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="nav_icons">
                    <span>
                      
                      <Link to='/wishList'><FaHeart /></Link>
                    </span>
                  </li>
                  <li className="nav_icons">
                    <span>
                      <Link to="/cart">
                        {" "}
                        <FaCartArrowDown />
                      </Link>
                    </span>
                  </li>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Headers;
