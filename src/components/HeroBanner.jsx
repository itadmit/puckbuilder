// components/HeroBanner.jsx - גרסה מודרנית יותר לרכיב הירו באנר
import React from "react";

export function HeroBanner({
  title,
  subtitle,
  backgroundColor,
  backgroundImage,
  buttonText,
  buttonLink,
  textColor,
  buttonColor,
  height
}) {
  // סגנון הרכיב
  const bannerStyle = {
    backgroundColor: backgroundColor || "#2962ff",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: textColor || "#ffffff",
    padding: "2rem",
    textAlign: "center",
    height: height || "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    direction: "rtl",
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  };

  // אפקט שכבה מעל תמונת הרקע לשיפור הקריאות של הטקסט
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: backgroundImage 
      ? "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))" 
      : "none",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    width: "100%",
  };

  const titleStyle = {
    fontSize: "3.5rem",
    marginBottom: "1rem",
    fontWeight: "700",
    lineHeight: "1.2",
    textShadow: backgroundImage ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none",
  };

  const subtitleStyle = {
    fontSize: "1.4rem",
    maxWidth: "800px",
    margin: "0 auto 2rem auto",
    fontWeight: "400",
    lineHeight: "1.6",
    textShadow: backgroundImage ? "0 1px 2px rgba(0, 0, 0, 0.3)" : "none",
  };

  const buttonStyle = {
    backgroundColor: buttonColor || "#2962ff",
    color: "#ffffff",
    border: "none",
    padding: "0.9rem 2rem",
    fontSize: "1.1rem",
    borderRadius: "50px", // כפתור מעוגל יותר לעיצוב מודרני
    cursor: "pointer",
    fontWeight: "600",
    textDecoration: "none",
    display: "inline-block",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  };

  // אנימציה בהתבוננות על הכפתור
  const hoverStyle = {
    transform: "translateY(-3px)",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.25)",
  };

  return (
    <div className="hero-banner" style={bannerStyle}>
      {backgroundImage && <div style={overlayStyle}></div>}
      <div className="hero-content" style={contentStyle}>
        {title && <h1 style={titleStyle}>{title}</h1>}
        {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        {buttonText && buttonLink && (
          <a 
            href={buttonLink} 
            style={buttonStyle}
            onMouseOver={(e) => {
              Object.assign(e.target.style, hoverStyle);
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
            }}
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}