import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Message from '../../components/message/Message'
import {
  ListGroup,
  InputGroup,
  Form,
  Row,
  Col,
  Button,
  Stack,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import logoProfile from '../../assets/img/defaultProfile.png'
import {
  getUserDetails,
  userUpdateProfileAction,
} from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants'

const ProfilePage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  // const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, navigate, userInfo, user, success])
  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("password didn't match")
    } else {
      dispatch(userUpdateProfileAction({ name, email, password }))
    }
  }

  return (
    <Row>
      <Col md={6}>
        <Card style={{ width: '100%' }}>
          <Card.Img
            variant="top"
            src={logoProfile}
            style={{ padding: '50px', borderRadius: '100px' }}
          />

          <ListGroup className="list-group-flush">
            {message && <Message variant="danger">{message}</Message>}
            <ListGroup.Item>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-label="name"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                <Form.Control
                  onChange={(e) => {
                    setMessage(null)
                    setPassword(e.target.value)
                  }}
                  type="password"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  Confirm Password
                </InputGroup.Text>
                <Form.Control
                  onChange={(e) => {
                    setMessage(null)
                    setConfirmPassword(e.target.value)
                  }}
                  type="password"
                  aria-label="ConfirmPassword"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Stack className="mx-auto">
              <Button type="submit" onClick={submitHandler}>
                UPDATE PROFILE
              </Button>
            </Stack>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}> Your orders </Col>
    </Row>
  )
}

export default ProfilePage
