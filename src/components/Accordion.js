import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.id}>
        <div
          className={`${active} title`}
          onClick={() => {
            setActiveIndex(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${active} content`}>
          <p>{item.description}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
