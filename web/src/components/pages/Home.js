import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MyProjects from "../organisms/MyProjects";
import MyInformations from "../organisms/MyInformations";
import MyIntroduction from "../organisms/MyIntroduction";
import WelcomeMessage from "../organisms/WelcomeMessage";
import MyArticles from "../organisms/MyArticles";
import {Link} from "react-router-dom";
import config from "../../config";
import SocialMediaIcons from "../molecules/SocialMediaIcons";
import {useTranslation} from "react-i18next";
import ScrollBarPreview from "../molecules/ScrollBarPreview";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage = props => {
  const projectsRef = React.createRef();
  const articlesRef = React.createRef();
  const {t} = useTranslation();

  // TODO Merge functions
  function handleScrollToProjects(event) {
    window.scroll({
      top: projectsRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  function handleScrollToArticles(event) {
    window.scroll({
      top: articlesRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <div className="position-fixed h-100 d-md-flex align-items-center mr-3 d-none" style={{right: 0}}>
        <ScrollBarPreview/>
      </div>
      <div className={"position-fixed h-100 align-items-center ml-3 animated d-none d-md-flex" + (props.showMediaIcons ? " opacity-100" : " opacity-0")} style={{zIndex: 99}}>
        <SocialMediaIcons vertical transparent/>
      </div>
      <div style={{height: '100vh'}} className="position-relative">
        <div className="position-absolute w-100 h-100">
          <Container className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
            <WelcomeMessage handleScrollToProjects={handleScrollToProjects}/>
          </Container>
        </div>
        {/*<div className="position-absolute w-100 d-flex justify-content-center" style={{bottom: 0, marginBottom: -20}}>*/}
        {/*  <img src="/images/waving-hand.svg" width={42}/>*/}
        {/*</div>*/}
        {/*<ShapesParallaxBackground/>*/}
      </div>

      <div className="bg-clear py-3 py-md-5">
        <Container>
          <MyIntroduction/>
        </Container>
      </div>

      <Container className="py-4 py-md-5">
        <MyInformations handleScrollToArticles={handleScrollToArticles}/>
      </Container>

      <Container className="py-4 py-md-5" ref={projectsRef}>
        <MyProjects projects={config.projects}/>
      </Container>

      <div className="bg-dark text-white py-4 py-md-5" ref={articlesRef}>
        <Container>
          <MyArticles articles={config.articles}/>
        </Container>
      </div>

      <div className="bg-dark text-white">
        <Container className="px-0 px-md-3">
          <div className="bg-primary p-md-5 p-3 rounded">
            <Row className="d-flex align-items-center">
              <Col xs={12} md={6}>
                <h4 className="font-weight-500 mb-md-0 mb-3">
                  {t('homeGetStartedTitle')}
                </h4>
              </Col>
              <Col xs={12} md={6}>
                <div className="d-flex justify-content-start justify-content-md-end">
                  <Link to="/contact">
                    <Button variant="dark">{t('homeGetStartedContactBtn')}</Button>
                  </Link>
                  <Button variant="dark" className="ml-3">Email</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

    </div>
  )
}

export default HomePage
