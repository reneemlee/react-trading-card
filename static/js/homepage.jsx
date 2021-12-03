'use strict';

function Homepage() {
  return (
  <React.Fragment>
    <p>Welcome again to Balloonicorn Trading card site</p>
    <a href='/cards'>Link to Cards</a>
    <img src='/static/img/balloonicorn.jpg' />
  </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
