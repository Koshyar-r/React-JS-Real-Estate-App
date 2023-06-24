import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PropertyContextProvider from './components/Search/PropertyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <PropertyContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </PropertyContextProvider>
)