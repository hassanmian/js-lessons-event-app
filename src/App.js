// Nedan kan även skrivas som nedanstående
// import React from 'react';
// import { useRef, useState } from 'react';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import EventListPage from './pages/EventListPage';
import { UserContext } from './contexts/UserContext';
import EventDetailPage from './pages/EventDetailPage';

function App() {
  return (
    <div>
      <UserContext.Provider>
        <Switch>
          
          <Route path="/event/:slug" component={EventDetailPage} />

          <Route path="/event-list">
            <EventListPage />
          </Route>

          <Route path="/">
            <LoginPage />
          </Route>

        </Switch>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
