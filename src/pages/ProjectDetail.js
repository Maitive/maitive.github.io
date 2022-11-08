import { useState } from "react";
import { send } from 'emailjs-com';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from "../config/env";
import { ProjectData } from "../data/ProjectData"
import { Link, useParams } from "react-router-dom";
import React from "react";
import android from "../images/androidbtn.png"
import ios from "../images/iosbtn.png"
import { useStyletron } from "baseui";
import ArrowRight from "baseui/icon/arrow-right";
import ArrowLeft from "baseui/icon/arrow-left";
import Slider from "react-slick";
import {
    Button,
    SIZE as BUTTON_SIZE,
    SHAPE as BUTTON_SHAPE,
    KIND as BUTTON_KIND
} from "baseui/button";

const ProjectDetail = () => {
    const params = useParams();

    const [project, setProject] = useState(ProjectData.filter(x => x.path == params.name)[0]);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendMessage = async () => {
        try {
            const data = {
                from_name: name,
                email: email,
                message: message
            }

            send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                data,
                EMAILJS_USER_ID,
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Başarılı");
                    setName("")
                    setEmail("")
                    setMessage("")
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                    alert("Gönderilemedi");
                });

        } catch (error) {
            console.log(error)
        }
    }



    const sliderSettings = {
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrow: false
    };

    const PhoneMockup = ({ children }) => {
        const [css] = useStyletron();

        return (
            <div className="device device-iphone-x">
                <div className="device-frame">
                    <div
                        className={css({
                            overflow: "hidden",
                            borderRadius: "30px"
                        })}
                    >
                        {children}
                    </div>
                </div>
                <div className="device-stripe" />
                <div className="device-header" />
                <div className="device-sensors" />
                <div className="device-btns" />
                <div className="device-power" />
            </div>
        );
    };

    const CallPageSlider = ({ tilt }) => {
        const [css, theme] = useStyletron();
        const slider = React.createRef();
        let array = new Array(project.imageLength).fill("")
        return (
            <div
                className={css({
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    [theme.mediaQuery.maxMedium]: {
                        marginRight: "-40px"
                    },
                    [theme.mediaQuery.maxSmall]: {
                        marginRight: "0px",
                        justifyContent: "center"
                    }
                })}
            >
                <div
                    className={css({
                        display: "flex",
                        alignItems: "center",
                        marginRight: "10px"
                    })}
                >
                    <Button
                        size={BUTTON_SIZE.mini}
                        shape={BUTTON_SHAPE.round}
                        kind={BUTTON_KIND.secondary}
                        onClick={() => slider.current.slickPrev()}
                    >
                        <ArrowLeft size={22} />
                    </Button>
                </div>
                <div
                    className={css({
                        transform: tilt
                            ? "rotate(3deg) scale(0.9) translate3d(0, 0, 0)"
                            : "translate3d(0, 0, 0)"
                    })}
                >
                    <PhoneMockup>
                        <Slider {...sliderSettings} ref={slider}>
                            {
                                array.map((slide, index) => (
                                    <div key={index} >
                                        <img
                                            src={require('../images/' + project.imagePath + "/" + (index + 1) + '.png')}



                                        />
                                    </div >
                                ))
                            }
                        </Slider>
                    </PhoneMockup>
                </div>
                <div
                    className={css({
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "10px"
                    })}
                >
                    <Button
                        size={BUTTON_SIZE.mini}
                        shape={BUTTON_SHAPE.round}
                        kind={BUTTON_KIND.secondary}
                        onClick={() => slider.current.slickNext()}
                    >
                        <ArrowRight size={22} />
                    </Button>
                </div>

            </div>

        );
    };

    return (
        <div className="page">
            <nav id="main-nav" className="nav-down">
                <div id="nav-color" className="gradient-color" />
                <div className="nav-wrapper">
                    <ul className="left hide-on-med-and-down">
                        <li>
                            <a href="/" className="waves-effect waves-light" >Özellikler</a>
                        </li>
                        <li>
                            <a href="/" className="waves-effect waves-light" >Projeler</a>
                        </li>
                    </ul>
                    <a className="brand-logo design-font waves-effect waves-light no-bg" href="/">
                        <div>Maitive</div>
                    </a>
                    <a href="#" data-activates="mobile-demo" className="button-collapse">
                        <div className="very_small_hamburger" id="hamburger-menu">
                            <svg viewBox="0 0 800 600">
                                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top">
                                </path>
                                <path d="M300,320 L540,320" className="middle" />
                                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
                            </svg>
                        </div>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a href="/" className="waves-effect waves-light" >Ekip</a>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" href="/" >İletişim</a>
                        </li>
                        <li>
                            <div className="fixed-action-btn click-to-toggle">
                                <a className="btn-floating btn-large waves-effect waves-light grey darken-4">
                                    <div className="ham-cont">
                                        <div className="very_small_hamburger" id="social-hamburger">
                                            <svg viewBox="0 0 800 600">
                                                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top" />
                                                <path d="M300,320 L540,320" className="middle" />
                                                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <ul>
                                    <li>
                                        <a className="fa fa-facebook btn-floating waves-effect waves-light blue" href="https://www.facebook.com/maitivecom/">
                                        </a>
                                    </li>
                                    <li>
                                        <a className="fa fa-twitter btn-floating waves-effect waves-light light-blue lighten-2" href="https://twitter.com/maitivecom">
                                        </a>
                                    </li>
                                    <li>
                                        <a className="fa fa-instagram btn-floating waves-effect waves-light amber darken-3" href="#">
                                        </a>
                                    </li>
                                    <li>
                                        <a className="fa fa-youtube btn-floating waves-effect waves-light red" href="#">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul id="news-dropdown" className="dropdown-content">
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={14} href="#">News Section</a>
                        </li>
                        <li className="divider" />
                        <li>
                            <a className="waves-effect waves-light" href="./blog.html">News Page</a>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" href="./single-blog.html">Single News Page</a>
                        </li>
                    </ul>
                    <ul id="more-dropdown" className="dropdown-content">
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={4} href="#">Nasıl Çalışır</a>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={5} href="#">Ödeme</a>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={7} href="#">İstatistikler</a>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={10} href="#">Ekip</a>
                        </li>
                        <li className="divider" />
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={12} href="#">SSS</a>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={13} href="#">Videolar</a>
                        </li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li>
                            <a className="waves-effect waves-light home no-bg" data-scroll-nav={1} href="#">
                                <img className="responsive-img logo" src="./images/logo/logo.png" alt="Logo image" /><br />
                                <img className="responsive-img title" src="./images/title.png" alt="App name image" />
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={1} href="#">Home</a>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={3} href="#">Features</a>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={6} href="#">Screenshots</a>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={8} href="#">Prices</a>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={9} href="#">Download</a>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={10} href="#">Team</a>
                        </li>
                        <li>
                            <ul className="collapsible" data-collapsible="accordion">
                                <li>
                                    <a className="collapsible-header waves-effect waves no-bg" href="#!">
                                        News
                                        <i className="fa fa-chevron-down" aria-hidden="true" />
                                    </a>
                                    <div className="collapsible-body">
                                        <a className="waves-effect waves-light" data-scroll-nav={14} href="#">News Section</a>
                                        <a className="waves-effect waves-light" href="./blog.html">News Page</a>
                                        <a className="waves-effect waves-light" href="./single-blog.html">Single News Page</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className="collapsible" data-collapsible="accordion">
                                <li>
                                    <a className="collapsible-header waves-effect waves no-bg" href="#!">
                                        More
                                        <i className="fa fa-chevron-down" aria-hidden="true" />
                                    </a>
                                    <div className="collapsible-body">
                                        <a className="waves-effect waves-light" data-scroll-nav={4} href="#">Showcase</a>
                                        <a className="waves-effect waves-light" data-scroll-nav={5} href="#">Subscribe</a>
                                        <a className="waves-effect waves-light" data-scroll-nav={7} href="#">Compare Statistics</a>
                                        <a className="waves-effect waves-light" data-scroll-nav={10} href="#">Our Team</a>
                                        <a className="waves-effect waves-light" data-scroll-nav={12} href="#">FAQs</a>
                                        <a className="waves-effect waves-light" data-scroll-nav={13} href="#">Our Videos</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="waves-effect waves-light" data-scroll-nav={15} href="#">Contact</a>
                        </li>
                        <li className="social">
                            <a href="#"><i className="fa fa-facebook waves-effect waves-circle waves-light blue white-text" /></a>
                            <a href="#"><i className="fa fa-twitter waves-effect waves-circle waves-light light-blue lighten-2" /></a>
                            <a href="#"><i className="fa fa-instagram waves-effect waves-circle waves-light amber darken-3" /></a>
                            <a href="#"><i className="fa fa-youtube waves-effect waves-circle waves-light red" /></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <header id="small-main-header" className="other-main-header-2 gradient-color">
                <div className="title">
                    <h2 className>{project.name}</h2>
                </div>

            </header>
            <section id="news" data-scroll-index={4} className="main-section news-style-2 blog-page-news center-align">
                <div className="overlay" />
                <div className="container">
                    <div style={{ display: "flex", justifyContent: "center" }} className="row">
                        <div style={{ width: "80%" }}>
                            <div className="p-t-2 grid center-align row">
                                <div className="single-news col s12">
                                    <CallPageSlider />
                                    <div className="info p-b-1">
                                        <div style={{ display: "flex", flexDirection: "row", marginLeft: "30px", marginTop: "30px", justifyContent: "center" }}>
                                            {project.ios && <a style={{ marginRight: "10px" }} href={project.ios} target={"_blank"}> <img src={ios} /></a>}
                                            {project.android && <a href={project.android} target={"_blank"}> <img src={android} /></a>}
                                        </div>
                                        <div className="content">
                                            <p>{project.detail}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="footer" className="main-section blog-footer footer-style-2 center-align gradient-color">
                <div className="overlay gradient-color" />
                <div className="footer-main">
                    <div className="main-section">
                        <div className="container">
                            <div className="section-title">
                                <div>
                                    <i className="fa fa-heart-o gradient-color" />
                                    <span className="one gradient-color" />
                                    <span className="two gradient-color" />
                                </div>
                                <h4 className="m-b-1 menu__item">
                                    <span className="menu__item-name">Dokunun</span>
                                    <span className="menu__item-label">We would love to hear from you</span>
                                </h4>
                            </div>
                            <div className="contact-container">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="fa fa-user-o prefix gradient-color transparent-text" aria-hidden="true" />
                                        <input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} type="text" className="validate" name="first_name" required autoComplete="name" />
                                        <label htmlFor="contact-name">Name*</label>
                                    </div>
                                    <div className="input-field col s12 m-t-1">
                                        <i className="fa fa-paper-plane-o prefix gradient-color transparent-text" aria-hidden="true" />
                                        <input id="contact-email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="validate" name="email" required autoComplete="email" />
                                        <label data-error="Invalid Email" htmlFor="contact-email">Email*</label>
                                    </div>
                                    <div className="input-field col s12 m-t-1">
                                        <i className="fa fa-envelope-o prefix gradient-color transparent-text" aria-hidden="true" />
                                        <textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} className="materialize-textarea validate" minLength={20} name="message" required defaultValue={""} />
                                        <label htmlFor="contact-message" data-error="Minimum Length is 20 Characters">Message*</label>
                                    </div>
                                    <div className="col s12 alert-message" id="contact-alert-message" />
                                    <div className="col s12">
                                        <button className="gradient-color waves-effect waves-light" onClick={() => sendMessage()}>
                                            Gönder
                                        </button>
                                    </div>
                                    <div className="input-field col s12 hidden">
                                        <input type="text" id="contact-check-spam" placeholder="Leave field empty" name="check-spam" />
                                    </div>
                                </div>
                                <div className="address">
                                    <p className="p-b-1">
                                        <i className="address-icon fa fa-map-marker" />
                                        <span>Batı, Nida Kule, barbaros mahallesi, Begonya Sk. no:1,
                                            34746 Ataşehir/İstanbul</span>
                                    </p>
                                    <p className="p-b-1">
                                        <i className="address-icon fa fa-paper-plane" aria-hidden="true" />
                                        <a href="mailto:info@maitive.co">info@maitive.co</a>
                                    </p>
                                    <div className="social-icons p-b-1">
                                        <a href="#">
                                            <i className="fa fa-facebook waves-effect waves-light blue" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter waves-effect waves-light light-blue lighten-2" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram waves-effect waves-light amber darken-3" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube waves-effect waves-light red" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default ProjectDetail