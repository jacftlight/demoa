import * as React from 'react';
import './componentUI/about.css';
import { gsap } from "gsap/dist/gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef} from "react";
import {useEffect} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {useDispatch} from "react-redux";
import {scrollView} from "../store/actions/scrollAction";

gsap.registerPlugin(ScrollTrigger);

const About = (props) => {

    const dispatch = useDispatch();

    const onPageScrollHandler = () => {
        dispatch(scrollView('portfolios'));
    }

    let imgEl = useRef();
    const tltc0 = useRef();
    const tltc1 = useRef();
    const tltc2 = useRef();
    const tltc3 = useRef();
    const tltc4 = useRef();

    // ScrollTrigger.create({
    //     trigger: imgEl.current,
    //     start: "top center",
    //     toggleActions: "restart none none none"
    // })

    let tl = gsap.timeline();
    let t2 = gsap.timeline();

    useEffect(() => {
        tl.from(imgEl.current, {opacity: 0, yPercent:100, scale: 0.5, duration: 1, delay: 2})
            .to(imgEl.current, {scale: 1, duration: 0.5});


        t2.fromTo(tltc0.current, {opacity: 0, yPercent:-100, scale: 0.5}, {opacity: 1, yPercent:0, scale: 1, duration: 0.3, delay:1})
          .fromTo(tltc1.current, {opacity: 0, xPercent:-100, scale: 0.5}, {opacity: 1, xPercent:0, scale: 1, duration: 0.3})
          .fromTo(tltc2.current, {opacity: 0, xPercent:100, scale: 0.5}, {opacity: 1, xPercent:0, scale: 1, duration: 0.3})
          .fromTo(tltc3.current, {opacity: 0, xPercent:-100, scale: 0.5}, {opacity: 1, xPercent:0, scale: 1, duration: 0.3})
          .fromTo(tltc4.current, {opacity: 0, xPercent:100, scale: 0.5}, {opacity: 1, xPercent:0, scale: 1, duration: 0.3});
    },[])

    return (
        <div id="about" className="about">
            <Container fluid>
                <Row>
                    <Col xs={{span:12, order:'last'}} md={{span:12, order:'last'}} lg={{span:7, order:'first'}}>
                        <div className="timeline" ref={tltc0}>
                            <div className="timecard left" ref={tltc1}>
                                <div className="content">
                                    <h2 style={{color: "#FF8C00"}}>now</h2>
                                    <p style={{fontSize: "18px", fontFamily: "SimSun-ExtB, Microsoft YaHei UI"}}>Location: Toronto</p>
                                    <p>Seeking for a <strong>Web/Software Developer</strong> position.</p>
                                    <p><strong>Highlight Skills: </strong><br/>HTML5, CSS, JavaScript, Angular, React, Bootstrap, Java, Springboot, Maven, Docker, MYSQL, Git, etc</p>
                                </div>
                            </div>
                            <div className="timecard right" ref={tltc2}>
                                <div className="content">
                                    <h3>2016 - 2019</h3>
                                    <p style={{fontSize: "18px", fontFamily: "SimSun-ExtB, Microsoft YaHei UI"}}>Location: Toronto</p>
                                    <p>Study <span><strong>Computer Science</strong></span> at York University.<br/><span style={{fontSize: "18px"}}><strong><i>Bachelor of Science.</i></strong></span></p>
                                </div>
                            </div>
                            <div className="timecard left" ref={tltc3}>
                                <div className="content">
                                    <h2>2013 - 2016</h2>
                                    <p style={{fontSize: "18px", fontFamily: "SimSun-ExtB, Microsoft YaHei UI"}}>Location: Toronto</p>
                                    <p>Study Electro-Mechanical Engineering - Automation and Robotics at Centennial College.<br/><span style={{fontSize: "18px"}}><strong><i>Diploma of Ontario College.</i></strong></span></p>
                                </div>
                            </div>
                            <div className="timecard right" ref={tltc4}>
                                <div className="content">
                                    <h3>2012 - July 2013</h3>
                                    <h4>Electrical Engineer</h4>
                                    <p style={{fontSize: "18px", fontFamily: "SimSun-ExtB, Microsoft YaHei UI"}}>Location: Shanghai, China</p>
                                    <p>Participate in the hardware design, software programming and interactive system design of automated production lines for <strong>Volkswagen</strong> and <strong>SAIC</strong>.</p>
                                    <p><strong>- Highlight Skills: </strong><br/>AutoCAD, EPLAIN drawing, Siemens S7 300/400 PLC, WINCC/WinccFlexible, servo system configuration & optimization(SEW & SINAMICS), safety
                                        devices setup&application(PNOZ & SICK), etc</p>
                                    <p><strong>- Related models: </strong><br/>Skoda Octavia, SAIC MAXUS,<br/>Volkswagen Coolpad, Polo, Skoda Xinrui, etc</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={{span: 12, order: 'first'}}  lg={5}>
                        <div className=".about-right">
                            <h2 style={{fontFamily: "Segoe Script", textAlign: "center"}}>About ME:</h2>
                            <img id="about-right-img" ref={imgEl} src={require("../img/sf.jpg")} alt="me"/>
                            <br/>
                            <p className="about-right-desc">Hi, I'm Jieming Wang. I'm passionate about new technologies and building things.</p>
                            <p className="about-right-desc" style={{fontSize: "16px"}}>&nbsp;&nbsp;#dog lover &nbsp;&nbsp; #snowboarding &nbsp;&nbsp; #phonograph</p>
                        </div>
                    </Col>
                </Row>
                <img id="octavia" src={require("../img/octavia.png")} alt="octavia"/>
            </Container>
            <div onClick={onPageScrollHandler}><img className="downArrow" src={require("../img/downArrow.png")} alt="downBtn" width="50px" height="20px"/></div>
        </div>
    );
};

export default About
