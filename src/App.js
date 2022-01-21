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

  useEffect(() => {
    window.localStorage.setItem('local_data', JSON.stringify(modules))
  },[modules])

  const asideModules = modules.filter((item) => item.position === 'aside')
  const mainModules = modules.filter((item) => item.position === 'main')

  const renderModules = (components) => {
    return components.map((item) => {
      const Component = ComponentMap[item.component];

      if(!Component) {
        return null;
      }

      return(
        <div
          className={`${item.component}-module module`}
          id={item.component}
        >
          
        </div>
      )
    })
  }

  return (
    <div className="App">
      <aside>
        <Avatar/>
      </aside>
    </div>
  );
}

export default App;
