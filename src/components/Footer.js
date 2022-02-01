import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <a href='https://discord.com/invite/c9md4PC'>
        <button
          className='d-flex align-items-center justify-content-center hover-overlay hover-shadow'
          style={{
            height: '10vh',
            width: '100%',
            marginTop: '3vh',
            backgroundColor: 'var(--buttonColor)',
            textDecoration: 'none',
          }}
        >
          <p
            className='d-flex align-items-center'
            style={{
              fontFamily: 'var(--fontTitle)',
              fontSize: '30px',
              textDecoration: 'none',
            }}
          >
            Rejoignez-nous sur le "Dernier discord avant la fin du monde" !
          </p>
        </button>
      </a>
    )
  }
}
