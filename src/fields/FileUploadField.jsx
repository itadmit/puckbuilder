// fields/FileUploadField.jsx - שדה העלאת קבצים מודרני
import React, { useState } from "react";
import { FieldLabel } from "@measured/puck";

export const FileUploadField = ({ name, onChange, value, field }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState(value || null);
  const [isDragging, setIsDragging] = useState(false);

  // פונקציה לטיפול בהעלאת קובץ
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    processFile(file);
  };

  // פונקציה לעיבוד הקובץ שנבחר
  const processFile = async (file) => {
    if (!file) return;

    // בדיקה שהקובץ הוא תמונה
    if (!file.type.startsWith("image/")) {
      alert("נא להעלות קובץ תמונה בלבד");
      return;
    }

    setIsUploading(true);

    try {
      // יצירת URL לתצוגה מקדימה מקומית (במקום העלאה לשרת)
      const localUrl = URL.createObjectURL(file);
      setPreview(localUrl);
      onChange(localUrl);

      // במקום זה, במקרה אמיתי, היית מעלה את הקובץ לשרת:
      // const formData = new FormData();
      // formData.append("file", file);
      // const response = await fetch("/api/upload", { method: "POST", body: formData });
      // const data = await response.json();
      // onChange(data.url);
    } catch (error) {
      console.error("שגיאה בהעלאת הקובץ:", error);
      alert("שגיאה בהעלאת התמונה");
    } finally {
      setIsUploading(false);
    }
  };

  // פונקציה למחיקת התמונה
  const handleRemove = () => {
    setPreview(null);
    onChange(null);
  };

  // טיפול בגרירת קבצים
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  // עיצוב מודרני לאזור ההעלאה
  const dropzoneStyle = {
    border: `2px dashed ${isDragging ? "#2962ff" : "#e0e0e0"}`,
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: isDragging ? "rgba(41, 98, 255, 0.05)" : "#f8f9fa",
    transition: "all 0.2s ease",
  };

  // עיצוב כפתור העלאה
  const uploadButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    backgroundColor: "#f0f4ff",
    color: "#2962ff",
    borderRadius: "50px",
    fontWeight: "600",
    margin: "10px 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    transition: "all 0.2s ease",
    border: "none",
    cursor: "pointer",
  };

  // עיצוב כפתור מחיקה
  const removeButtonStyle = {
    position: "absolute",
    top: "8px",
    right: "8px",
    backgroundColor: "rgba(255,255,255,0.9)",
    color: "#f44336",
    border: "none",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    zIndex: 2,
  };

  // עיצוב אזור תמונה
  const imageContainerStyle = {
    marginBottom: "16px",
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  };

  return (
    <FieldLabel label={field.label || "העלאת תמונה"}>
      <div style={{ direction: "rtl" }}>
        {/* תצוגה מקדימה של התמונה אם קיימת */}
        {preview && (
          <div style={imageContainerStyle}>
            <img
              src={preview}
              alt="תצוגה מקדימה"
              style={{
                width: "100%",
                display: "block",
                height: "auto",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
            <button
              onClick={handleRemove}
              style={removeButtonStyle}
              title="הסר תמונה"
            >
              ✕
            </button>
          </div>
        )}

        {/* אזור גרירה והעלאה */}
        {!preview && (
          <div
            style={dropzoneStyle}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById(`file-upload-${name}`).click()}
          >
            <div style={{ marginBottom: "10px" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2962ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <div style={{ fontWeight: "600", color: "#333" }}>
              {isUploading ? "מעלה..." : "גרור ושחרר תמונה או לחץ לבחירה"}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#666", marginTop: "8px" }}>
              פורמטים נתמכים: JPG, PNG, GIF, WEBP
            </div>
          </div>
        )}

        {/* כפתור העלאה כאשר יש כבר תמונה */}
        {preview && (
          <label
            htmlFor={`file-upload-${name}`}
            style={uploadButtonStyle}
          >
            {isUploading ? "מעלה..." : "החלף תמונה"}
          </label>
        )}

        <input
          id={`file-upload-${name}`}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
          disabled={isUploading}
        />
      </div>
    </FieldLabel>
  );
};