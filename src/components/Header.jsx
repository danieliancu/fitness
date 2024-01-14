import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Header = () => {
  const { language, setLanguage, theme, setTheme } = useContext(AppContext);

  return (
    <div className="header">
      <div className="container-flex">
        <div>Logo</div>
        <div>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="ro">Română</option>
          </select>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
