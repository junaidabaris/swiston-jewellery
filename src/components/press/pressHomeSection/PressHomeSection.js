import React from "react";

function PressHomeSection({ pressHeading, pressNews }) {
  return (
    <div>
      <section className="press_home_section">
        <h1 className="news_section_heading">{pressHeading}</h1>
        <p className="csssd">{pressNews}</p>
      </section>
    </div>
  );
}

export default PressHomeSection;
