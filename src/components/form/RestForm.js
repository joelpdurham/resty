import React from 'react';
import PropTypes from 'prop-types';

const RestForm = ({ url, rawJsonBody, username, password, token, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="url" value={url} onChange={onChange} placeholder="URL"/>
    <section>
      <input type="radio" name="route" value="GET" />
      <input type="radio" name="route" value="POST" />
      <input type="radio" name="route" value="PUT" />
      <input type="radio" name="route" value="PATCH" />
      <input type="radio" name="route" value="DELETE" />
    </section>
    <button>Go!</button>

    <textarea value={rawJsonBody} name="rawJsonBody" onChange={onChange} placeholder="Raw JSON body" />

    <section>
      <button>Headers</button>
      <h3>Basic Authorization</h3>
      <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" />
      <input type="text" name="password" value={password} onChange={onChange} placeholder="Password" />
      <h3>Bearer Token</h3>
      <input type="text" name="token" value={token} onChange={onChange} placeholder="Bearer Token" />
    </section>
  </form>
);

RestForm.propTypes = {
  url: PropTypes.string.isRequired,
  rawJsonBody: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string .isRequired,
  token: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default RestForm;
