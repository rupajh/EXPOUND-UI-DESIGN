import React, { useState } from "react";
import "./style/nav.css";
import dropdownarrow from "../assets/images/dropdownarrow.png";
import chemical from "../assets/images/chemical.jpg";
import headerlogo from "../assets/images/headerlogo.png";
const NavBar2 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownLeave = () => {
    setShowDropdown(true);
  };
  const handleDropdownLevelFalse = () => {
    setShowDropdown(false);
  };
  return (
    <nav className="nav-bar">
      <div className="navbar-logo">
        <img
          src={headerlogo}
          alt="headerlogo"
          style={{ width: "27px", height: "27px" }}
        />
        Expound Technivo{" "}
      </div>
      <ul
        className={`${
          showDropdown ? "navbar-menu nav-menu-block" : "navbar-menu "
        }`}
      >
        <li className="nav-li-item nav-menu-li">
          <div
            className="black"
            style={{ fontSize: "14px", fontWeight: "400px" }}
          >
            <button
              className="btn-style"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Industries
              <img
                src={dropdownarrow}
                alt="dropdownarrow"
                style={{ width: "16px", height: "16px" }}
              />
            </button>
          </div>
          {/* {isHovered && ( */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // className="li-menu-content-on-hover"
            className={`${
              isHovered ? "li-menu-content-on-hover" : "li-menu-content"
            }`}
          >
            <div className="li-menu-content-style">
              <div className="li-menu-content-heading">
                <p style={{ fontSize: "12px", fontWeight: "500px" }}>
                  Powering the
                  <span class="text-success">&nbsp;next-gen&nbsp;</span>
                  Industries with innovative solutions
                </p>
                <hr />
              </div>
              <div className="d-flex">
                <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Chemical
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you deliver sustainable, compliant chemicals
                          helping you prepare for digital transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p style={{ fontSize: "12px", fontWeight: "600px" }}>
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Chemical
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you deliver sustainable, compliant chemicals
                          helping you prepare for digital transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p style={{ fontSize: "12px", fontWeight: "600px" }}>
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p style={{ fontSize: "12px", fontWeight: "600px" }}>
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Chemical
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p style={{ fontSize: "12px", fontWeight: "600px" }}>
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p style={{ fontSize: "12px", fontWeight: "600px" }}>
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-li-item nav-menu-li">
          <div
            className="black"
            style={{ fontSize: "14px", fontWeight: "400px" }}
          >
            <button
              className="btn-style"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Services
              <img
                src={dropdownarrow}
                alt="dropdownarrow"
                style={{ width: "16px", height: "16px" }}
              />
            </button>
          </div>
          {/* {isHovered && ( */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // className="li-menu-content-on-hover"
            className={`${
              isHovered ? "li-menu-content-on-hover" : "li-menu-content"
            }`}
          >
            <div className="li-menu-content-style">
              <div className="li-menu-content-heading">
                <p style={{ fontSize: "12px", fontWeight: "500px" }}>
                  Powering the
                  <span class="text-success">&nbsp;next-gen&nbsp;</span>
                  Industries with innovative solutions
                </p>
                <hr />
              </div>
              <div className="d-flex">
                <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Chemical
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you deliver sustainable, compliant chemicals
                          helping you prepare for digital transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p style={{ fontSize: "12px", fontWeight: "600px" }}>
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p style={{ fontSize: "12px", fontWeight: "600px" }}>
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Chemical
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you deliver sustainable, compliant chemicals
                          helping you prepare for digital transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p style={{ fontSize: "12px", fontWeight: "600px" }}>
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p style={{ fontSize: "12px", fontWeight: "600px" }}>
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Chemical
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p style={{ fontSize: "12px", fontWeight: "600px" }}>
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p style={{ fontSize: "12px", fontWeight: "600px" }}>
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-li-item nav-menu-li">
          <div
            className="black"
            style={{ fontSize: "14px", fontWeight: "400px" }}
          >
            <button
              className="btn-style"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Solutions
              <img
                src={dropdownarrow}
                alt="dropdownarrow"
                style={{ width: "16px", height: "16px" }}
              />
            </button>
          </div>

          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // className="li-menu-content-on-hover"
            className={`${
              isHovered ? "li-menu-content-on-hover" : "li-menu-content"
            }`}
          >
            <div className="li-menu-content-style">
              <div className="li-menu-content-heading">
                <p style={{ fontSize: "12px", fontWeight: "500px" }}>
                  Powering the
                  <span class="text-success">&nbsp;next-gen&nbsp;</span>
                  Industries with innovative solutions
                </p>
                <hr />
              </div>
              <div className="d-flex">
                <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Chemical
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you deliver sustainable, compliant chemicals
                          helping you prepare for digital transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row"></div>
                  </div>
                </div> */}
              </div>
              <div className="d-flex">
                <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Chemical
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you deliver sustainable, compliant chemicals
                          helping you prepare for digital transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Chemical
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                          className="mb-0"
                        >
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-li-item nav-menu-li">
          <div
            className="black"
            style={{ fontSize: "14px", fontWeight: "400px" }}
          >
            <button
              className="btn-style"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Product
              <img
                src={dropdownarrow}
                alt="dropdownarrow"
                style={{ width: "16px", height: "16px" }}
              />
            </button>
          </div>

          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // className="li-menu-content-on-hover"
            className={`${
              isHovered ? "li-menu-content-on-hover" : "li-menu-content"
            }`}
          >
            <div className="li-menu-content-style">
              <div className="li-menu-content-heading">
                <p style={{ fontSize: "12px", fontWeight: "500px" }}>
                  Powering the
                  <span class="text-success">&nbsp;next-gen&nbsp;</span>
                  Industries with innovative solutions
                </p>
                <hr />
              </div>
              <div className="d-flex">
                <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Chemical
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you deliver sustainable, compliant chemicals
                          helping you prepare for digital transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row"></div>
                  </div>
                </div> */}
              </div>
              <div className="d-flex">
                <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Chemical
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you deliver sustainable, compliant chemicals
                          helping you prepare for digital transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="d-block"
                  style={{ width: "33%", margin: "10px" }}
                >
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Chemical
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p style={{ fontSize: "12px", fontWeight: "600px" }}>
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="row">
                      <div
                        className="col-2"
                        style={{ paddingRight: "3px", paddingTop: "5px" }}
                      >
                        <div className="d-flex justify-content-end">
                          <img
                            src={chemical}
                            alt="img"
                            style={{ width: "41px", height: "41px" }}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <p
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600px" }}
                        >
                          Mill Product
                        </p>
                        <p
                          color="black"
                          style={{ fontSize: "12px", margin: "5px 0 0" }}
                        >
                          We help you to improve efficiency, increase profits
                          and become an intelligent enterprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <div>
          <li
            className="black nav-menu-li"
            style={{ fontSize: "14px", fontWeight: "400px", padding: "20px" }}
          >
            About
          </li>
        </div>
        <div>
          <li
            className="black nav-menu-li"
            style={{ fontSize: "14px", fontWeight: "400px", padding: "20px" }}
          >
            Careers
          </li>
        </div>
        {showDropdown && (
          <div>
            <li
              className="black nav-menu-li"
              style={{ fontSize: "14px", fontWeight: "400px", padding: "20px" }}
            >
              Login
            </li>
          </div>
        )}

        {showDropdown && (
          <div>
            <li className="mobile-view-navbar">
              <div style={{ margin: "auto", width: "100%" }}>
                <div>
                  <h3 className="mobile-view-nav-btn">
                    <button
                      className="mobile-view-btn-style"
                      style={{
                        background: "white",
                        color: "black",
                        borderBottom: "1px solid lightgray",
                      }}
                    >
                      Industries
                      <img
                        src={dropdownarrow}
                        alt="img"
                        style={{ width: "21px", height: "21px" }}
                      />
                    </button>{" "}
                  </h3>
                  <div></div>
                </div>

                <div>
                  <h3 className="mobile-view-nav-btn">
                    <button
                      className="mobile-view-btn-style"
                      style={{
                        background: "white",
                        color: "black",
                        borderBottom: "1px solid lightgray",
                      }}
                    >
                      Services
                      <img
                        src={dropdownarrow}
                        alt="img"
                        style={{ width: "21px", height: "21px" }}
                      />
                    </button>{" "}
                  </h3>
                  <div></div>
                </div>
                <div>
                  <h3 className="mobile-view-nav-btn">
                    <button
                      className="mobile-view-btn-style"
                      style={{
                        background: "white",
                        color: "black",
                        borderBottom: "1px solid lightgray",
                      }}
                    >
                      Product
                      <img
                        src={dropdownarrow}
                        alt="img"
                        style={{ width: "21px", height: "21px" }}
                      />
                    </button>{" "}
                  </h3>
                  <div></div>
                </div>
                <div>
                  <h3 className="mobile-view-nav-btn">
                    <button
                      className="mobile-view-btn-style"
                      style={{
                        background: "white",
                        color: "black",
                        borderBottom: "1px solid lightgray",
                      }}
                    >
                      About
                      <img
                        src={dropdownarrow}
                        alt="img"
                        style={{ width: "21px", height: "21px" }}
                      />
                    </button>{" "}
                  </h3>
                  <div></div>
                </div>
                <div>
                  <h3 className="mobile-view-nav-btn">
                    <button
                      className="mobile-view-btn-style"
                      style={{
                        background: "white",
                        color: "black",
                        borderBottom: "1px solid lightgray",
                      }}
                    >
                      Careers
                      <img
                        src={dropdownarrow}
                        alt="img"
                        style={{ width: "21px", height: "21px" }}
                      />
                    </button>{" "}
                  </h3>
                  <div></div>
                </div>
                <div>
                  <h3 className="mobile-view-nav-btn">
                    <button
                      className="mobile-view-btn-style"
                      style={{
                        background: "white",
                        color: "black",
                        borderBottom: "1px solid lightgray",
                      }}
                    >
                      Login
                      <img
                        src={dropdownarrow}
                        alt="img"
                        style={{ width: "21px", height: "21px" }}
                      />
                    </button>{" "}
                  </h3>
                  <div></div>
                </div>
              </div>
            </li>
          </div>
        )}
      </ul>
      {showDropdown ? (
        <button
          className="navbar-hiden-btn nav-menu-block"
          onClick={handleDropdownLevelFalse}
        >
          <span>
            {" "}
            <h1 style={{ fontWeight: "300px" }}>x</h1>{" "}
          </span>
          {/* <span className="cross-icon"></span> */}
        </button>
      ) : (
        <button
          className="navbar-hiden-btn nav-menu-block"
          onClick={handleDropdownLeave}
        >
          <span className="nav-hidden-btn-style"></span>
          <span className="nav-hidden-btn-style"></span>
        </button>
      )}
    </nav>
  );
};

export default NavBar2;
