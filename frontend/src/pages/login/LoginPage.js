import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/message/Message'
import Loader from '../../components/loader/Loader'
import { userLoginAction } from '../../actions/userActions'

import styled from 'styled-components'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirection = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirection)
    }
  }, [userInfo, navigate, redirection])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userLoginAction(email, password))
  }
  return (
    <CardContainer>
      <Title> Login to your account</Title>
      {error && <Message variant="danger">{error}</Message>}

      {loading && <Loader />}
      <Container>
        <Screen>
          <ScreenContent>
            <LoginForm onSubmit={submitHandler}>
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </LoginField>
              <ButtonLoginSubmit>
                <ButtonText type="submit"> Sign In</ButtonText>
              </ButtonLoginSubmit>
            </LoginForm>

            <NewCustomer>
              New Customer?{' '}
              <Link
                to={
                  redirection
                    ? `/register?redirect=${redirection}`
                    : '/register'
                }
              >
                Register
              </Link>
              <SocialIcons></SocialIcons>
            </NewCustomer>
          </ScreenContent>
          <ScreenBackground>
            <ScreenBackgroundShape4></ScreenBackgroundShape4>
            <ScreenBackgroundShape2></ScreenBackgroundShape2>
            <ScreenBackgroundShape3></ScreenBackgroundShape3>
            <ScreenBackgroundShape1></ScreenBackgroundShape1>
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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
const Title = styled.div`
  text-align: center;
`
const Screen = styled.div`
  background: linear-gradient(90deg, #04619f, #000000);
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
  padding-top: 156px;
`
const LoginField = styled.div`
  padding: 20px 0px;
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
  background: #6c63ac;
  top: -172px;
  right: 0;
  border-radius: 32px;
  transform: rotate(45deg);
  position: absolute;
`

const ScreenBackgroundShape3 = styled.div`
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #5d54a4, #6a679e);
  top: -24px;
  right: 0;
  border-radius: 32px;
  transform: rotate(45deg);
  position: absolute;
`

const ScreenBackgroundShape4 = styled.div`
  height: 400px;
  width: 200px;
  background: #7e7bb9;
  top: 420px;
  right: 50px;
  border-radius: 60px;
  transform: rotate(45deg);
  position: absolute;
`

export default LoginPage
