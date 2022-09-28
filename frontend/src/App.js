import { Container } from 'react-bootstrap'
// import Card from './components/product/card/Card'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
import Home from './pages/home/Home'
const App = () => {
  return (
    <>
      <Header />
      <main className="py-4">
        <Container>
          <Home />
          {/* <Card /> */}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
