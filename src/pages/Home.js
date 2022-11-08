import { useEffect, useState } from "react";
import { send } from 'emailjs-com';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from "../config/env";
import { Link } from "react-router-dom";
import { ProjectData } from "../data/ProjectData";
const Home = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    useEffect(() => {
    }, [ProjectData])
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

    return (
        <div>
            <div className="page">

                <nav id="main-nav" className="nav-down">
                    <div id="nav-color" className="gradient-color" />
                    <div className="nav-wrapper">
                        <ul className="left hide-on-med-and-down">
                            <li>
                                <a className="waves-effect waves-light" data-scroll-nav={3} href="#">Özellikler</a>
                            </li>
                            <li>
                                <a className="waves-effect waves-light" data-scroll-nav={10} href="#">Projeler</a>
                            </li>
                        </ul>
                        <a className="brand-logo design-font waves-effect waves-light no-bg" data-scroll-nav={1} href="#">
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
                                <a className="waves-effect waves-light" data-scroll-nav={11} href="#">Ekip</a>
                            </li>
                            <li>
                                <a className="waves-effect waves-light" data-scroll-nav={15} href="#">İletişim</a>
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
                                            <a className="waves-effect waves-light" data-scroll-nav={12} href="#">Sık sorulanlar</a>


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
                <header id="main-header" data-scroll-index={1} className="main-header-style-1" style={{ background: 'url(./images/background/71.jpg) fixed' }}>
                    <div className="overlay gradient-color overlay99" />
                    <canvas className="scene scene--full" id="neomi-scene" />
                    <div className="header-section container">
                        <div className="header-text flex-header">
                            <h1 className="textillate white-text" data-aos="fade-in" data-aos-offset={-150} data-loop="true">
                                <span className="textillate-text">
                                    <span data-in-effect="fadeIn" data-out-effect="fadeOut">Maitive'e Hoşgeldiniz!</span>
                                    <span data-in-effect="fadeIn" data-out-effect="fadeOut">Eşsiz Yazılımlarımızla</span>
                                    <span data-in-effect="fadeIn" data-out-effect="fadeOut">Hayallerinizin Ötesi</span>
                                    <span data-in-effect="fadeIn" data-out-effect="fadeOut">Bir Tık Uzağınızda</span>
                                </span>
                            </h1>
                            <div data-aos="fade-up" data-aos-offset={-50}>
                                <h6 className="description center-align white-text">
                                    Yenilikçi fikirlere ve çözümlere elit başlayın.

                                </h6>
                            </div>
                            <form name="subscribe-form" className="subscribe-input input-field subscribe-form" data-form-output="alert-message-2" action="https://ezyro.us15.list-manage.com/subscribe/post?u=d70f2fe680c1d1ba5bef24ab7&id=9ed360ebd1" method="post" data-aos="fade-up" data-aos-offset={-50}>
                                <input name="subscribe-email" id="subscribe-email-2" type="email" className="validate" required autoComplete="email" />
                                <label htmlFor="subscribe-email-2">E-Posta Adresiniz</label>
                                <button data-scroll-nav={15} className="gradient-color waves-effect waves-light button-main subscribe-submit">
                                    <span>Teklif Al</span>
                                    <i className="fa fa-heart" />
                                </button>
                            </form>
                            <h6 className="col s12 alert-message-2 m-t-1 white-text">&nbsp;</h6>
                            <a href="#" data-scroll-nav={2} className="fa fa-angle-double-down scroller" />
                        </div>
                    </div>
                </header>
                <section id="numbers" data-scroll-index={2} className="main-section numbers-style-4">
                    <div className="container">
                        <div className="section-title">
                            <div>
                                <i className="fa fa-heart-o gradient-color" />
                                <span className="one gradient-color" />
                                <span className="two gradient-color" />
                            </div>
                            <h4 className="m-b-1 menu__item hover-me">
                                <span className="menu__item-name">Hakkımızda</span>
                                <span className="menu__item-label">Her şey sayılarla karşınızda.</span>
                            </h4>
                        </div>
                        <p className="p-t-3 desc">
                            Elit'i yakalayan yenilikçi fikir ve çözümlere başlayın.
                            Hayallerinizin önünde engel mi var? Sonuç olarak, kaçınılmaz bir
                            engel, mümkün olan en büyük olasılıkların ortaya çıkması!
                        </p>
                        <div className="content">
                            <div className="row flex-row center-align">
                                <div className="col s6 m4">
                                    <div>
                                        <i className="fa fa-heart fa-3x waves-effect waves-dark gradient-color" aria-hidden="true" />
                                        <h4>
                                            <span className="counter">123</span>
                                            <small>K</small>
                                        </h4>
                                        <p>Müşteriler genellikle Maitive kullanıyor.</p>
                                    </div>
                                </div>
                                <div className="col s12 m4 hide-on-small-and-down">
                                    <svg width="100%" viewBox="0 0 472 472" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient x1="50%" y1="-4.165%" x2="50%" y2="106.185%" id="dIcon">
                                                <stop offset="0%" />
                                                <stop offset="100%" />
                                            </linearGradient>
                                        </defs>
                                        <g transform="translate(1 1)" fill="none" fillRule="evenodd">
                                            <circle stroke="url(#dIcon)" opacity=".257" cx={235} cy={235} r={235} />
                                            <circle stroke="url(#dIcon)" opacity=".257" cx={235} cy={235} r={127} />
                                            <circle stroke="url(#dIcon)" opacity=".257" cx={235} cy={235} r={182} />
                                            <g transform="translate(182 166)" fillRule="nonzero" fill="url(#dIcon)">
                                                <circle cx={61} cy={55} r={4} />
                                                <circle cx={45} cy={55} r={4} />
                                                <path d="M57.833 64h-8.666C47.97 64 47 64.896 47 66c0 3.314 2.91 6 6.5 6s6.5-2.686 6.5-6c0-1.104-.97-2-2.167-2zM8 24V10c0-1.104.896-2 2-2h14L8 24z" />
                                                <path d="M99.885 0H6.115C2.745 0 0 2.773 0 6.18v70.04c0 3.407 2.744 6.18 6.115 6.18H17.91c-2.346 5.094-3.64 10.702-3.64 16.48V103h77.46v-4.12c0-5.778-1.294-11.386-3.64-16.48h11.795c3.37 0 6.115-2.773 6.115-6.18V6.18C106 2.773 103.256 0 99.885 0zM79.5 98.88v-4.12h-4.077v4.12H30.577v-4.12H26.5v4.12h-8.154c0-8.662 3.213-16.915 8.757-23.243C33.257 83.787 42.73 88.58 53 88.58c10.268 0 19.74-4.796 25.897-12.943 5.544 6.328 8.757 14.58 8.757 23.243H79.5zM28.538 49.44v6.18c0 .694.047 1.378.104 2.06h-.104c-2.248 0-4.076-1.848-4.076-4.12 0-2.272 1.828-4.12 4.076-4.12zm0-4.12v-2.06c0-.816.045-1.62.12-2.416 1.305.214 2.624.356 3.957.356 12.684 0 23.137-9.804 24.342-22.308 1.363.227 2.686.56 3.964 1.003C59.24 34.265 47.1 45.32 32.618 45.32H28.54zm.875-8.516c2.81-10.47 12.253-18.21 23.483-18.258-1.027 10.39-9.732 18.534-20.28 18.534-1.08 0-2.147-.11-3.203-.276zM81.538 53.56c0 2.272-1.828 4.12-4.076 4.12h-.104c.057-.682.104-1.366.104-2.06v-6.18c2.248 0 4.076 1.848 4.076 4.12zm-4.076-8.24h-2.04c-6.903 0-13.084-4.42-15.38-10.992l-.075.027c2.43-3.778 4.132-8.076 4.856-12.72 7.528 4.218 12.64 12.326 12.64 21.625v2.06zm-44.847 4.12c9.76 0 18.59-4.398 24.596-11.367 3.124 6.277 9.238 10.545 16.177 11.252v6.295c0 11.36-9.145 20.6-20.385 20.6-11.24 0-20.384-9.24-20.384-20.6v-6.18zM53 80.34c8.123 0 15.313-4.038 19.763-10.213 1.13.797 2.214 1.648 3.233 2.566C70.623 80.095 62.17 84.46 53 84.46c-9.17 0-17.625-4.365-22.998-11.767 1.02-.918 2.102-1.77 3.233-2.566C37.687 76.302 44.877 80.34 53 80.34zm46.885-2.06h-14c-2.8-4.573-6.522-8.574-11-11.682.748-1.518 1.343-3.123 1.77-4.798h.807c4.496 0 8.153-3.696 8.153-8.24 0-3.036-1.65-5.665-4.077-7.095V43.26c0-15.903-12.8-28.84-28.538-28.84-15.737 0-28.538 12.937-28.538 28.84v3.205c-2.426 1.43-4.077 4.06-4.077 7.095 0 4.544 3.657 8.24 8.153 8.24h.806c.428 1.675 1.023 3.28 1.77 4.798-4.477 3.108-8.198 7.11-11 11.682h-14c-1.124 0-2.037-.923-2.037-2.06v-10.3h16.308V61.8H4.077V6.18c0-1.137.913-2.06 2.038-2.06h93.77c1.125 0 2.038.923 2.038 2.06V61.8H85.615v4.12h16.308v10.3c0 1.137-.913 2.06-2.038 2.06z" />
                                            </g>
                                            <text fontFamily="Poppins-Medium, Poppins" fontSize={24} fontWeight={400} letterSpacing=".608" fill="#162659">
                                                <tspan x="195.84" y={301}>Sayılarla</tspan>
                                                <tspan x="169.337" y={334} fontFamily="Poppins-Bold, Poppins" fontWeight="bold" letterSpacing="2.81">
                                                    Maitive
                                                </tspan>
                                            </text>
                                        </g>
                                    </svg>
                                </div>
                                <div className="col s6 m4">
                                    <div>
                                        <i className="fa fa-cloud-download fa-3x waves-effect waves-dark gradient-color" aria-hidden="true" />
                                        <h4>
                                            <span className="counter">123</span>
                                            <small>%</small>
                                        </h4>
                                        <p>Oturum başına sayfa görünümlerinde artış.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row sm-image hide-on-med-and-up center-align">
                                <svg width="100%" viewBox="0 0 472 472" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient x1="50%" y1="-4.165%" x2="50%" y2="106.185%" id="fIcon">
                                            <stop offset="0%" />
                                            <stop offset="100%" />
                                        </linearGradient>
                                    </defs>
                                    <g transform="translate(1 1)" fill="none" fillRule="evenodd">
                                        <circle stroke="url(#fIcon)" opacity=".257" cx={235} cy={235} r={235} />
                                        <circle stroke="url(#fIcon)" opacity=".257" cx={235} cy={235} r={127} />
                                        <circle stroke="url(#fIcon)" opacity=".257" cx={235} cy={235} r={182} />
                                        <g transform="translate(182 166)" fillRule="nonzero" fill="url(#fIcon)">
                                            <circle cx={61} cy={55} r={4} />
                                            <circle cx={45} cy={55} r={4} />
                                            <path d="M57.833 64h-8.666C47.97 64 47 64.896 47 66c0 3.314 2.91 6 6.5 6s6.5-2.686 6.5-6c0-1.104-.97-2-2.167-2zM8 24V10c0-1.104.896-2 2-2h14L8 24z" />
                                            <path d="M99.885 0H6.115C2.745 0 0 2.773 0 6.18v70.04c0 3.407 2.744 6.18 6.115 6.18H17.91c-2.346 5.094-3.64 10.702-3.64 16.48V103h77.46v-4.12c0-5.778-1.294-11.386-3.64-16.48h11.795c3.37 0 6.115-2.773 6.115-6.18V6.18C106 2.773 103.256 0 99.885 0zM79.5 98.88v-4.12h-4.077v4.12H30.577v-4.12H26.5v4.12h-8.154c0-8.662 3.213-16.915 8.757-23.243C33.257 83.787 42.73 88.58 53 88.58c10.268 0 19.74-4.796 25.897-12.943 5.544 6.328 8.757 14.58 8.757 23.243H79.5zM28.538 49.44v6.18c0 .694.047 1.378.104 2.06h-.104c-2.248 0-4.076-1.848-4.076-4.12 0-2.272 1.828-4.12 4.076-4.12zm0-4.12v-2.06c0-.816.045-1.62.12-2.416 1.305.214 2.624.356 3.957.356 12.684 0 23.137-9.804 24.342-22.308 1.363.227 2.686.56 3.964 1.003C59.24 34.265 47.1 45.32 32.618 45.32H28.54zm.875-8.516c2.81-10.47 12.253-18.21 23.483-18.258-1.027 10.39-9.732 18.534-20.28 18.534-1.08 0-2.147-.11-3.203-.276zM81.538 53.56c0 2.272-1.828 4.12-4.076 4.12h-.104c.057-.682.104-1.366.104-2.06v-6.18c2.248 0 4.076 1.848 4.076 4.12zm-4.076-8.24h-2.04c-6.903 0-13.084-4.42-15.38-10.992l-.075.027c2.43-3.778 4.132-8.076 4.856-12.72 7.528 4.218 12.64 12.326 12.64 21.625v2.06zm-44.847 4.12c9.76 0 18.59-4.398 24.596-11.367 3.124 6.277 9.238 10.545 16.177 11.252v6.295c0 11.36-9.145 20.6-20.385 20.6-11.24 0-20.384-9.24-20.384-20.6v-6.18zM53 80.34c8.123 0 15.313-4.038 19.763-10.213 1.13.797 2.214 1.648 3.233 2.566C70.623 80.095 62.17 84.46 53 84.46c-9.17 0-17.625-4.365-22.998-11.767 1.02-.918 2.102-1.77 3.233-2.566C37.687 76.302 44.877 80.34 53 80.34zm46.885-2.06h-14c-2.8-4.573-6.522-8.574-11-11.682.748-1.518 1.343-3.123 1.77-4.798h.807c4.496 0 8.153-3.696 8.153-8.24 0-3.036-1.65-5.665-4.077-7.095V43.26c0-15.903-12.8-28.84-28.538-28.84-15.737 0-28.538 12.937-28.538 28.84v3.205c-2.426 1.43-4.077 4.06-4.077 7.095 0 4.544 3.657 8.24 8.153 8.24h.806c.428 1.675 1.023 3.28 1.77 4.798-4.477 3.108-8.198 7.11-11 11.682h-14c-1.124 0-2.037-.923-2.037-2.06v-10.3h16.308V61.8H4.077V6.18c0-1.137.913-2.06 2.038-2.06h93.77c1.125 0 2.038.923 2.038 2.06V61.8H85.615v4.12h16.308v10.3c0 1.137-.913 2.06-2.038 2.06z" />
                                        </g>
                                        <text fontFamily="Poppins-Medium, Poppins" fontSize={24} fontWeight={400} letterSpacing=".608" fill="#162659">
                                            <tspan x="195.84" y={301}>by the</tspan>
                                            <tspan x="169.337" y={334} fontFamily="Poppins-Bold, Poppins" fontWeight="bold" letterSpacing="2.81">
                                                numbers
                                            </tspan>
                                        </text>
                                    </g>
                                </svg>
                            </div>
                            <div className="row center-align">
                                <div className="push-m2 col s6 m3">
                                    <div>
                                        <i className="fa fa-reddit-alien fa-3x waves-effect waves-dark gradient-color" aria-hidden="true" />
                                        <h4>
                                            <span className="counter">87</span>
                                            <small>%</small>
                                        </h4>
                                        <p>Maitive sayesinde kazanılan süre.</p>
                                    </div>
                                </div>
                                <div className="push-m4 col s6 m3">
                                    <div>
                                        <i className="fa fa-star fa-3x waves-effect waves-dark gradient-color" aria-hidden="true" />
                                        <h4>
                                            <span className="counter">294</span>
                                            <small>%</small>
                                        </h4>
                                        <p>Etkileşimlerde ortalama artış..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features" data-scroll-index={3} className="main-section features-style-4 center-align">
                    <div className="gradient-color overlay" />
                    <div className="container">
                        <div className="section-title section-title-white">
                            <div>
                                <i className="fa fa-heart-o white" />
                                <span className="one white" />
                                <span className="two white" />
                            </div>
                            <h4 className="m-b-1 menu__item">
                                <span className="menu__item-name">Özellikler</span>
                                <span className="menu__item-label">Bizi benzersiz kılan ne</span>
                            </h4>
                        </div>
                        <div className="row p-t-2">
                            <div className="row p-tb-1 feature-left">
                                <div className="single-feature p-tb-2 col s12 l4">
                                    <a className="hoverable feature-link active" data-owl-item={0} data-aos="fade-right" data-aos-delay={0}>
                                        <div>
                                            <h5>Süper Hız</h5>
                                            <p>
                                                Alanımızda en doğru ürünü en hızlı şekilde oluşturma
                                                konusunda bir numarayız.
                                            </p>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-rocket waves-effect waves-light" aria-hidden="true" />
                                        </div>
                                    </a>
                                </div>
                                <div className="single-feature p-tb-2 col s12 l4">
                                    <a className="hoverable feature-link" data-owl-item={1} data-aos="fade-up" data-aos-delay={0}>
                                        <div>
                                            <h5>Sınırsız Özellikler</h5>
                                            <p>Sanal POS kontrollerinden yapay zeka teknolojilerine.</p>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-lightbulb-o waves-effect waves-light" aria-hidden="true" />
                                        </div>
                                    </a>
                                </div>
                                <div className="single-feature p-tb-2 col s12 l4">
                                    <a className="hoverable feature-link" data-owl-item={2} data-aos="fade-left" data-aos-delay={0}>
                                        <div>
                                            <h5>Kullanıcı Dostu</h5>
                                            <p>
                                                Oluşturduğumuz bütün projelerde dikkat ettiğimiz en önemli
                                                unsur kullanıcılarımız.
                                            </p>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-heartbeat waves-effect waves-light" aria-hidden="true" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="row push-m1 push-s1 push-l0 s10 m10 l7 images-slider" data-aos="fade-up" data-aos-delay={0}>
                                <div className="owl-carousel owl-neomi owl-features col s12">
                                    <div>
                                        <img className="responsive-img" src="../images/macbook/imac1.png" alt="image of the software app" />
                                    </div>
                                    <div>
                                        <img className="responsive-img" src="./images/macbook/imac2.png" alt="image of the software app" />
                                    </div>
                                    <div>
                                        <img className="responsive-img" src="./images/macbook/imac3.png" alt="image of the software app" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="showcase" data-scroll-index={4} className="main-section showcase-style-4">
                    <div className="container">
                        <div className="section-title">
                            <div>
                                <i className="fa fa-heart-o gradient-color" />
                                <span className="one gradient-color" />
                                <span className="two gradient-color" />
                            </div>
                            <h4 className="m-b-1 menu__item">
                                <span className="menu__item-name">Nasıl Çalışır</span>
                                <span className="menu__item-label">Profosyonel Yazılımın Keyfini Çıkarın</span>
                            </h4>
                        </div>
                        <p className="p-t-3 desc">
                            Maitive ekibi dilediğiniz yazılımı SEO dostu, sade kod ve kusursuz
                            tasarımları ile sıfırdan hayata geçirir.
                        </p>
                        <div className="single-show-case row p-tb-3">
                            <div className="col s12 l6">
                                <h5 className="p-b-2">Göz alıcı detaylar.</h5>
                                <h6 className="p-b-1">
                                    Eşsiz düzen ile hareket halindeyken harika özellikler
                                </h6>
                                <p>
                                    Projelerimizde eşsiz bir düzen ile çalışmaktayız. Kodların
                                    kalitesi ve düzeni en önemli unsurlarımızın başında geliyor.
                                </p>
                                <div>
                                    <a href="#" className="waves-effect m-tb-1 waves-light gradient-color button-main hoverable">
                                        <span> Daha fazla bilgi edin</span>
                                        <i className="fa fa-rocket" />
                                    </a>
                                </div>
                                <svg width="180" height="180" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><title>icons15</title>
                                    <defs>
                                        <linearGradient x1="50%" y1="-4.165%" x2="50%" y2="106.185%" id="mIcon2z">
                                            <stop offset="0%"></stop>
                                            <stop offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <g fillRule="nonzero" fill="url(#mIcon2z)">
                                        <ellipse cx="33.462" cy="30" rx="2.308" ry="2.857"></ellipse>
                                        <ellipse cx="24.231" cy="30" rx="2.308" ry="2.857"></ellipse>
                                        <ellipse cx="33.462" cy="47.143" rx="2.308" ry="2.857"></ellipse>
                                        <ellipse cx="24.231" cy="47.143" rx="2.308" ry="2.857"></ellipse>
                                        <path d="M56.538 45.714c1.91 0 3.462-1.923 3.462-4.285V4.285C60 1.923 58.447 0 56.538 0H15c-1.908 0-3.462 1.923-3.462 4.286v12.857H6.923c-1.908 0-3.46 1.923-3.46 4.286v1.427C1.552 22.857 0 24.78 0 27.143v5.714c0 2.363 1.553 4.286 3.462 4.286V40C1.552 40 0 41.923 0 44.286V50c0 2.363 1.553 4.286 3.462 4.286v1.428c0 .503.083.98.212 1.43H0V60h60v-2.857h-5.948l-1.356-3.356c-.585-1.454-1.766-2.358-3.08-2.358h-3.462v-5.716h10.384zM13.846 4.286c0-.79.517-1.43 1.154-1.43h41.538c.637 0 1.154.64 1.154 1.43V41.43c0 .787-.517 1.427-1.154 1.427H41.326C40.848 41.2 39.58 40 38.076 40h15c1.274 0 2.31-1.28 2.31-2.857V8.57c0-1.574-1.036-2.856-2.31-2.856H18.463c-1.273 0-2.308 1.282-2.308 2.857v8.573h-2.308V4.286zm24.23 18.57V21.43c0-2.364-1.552-4.287-3.46-4.287H18.46V8.57h34.615v28.573h-15c1.908 0 3.46-1.923 3.46-4.286v-5.714c0-2.363-1.552-4.286-3.46-4.286zM5.77 21.43c0-.79.516-1.43 1.153-1.43h27.692c.637 0 1.154.64 1.154 1.43v1.427h-30V21.43zM2.307 32.856v-5.714c0-.79.517-1.43 1.154-1.43h34.615c.637 0 1.154.64 1.154 1.43v5.714c0 .79-.516 1.43-1.153 1.43h-20.77v-1.43C17.308 31.28 16.274 30 15 30H8.077c-1.273 0-2.308 1.28-2.308 2.857v1.43H3.46c-.637 0-1.154-.64-1.154-1.43zM15 34.287H8.077v-1.43H15v1.43zm-9.23 2.856h30V40h-30v-2.857zM2.307 50v-5.714c0-.79.517-1.43 1.154-1.43h34.615c.637 0 1.154.64 1.154 1.43V50c0 .79-.516 1.43-1.153 1.43h-20.77V50c0-1.576-1.034-2.857-2.307-2.857H8.077c-1.273 0-2.308 1.28-2.308 2.857v1.43H3.46c-.637 0-1.154-.64-1.154-1.43zM15 51.43H8.077V50H15v1.43zm-8.077 5.713c-.637 0-1.154-.64-1.154-1.43v-1.427h30v1.428c0 .79-.518 1.43-1.155 1.43H6.923zm43.71-2.08l.84 2.08H37.864c.13-.45.212-.926.212-1.43v-1.427h11.538c.434 0 .824.298 1.018.778zm-6.787-3.634h-2.52c.13-.45.212-.927.212-1.43v-4.286h2.308v5.715z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="col s12 l6 image center-align">
                                <img className="responsive-img" src="./images/macbook/mac1.png" alt="" />
                                <span className="gradient-color overlay" />
                            </div>
                        </div>
                        <div className="single-show-case row p-tb-3 opposite-container">
                            <div className="col s12 l6">
                                <h5 className="p-b-2">Benzersiz özel tasarım.</h5>
                                <h6 className="p-b-1">
                                    Basit. İyi bir tasarımın gücü basitliğindedir.
                                </h6>
                                <p>
                                    UI,UIX bir projedeki şüphesiz en önemli unsur. Kullanıcının
                                    gözüne eşsiz bir tasarım anlayışı ile dokunuyoruz.
                                </p>
                                <div>
                                    <a href="#" className="waves-effect m-tb-1 waves-light gradient-color button-main hoverable">
                                        <span>Daha fazla bilgi edinin</span>
                                        <i className="fa fa-rocket" />
                                    </a>
                                </div>
                                <svg width="180" height="180" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><title>icons15</title>
                                    <defs>
                                        <linearGradient x1="50%" y1="-4.165%" x2="50%" y2="106.185%" id="mIcon2z">
                                            <stop offset="0%"></stop>
                                            <stop offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <g fillRule="nonzero" fill="url(#mIcon2z)">
                                        <ellipse cx="33.462" cy="30" rx="2.308" ry="2.857"></ellipse>
                                        <ellipse cx="24.231" cy="30" rx="2.308" ry="2.857"></ellipse>
                                        <ellipse cx="33.462" cy="47.143" rx="2.308" ry="2.857"></ellipse>
                                        <ellipse cx="24.231" cy="47.143" rx="2.308" ry="2.857"></ellipse>
                                        <path d="M56.538 45.714c1.91 0 3.462-1.923 3.462-4.285V4.285C60 1.923 58.447 0 56.538 0H15c-1.908 0-3.462 1.923-3.462 4.286v12.857H6.923c-1.908 0-3.46 1.923-3.46 4.286v1.427C1.552 22.857 0 24.78 0 27.143v5.714c0 2.363 1.553 4.286 3.462 4.286V40C1.552 40 0 41.923 0 44.286V50c0 2.363 1.553 4.286 3.462 4.286v1.428c0 .503.083.98.212 1.43H0V60h60v-2.857h-5.948l-1.356-3.356c-.585-1.454-1.766-2.358-3.08-2.358h-3.462v-5.716h10.384zM13.846 4.286c0-.79.517-1.43 1.154-1.43h41.538c.637 0 1.154.64 1.154 1.43V41.43c0 .787-.517 1.427-1.154 1.427H41.326C40.848 41.2 39.58 40 38.076 40h15c1.274 0 2.31-1.28 2.31-2.857V8.57c0-1.574-1.036-2.856-2.31-2.856H18.463c-1.273 0-2.308 1.282-2.308 2.857v8.573h-2.308V4.286zm24.23 18.57V21.43c0-2.364-1.552-4.287-3.46-4.287H18.46V8.57h34.615v28.573h-15c1.908 0 3.46-1.923 3.46-4.286v-5.714c0-2.363-1.552-4.286-3.46-4.286zM5.77 21.43c0-.79.516-1.43 1.153-1.43h27.692c.637 0 1.154.64 1.154 1.43v1.427h-30V21.43zM2.307 32.856v-5.714c0-.79.517-1.43 1.154-1.43h34.615c.637 0 1.154.64 1.154 1.43v5.714c0 .79-.516 1.43-1.153 1.43h-20.77v-1.43C17.308 31.28 16.274 30 15 30H8.077c-1.273 0-2.308 1.28-2.308 2.857v1.43H3.46c-.637 0-1.154-.64-1.154-1.43zM15 34.287H8.077v-1.43H15v1.43zm-9.23 2.856h30V40h-30v-2.857zM2.307 50v-5.714c0-.79.517-1.43 1.154-1.43h34.615c.637 0 1.154.64 1.154 1.43V50c0 .79-.516 1.43-1.153 1.43h-20.77V50c0-1.576-1.034-2.857-2.307-2.857H8.077c-1.273 0-2.308 1.28-2.308 2.857v1.43H3.46c-.637 0-1.154-.64-1.154-1.43zM15 51.43H8.077V50H15v1.43zm-8.077 5.713c-.637 0-1.154-.64-1.154-1.43v-1.427h30v1.428c0 .79-.518 1.43-1.155 1.43H6.923zm43.71-2.08l.84 2.08H37.864c.13-.45.212-.926.212-1.43v-1.427h11.538c.434 0 .824.298 1.018.778zm-6.787-3.634h-2.52c.13-.45.212-.927.212-1.43v-4.286h2.308v5.715z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="col s12 l6 image opposite center-align">
                                <img className="responsive-img" src="./images/macbook/mac2.png" alt="" />
                                <span className="gradient-color overlay" />
                            </div>
                        </div>
                        <div className="single-show-case row p-tb-3">
                            <div className="col s12 l6">
                                <h5 className="p-b-2">Harika yerleşik özellikler.</h5>
                                <h6 className="p-b-1">
                                    Eşsiz düzenlemelerle projenizi öne çıkarın.
                                </h6>
                                <p>
                                    Projenizle ilgili saha araştırması ve detaylı analizle, projenizi
                                    benzer projelerden ayırıp öne çıkaracak sonuçlara ulaşırız.
                                </p>
                                <div>
                                    <a href="#" className="waves-effect m-tb-1 waves-light gradient-color button-main hoverable">
                                        <span>Learn More</span>
                                        <i className="fa fa-rocket" />
                                    </a>
                                </div>
                                <svg width="180" height="180" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient x1="50%" y1="-4.165%" x2="50%" y2="106.185%" id="cIcon">
                                            <stop offset="0%"></stop>
                                            <stop offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <g fill="url(#cIcon)">
                                        <path d="M77.922 55C90.907 39.433 100.26 22.476 93.89 16.11 87.536 9.75 70.532 19.13 55 32.077 39.437 19.087 22.48 9.73 16.11 16.107 9.74 22.477 19.09 39.435 32.075 55 19.09 70.563 9.735 87.52 16.11 93.888c1.41 1.412 3.34 2.05 5.657 2.05 8.153 0 21.114-7.91 33.235-18.02C67.104 88.004 80.097 95.93 88.252 95.93c2.31-.002 4.235-.638 5.637-2.04 6.37-6.37-2.98-23.326-15.97-38.89zM90.9 90.9c-2.883 2.883-15.377-1.364-32.66-15.753 1.543-1.356 3.07-2.733 4.557-4.13l-2.9-3.084c-1.67 1.572-3.296 3.032-4.897 4.434-1.487-1.303-2.995-2.654-4.54-4.1l-2.89 3.09c1.367 1.28 2.774 2.544 4.193 3.788-17.278 14.393-29.77 18.65-32.66 15.755-2.897-2.896 1.36-15.38 15.75-32.657 1.354 1.542 2.733 3.065 4.134 4.55l3.082-2.9c-1.575-1.67-3.03-3.294-4.435-4.893 1.405-1.6 2.862-3.226 4.434-4.895l-3.08-2.9c-1.4 1.487-2.78 3.008-4.136 4.552-14.39-17.276-18.645-29.76-15.75-32.655C22 16.21 34.484 20.468 51.76 34.855c-1.42 1.246-2.82 2.513-4.19 3.795l2.89 3.087c1.547-1.45 3.053-2.8 4.54-4.102 1.603 1.407 3.23 2.864 4.9 4.44l2.902-3.082c-1.49-1.4-3.013-2.784-4.56-4.142C75.522 20.467 88.02 16.217 90.9 19.105c2.894 2.894-1.364 15.38-15.75 32.657-1.357-1.544-2.738-3.07-4.14-4.556l-3.08 2.9c1.573 1.67 3.033 3.298 4.437 4.9-1.404 1.6-2.862 3.225-4.434 4.894l3.083 2.9c1.398-1.487 2.78-3.008 4.133-4.552C89.535 75.52 93.793 88.006 90.9 90.9z"></path>
                                        <circle cx="55" cy="55" r="8.462"></circle>
                                        <path d="M110 55c0-8.76-18.002-14.302-38.807-16.193C69.303 18.002 63.76 0 55 0c-8.76 0-14.302 18.002-16.193 38.807C18.002 40.697 0 46.24 0 55c0 8.76 18.002 14.302 38.807 16.193C40.697 91.998 46.24 110 55 110c8.76 0 14.302-18.002 16.193-38.807C91.998 69.303 110 63.76 110 55zM55 4.23c4.296 0 9.963 12.693 11.958 34.245-3.958-.263-7.975-.398-11.958-.398-3.983 0-8 .135-11.958.398C45.037 16.923 50.704 4.23 55 4.23zM67.692 55c0 4.34-.152 8.423-.408 12.284-3.86.256-7.943.408-12.284.408-4.34 0-8.423-.152-12.284-.408-.256-3.86-.408-7.943-.408-12.284 0-4.34.152-8.423.408-12.284 3.86-.256 7.943-.408 12.284-.408 4.34 0 8.423.152 12.284.408.256 3.86.408 7.943.408 12.284zm-63.46 0c0-4.296 12.69-9.963 34.243-11.958-.263 3.958-.398 7.975-.398 11.958 0 3.983.135 8 .398 11.958C16.923 64.963 4.23 59.296 4.23 55zM55 105.77c-4.296 0-9.963-12.693-11.958-34.245 3.958.263 7.975.398 11.958.398 3.983 0 8-.135 11.958-.398C64.963 93.077 59.296 105.77 55 105.77zm16.528-38.812c.26-3.958.395-7.975.395-11.958 0-3.983-.135-8-.398-11.958C93.077 45.037 105.77 50.704 105.77 55s-12.693 9.963-34.242 11.958z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="col s12 l6 image center-align">
                                <img className="responsive-img" src="./images/macbook/mac3.png" alt="" />
                                <span className="gradient-color overlay" />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="subscribe" data-scroll-index={5} className="main-section subscribe-style-4 center-align">
                    {/* <div className="overlay" />
                    <div className="container" data-aos="fade-up" data-aos-delay={200}>
                        <div className="subscribe-container">
                            <div className="section-title section-title-white">
                                <div>
                                    <i className="fa fa-heart-o white" />
                                    <span className="one white" />
                                    <span className="two white" />
                                </div>
                                <h4 className="m-b-1 menu__item">
                                    <span className="menu__item-name white-text">Subscribe</span>
                                    <span className="menu__item-label">Stay Up to date with us</span>
                                </h4>
                            </div>
                            <p className="p-t-3 desc">
                                These machines include extra scales, so that individual items can
                                be weighed to check the customer has not placed extra items on the
                                belts without scanning them
                            </p>
                            <form name="subscribe-form" className="subscribe-input input-field subscribe-form" >
                                <input name="subscribe-email" id="subscribe-email" type="email" className="validate" required autoComplete="email" />
                                <label htmlFor="subscribe-email">E-Posta Adresiniz</label>
                                <button className="gradient-color waves-effect waves-light button-main subscribe-submit" type="submit">
                                    <span>Teklif Al</span>
                                    <i className="fa fa-heart" />
                                </button>
                            </form>
                        </div>
                        <div className="col s12 alert-message p-t-2" />
                    </div> */}
                </section>
                <section id="screenshot" data-scroll-index={6} className="main-section screenshot-style-4 center-align">
                    <div className="overlay" />
                    <div className="container">
                        <div className="section-title">
                            <div>
                                <i className="fa fa-heart-o gradient-color" />
                                <span className="one gradient-color" />
                                <span className="two gradient-color" />
                            </div>
                            <h4 className="m-b-1 menu__item">
                                <span className="menu__item-name">SİZİN İÇİN BURADAYIZ</span>
                                <span className="menu__item-label">Explore what makes us the best</span>
                            </h4>
                        </div>
                        <p className="p-t-3 desc">



                        </p>
                        <div className="row m-t-2">
                            <div className="col s12 l4 left-align">
                                <h5 className="p-t-1">
                                    <i className="fa fa-cloud-download gradient-color icon" /> API DESTEĞİ
                                    .
                                </h5>
                                <p>
                                    Web yazılımlarınız ile senkronize çalışma özelliğine sahip mobil uygulamalar
                                    yapıyoruz. Bu durumda verilerinizi tek bir yerde tutabilme özelliğine sahip oluyor.
                                    Diğer platformlar ile uyumlu olma özelliğine de sahip oluyor.
                                </p>
                                <h5 className="p-t-1">
                                    <i className="fa fa-cloud-upload gradient-color icon" /> Cloud
                                    Desteği.
                                </h5>
                                <p>
                                    Kurulduğumuz günden beri sunduğumuz hizmetlerden biri olan bulut (cloud)teknolojisi
                                    ile sonuca hızlı ulaşmanızı ve aynı zamanda maliyet tasarrufu yapmanızı sağlıyoruz.
                                    Ayrıca alanında uzman ekiplerimiz ile bulut(cloud)teknolojisine geçiş süreçlerinizde
                                    veya yeni projelerinizde sizi en doğru kaynaklara yönlendiriyoruz.
                                </p>
                            </div>
                            <div className="owl-carousel owl-neomi col s12 l8 owl-screenshots p-t-3">
                                <div className="single-screenshot">
                                    <a href="./images/macbook/imac3.png" data-lity>
                                        <img className="responsive-img" src="./images/macbook/imac3.png" alt="mobile mockup image" />
                                    </a>
                                </div>
                                <div className="single-screenshot">
                                    <a href="./images/macbook/imac1.png" data-lity>
                                        <img className="responsive-img" src="./images/macbook/imac1.png" alt="mobile mockup image" />
                                    </a>
                                </div>
                                <div className="single-screenshot">
                                    <a href="./images/macbook/imac1.png" data-lity>
                                        <img className="responsive-img" src="./images/macbook/imac2.png" alt="mobile mockup image" />
                                    </a>
                                </div>
                                <div className="single-screenshot">
                                    <a href="./images/macbook/imac3.png" data-lity>
                                        <img className="responsive-img" src="./images/macbook/imac3.png" alt="mobile mockup image" />
                                    </a>
                                </div>
                                <div className="single-screenshot">
                                    <a href="./images/macbook/imac3.png" data-lity>
                                        <img className="responsive-img" src="./images/macbook/imac3.png" alt="mobile mockup image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="statistics" data-scroll-index={7} className="main-section center-align statistics-style-4">
                    <div className="overlay white" />
                    <div className="overlay left-half gradient-color" />
                    <div className="overlay right-half gradient-color" />
                    <div id="vs" className="container">
                        <div className="row advantages">
                            <div className="col s12 l6 first main-section">
                                <div>
                                    <h5>Yazılım Özellikleri</h5>
                                    <div className="advantage">
                                        <div className="icon">
                                            <i className="fa fa-rocket" />
                                        </div>
                                        <div className="info">
                                            <h6>Benzersiz Yazılım</h6>
                                            <p>
                                                İddia ediyoruz, ekibimiz tarafından yapılamayacak bir
                                                proje yok. Bunun garantisini sonuna kadar veriyoruz.
                                            </p>
                                            <div className="progress-container">
                                                <span />
                                                <div className="progress-bar" data-progress="95%" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="advantage">
                                        <div className="icon">
                                            <i className="fa fa-lightbulb-o" />
                                        </div>
                                        <div className="info">
                                            <h6>Parlak Fikirler</h6>
                                            <p>
                                                Projenizi sahipleniyoruz. Fikirleriniz bizim en önem
                                                verdiğimiz şey. Projenizi geliştirmek için sınırları
                                                zorluyoruz.
                                            </p>
                                            <div className="progress-container">
                                                <span />
                                                <div className="progress-bar" data-progress="85%" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="advantage">
                                        <div className="icon">
                                            <i className="fa fa-heartbeat" />
                                        </div>
                                        <div className="info">
                                            <h6>Süper hız</h6>
                                            <p>
                                                Ekibimiz istediğiniz projeyi en hızlı ve perfomanslı
                                                şekilde hayata geçirir.
                                            </p>
                                            <div className="progress-container">
                                                <span />
                                                <div className="progress-bar" data-progress="90%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h5 className="vs z-depth-3" data-aos="fade-up" data-aos-offset={-50}>
                                <span>VS.</span>
                            </h5>
                            <div className="col s12 l6 second main-section">
                                <div>
                                    <h5>Klasik Yazılım Özellikleri</h5>
                                    <div className="advantage">
                                        <div className="icon">
                                            <i className="fa fa-lightbulb-o" />
                                        </div>
                                        <div className="info">
                                            <h6>SEO Desteği</h6>
                                            <p>Google Aramalarında İlk Sırada Çıkın</p>
                                            <div className="progress-container">
                                                <span />
                                                <div className="progress-bar" data-progress="70%" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="advantage">
                                        <div className="icon">
                                            <i className="fa fa-desktop" />
                                        </div>
                                        <div className="info">
                                            <h6>100% Responsive</h6>
                                            <p>
                                                Oluşturduğumuz Web siteleri %100 responsive olarak
                                                oluşturulmaktadır.
                                            </p>
                                            <div className="progress-container">
                                                <span />
                                                <div className="progress-bar" data-progress="80%" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="advantage">
                                        <div className="icon">
                                            <i className="fa fa-diamond" />
                                        </div>
                                        <div className="info">
                                            <h6>Cloud Desteği</h6>
                                            <p>
                                                Uygulamalarınızı Bulut hızında tanımlayın, çalıştırın ve
                                                ölçeklendirin
                                            </p>
                                            <div className="progress-container">
                                                <span />
                                                <div className="progress-bar" data-progress="75%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="download" data-scroll-index={9} className="main-section download-style-4" style={{ background: 'url("./images/background/111.jpg") center fixed' }}>
                    <div className="gradient-color overlay" />
                </section>
                <section id="team" data-scroll-index={10} className="main-section team-style-4 center-align">
                    <div className="overlay" />
                    <div className="container">
                        <div className="section-title">
                            <div>
                                <i className="fa fa-heart-o gradient-color" />
                                <span className="one gradient-color" />
                                <span className="two gradient-color" />
                            </div>
                            <h4 className="m-b-1 menu__item">
                                <span className="menu__item-name">PROJELER</span>
                                <span className="menu__item-label">Geniuses behind this software</span>
                            </h4>
                        </div>
                        <p className="p-t-3 desc">
                            Dijital ürün ve hizmetler üreterek, müşterilerimizin dijitalleşme yolculuklarına eşlik ediyor ve
                            yenileşmeye katkı sağlıyoruz. Birlikte çalıştığımız markaların son dijital ürünlerine ve partnerlik yaptığımız
                            projelerin ayrıntılarına yakından bakın. Maitive vizyonuyla dijital dönüşümü keşfedin!

                            .
                        </p>
                        <div className="p-t-2 grid center-align owl-carousel owl-neomi owl-teams">
                            {ProjectData.map((data, index) =>
                                <div key={index} className="tilter">
                                    <a href={`/detail/${data.path}`}>
                                        <figure className="tilter__figure">
                                            <img style={{ maxHeight: "700px" }} className="tilter__image" src={require('../images/' + data.imagePath + '/cover' + '.png')} alt="img15" />

                                            <div className="tilter__deco tilter__deco--shine">
                                                <div />
                                            </div>
                                            {/* <div className="tilter__deco tilter__deco--overlay gradient-color" />
                                            <svg className="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                                                <path d="M20.5,20.5h260v375h-260V20.5z" />
                                            </svg> */}
                                            <figcaption className="tilter__caption">
                                                <h3 className="tilter__title">{data.name}</h3>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <section id="testimonials" data-scroll-index={11} className="main-section testimonials-style-4 center-align">
                    <div className="gradient-color overlay" />
                    <div className="container">
                        <div className="section-title section-title-white">
                            <div>
                                <i className="fa fa-heart-o white" />
                                <span className="one white" />
                                <span className="two white" />
                            </div>
                            <h4 className="m-b-1 menu__item">
                                <span className="menu__item-name">EKIBIMIZ</span>
                            </h4>
                        </div>
                        <div className="owl-carousel owl-neomi owl-testimonials center-align m-t-1">
                            <div >
                                <img className="responsive-img circle" src="./images/memoji/akanakdeniz.webp" alt="Image of a John, one member of the team created the app" />
                                <h4 className="p-t-1">Project Manager</h4>
                                <h6 className="p-b-1">Plan hiçbir şeydir, planlama her şey.</h6>
                                {/* <p className="p-tb-1">
                                    Western Astrology originated way back, around 500 BC, with a
                                    concept called the Zodiac being developed. This comprised of an
                                    imaginary sphere surrounding the earth, which followed the path
                                    of the Sun through the constellations during the year.
                                </p>
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" /> */}
                            </div>
                            <div>
                                <img className="responsive-img circle" src="./images/memoji/yusuf.webp" alt="Image of a John, one member of the team created the app" />
                                <h4 className="p-t-1">Mobile Developer</h4>
                                <h6 className="p-b-1">Kod yalan söylemez, yorumlar bazen söyler.</h6>
                                {/* <p className="p-tb-1">
                                    The Zodiac was split into twelve sections, each named after the
                                    specific constellation noted in that area. Elements: Many
                                    ancient philosophies used a set of classical elements to explain
                                    the way nature behaved.
                                </p>
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" /> */}
                            </div>
                            <div>
                                <img className="responsive-img circle" src="./images/memoji/necmettincimen.webp" alt="Image of a John, one member of the team created the app" />
                                <h4 className="p-t-1">Backend Developer</h4>
                                <h6 className="p-b-1">Yazılım, yapmasını söylediğiniz işi yapar, yapmasını istediğinizi değil.</h6>
                                {/* <p className="p-tb-1">
                                    Each sign was connected to one of the classical elements (fire,
                                    earth, air, or water) and was also related to a region of focus;
                                    social, personal or universal. Water signs are related to growth
                                    processes.
                                </p>
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star-half-empty" aria-hidden="true" /> */}
                            </div>
                            <div>
                                <img className="responsive-img circle" src="./images/memoji/metehankurucu.webp" alt="Image of a John, one member of the team created the app" />
                                <h4 className="p-t-1">Seo Uzmanı</h4>
                                <h6 className="p-b-1">SEO bir süre yaptığınız bir şey değildir. Her şeyi doğru yaptığınızda olan şeydir.</h6>
                                {/* <p className="p-tb-1">
                                    Each sign was connected to one of the classical elements (fire,
                                    earth, air, or water) and was also related to a region of focus;
                                    social, personal or universal. Water signs are related to growth
                                    processes.
                                </p>
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star-half-empty" aria-hidden="true" /> */}
                            </div>
                            <div>
                                <img className="responsive-img circle" src="./images/memoji/emrebaskaya.webp" alt="Image of a John, one member of the team created the app" />
                                <h4 className="p-t-1">Web Developer</h4>
                                <h6 className="p-b-1">Basitleştirin. İyi bir tasarımın gücü basitliğindedir. Web alanının özünü tanımlamaya çalışın.</h6>
                                {/* <p className="p-tb-1">
                                    Each sign was connected to one of the classical elements (fire,
                                    earth, air, or water) and was also related to a region of focus;
                                    social, personal or universal. Water signs are related to growth
                                    processes.
                                </p>
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star-half-empty" aria-hidden="true" /> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section id="faq" data-scroll-index={12} className="main-section faq-style-4">
                    <div className="container">
                        <div className="section-title">
                            <div>
                                <i className="fa fa-heart-o gradient-color" />
                                <span className="one gradient-color" />
                                <span className="two gradient-color" />
                            </div>
                            <h4 className="m-b-1 menu__item">
                                <span className="menu__item-name">Sıkça Sorulan Sorular<small></small></span>
                                <span className="menu__item-label">İhtiyacınız olan tüm cevapları bulun</span>
                            </h4>
                        </div>
                        <p className="p-t-3 desc">


                        </p>
                        <div className="row p-t-3 faq-main">
                            <div className="col s6 m5 push-s3 push-m0 faq-image">
                                <div className="image">
                                    <img className="responsive-img" src="./images/macbook/imac1.png" alt="" />
                                </div>
                            </div>
                            <div className="col s12 m7 collapsible-container">
                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <li>
                                        <div className="collapsible-header active gradient-color waves-effect waves-light">
                                            <i className="fa fa-comment" aria-hidden="true" />
                                            <span>Mobil uygulamam tüm platformlarda çalışır mı?</span>
                                        </div>
                                        <div className="collapsible-body">
                                            <span>Evet. Size özel geliştireceğimiz mobil uygulamanızı iOS ve Android platformlarında çalışacak şekilde geliştiriyoruz.

                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header gradient-color waves-effect waves-light">
                                            <i className="fa fa-comment" aria-hidden="true" />
                                            <span>UI/UX Tasarım hizmeti veriyor musunuz ?</span>
                                        </div>
                                        <div className="collapsible-body">
                                            <span>Evet veriyoruz. Mobil uygulamanızı geliştirirken sizn isteklerinizin yannında kullanıcı deneyimi odağımızı her zaman ön planda tutuyoruz.
                                                Kullanıcı deneyimi (UX) ve Arayüzü (UI) tasarımlarımızı projenize özel oluşturuyoruz.</span>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header gradient-color waves-effect waves-light">
                                            <i className="fa fa-comment" aria-hidden="true" />
                                            <span>Hangi yazılım dillerini kullanıyorsunuz ?</span>
                                        </div>
                                        <div className="collapsible-body">
                                            <span>React.js, Node.js, JavaScript, TypeScript, React Naitive, Expo,
                                                Firebas, Next.js, MongoDB, HTML, CSS, FLUTTER, PYTHON, DOCKER, JAVA,
                                                JEST, MYSQL, Webpack, GraphQL, PHP yazılım dillerini kullanıyoruz.
                                                .</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header gradient-color waves-effect waves-light">
                                            <i className="fa fa-comment" aria-hidden="true" />
                                            <span>Projemin kaynak kodlarını veriyor musunuz ?</span>
                                        </div>
                                        <div className="collapsible-body">
                                            <span>Evet. Projenizin yazılım geliştirme süreci boyunca yazılan
                                                tüm kodlara erişim hakkı veriyoruz. Proje sonunda tüm kodları size teslim ediyoruz.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="map-section" data-scroll-index={15}>
                    <div id="map" />
                </section>
                <section id="footer" className="main-section footer-style-4 center-align gradient-color">
                    <div className="overlay gradient-color" />
                    <div className="footer-main" style={{ zIndex: 10000 }}>
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
                                                Mesaj Gönder
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
                        <div className="footer-content p-t-2 left-align">
                            <div className="container">
                                <div className="row">
                                    <div className="about">
                                        <a data-scroll-goto={1} className="slogan z-depth-1 m-t-1 hoverable waves-effect waves-light button-main">
                                            <span className="fa fa-angle-double-up" />
                                            <i className="fa fa-chevron-up" />
                                        </a>
                                    </div>
                                    <div className="col s12 copy-rights">
                                        <p>© 2021 Maitive Tüm Hakları Saklıdır.</p>
                                        <div className="social-icons">
                                            <a href="#">
                                                <i className="fa fa-facebook shadow-button waves-effect waves-light waves-circle blue" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-twitter shadow-button waves-effect waves-light waves-circle light-blue lighten-2" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-instagram shadow-button waves-effect waves-light waves-circle amber darken-3" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-youtube shadow-button waves-effect waves-light waves-circle red" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
            <a href="#0" className="cd-top js-cd-top waves-effect waves-circle gradient-color hoverable"><i className="fa fa-chevron-up" /></a>
        </div >
    )
}
export default Home