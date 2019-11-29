import React from 'react';
import './mystyles.scss';
import Input from './Input';
import Output from './Output';

const App = () => {

  const renderHeader = () => {
    return (
      <section className="hero is-warning">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              API Interview Question V2 <span><a href="" target="_blank" className="is-inline icon">
                <i className="fab fa-lg fa-github"></i>
              </a></span>
            </h1>
            <h2 className="subtitle">
              Refayat Haque <span><a href="" target="_blank" className="is-inline icon">
                <i className="fab fa-lg fa-linkedin"></i>
              </a></span> - "Senior Backend Engineer" candidate
            </h2>
          </div>
        </div>
      </section>
    )
  }

  const renderBody = () => {
    return (
      <div className="container">
        <div class="columns">
          <div class="column">
            <Input />
          </div>
          <div class="column">
            <Output />
          </div>
        </div>
      </div>
    )
  }

  return (
    <React.Fragment>
      {renderHeader()}
      {renderBody()}
    </React.Fragment>
  );
}

export default App;
