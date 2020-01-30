import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ historyItem }) => (
  <section>
    <h2>{historyItem}</h2>
  </section>
);

HistoryItem.propTypes = {
  historyItem: PropTypes.string.isRequired
};

export default HistoryItem;
