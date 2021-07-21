import * as React from 'react';
import './componentUI/myInfo.css';

const MyInfo = () => {
    return (
        <div className="myInfo">
            <h3 className="subtitle">J.W info</h3>
            <div className="infoBlocks row justify-content-around">
                <div className="infoBlock">
                    <img width="50px" height="auto" src={require("../img/location-color.png")} alt="icon"/>
                    <h3 className="infoBlock-content">Location</h3>
                    <p  className="infoBlock-content">Toronto, ON, Canada.</p>
                </div>
                <div className="infoBlock">
                    <img width="40px" height="auto" src={require("../img/call.png")} alt="icon"/>
                    <h3 className="infoBlock-content">Phone</h3>
                    <p className="infoBlock-content">647-985-5591</p>
                </div>
                <div className="infoBlock">
                    <img width="50px" height="auto" src={require("../img/mail.png")} alt="icon"/>
                    <h3 className="infoBlock-content">Email</h3>
                    <p className="infoBlock-content">redjacky.wang@gmail.com</p>
                </div>
                <div className="infoBlock">
                    <img width="50px" height="auto" src={require("../img/web.png")} alt="icon"/>
                    <h3 className="infoBlock-content">Social Media</h3>
                    <div className="iLinks infoBlock-content">
                        <ul className="infoBlock-content-list">
                            <li className="infoBlock-content-list-li"><a href="https://www.linkedin.com/in/jieming-wang-408b7410b/" target="_blank"><img width="25px" height="auto" src={require("../img/linkedin.png")} alt="linkdin icon"/></a></li>
                            <li className="infoBlock-content-list-li"><a href="https://github.com/" target="_blank"><img width="25px" height="auto" src={require("../img/github.png")} alt="linkdin icon"/></a></li>
                            <li className="infoBlock-content-list-li"><img width="25px" height="auto" src={require("../img/wechat.jpg")} alt="linkdin icon"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyInfo
