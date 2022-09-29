import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // import Card from './components/product/card/Card'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
import HomePage from './pages/home/HomePage'
import ProductPage from './pages/product/ProductPage'
import CartPage from './pages/cart/CartPage'
import SignInPage from './pages/signIn/SignInPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-4">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="card" element={<CartPage />} />
            <Route path="signIn" element={<SignInPage />} />

            <Route path="product">
              <Route path=":id" element={<ProductPage />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
