import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function NewsTab() {
  return (
    <div className="newsTab">
      <div className="newTabBox">
        <Nav fill variant="tabs" defaultActiveKey="/press">
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <Link to="/press"> PRESS RELEASE </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="">
              <Link to="edit-jewellery">JEWELLARY EDIT</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="">
              <Link to="web-stories">WEB STORE </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default NewsTab;
