import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/message/Message'
import Loader from '../../components/loader/Loader'
import { userRegisterAction } from '../../redux/actions/userActions'
import styled from 'styled-components'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo.name) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("password didn't match")
    } else {
      dispatch(userRegisterAction(name, email, password))

      if (error) {
        navigate('/register')
        console.log(error)
      }
    }
  }
  return (
    <CardContainer>
      <Title> Create new account</Title>
      {error && <Message variant="danger">{error}</Message>}
      {message && <Message variant="danger">{message}</Message>}
      {loading && <Loader />}
      <Container>
        <Screen>
          <ScreenContent>
            <LoginForm onSubmit={submitHandler}>
              <LoginField>
                <LoginInput
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </LoginField>
              <LoginField>
                <LoginInput
                  type="text"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </LoginField>
              <LoginField>
                <LoginInput
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </LoginField>
              <LoginField>
                <LoginInput
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </LoginField>
              <ButtonLoginSubmit>
                <ButtonText type="submit"> Register</ButtonText>
              </ButtonLoginSubmit>
            </LoginForm>

            <NewCustomer>
              You have an account ?
              <h3>
                <Link to={'/login'}>Login</Link>
              </h3>
              <SocialIcons></SocialIcons>
            </NewCustomer>
          </ScreenContent>
          <ScreenBackground>
            <ScreenBackgroundShape4></ScreenBackgroundShape4>
            <ScreenBackgroundShape2></ScreenBackgroundShape2>
            <ScreenBackgroundShape3></ScreenBackgroundShape3>
            <ScreenBackgroundShape1> </ScreenBackgroundShape1>
          </ScreenBackground>
        </Screen>
      </Container>
    </CardContainer>
  )
}

//----------- style -------------------

const CardContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Raleway, sans-serif;
`
const Title = styled.div`
  text-align: center;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const Screen = styled.div`
  background: linear-gradient(90deg, #04619f, #3c2317);
  position: relative;
  height: 600px;
  width: 360px;
  box-shadow: 0px 0px 24px #5c5696;
`
const ScreenContent = styled.div`
  z-index: 1;
  position: relative;
  height: 100%;
`
const LoginForm = styled.form`
  width: 320px;
  padding: 30px;
  padding-top: 70px;
`
const LoginField = styled.div`
  padding: 10px 0px;
  position: relative;
`
const LoginInput = styled.input`
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;
`
const ButtonLoginSubmit = styled.button`
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 40%;
  color: #4c489d;
  box-shadow: 0px 2px 2px #5c5696;
  cursor: pointer;
  transition: 0.2s;
`
const ButtonText = styled.span``
const NewCustomer = styled.div`
  position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: -50px;
  right: 0px;
  color: #fff;
`
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ScreenBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
`
const ScreenBackgroundShape1 = styled.div`
  transform: rotate(45deg);
  position: absolute;
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
`

const ScreenBackgroundShape2 = styled.div`
  height: 220px;
  width: 220px;
  background: #ff731d;
  top: -172px;
  right: 0;
  border-radius: 32px;
  transform: rotate(45deg);
  position: absolute;
`

const ScreenBackgroundShape3 = styled.div`
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #1746a2, #5f9df7);
  top: -24px;
  right: 0;
  border-radius: 32px;
  transform: rotate(45deg);
  position: absolute;
`

const ScreenBackgroundShape4 = styled.div`
  height: 400px;
  width: 200px;
  background: #ff731d;
  top: 420px;
  right: 50px;
  border-radius: 60px;
  transform: rotate(45deg);
  position: absolute;
`

export default RegisterPage
