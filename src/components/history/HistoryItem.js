import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, route, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <p name="url" value={url}>URL: {url}</p>
    <p name="route" value={route}>Route: {route}</p>
    <button>Do Again!</button>
  </form>
);

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default HistoryItem;
