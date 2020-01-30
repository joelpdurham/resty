import React from 'react';
import propTypes from 'prop-types';
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
  history: propTypes.array.isRequired
};

export default History;
