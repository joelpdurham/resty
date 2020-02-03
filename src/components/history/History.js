import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ history, onSubmit }) => {
  const historyElement = history.map((historyItem, i) => (
    <li key={i}>
      <HistoryItem key={i} url={historyItem.url} route={historyItem.route} onSubmit={onSubmit}/>
    </li>
  ));

  return (
    <ul>
      {historyElement}
    </ul>
  );
};

History.propTypes = {
  history: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default History;



.then(function(querySnapshot) {
  let data = [];

  querySnapshot.forEach(doc => {
      data.push(doc.data())});
      
  return data
});