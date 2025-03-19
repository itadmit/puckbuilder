// fields/ColorPickerField.jsx - שדה בחירת צבע מודרני
import React, { useState } from "react";
import { FieldLabel } from "@measured/puck";

export const ColorPickerField = ({ name, onChange, value, field }) => {
  // ערכים ברירת מחדל אם אין ערך
  const currentValue = value || "#2962ff";
  const [hovered, setHovered] = useState(false);

  // טיפול בשינוי הצבע
  const handleColorChange = (e) => {
    onChange(e.target.value);
  };

  // עיצוב כולל לקונטיינר
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "4px",
    borderRadius: "8px",
    transition: "all 0.2s ease",
    backgroundColor: hovered ? "#f5f7ff" : "transparent",
  };

  // עיצוב מודרני לבורר הצבע
  const colorPickerStyle = {
    width: "42px",
    height: "42px",
    border: "none",
    borderRadius: "50%", // בורר עגול
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "all 0.2s ease",
    transform: hovered ? "scale(1.05)" : "scale(1)",
  };

  // עיצוב שדה טקסט הצבע
  const textInputStyle = {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    fontFamily: "'Noto Sans Hebrew', sans-serif",
    width: "100px",
    textAlign: "center",
    direction: "ltr", // כדי שהטקסט של קוד הצבע יופיע נכון
    boxShadow: hovered ? "0 2px 8px rgba(0,0,0,0.05)" : "none",
    transition: "all 0.2s ease",
  };

  // עיצוב תצוגה מקדימה גדולה יותר
  const previewStyle = {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: currentValue,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    border: "2px solid white",
  };

  return (
    <FieldLabel label={field.label || "בחר צבע"}>
      <div
        style={containerStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <input
          type="color"
          name={name}
          value={currentValue}
          onChange={handleColorChange}
          style={colorPickerStyle}
        />
        <input
          type="text"
          value={currentValue}
          onChange={handleColorChange}
          style={textInputStyle}
        />
        <div style={previewStyle} title={currentValue} />
      </div>
      <div style={{ fontSize: "12px", color: "#666", marginTop: "4px", textAlign: "right" }}>
        קוד הצבע: {currentValue}
      </div>
    </FieldLabel>
  );
};