// App.js - עדכון קובץ האפליקציה הראשי
import React from 'react';
import './App.css';
import { Editor } from './Editor';


// ייבוא גיליון הסגנון המותאם אישית
import './index.css';

function App() {
  return (
    <div className="App">
      <Editor />
    </div>
  );
}

export default App;