import React,{ StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './components/DataProvider/DataProvider.jsx'
import {initialState,reducer} from "./Utility/reducer.js"

// put this at the TOP of src/main.jsx, before React renders
// this prevents Console Ninja from crashing when it tries to parse console output
const safeStringify = (v) => {
  if (typeof v === "string") return v;
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
};

const wrapConsole = (fn) => {
  return (...args) => fn(...args.map(safeStringify));
};

console.log = wrapConsole(console.log.bind(console));
console.warn = wrapConsole(console.warn.bind(console));
console.error = wrapConsole(console.error.bind(console));


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
