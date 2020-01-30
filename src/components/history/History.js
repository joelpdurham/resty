import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {
  const historyElement = history.map((historyItem, i) => (
    <li key={i}>
      <HistoryItem key={i} historyItem={historyItem} />
    </li>
  ));

  return (
    <ul>
      {historyElement}
    </ul>
  );
};

History.propTypes = {
  history: PropTypes.array.isRequired
};

export default History;
