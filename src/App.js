import React, { useEffect, useReducer } from 'react';
import { ReactDOM } from 'react-dom';
import Modules from './defaultModule';
import Reducer from './reducer';
import appContext from './appContent';

import { Avatar } from './component/avatar/Avatar';
import { UserInfo } from './component/userInfo/UserInfo';
import { Contact } from './component/contact/Contact';
import { Stack } from './component/stack/Stack';
import { WorkExperience } from './component/workExperience/WorkExperience';

const ComponentMap = {
  Avatar,
  UserInfo,
  Contact,
  Stack,
  WorkExperience,
}

function App() {
  return (
    <div className="App">
      <aside>
        <Avatar/>
      </aside>
    </div>
  );
}

export default App;
