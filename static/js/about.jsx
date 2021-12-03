'use strict';

function About(prop) {
  return (
  <React.Fragment>
    <h2>{prop.name}</h2>
    <a href={prop.git_url}>Github</a>
    <img src={prop.img_path} />
  </React.Fragment>
  );
}

ReactDOM.render(<About name="Renee Lee" git_url="https://github.com/reneemlee" img_path="/static/img/merge.png" /> 
,document.querySelector('#renee'));

ReactDOM.render(<About name='Diana Grande' git_url='https://github.com/grandeD' img_path="/static/img/balloonicorn.jpg"/>
, document.querySelector('#diana'));
