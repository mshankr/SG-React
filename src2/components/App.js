import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LangContext from '../contexts/LangContext'
import LangSelector from './LangSelector'

function App() {
  const [lang, setLang] = useState('eng');

  return (
    <div className='ui container'>
      <LangSelector onLangChange={setLang} />
      <LangContext.Provider value={lang}>
        <UserCreate />
      </LangContext.Provider>
    </div>
  );
}

export default App;
