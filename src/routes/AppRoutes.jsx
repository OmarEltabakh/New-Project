import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const ProjectDetails = lazy(() => import('../pages/ProjectDetails/ProjectDetails'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="d-flex justify-content-center align-items-center" style={{height: '50vh'}}><div className="spinner-border text-primary" role="status"><span className="visually-hidden">جاري التحميل...</span></div></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Project details page separated from landing page */}
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/projects/:id" element={<ProjectDetails />} /> 
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
