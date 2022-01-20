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

  const storage = JSON.parse(window.localStorage.getItem('local_data') || []);
  let modulesData = storage;
  if (!storage.length) {
    modulesData = Modules
    window.localStorage.setItem('local_data', JSON.stringify(Modules))
  }

  const [state, dispatch] = useReducer(Reducer, {
    modules: modulesData,
    edit: false
  })

  const { modules,  edit, editModule} = state

  const asideModules = modules.filter((item) => item.position === 'aside')
  const mainModules = modules.filter((item) => item.position === 'main')

  return (
    <div className="App">
      <aside>
        <Avatar/>
      </aside>
    </div>
  );
}

export default App;
