import DuelsHuitièmes from './screens/DuelsHuitièmes'
import DuelsQuarts from './screens/DuelsQuarts'
import DuelsDemi from './screens/DuelsDemi'
import DuelsFinale from './screens/Finale'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './screens/Home'
import Prez from './components/Prez'
import { Container, Row } from 'reactstrap'
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      {
        <Fragment>
          <Header />
          <main className='my-1 py-3'>
            <Container className='px-0'>
              <Row className='pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative'></Row>
            </Container>
            <Prez />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/huitiemes' element={<DuelsHuitièmes />} />
              <Route path='/quarts' element={<DuelsQuarts />} />
              <Route path='/demi' element={<DuelsDemi />} />
              <Route path='/finale' element={<DuelsFinale />} />
            </Routes>
          </main>
          <Footer />
        </Fragment>
      }
    </div>
  )
}

export default App
