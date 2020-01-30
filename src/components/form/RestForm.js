import React from 'react';
//import PropTypes from 'prop-types';

const RestForm = () => (
  <form>
    <input type="text" placeholder="URL"/>
    <section>
      <input type="radio" name="route" value="GET" />
      <input type="radio" name="route" value="POST" />
      <input type="radio" name="route" value="PUT" />
      <input type="radio" name="route" value="PATCH" />
      <input type="radio" name="route" value="DELETE" />
    </section>
    <button>Go!</button>

    <textarea />

    <section>
      <button>Headers</button>
      <h3>Basic Authorization</h3>
      <input type="text" />
      <input type="text" />
      <h3>Bearer Token</h3>
      <input type="text" />
    </section>
  </form>
);

export default RestForm;
