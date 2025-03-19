// Editor.jsx - גרסה מעודכנת עם כותרת מותאמת וכפתור תבניות
import React, { useState } from "react";
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";

// ייבוא רכיבים וקונפיגורציה
import { config } from "./config";

// מודל התבניות
const TemplatesModal = ({ isOpen, onClose, onSelectTemplate }) => {
  // דוגמאות לתבניות
  const templates = [
    {
      id: "template1",
      name: "הירו באנר עם רקע כחול",
      preview: "🔵",
      data: {
        content: [
          {
            type: "HeroBanner",
            props: {
              id: "hero-blue",
              title: "כותרת ראשית",
              subtitle: "תיאור קצר עם מידע נוסף",
              backgroundColor: "#2962ff",
              textColor: "#ffffff",
              buttonText: "לחץ כאן",
              buttonLink: "#",
              buttonColor: "#0039cb",
              height: "500px",
            }
          }
        ]
      }
    },
    {
      id: "template2",
      name: "הירו באנר עם רקע כהה",
      preview: "⚫",
      data: {
        content: [
          {
            type: "HeroBanner",
            props: {
              id: "hero-dark",
              title: "כותרת מרשימה",
              subtitle: "טקסט משנה עם הסבר מפורט יותר",
              backgroundColor: "#1a1a1a",
              textColor: "#ffffff",
              buttonText: "גלה עוד",
              buttonLink: "#",
              buttonColor: "#f44336",
              height: "500px",
            }
          }
        ]
      }
    },
    {
      id: "template3",
      name: "הירו באנר בהיר",
      preview: "⚪",
      data: {
        content: [
          {
            type: "HeroBanner",
            props: {
              id: "hero-light",
              title: "כותרת בהירה",
              subtitle: "תיאור על רקע בהיר",
              backgroundColor: "#f5f5f5",
              textColor: "#333333",
              buttonText: "התחל עכשיו",
              buttonLink: "#",
              buttonColor: "#4caf50",
              height: "500px",
            }
          }
        ]
      }
    }
  ];

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      direction: "rtl"
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "24px",
        width: "600px",
        maxWidth: "90%",
        maxHeight: "80vh",
        overflow: "auto",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
      }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "20px"
        }}>
          <h2 style={{ margin: 0, fontFamily: "'Noto Sans Hebrew', sans-serif" }}>
            בחר תבנית
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#666"
            }}
          >
            ×
          </button>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "16px" }}>
          {templates.map(template => (
            <div
              key={template.id}
              onClick={() => onSelectTemplate(template.data)}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "16px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: "#f8f9fa",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.borderColor = "#2962ff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#e0e0e0";
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{template.preview}</div>
              <h3 style={{ margin: "0 0 8px 0", fontFamily: "'Noto Sans Hebrew', sans-serif" }}>
                {template.name}
              </h3>
              <button
                style={{
                  backgroundColor: "#2962ff",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontFamily: "'Noto Sans Hebrew', sans-serif",
                  fontSize: "14px",
                  marginTop: "8px"
                }}
              >
                בחר תבנית
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// נתונים התחלתיים
const initialData = {
  content: [],
  root: {
    props: {
      title: "עמוד חדש",
      description: "תיאור העמוד החדש"
    }
  }
};

// פונקציית שמירה
const save = (data) => {
  console.log("שומר נתונים:", data);
  
  // שמירה ב-localStorage לדוגמה
  localStorage.setItem('puck-editor-data', JSON.stringify(data));
  
  // הצגת הודעת הצלחה
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.padding = '16px 24px';
  notification.style.backgroundColor = '#4caf50';
  notification.style.color = 'white';
  notification.style.borderRadius = '8px';
  notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  notification.style.zIndex = '9999';
  notification.style.fontFamily = "'Noto Sans Hebrew', sans-serif";
  notification.style.fontWeight = '500';
  notification.style.direction = 'rtl';
  notification.textContent = 'התוכן נשמר בהצלחה!';
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.5s ease';
    setTimeout(() => document.body.removeChild(notification), 500);
  }, 3000);
};

// טעינת נתונים שמורים (אם יש)
const getSavedData = () => {
  try {
    const savedData = localStorage.getItem('puck-editor-data');
    return savedData ? JSON.parse(savedData) : initialData;
  } catch (error) {
    console.error('שגיאה בטעינת נתונים שמורים:', error);
    return initialData;
  }
};

// רכיב העורך הראשי
export function Editor() {
  const editorData = getSavedData();
  const [data, setData] = useState(editorData);
  const [isTemplatesModalOpen, setTemplatesModalOpen] = useState(false);
  
  const handleSelectTemplate = (templateData) => {
    setData({
      ...data,
      content: [...templateData.content]
    });
    setTemplatesModalOpen(false);
  };
  
  return (
    <>
      <Puck 
        config={config} 
        data={data}
        onChange={setData}
        onPublish={save}
        locale="he"
        direction="rtl"
        viewports={[
          {
            width: 1440,
            height: "auto",
            label: "מסך רחב",
            icon: (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="2" />
              </svg>
            ),
          },
          {
            width: 768,
            height: "auto",
            label: "טאבלט",
            icon: (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2" />
              </svg>
            ),
          },
          {
            width: 375,
            height: "auto",
            label: "נייד",
            icon: (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="7" y="4" width="10" height="16" rx="2" />
              </svg>
            ),
          },
        ]}
        overrides={{
          // כותרת מותאמת אישית
          header: ({ actions }) => (
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              padding: "8px 16px", 
              backgroundColor: "#fff",
              borderBottom: "1px solid #e0e0e0",
              direction: "rtl",
              width: "100%", // הוספת רוחב מלא
              boxSizing: "border-box", // חשוב! מונע שהרוחב יגלוש מעבר לגבולות
              position: "sticky", // אופציונלי - להצמדת ההדר לחלק העליון
              top: 0, // אופציונלי - להצמדת ההדר לחלק העליון
              zIndex: 1000 // אופציונלי - לוודא שההדר מוצג מעל שאר התוכן
            }}>
              {/* תוכן ההדר נשאר זהה */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "#2962ff",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "12px"
                }}>
                  P
                </div>
                <span style={{ 
                  fontWeight: "600", 
                  fontSize: "16px", 
                  color: "#333",
                  marginLeft: "16px"
                }}>
                  עורך תוכן ויזואלי
                </span>
                
                <button
                  onClick={() => setTemplatesModalOpen(true)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "6px 12px",
                    backgroundColor: "#f0f4ff",
                    color: "#2962ff",
                    border: "1px solid #2962ff20",
                    borderRadius: "6px",
                    fontSize: "14px",
                    cursor: "pointer",
                    fontWeight: "500",
                    marginRight: "16px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#e0e8ff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f4ff";
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: "8px" }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                  </svg>
                  תבניות
                </button>
              </div>
              <div>
                {actions}
              </div>
            </div>
          ),
        }}
      />
      
      <TemplatesModal 
        isOpen={isTemplatesModalOpen}
        onClose={() => setTemplatesModalOpen(false)}
        onSelectTemplate={handleSelectTemplate}
      />
    </>
  );
}