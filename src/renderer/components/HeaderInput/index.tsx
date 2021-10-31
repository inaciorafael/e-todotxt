import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import './styles.css';

const HeaderInput: React.FC = () => {
  // const [quickfind, setQuickFind] = useState<string>('');

  return (
    <div className="d-flex p-2 flex-direction-row align-items-center input-container">
      <AiOutlineSearch color="#FFF" size={20} />
      <input
        // onChange={(e) => setQuickFind(e.target.value)}
        className="input"
        placeholder="Quick Find"
      />
    </div>
  );
};

export default HeaderInput;
