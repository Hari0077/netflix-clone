import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import "./Nav.css";
function Nav() {

    const [show, handleShow] = useState(false);
    const history = useHistory();
    const _fnEmptyFunctionPointer = () => { };

    // const transitionNavbar = () => {
    //     if (window.screenY > 100) {
    //         handleShow(true);
    //     } else {
    //         handleShow(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", transitionNavbar);
    //     return () => window.removeEventListener("scroll", transitionNavbar);
    // }, []);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", _fnEmptyFunctionPointer);
        };
    }, []);



    return (
        <div className={`nav ${show && "nav__black"}`}>
            {/* < div className="nav__contents" > */}
            <img
                onClick={() => history.push("/")}
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
                alt=""
            />
            <img
                onClick={() => history.push("/profile")}
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt=""
            />
            {/* </div > */}
        </div >
    )
}

export default Nav;