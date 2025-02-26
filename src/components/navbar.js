import { Navbar, Nav, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import logojefry from '../assets/img/logojefry.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""} style={{ padding: '10px 0' }}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logojefry} alt="Jefry Logo" width="150" height="150" style={{ borderRadius: '50%' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav 
                            className="ms-auto" 
                            style={isMobile ? { display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'center', marginTop: '10px' } : {}}
                        >
                            <Nav.Link 
                                href="#home" 
                                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                                onClick={() => onUpdateActiveLink('home')}
                                style={isMobile ? { padding: '10px 0' } : {}}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link 
                                href="#skills" 
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                                onClick={() => onUpdateActiveLink('skills')}
                                style={isMobile ? { padding: '10px 0' } : {}}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link 
                                href="#projects" 
                                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                                onClick={() => onUpdateActiveLink('projects')}
                                style={isMobile ? { padding: '10px 0' } : {}}
                            >
                                Projects
                            </Nav.Link>
                        </Nav>
                        <span className='navbar-text' style={isMobile ? { textAlign: 'center', marginTop: '20px' } : {}}>
                            <div className='social-icon' style={isMobile ? { display: 'flex', justifyContent: 'center' } : {}}>
                                <a href='https://www.instagram.com/code_in_aja/?igsh=b2w5NWg0aXhzNzk4#'>
                                    <img src={navIcon3} alt='Instagram' />
                                </a>
                            </div>
                            <HashLink to='#connect'>
                                <button className='vvd' style={isMobile ? { display: 'block', margin: '20px auto' } : {}}>
                                    <span>Let's Connect</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
