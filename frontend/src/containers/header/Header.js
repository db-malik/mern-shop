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
    redirect('/')
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

              {Object.keys(userInfo).length !== 0 ? (
                <NavDropdown
                  onClick={() => setOpen(!open)}
                  aria-controls="collapsedNav"
                  aria-expanded={open}
                  title={userInfo.name}
                  id="username"
                >
                  <Collapse in={open}>
                    <div id="collapsedNav">
                      <LinkContainer to={'/profile'}>
                        <NavDropdown.Item> Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        {' '}
                        Logout
                      </NavDropdown.Item>
                    </div>
                  </Collapse>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fa-solid fa-user"></i> Sign In
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
