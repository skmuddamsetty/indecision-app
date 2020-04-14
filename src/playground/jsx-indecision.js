console.log('app.js is running!');

const app = {
  title: 'Indecision App!',
  subTitle: 'Put your life in the hands of a computer!',
  options: [],
};

const onFormSubmit = (event) => {
  event.preventDefault();
  // e.target is going to target the element from where the event was initiated
  const option = event.target.elements.option.value;
  if (!option) return;
  app.options.push(option);
  event.target.elements.option.value = '';
  renderApp();
};

const removeOptionsHandler = () => {
  app.options = [];
  renderApp();
};

const makeDecisionHandler = () => {
  if (app.options.length === 0) return;
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const user = {
  userName: 'Jane Doe',
  userAge: 27,
  loc: 'New York',
};

function getLocation() {
  return user.loc ? <p>{'Location: ' + user.loc}</p> : undefined;
}

const templateTwo = (
  <div>
    <h1>{user.userName ? user.userName : 'Anonymous'}</h1>
    {user.userAge >= 18 && <p>Age: {user.userAge}</p>}
    {getLocation()}
  </div>
);

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title ? app.title : ''}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>
        {app.options && app.options.length > 0
          ? 'Here are your options:'
          : 'No Options!'}
      </p>
      <button disabled={app.options.length === 0} onClick={makeDecisionHandler}>
        What should i do?
      </button>
      <button onClick={removeOptionsHandler}>Remove All</button>
      <ol>
        {app.options.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button type='submit'>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
