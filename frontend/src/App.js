import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // import Card from './components/product/card/Card'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
import HomePage from './pages/home/HomePage'
import ProductPage from './pages/product/ProductPage'
import CartPage from './pages/cart/CartPage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import ProfilePage from './pages/profile/ProfilePage'
import ShippingPage from './pages/shipping/ShippingPage'
import PaymentMethod from './pages/payment/PaymentMethod'
import PlaceOrder from './pages/placeOrder/PlaceOrder'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-4">
        <Container>
          <Routes>
            <Route path="cart" element={<CartPage />}>
              <Route path=":id" element={<CartPage />} />
            </Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="register" element={<RegisterPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="shipping" element={<ShippingPage />} />
            <Route path="payment" element={<PaymentMethod />} />
            <Route path="placeorder" element={<PlaceOrder />} />
            <Route path="products">
              <Route path=":id" element={<ProductPage />} />
            </Route>

            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
