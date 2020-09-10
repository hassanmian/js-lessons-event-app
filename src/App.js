// Nedan kan även skrivas som nedanstående
// import React from 'react';
// import { useRef, useState } from 'react';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import EventListPage from './pages/EventListPage';

function App() {
  const [token, setToken] = useState(null)
  return (
    <div>
      <Switch>

        <Route path="/event-list">
          <EventListPage token={token} setToken={setToken} />
        </Route>

        <Route path="/">
          <LoginPage token={token} setToken={setToken}/>
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
