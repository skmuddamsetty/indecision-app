'use strict';

var showDetails = false;

var showDetailsHandler = function showDetailsHandler() {
  showDetails = !showDetails;
  renderApp();
};
var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle!'
    ),
    React.createElement(
      'button',
      { onClick: showDetailsHandler },
      showDetails ? 'Hide Details' : 'Show Details'
    ),
    showDetails ? React.createElement(
      'p',
      null,
      'These are the details'
    ) : ''
  );
  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
