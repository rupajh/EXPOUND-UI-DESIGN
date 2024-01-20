import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      id: 1,
      question: "What is E-Invoicing?",
      answer:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum",
    },
    {
      id: 2,
      question: "Expound Tax supports which ERP's?",
      answer:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum",
    },
    {
      id: 3,
      question: "How does Expound Tax work with SAP?",
      answer:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum",
    },
    {
      id: 4,
      question: "Expound Tax and Security",
      answer:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum",
    },
  ];

  return (
    <section>
      <Accordion style={{ marginTop: "10%" }}>
        {data?.map((data, index) => (
          <>
            <Accordion.Item eventKey={data?.id} className="accordion-item ">
              <Accordion.Header className="accordian-bottom-border ">
                <div className="accordian-bottom-border ">
                  <div className="pb-4 accordian-font">{data?.question}</div>
                </div>
              </Accordion.Header>
              <Accordion.Body>{data?.answer}</Accordion.Body>
            </Accordion.Item>
          </>
        ))}
      </Accordion>
      {/* <div>
        <div className="expount-tax">
          <div
            style={{
              width: "100%",
              borderRadius: "6px",
              background: "rgb(228, 226, 228)",
            }}
          >
            <div></div>
            {data.map((item, i) => (
              <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span>{selected === i ? "+" : "-"}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Accordian;
