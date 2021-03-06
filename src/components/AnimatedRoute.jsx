import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Navbar from './NavBar';

import Home from '../pages/Home';
import Trans from '../pages/Trans';
import NotFound from '../pages/NotFound';
import Voice from '../pages/Voice';

const AnimatedRoute = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path='/'
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path='trans'
            element={
              <>
                <Navbar />
                <Trans />
              </>
            }
          />
          <Route
            path='voice'
            element={
              <>
                <Navbar />
                <Voice />
              </>
            }
          />
          <Route
            path='404'
            element={
              <>
                <Navbar />
                <NotFound />
              </>
            }
          />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
