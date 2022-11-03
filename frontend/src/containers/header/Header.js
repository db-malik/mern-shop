import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { redirect } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown, Collapse } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logoutUserAction } from '../../actions/userActions'

const Header = () => {
  const [open, setOpen] = useState(false)
  const userLogin = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()

  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logoutUserAction())
  }
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>DBM Shop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fa-solid fa-cart-shopping"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
