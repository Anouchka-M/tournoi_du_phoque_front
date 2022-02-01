import Duels from './screens/Duels'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './screens/Home'
import Prez from './components/Prez'
import { Container, Row, Col } from 'reactstrap'
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
              <Row className='pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative'>
                <Col
                  xs={{ order: 2 }}
                  md={{ size: 4, order: 1 }}
                  tag='aside'
                  className='pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0'
                ></Col>
                <Col
                  xs={{ order: 1 }}
                  md={{ size: 7, offset: 1 }}
                  tag='section'
                  className='py-5 mb-5 py-md-0 mb-md-0'
                ></Col>
              </Row>
            </Container>
          </main>
          <Prez />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/duels' element={<Duels />} />
          </Routes>
          <Footer />
        </Fragment>
      }
    </div>
  )
}

export default App
