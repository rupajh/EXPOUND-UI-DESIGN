import React, { useEffect } from "react";
import circel from "../../assets/images/circle-icon.png";
import doc from "../../assets/images/doc.png";
import setting from "../../assets/images/setting.png";
import lock2 from "../../assets/images/lock2.png";
import lock from "../../assets/images/lock.png";
import security from "../../assets/images/security-image.png";
import user from "../../assets/images/user.png";
import greenlock from "../../assets/images/green-lock.png";
import graydoc from "../../assets/images/gray-doc.png";
import bluedoc from "../../assets/images/blue-doc.png";
import greendoc from "../../assets/images/green-folder.png";
import diceimage from "../../assets/images/dice-image.png";

import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../cards/Card";
import { Col } from "react-bootstrap";
import Accordian from "../accordian/Accordian";
import Footer from "../footer/Footer";

const PageBody = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section>
        <div className="expount-tax">
          <div className="expount-tax-area">
            <div></div>
            <div>
              <img
                src={circel}
                alt="circle"
                style={{ width: "13px", height: "13px" }}
              />
            </div>
            <div>
              <img
                src={doc}
                alt="doc"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div>
              <div
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-duration="1500"
                data-aos-once="false"
                class="aos-init aos-animate"
              >
                <h4 className="mb-4" style={{ fontSize: "27px" }}>
                  Expound Tax means rock{" "}
                  <span className="yellow"> solid reliability.</span>
                </h4>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-duration="2000"
                data-aos-once="false"
                class="aos-init aos-animate"
              >
                Seamless integration with your ERP, Customised E-Invoice
                Printing and Future compatibility.
                <ul className="mt-2">
                  <li>
                    No additional infrastructure or experts required to
                    incorporate the system in your work processes.
                  </li>
                  <li>
                    We follow lean and agile methodology to design our tech
                    stack to accommodate all dimensions of growth of your
                    infrastructure ensuring high scalability
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="expount-tax-area">
            <div></div>
            <div>
              <img
                src={circel}
                alt="circle"
                style={{ width: "13px", height: "13px" }}
              />
            </div>
            <div>
              <img
                src={setting}
                alt="setting"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div>
              <div
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-duration="1500"
                data-aos-once="false"
                class="aos-init aos-animate"
              >
                <h4 className="mb-4" style={{ fontSize: "20px" }}>
                  Process <span className="aqua"> Simplified.</span>
                </h4>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-duration="2000"
                data-aos-once="false"
                class="aos-init aos-animate"
              >
                The process is simple, we integrate two working systems with our
                API. In the case of e-invoicing, we integrate our API with SAP
                ERP which will help the user to generate E-invoices on the click
                of button.
              </div>
            </div>
          </div>
          <div className="expount-tax-area">
            <div></div>
            <div>
              <img
                src={circel}
                alt="circle"
                style={{ width: "13px", height: "13px" }}
              />
            </div>
            <div>
              <img
                src={lock}
                alt="setting"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <Card
        cardBackground="yellow"
        cardImage={
          <img
            // className="card-image-style"
            src={security}
            alt="security"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              borderRadius: "10px",
            }}
          />
        }
        header={
          <span>
            Authentication <br />
            and security
          </span>
        }
        // header="Authentication and security"
        firstPeragraph=" Expound Tax was built keeping data security and
      complaince compatibility at core. Nobody except, your
      whitelisted servers can access expound tax without
      authorization."
        secondPeragraph=" Data going out or coming into our system is AES 256
      encrypted. Making it secure and reliable. We do all
      the heavy lifiting so that your invoice can be
      generated by a click of a button"
      />

      {/* <section>
        <div className="card-text-body">
          <div></div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-once="false"
            class="aos-init aos-animate"
          >
            <div style={{ textAlign: "left" }}>
              <div className="card">
                <div className="card-area" style={{ padding: "35px" }}>
                  <div className="row g-0">
                    <div className="col-sm-12 col-lg-8 col-md-8 card-body">
                      <div className="card-content">
                        <h1>
                          Authentication <br />
                          and security
                        </h1>
                        <p>
                          Expound Tax was built keeping data security and
                          complaince compatibility at core. Nobody except, your
                          whitelisted servers can access expound tax without
                          authorization.
                          <br />
                          <br />
                          Data going out or coming into our system is AES 256
                          encrypted. Making it secure and reliable. We do all
                          the heavy lifiting so that your invoice can be
                          generated by a click of a button
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 m-0 order-1 order-lg-2 order-md-2 p-0">
                      <div
                        className="card-img-container "
                        style={{ position: "relative", minHeight: "350px" }}
                      >
                        <img
                          // className="card-image-style"
                          src={security}
                          alt="security"
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="expount-tax-area">
          <div></div>
          <div>
            <img
              src={circel}
              alt="circle"
              style={{ width: "13px", height: "13px" }}
            />
          </div>
          <div>
            <img
              src={lock2}
              alt="lock2"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div></div>
        </div>
        <Card
          cardBackground="blue"
          cardImage={
            <img
              // className="card-image-style"
              src={security}
              alt="security"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                borderRadius: "10px",
              }}
            />
          }
          header={
            <span>
              The plug and play <br />
              and securitycompatibility
            </span>
          }
          // header="Authentication and security"
          firstPeragraph=" The second design principle we had was to make a system that is compatible with all the erp softwares making it easy to use!"
          secondPeragraph="With our vast expertise in SAP systems, We make SAP integration with Expound Tax seamless and quick."
        />
      </section>
      <section>
        <div className="expount-tax-area">
          <div></div>
          <div>
            <img
              src={circel}
              alt="circle"
              style={{ width: "13px", height: "13px" }}
            />
          </div>
          <div>
            <img
              src={user}
              alt="lock2"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div></div>
        </div>
        <Card
          cardBackground="pink"
          cardImage={
            <img
              // className="card-image-style"
              src={security}
              alt="security"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                borderRadius: "10px",
              }}
            />
          }
          header={
            <span>
              The plug and play <br />
              and securitycompatibility
            </span>
          }
          // header="Authentication and security"
          firstPeragraph=" The second design principle we had was to make a system that is compatible with all the erp softwares making it easy to use!"
          secondPeragraph="With our vast expertise in SAP systems, We make SAP integration with Expound Tax seamless and quick."
        />
      </section>
      <section>
        <div className="expount-tax-area">
          <div></div>
          <div>
            <img
              src={circel}
              alt="circle"
              style={{ width: "13px", height: "13px" }}
            />
          </div>
          <div>
            <img
              src={doc}
              alt="setting"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="false"
              className="aos-init aos-animate"
            >
              <h4>Dynamic, modern and affordable</h4>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1500"
              data-aos-once="false"
              className="aos-init aos-animate"
            >
              We offer various fundamental api's to help your business scale.
            </div>
            <div style={{ padding: "2% 2% 2%  0%" }}>
              <div className="row ">
                <div className="col-lg-3 small-card">
                  <div className="pt-4">
                    <div
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-duration="2500"
                      data-aos-once="false"
                      className="aos-init aos-animate"
                    >
                      <div className="background-green authentication-api-card">
                        <img src={greenlock} alt="lock" />
                        <p style={{ fontSize: "14px", paddingTop: "30px" }}>
                          Authentication api
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3  small-card">
                  <div className="pt-4">
                    <div
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-duration="2500"
                      data-aos-once="false"
                      className="aos-init aos-animate"
                    >
                      <div className="background-gray authentication-api-card">
                        <img src={graydoc} alt="lock" />
                        <p style={{ fontSize: "14px", paddingTop: "30px" }}>
                          IRN generate & cancel api
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3  small-card">
                  <div className="pt-4">
                    <div
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-duration="2500"
                      data-aos-once="false"
                      className="aos-init aos-animate"
                    >
                      <div className="small-card-background-blue authentication-api-card">
                        <img src={bluedoc} alt="lock" />
                        <p style={{ fontSize: "14px", paddingTop: "30px" }}>
                          Eway bill generate & cancel api
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3  small-card">
                  <div className="pt-4">
                    <div
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-duration="2500"
                      data-aos-once="false"
                      className="aos-init aos-animate"
                    >
                      <div className="background-dark-green authentication-api-card">
                        <img src={greendoc} alt="lock" />
                        <p style={{ fontSize: "14px", paddingTop: "30px" }}>
                          Smart Reporting
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          data-aos="fade-up "
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-once="false"
          class="aos-init"
        >
          <div>
            <div style={{ padding: "70px", background: "black" }}>
              <div
                style={{
                  padding: "10px",
                  borderRadius: "15px",
                  border: "1px solid #30363d",
                  background: "white",
                }}
              >
                <div style={{ alignItems: "center", padding: "0 40%" }}>
                  <img src={diceimage} alt="dice" />
                </div>
                <h1 className="header-heading-text">
                  The new definition of <br />
                  invoicing
                </h1>
                <p className="header-peragraph-section">
                  Focus on what really matters, start your digital invoicing
                  journey with Expound Tax today!
                </p>
                <div className="pb-4">
                  <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 text-center">
                      <div className="button-wrapper">
                        <div>
                          <button className="button1">
                            View More
                            <span className="arrow-btn">
                              <span className="arrow"></span>
                            </span>
                          </button>
                        </div>
                        <div>
                          <button
                            className="button1"
                            style={{ background: "black", color: "white" }}
                          >
                            Get in touch
                            <span className="arrow-btn">
                              <span className="arrow"></span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="expount-tax">
          <div>
            <div>
              <h4 className="header-section-text">EXPOUND TAX</h4>
              <h1 className="header-heading-text">
                Frequently Asked Questions
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Accordian />
    </>
  );
};

export default PageBody;
