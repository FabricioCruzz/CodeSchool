import Container from './components/Container'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import HomePage from './home/page'

export default function Home() {
  return (
    <Container>
      <NavBar/>
      <HomePage/>
      <Footer/>
    </Container>
  )
}
