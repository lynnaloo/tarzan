'use strict';

var React = require('react');
var Facebook = require('./facebook');

React.render(
  <Facebook
    title="Welcome to the Mullet Stack. In the Amazon."
    subtitle="Facebook in the front. Walmart in the back. Amazon in the very back."
  />,
  document.getElementById('facebook')
);
