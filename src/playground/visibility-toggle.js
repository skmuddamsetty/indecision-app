let showDetails = false;

const showDetailsHandler = () => {
  showDetails = !showDetails;
  renderApp();
};
const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle!</h1>
      <button onClick={showDetailsHandler}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails ? <p>These are the details</p> : ''}
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
