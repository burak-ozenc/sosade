import React from 'react'

// Libraries
import {Row, Col, Container, Dropdown, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {m} from "framer-motion";

// Components
import Header, {HeaderCart, HeaderNav, Menu} from '../../Components/Header/Header';
import {fadeIn} from "../../Functions/GlobalAnimations";
import FooterStyle01 from '../../Components/Footers/FooterStyle01'
import Accordions from "../../Components/Accordion/Accordion";
import {AccordionData02} from "../../Components/Accordion/AccordionData";


const SoSadeContactUs = (props) => {
    return (
        <div style={props.style}>
            {/* Header start */}
            <Header className="header-with-topbar decor-header" topSpace={{desktop: true}} type="reverse-scroll">
                {/* Header Start */}
                <HeaderNav fluid="fluid" theme="light" bg="white" expand="lg" containerClass="sm:!px-0"
                           className="py-[0px] px-[35px] md:pr-[15px] md:pl-0">
                    <Col className="col-auto mr-auto ps-lg-0">
                        <Link aria-label="header logo" className="flex items-center -mr-[35px]" to="/">
                            <Navbar.Brand className="inline-block p-0 m-0">
                                <img className="default-logo" width="111" height="36" loading="lazy"
                                     src='/assets/img/webp/logo-tussock.webp'
                                     data-rjs='/assets/img/webp/logo-tussock@2x.webp' alt='logo'/>
                                <img className="alt-logo" width="111" height="36" loading="lazy"
                                     src='/assets/img/webp/logo-tussock.webp'
                                     data-rjs='/assets/img/webp/logo-tussock@2x.webp' alt='logo'/>
                                <img className="mobile-logo" width="111" height="36" loading="lazy"
                                     src='/assets/img/webp/logo-tussock.webp'
                                     data-rjs='/assets/img/webp/logo-tussock@2x.webp' alt='logo'/>
                            </Navbar.Brand>
                        </Link>
                    </Col>
                    <Navbar.Toggle className="order-last md:ml-[25px] sm:ml-[17px]">
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse className="col-auto justify-center">
                        <Menu {...props} />
                    </Navbar.Collapse>
                    <Col className="col-auto text-right !pr-0">
                        <div className="header-language pl-0 text-[17px] align-middle inline-block md:hidden">
                            <Dropdown
                                className="border-l border-r border-solid border-[#0000001a] h-full text-[#828282]">
                                <Dropdown.Toggle
                                    className="rounded-none uppercase w-auto h-full font-normal text-xs leading-[11px] border-[0px] m-0 dropdown-toggle after:none sm-w-100 items-center flex px-[18px] py-[12px] bg-transparent"
                                    id="dropdown-basic">
                  <span className="icon-country w-[16px] h-[16px] inline-block my-0 mr-[10px] ml-0"><img width="16px"
                                                                                                         height="16px"
                                                                                                         src="/assets/img/country-flag-16X16/usa.png"
                                                                                                         alt=""/></span>EN <i
                                    className="fas fa-angle-down ml-[5px] align-middle relative after:content-[' ']"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        className="dropdown-items bg-transparent hover:bg-transparent p-0 border-0 m-0 flex items-center justify-start"
                                        href="#/action-1">
                    <span className="icon-country w-[16px] h-[16px] inline-block my-0 mr-[10px] ml-[5px]"><img
                        width="16px" height="16px" src="/assets/img/country-flag-16X16/usa.png" alt=""/></span>English
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className="dropdown-items bg-transparent hover:bg-transparent p-0 border-0 m-0 flex items-center justify-start"
                                        href="#/action-2">
                    <span className="icon-country w-[16px] h-[16px] inline-block my-0 mr-[10px] ml-[5px]"><img
                        width="16px" height="16px" src="/assets/img/country-flag-16X16/england.png" alt=""/></span>England
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className="dropdown-items bg-transparent hover:bg-transparent p-0 border-0 m-0 flex items-center justify-start"
                                        href="#/action-3">
                    <span className="icon-country w-[16px] h-[16px] inline-block my-0 mr-[10px] ml-[5px]"><img
                        width="16px" height="16px" src="/assets/img/country-flag-16X16/france.png" alt=""/></span>France
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className="dropdown-items bg-transparent hover:bg-transparent p-0 border-0 m-0 flex items-center justify-start"
                                        href="#/action-4">
                    <span className="icon-country w-[16px] h-[16px] inline-block my-0 mr-[10px] ml-[5px]"><img
                        width="16px" height="16px" src="/assets/img/country-flag-16X16/russian.png" alt=""/></span>Russian
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className="dropdown-items bg-transparent hover:bg-transparent p-0 border-0 m-0 flex items-center justify-start"
                                        href="#/action-5">
                    <span className="icon-country w-[16px] h-[16px] inline-block my-0 mr-[10px] ml-[5px]"><img
                        width="16px" height="16px" src="/assets/img/country-flag-16X16/spain.png" alt=""/></span>Spain
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <HeaderCart/>
                    </Col>
                </HeaderNav>
                {/* Header End */}
            </Header>
            {/* Header End */}


            {/* Section Start */}
            <section className="pt-20 switch-tabs">
                <Col className="text-center">
                    <h6 className="font-serif text-darkgray text-center font-medium mb-[5%]">Accordions style 02</h6>
                </Col>
                
                        <m.section className="py-20 bg-lightgray">
                            <Container>
                                <Row className="justify-center">
                                    <Col lg={6} md={10}>
                                        <Accordions
                                            theme="accordion-style-02"
                                            className=""
                                            animation={fadeIn}
                                            themeColor="light"
                                            data={AccordionData02}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </m.section>
                    
            </section>
            {/* Section End */}
            {/* Footer Start */}
            <FooterStyle01 theme="dark" className="text-[#7F8082] bg-darkgray"/>
            {/* Footer End */}

        </div>
    )
}

export default SoSadeContactUs