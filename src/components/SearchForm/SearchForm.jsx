import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from './SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedValue = value.toLowerCase().trim();

    if (normalizedValue === '') {
      toast.info('Please fill out the search field!');
      return;
    }

    onSubmit(value);
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Enter a movie name"
        name="search"
        value={value}
        onChange={handleInputChange}
      />
      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
