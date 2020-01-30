import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ historyItem }) => (
  <section>
    <h2>Something Goes Here</h2>
  </section>
)

HistoryItem.PropTypes = {
  historyItem: PropTypes.string.isRequired 
};

export default HistoryItem;
