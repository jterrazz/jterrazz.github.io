import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import React, {useState} from "react";
import "./TheNavBar.scss"
import { useTranslation } from "react-i18next"

const Hamburger = props => {
  return (
    <button className="hamburger hamburger--collapse p-0 ml-3" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"/>
          </span>
    </button>
  )
}

const TheNavBar = props => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(window.localStorage.getItem('i18nextLng') || 'en')

  const changeLanguage = lang => {
    setLanguage(lang);
    i18n.changeLanguage(lang)
  }

  return (
    <Navbar bg="white" fixed="top" expand="lg">
      <Link to="/">
        <Navbar.Brand className="navbar-brand text-dark">jterrazz</Navbar.Brand>
      </Link>

      <Nav className="mx-auto d-flex align-items-center">
        <div className="green-dot mr-2"/>
        <div className="small font-weight-500">{t('statusAvailable')}</div>
      </Nav>
      <div className="small font-weight-600">
        <button className={"mr-md-1 px-1 px-md-2 " + (language === "en" ? "text-dark" : "text-muted")} onClick={() => changeLanguage("en")}>EN</button>
        <button className={language === "fr" ? "text-dark" : "text-muted"} onClick={() => changeLanguage("fr")}>FR</button>
      </div>
      {/*<Nav.Link href="#contact">Contact</Nav.Link>*/}
      {/*<button className="hamburger hamburger--collapse p-0 ml-3" type="button">*/}
      {/*  <span className="hamburger-box">*/}
      {/*    <span className="hamburger-inner"/>*/}
      {/*  </span>*/}
      {/*</button>*/}
    </Navbar>
  )
}

export default TheNavBar
