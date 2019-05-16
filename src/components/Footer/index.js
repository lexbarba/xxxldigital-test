import React from 'react'
import './index.sass'

export default function Footer() {
  return (
    <footer className='footer-container'>
      <nav className='footer-container__links'>
        <a href='https://www.xxxlutz.se/c/impressum' target='_blank' rel='noopener noreferrer'>IMPRESSUM /</a>
        <a href='https://www.xxxlutz.se/c/privacy' target='_blank' rel='noopener noreferrer'> ANVÄNDARVILLKOR</a>
      </nav>
      <nav className='footer-container__media'>
        <p>© 2019 XXXLUTZ KG</p>
        <a href='https://www.facebook.com/xxxlutz.se/?fref=ts' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook-f'></i></a>
        <a href='https://www.instagram.com/xxxlutzsverige/' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a>
      </nav>
    </footer>
  )
}