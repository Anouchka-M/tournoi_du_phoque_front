import { useState } from 'react'
import { Nav, NavLink, NavItem } from 'reactstrap'

const Prez = () => {
  const [onHome, setOnHome] = useState('')

  return (
    <div
      className='prez'
      style={{
        marginTop: '20px',
      }}
    >
      <p
        className={onHome ? 'h3 text-center my-1 py-1' : 'displayOff'}
        style={{
          fontFamily: 'var(--fontBody)',
        }}
      >
        Retrouvez avec le "Dernier discord avant la fin du monde" les
        couvertures les plus phoques d'ouvrages parus en 2021 ! Au programme :
      </p>
      <Nav
        className='d-flex align-items-center justify-content-around my-4 py-4'
        id='navPrez'
        style={{
          fontFamily: 'var(--fontBody)',
        }}
        defaultActiveKey='/home'
      >
        <NavItem>
          <NavLink
            className='text-center hover-overlay hover-shadow hover-zoom'
            href='/'
            style={{
              width: '19vw',
              color: 'rgba(10, 10, 10, 0.8)',
            }}
          >
            Nos 16 concurrents
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className='text-center hover-overlay hover-shadow hover-zoom'
            href='/huitiemes'
            eventKey='link-1'
            style={{
              width: '19vw',
              color: 'rgba(10, 10, 10, 0.8)',
            }}
          >
            Les huitièmes de finales
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className='text-center hover-overlay hover-shadow hover-zoom'
            href='/quarts'
            eventKey='link-2'
            style={{
              width: '19vw',
              color: 'rgba(10, 10, 10, 0.8)',
            }}
          >
            Les quarts de finales
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className='text-center hover-overlay hover-shadow hover-zoom'
            href='/demi'
            eventKey='link-2'
            style={{
              width: '19vw',
              color: 'rgba(10, 10, 10, 0.8)',
            }}
          >
            La demi-finale
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className='text-center hover-overlay hover-shadow hover-zoom'
            href='/finale'
            eventKey='link-2'
            style={{
              width: '19vw',
              color: 'rgba(10, 10, 10, 0.8)',
            }}
          >
            Une finale au sommet
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default Prez
