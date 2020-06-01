import React from 'react';

const LangSelector = ({ onLangChange }) => (
    <div>
      Select a language:
      <i className='flag us' onClick={() => onLangChange('eng')} />
      <i className='flag nl' onClick={() => onLangChange('nl')} />
    </div>
  )

export default LangSelector;
