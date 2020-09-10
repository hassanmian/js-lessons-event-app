// Nedan kan även skrivas som nedanstående
// import React from 'react';
// import { useRef, useState } from 'react';
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import EventListPage from './pages/EventListPage';

function App() {

  return (
    <div>
      <Switch>

        <Route path="/event-list">
          <EventListPage />
        </Route>

        <Route path="/">
          <LoginPage />
        </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
