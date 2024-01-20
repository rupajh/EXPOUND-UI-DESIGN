import React from "react";

const Card = ({
  cardImage,
  header,
  firstPeragraph,
  secondPeragraph,
  cardBackground,
}) => {
  return (
    <section>
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
            <div
              className={`${cardBackground === "yellow" ? "card" : ""}${
                cardBackground === "blue" ? "background-blue" : ""
              }${cardBackground === "pink" ? "background-pink" : ""}`}
            >
              <div className="card-area" style={{ padding: "35px" }}>
                <div className="row g-0">
                  <div className="col-lg-8 col-md-8 col-sm-12 card-body">
                    <div className="card-content">
                      <h1>{header}</h1>
                      <p>
                        {firstPeragraph}
                        <br />
                        <br />
                        {secondPeragraph}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 m-0 order-1 order-lg-2 order-md-2 p-0">
                    <div
                      className="card-img-container "
                      style={{ position: "relative", minHeight: "350px" }}
                    >
                      {cardImage}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
