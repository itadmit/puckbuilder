// Page.jsx - קובץ התצוגה הסופית
import React from "react";
import { Render } from "@measured/puck";

// יבוא אותה תצורה כמו ב-Editor
import { config } from "./config"; // ייצוא התצורה לקובץ נפרד

export function Page({ data }) {
  return (
    <div dir="rtl">
      <Render config={config} data={data} />
    </div>
  );
}