import React from 'react';
import "./Tooltip.css";

export default function Tooltip(props) {
  const { title, content, divColor, borderColor, top, left } = props

  const divStyle = {
    color: divColor, 
    };

  const toolpitWrapperStyle = {
    borderColor: borderColor,
  }

  return(
    <div className="titleWrapper" style={{ ...divStyle}}>
      <h2 className="sectionTitle">{title}</h2>
      <p className="toolpitWrapper right" style={toolpitWrapperStyle}>?<span className="tooltipText">{content}</span></p>
    </div>
  )
}