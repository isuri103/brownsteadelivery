import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import OurTeas from './pages/OurTeas';
import Plantations from './pages/Plantations';
import Blogs from './pages/Blogs';
import Login from './pages/Auth/Login';
import FeedbackList from './components/Feedback/FeedbackList';
import AddFeedback from './components/Feedback/AddFeedback';
import EditFeedback from './components/Feedback/EditFeedback';
import FeedbackPage from './pages/FeedbackPage';
import LocationPage from './pages/LocationPage';
import Navbar from './components/navbar';
import OrderPage from './pages/orderpage';
import DeliveriesPage from './pages/deliverypage';
import DeliveryTable from './pages/deliverytable';
import UpdatePage from './pages/updatepage';
import DeliveryReport from './pages/deliveryreport';
import HomePage from './pages/homepage';
import './App.css';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />

        <div className="content">
          <Routes>
            {/* Home + Delivery Management */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/deliveries" element={<DeliveriesPage />} />
            <Route path="/deliveries-table" element={<DeliveryTable />} />
            <Route path="/update/:id" element={<UpdatePage />} />
            <Route path="/delivery-report" element={<DeliveryReport />} />

            {/* Main Content + Other Pages */}
            <Route path="/main" element={<MainContent />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/teas" element={<OurTeas />} />
            <Route path="/plantations" element={<Plantations />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/locations" element={<LocationPage />} />
            <Route path="/login" element={<Login />} />

            {/* Feedback Management */}
            <Route path="/feedback" element={<FeedbackList />} />
            <Route path="/add-feedback" element={<AddFeedback />} />
            <Route path="/edit-feedback/:id" element={<EditFeedback />} />
            <Route path="/feedback-page" element={<FeedbackPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
