import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.js'
import './App.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>)