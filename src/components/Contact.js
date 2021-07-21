import * as React from 'react';
import axios from 'axios';
import './componentUI/contact.css';
import {useState} from "react";
import {useRef} from "react";

const Contact = () => {
    const initialState = {payload: '', isValid: true, errorMsg: ''};
    // const [name, setName] = useState({payload: '', isValid: true, errorMsg: 'initial name error'});
    // const [email, setEmail] = useState({payload: '', isValid: true, eErrorMsg: 'initial email error'});
    // const [msg, setMsg] = useState({payload: '', isValid: true, errorMsg: ''});

    const [name, setName] = useState(initialState);
    const [email, setEmail] = useState(initialState);
    const [msg, setMsg] = useState(initialState);

    const [formErrorMsg, setErrorMsg] = useState('');

    const nameRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();

    const validateInput = (data, type) => {
        switch (type) {
            case 'name':
                if (data.length < 3) {
                    setName(preState => {
                        return {...preState, isValid:false, errorMsg:'At least 3 characters.'}
                    });
                    break;
                } else if (data.length > 30) {
                    setName(preState => {
                        return {...preState, isValid:false, errorMsg:'Cannot more than 30.'}
                    });
                    break;
                } else {
                    setName(preState => {
                        return {...preState, isValid:true, errorMsg:''}
                    });
                    break;
                }
            case 'email':
                const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                const res = emailPattern.test(data);
                if (!res) {
                    setEmail(preState => {
                        return {...preState, isValid:false, errorMsg:'Invalid email address. Please enter again.'}
                    });
                    break;
                } else {
                    setEmail(preState => {
                        return {...preState, isValid:true, errorMsg:''}
                    });
                    break;
                }
            case 'msg':
                if(data.length < 10) {
                    setMsg(preState => {
                        return {...preState, isValid:false, errorMsg:'At least 10 characters.'}
                    });
                    break;
                } else {
                    setMsg(preState => {
                        return {...preState, isValid:true, errorMsg:''}
                    });
                    break;
                }
            default:
                setErrorMsg('');
        }
    }

    const handSubmit = (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append('name', name.payload);
        formData.append('email', email.payload);
        formData.append('msg', msg.payload);

        axios({
            method: 'post',
            // url: 'http://18.190.99.173:8080/api/addmsg',
            url: 'http://localhost:8080/api/addmsg',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(response => {
            console.log("Yeah! submit success!" + response);
            alert("Thank you! Submit Successful~");
            // setName(initialState);
            // setEmail(initialState);
            // setMsg(initialState);
        }).catch(error => {
            console.log("Ops, there is an error: " + error);
            alert("Ops, there is an error in the server~\nThe server is under testing... Sorry for the inconvenience.\n" + error);
        });
    }

    return (
        <div className="com contact">
            <form className="msgForm" onSubmit={handSubmit}>
                <div className="form-input form-input-1">
                    <input ref={nameRef}
                           value={name.payload}
                           type="text"
                           name="name"
                           autoComplete="off"
                           required
                           onChange={ event => {
                               const currentName = event.target.value;
                               // console.log("new input name :" + currentName);
                               validateInput(currentName.trim(), 'name');
                               setName(preState=> {
                                   return {...preState, payload:currentName}
                               })
                           }}/>
                    <label htmlFor="name" className="label-name">
                        <span className="content-name">Name *</span>
                    </label>
                    { !name.isValid && <p className="invalid-prompt">*{name.errorMsg}</p>}
                </div>
                <div className="form-input form-input-2">
                    <input
                        ref={emailRef}
                        value={email.payload}
                        type="text"
                        name="email"
                        autoComplete="nope"
                        required
                        onChange={ event => {
                            const currentEmail = event.target.value;
                            validateInput(currentEmail, 'email');
                            setEmail(preState=> {
                                return {...preState, payload:currentEmail}
                            })
                        }}/>
                    <label htmlFor="name" className="label-name">
                        <span className="content-name">Email *</span>
                    </label>
                    { !email.isValid && <p className="invalid-prompt">*{email.errorMsg}</p> }
                </div>
                <div className="msg">
                    <h3><strong>Message:</strong></h3>
                    <textarea
                        ref={msgRef}
                        className="form-input-3"
                        name="msg" id="msg" cols="30" rows="10"
                        placeholder="Feel free to contact me!"
                        value={msg.payload}
                        onChange={  event => {
                            const currentMsg = event.target.value;
                            validateInput(currentMsg, 'msg');
                            setMsg(preState=> {
                                return {...preState, payload:currentMsg}
                            })
                        }}/>
                    { !msg.isValid && <p className="msg-invalid-prompt">*{msg.errorMsg}</p>}
                </div>
                <button id="msgSubBtm">Submit</button>
            </form>
        </div>
    );
};

export default Contact
