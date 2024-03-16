import React from 'react'
import "../../Assets/scss/components/_iconwithtext.scss"
// Libraries
import {Row, Col, Container, Dropdown, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {m} from "framer-motion";

// Components
import Header, {HeaderCart, HeaderNav, Menu} from '../../Components/Header/Header';
import {fadeIn} from "../../Functions/GlobalAnimations";
import FooterStyle01 from '../../Components/Footers/FooterStyle01'

const SoSadeOurStory = (props) => {
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

            {/* Info Banner Style 02 */}
            <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] relative bg-cover bg-center"
                       style={{ backgroundImage: `url("https://via.placeholder.com/1920x1100")`, }} >
                <div className="absolute top-0 left-0 w-full h-full opacity-60 bg-darkslateblue"></div>
                <Container className="relative">
                    <Row className="">
                        <Col xl={7} lg={8} md={10}>
                            <div className="font-serif text-white">
                                <m.h4 {...fadeIn} className="font-semibold mb-[45px]" >
                                    Beautifully simple handcrafted templates for your website
                                </m.h4>
                                <m.span {...fadeIn} className="uppercase tracking-[1px]">
                                    unlimited power and customization
                                </m.span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Info Banner Style 02 End */}


            {/* Section Start */}
            <section className="py-[130px] overflow-hidden lg:py-[90px] sm:py-[75px] xs:py-[50px]">
                <Container>
                    <Row className="items-center justify-center">
                        <Col lg={7} md={9} xs={12} className="px-[55px] md:pr-[50px] md:pl-[5px]">
                            <m.figure className="image-back-offset-shadow w-100">
                                <m.img
                                    className="rounded-[6px] w-auto h-auto"
                                    src="https://via.placeholder.com/800x610"
                                    alt="our-services"
                                    width="572.5"
                                    height="436.53"
                                    initial={{ opacity: 0, x: "0", y: "0" }}
                                    whileInView={{ opacity: 1, x: "10px", y: "-20px" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, easing: "linear" }}
                                />
                                <m.span
                                    className="rounded-[6px]"
                                    {...{ ...fadeIn, animate: { x: "35px", y: "5px" } }}
                                ></m.span>
                            </m.figure>
                        </Col>
                        <Col lg={5} md={9} className="mb-[10px] md:mb-28">
                            <span className="font-serif mb-[20px] text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] inline-block uppercase font-medium tracking-[1px]">Experience agency</span>
                            <h4 className="font-serif font-semibold text-darkgray w-[95%]">We help our clients build value digital web solutions</h4>
                            <p className="w-[80%] mb-[25px] lg:w-[95%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua printing typesetting.</p>
                        </Col>
                        
                    </Row>
                </Container>
            </section>
            {/* Section End */}
            
            {/* Footer Start */}
            <FooterStyle01 theme="dark" className="text-[#7F8082] bg-darkgray"/>
            {/* Footer End */}

        </div>
    )
}

export default SoSadeOurStory