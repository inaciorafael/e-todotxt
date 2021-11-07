import React, { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SearchActions from '../../store/ducks/search';

import './styles.css';

const HeaderInput: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { word } = useSelector((state: RootStateOrAny) => state.search);

  const goToSearchPage = () => {
    history.push('/search');
  };

  const handleChangeSearchText = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(SearchActions.addSearchWord(e.currentTarget.value));
  };

  const backSearchPageIfThereIsResearch = () => {
    if (word.length > 0) {
      history.push('/search');
    }
  };

  useEffect(() => {
    if (word.length > 0) {
      goToSearchPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  return (
    <div className="d-flex p-2 flex-direction-row align-items-center input-container">
      <AiOutlineSearch color="#FFF" size={20} />
      <input
        spellCheck={false}
        onClick={backSearchPageIfThereIsResearch}
        onChange={handleChangeSearchText}
        value={word}
        className="input"
        placeholder="Quick Find"
      />
    </div>
  );
};

export default HeaderInput;
