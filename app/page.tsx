import Container from './components/Container'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import HomePage from './pages/home'

export default function Home() {
  return (
    <Container>
      <NavBar/>
      <HomePage/>
      <Footer/>
    </Container>
  )
}
