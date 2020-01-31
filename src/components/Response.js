import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ response }) => (
  <>
    <p>{response}</p>
  </>
);

Response.propTypes = {
  response: PropTypes.string.isRequired
};

export default Response;
