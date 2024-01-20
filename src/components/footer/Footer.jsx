import React from "react";
import expound from "../../assets/images/expound.png";
import sap from "../../assets/images/sap.png";
import cmmi from "../../assets/images/cmmi.png";
import githubicon from "../../assets/images/github2.png";
import linkedin from "../../assets/images/linkedin.png";

const Footer = () => {
  return (
    <div
      style={{
        padding: "50px 0 0",
        background: "#f8f9f9",
        marginTop: "10%",
        fontSize: "14px",
      }}
    >
      <div>
        <div
          style={{
            marginto: "20px",
            marginBottom: "40px",
            paddingLeft: "70px",
            paddingRight: "70px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2">
              <div>
                <img
                  src={expound}
                  alt="setting"
                  style={{ width: "120px", height: "55px" }}
                />
                <br />
                <br />
                <h6>
                  Global Capabilities,
                  <br /> Local Excellence.
                </h6>
                <br />
                <img
                  src={sap}
                  alt="setting"
                  style={{ width: "120px", height: "55px" }}
                />
                <br />
                <img
                  className="mt-3"
                  src={cmmi}
                  alt="setting"
                  style={{ width: "120px", height: "55px" }}
                />
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <div className="footer-title ">COMPANY</div>
              <ul className="p-0" style={{ listStyle: "none" }}>
                <div>
                  <li className="mb-2">About</li>
                </div>
                <div>
                  <li className="mb-2">Expound Biz</li>
                </div>
                <div>
                  {" "}
                  <li className="mb-2">Expound Tax</li>
                </div>
                <div>
                  {" "}
                  <li className="mb-2">Customer Success</li>
                </div>
                <div>
                  {" "}
                  <li
                    className="mb-2"
                    // style={{ borderBottom: "2px solid #3ec6eb" }}
                  >
                    <snap className="footer-career">Careers</snap>
                    <button className="hiring-btn">Hiring!</button>
                  </li>
                </div>
              </ul>
            </div>
            <div class="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <div className="footer-title ">INDUSTRY</div>
              <ul className="p-0" style={{ listStyle: "none" }}>
                <div>
                  <li className="mb-2">Chemical</li>
                </div>
                <div>
                  <li className="mb-2">Mill Product</li>
                </div>
                <div>
                  {" "}
                  <li className="mb-2">Automotive</li>
                </div>
                <div>
                  {" "}
                  <li className="mb-2">Insurance</li>
                </div>
                <div>
                  <li className="mb-2">Engineering</li>
                </div>
                <div>
                  <li className="mb-2">Media</li>
                </div>
                <div>
                  <li className="mb-2">Professional Services</li>
                </div>
                <div>
                  <li className="mb-2">Healthcare</li>
                </div>
                <div>
                  <li className="mb-2">Retail</li>
                </div>
              </ul>
            </div>
            <div class="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <div className="footer-title ">SERVICES</div>
              <ul className="p-0" style={{ listStyle: "none" }}>
                <div>
                  <li className="mb-2">SAP Consulting</li>
                </div>
                <div>
                  <li className="mb-2">Corporate Training</li>
                </div>
                <div>
                  <li className="mb-2">Digital Transformation</li>
                </div>
                <div>
                  <li className="mb-2">Integration Services</li>
                </div>
                <div>
                  <li className="mb-2">Managed Services (AMS)</li>
                </div>
                <div>
                  <li className="mb-2">Application Development</li>
                </div>
              </ul>
            </div>
            <div class="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <div className="footer-title ">SOLUTIONS</div>
              <ul className="p-0" style={{ listStyle: "none" }}>
                <div>
                  <li className="mb-2">Rise with SAP</li>
                </div>
                <div>
                  <li className="mb-2">SAP Analytics on Cloud</li>
                </div>
                <div>
                  <li className="mb-2">SAP(BTP)</li>
                </div>
                <div>
                  <li className="mb-2">HCM/ Success Factors</li>
                </div>
                <div>
                  <li className="mb-2">SAP Fiori</li>
                </div>
                <div>
                  <li className="mb-2">HANA Migration</li>
                </div>
              </ul>
            </div>
            <div class="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <div className="footer-title ">FAVORITES</div>
              <ul className="p-0" style={{ listStyle: "none" }}>
                <div>
                  <li className="mb-2">Contact us</li>
                </div>
                <div>
                  <li className="mb-2">Diversity and Inclusion</li>
                </div>
                <div>
                  <li className="mb-2">All Open Positions</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bottom-footer">
          <div>
            <div className="row">
              <div className="col-lg-11">
                <div>
                  © 2023 Expound Technivo Pvt Ltd | Global Capabilities, Local
                  Excellence.
                </div>
              </div>
              <div className="align-items-center col-lg-1 d-inline-flex justify-content-around">
                <img
                  src={githubicon}
                  alt="githubicon"
                  style={{ width: "16px", height: "16px" }}
                />
                <div>
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: "15px", height: "15px" }}
                  />
                </div>
              </div>
              {/* <div className="col-lg-1">
                <img
                  src={linkedin}
                  alt="linkedin"
                  style={{ width: "15px", height: "15px" }}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
