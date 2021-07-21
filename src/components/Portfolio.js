import * as React from 'react';
import './componentUI/portfolio.css';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {scrollView} from "../store/actions/scrollAction";

const Portfolio = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const [clickedProject, setClickedProject] = useState();
    const [majors, setMajors] = useState(["CS", "EE"]);
    const dispatch = useDispatch();

    const onPageScrollHandler = () => {
        dispatch(scrollView('contact'));
    }


    // pic -> Carousel, mix -> pic + text, video -> videoUrl,
    const myProjects = [
        {name: "atomlavie.com", major:"CS", keyWords: ["React", "Redux", "React-Bootstrap" , "threejs"], keyWords2: ["Java", "springboot", "mybatis", "mySQL"], type:"MIX", contentUrl:["cs1-1","cs1-2"], description: "Animation made by threejs and blender. The base 3D planet model provided by https://sketchfab.com/" },
        {name: "Tower Defense Game", major:"CS", keyWords: ["java", "awt"], keyWords2: [], type:"PIC", contentUrl:["cs2-1","cs2-2","cs2-3"], description: "Launching soon..." },
        {name: "Spotify-Web-Clone", major:"CS", keyWords: ["React", "Context API"], keyWords2: ["Spotify-API"], type:"MIX", contentUrl:["cs3-1", "cs3-1"], description: "Use spotify-api to access spotify account with my own music app."},
        {name: "VW-Octavia-mainline", major:"EE", keyWords: ["Siemens s7-400 PLC", "SEW Servo System", "interbus-protocol", "Wincc", "Two frames", "Laser Welding Cell"], keyWords2: [], type:"VIDEO", contentUrl:["ee1-1","ee1-2"], description: "MainLine!"},
        {name: "VW-Octavia-bodyside-LaserWelding", major:"EE", keyWords: ["Siemens s7-400 PLC", "SEW Servo System", "interbus-protocol"], keyWords2: [], type:"VIDEO", contentUrl:["ee2-1","ee2-2"], description: "Side Body Laser Welding Station."},
        {name: "VW-CP5-LaserPerception", major:"EE", keyWords: ["Siemens s7-300 F PLC", "COORD3"], keyWords2: [], type:"PIC", contentUrl:["ee3-1","ee3-2","ee3-3"], description: "COORD3 Laser Perception Cells"},
        {name: "SAIC-Maxus", major:"EE", keyWords: ["Siemens s7-300 PLC", "SINAMICS S120", "PROFIBUS", "WinccFlexible"], keyWords2: [], type:"MIX", contentUrl:["ee4-1", "ee4-5"], description: "closures-hemming"}
    ]

    const majorBlock = (major, index) => {
        return(
            <div className="major-block" key={index}>
                <h2 className="major-name">{ major==='CS' ? "- ComputerScience" : "- ElectricalEngineering" } :</h2>
                <Row className="major-row">
                    {
                        myProjects.filter(project => project.major === major).map((project, key) => {
                            let subTitle ='';
                            let subTitle2 ='';
                            project.keyWords.forEach((item, index)=>{
                                subTitle += item + ', ';
                            });
                            project.keyWords2.forEach((item, index)=>{
                                subTitle2 += item + ', ';
                            });
                            const currentProject = project;
                            return(
                                <Col key={key}>
                                    <div className="pcard">
                                        <div className="pcard-frame-img"
                                             onClick={()=> {
                                                setIsClicked(true);
                                                setClickedProject(currentProject);
                                                console.log("click: " + currentProject.type);
                                        }}><img className="pcard-img" src={require(`../img/${currentProject.contentUrl[0]}.jpg`)} alt="project"/></div>
                                        <h2 className="pcard-project-title">{currentProject.name}</h2>
                                        { (project.major==='CS'&&project.keyWords2.length>0) ? <h4 className="pcard-project-keywords">Frontend: {subTitle.substring(0,subTitle.length-2)}</h4> : <h4 className="pcard-project-keywords">Keywords: {subTitle.substring(0,subTitle.length-2)}</h4> }
                                        { (project.major==='CS'&&project.keyWords2.length>0) ? <h4 className="pcard-project-keywords">Backend: {subTitle2.substring(0,subTitle2.length-2)}</h4> : null }
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }

    const contentDetail = (project) => {
        console.log("current type:" + project.type);
        switch(project.type) {
            case 'PIC':
                console.log("in PIC...");
                return(
                    <div className="pcard-modal">
                        <div className=".pcard-modal-content-invisible">
                            <div className="pcard-modal-content-close"
                                  onClick={()=> {
                                      setIsClicked(false);
                                      setClickedProject(null);
                                  }}><p className="pcard-modal-content-close-symbol">&times;</p></div>
                            <Carousel className="pCarousel">
                                {
                                    project.contentUrl.map((url, index) => {
                                        return(
                                            <Carousel.Item key={index}>
                                                <img width="800px" height="600px" className="pcard-modal-content-img d-block w-100" src={require(`../img/${project.contentUrl[index]}.jpg`)} alt="slide"/>
                                                <Carousel.Caption>
                                                    <p>{project.description}</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        )}
                                    )
                                }
                            </Carousel>
                        </div>
                    </div>
                )
            case 'VIDEO':
                console.log("in VIDEO...");
                return(
                    <div className="pcard-modal">
                        <div className="pcard-modal-content-invisible">
                            <div className="pcard-modal-content-close"
                                 onClick={()=> {
                                     setIsClicked(false);
                                     setClickedProject(null);
                                 }}><p className="pcard-modal-content-close-symbol">&times;</p></div>
                            <video className="pcard-modal-video" width="100%" height="auto" controls>
                                <source src={require(`../img/${project.contentUrl[1]}.mp4`)} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                )
            case 'MIX':
                return(
                    <div className="pcard-modal">
                        <div className="pcard-mix-board">
                            <div className="pcard-modal-content-close"
                                 onClick={()=> {
                                     setIsClicked(false);
                                     setClickedProject(null);
                                 }}><p className="pcard-modal-content-close-symbol">&times;</p></div>
                            <figure className="pcard-mix-fig">
                                <h3>{project.name}</h3>
                                <br/>
                                <img className="pcard-mix-img" src={require(`../img/${project.contentUrl[1]}.jpg`)} alt="img"/>
                                <figcaption><br/>{project.description}</figcaption>
                            </figure>
                        </div>
                    </div>
                )
            default:
                return null;
        }
    }

    // const contentDetail = (project) => {
    //     return(
    //         <div className="pcard-modal">
    //             <div className="pcard-modal-content">
    //                 <span className="pcard-modal-content-close"
    //                       onClick={()=> {
    //                           console.log("hidden" + isClicked);
    //                           setIsClicked(false)
    //                 }}>&times;</span>
    //                 <Carousel className="pCarousel">
    //                     {
    //                         project.pictureUrl.map((url, index) => {
    //                             return(
    //                                 <Carousel.Item>
    //                                     <img className="pcard-modal-content-img d-block w-100" src={url} alt="slide"/>
    //                                     <Carousel.Caption>
    //                                         <h3>First slide label</h3>
    //                                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //                                     </Carousel.Caption>
    //                                 </Carousel.Item>
    //                             )}
    //                         )
    //                     }
    //                 </Carousel>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div className="com portfolio">
            <Container className="pmain" fluid>
                <Row>
                    <Col><h1 style={{fontFamily: "Segoe Script", textAlign: "center"}}>My Portfolio</h1></Col>
                </Row>
                {
                    majors.map( (major, index) => {
                        return (
                            majorBlock(major, index)
                        )
                    })
                }
                {/*<Row xs={1} lg={2} xl={4}>*/}
                {/*    {*/}
                {/*        myProjects.filter(project => project.major === 'CS').map((project, key) => {*/}
                {/*            let subTitle ='';*/}
                {/*            project.keyWords.forEach((item, index)=>{*/}
                {/*                subTitle += item + ',';*/}
                {/*            })*/}
                {/*            return(*/}
                {/*                <Col key={key}>*/}
                {/*                    <div className="pcard"*/}
                {/*                         onClick={()=> {*/}
                {/*                             console.log("contents: " + isClicked);*/}
                {/*                             setIsClicked(true)}*/}
                {/*                         }>*/}
                {/*                        <img className="pcard-img" src={project.pictureUrl[0]} alt="project"/>*/}
                {/*                        <h2>{project.name}</h2>*/}
                {/*                        <h3>{subTitle.substring(0,subTitle.length-1)}</h3>*/}
                {/*                    </div>*/}
                {/*                    { isClicked? contentDetail(project) : null}*/}
                {/*                </Col>*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*</Row>*/}
                <div onClick={onPageScrollHandler}><img className="downArrow" src={require("../img/downArrow.png")} alt="downBtn" width="50px" height="20px"/></div>
            </Container>
            { isClicked? contentDetail(clickedProject) : null }
        </div>
    );
};

export default Portfolio
