// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar /> {}
                <Register /> {/* Include your Navbar for navigation */ }
                <Login /> {/* Include your routes */}
            </Router>
        </AuthProvider>
    );
};

export default App;