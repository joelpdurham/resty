import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ historyItem }) => (
  <section>
    <button>{historyItem}</button>
  </section>
);

HistoryItem.propTypes = {
  historyItem: PropTypes.string.isRequired
};

export default HistoryItem;
