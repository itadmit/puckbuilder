// config.js - הפרדת התצורה לקובץ נפרד
import { HeroBanner } from "./components/HeroBanner";
import { ColorPickerField } from "./fields/ColorPickerField";
import { FileUploadField } from "./fields/FileUploadField";

export const config = {
  components: {
    HeroBanner: {
      label: "הירו באנר",
      fields: {
        title: {
          label: "כותרת",
          type: "text",
        },
        subtitle: {
          label: "כותרת משנה",
          type: "textarea",
        },
        backgroundColor: {
          label: "צבע רקע",
          type: "custom",
          render: ColorPickerField,
        },
        backgroundImage: {
          label: "תמונת רקע",
          type: "custom",
          render: FileUploadField,
        },
        buttonText: {
          label: "טקסט כפתור",
          type: "text",
        },
        buttonLink: {
          label: "קישור כפתור",
          type: "text",
        },
        textColor: {
          label: "צבע טקסט",
          type: "custom",
          render: ColorPickerField,
        },
        buttonColor: {
          label: "צבע כפתור",
          type: "custom",
          render: ColorPickerField,
        },
        height: {
          label: "גובה",
          type: "select",
          options: [
            { label: "נמוך", value: "300px" },
            { label: "בינוני", value: "500px" },
            { label: "גבוה", value: "700px" },
          ],
        },
      },
      defaultProps: {
        title: "כותרת ראשית",
        subtitle: "כותרת משנה עם תיאור קצר",
        backgroundColor: "#3498db",
        textColor: "#ffffff",
        buttonText: "לחץ כאן",
        buttonLink: "#",
        buttonColor: "#2980b9",
        height: "500px",
      },
      render: HeroBanner,
    },
  },
  i18n: {
    "he": {
      "sidebar.title": "רכיבים",
      "sidebar.search.placeholder": "חיפוש רכיבים...",
      "header.publish": "פרסם",
      "header.cancel": "בטל",
      "fields.title": "הגדרות",
      "outline.title": "מתווה",
      "empty.title": "גרור רכיבים לכאן",
    }
  },
  dir: "rtl",
};