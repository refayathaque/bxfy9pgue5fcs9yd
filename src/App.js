import React from 'react';
import './mystyles.scss';

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

  const renderInput = () => {
    return (
      <div>
        Input
      </div>
    )
  }

  const renderOutput = () => {
    return (
      <div>
        Output
      </div>
    )
  }

  const renderBody = () => {
    return (
      <div className="container">
        <div class="columns">
          <div class="column">
            {renderInput()}
          </div>
          <div class="column">
            {renderOutput()}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {renderHeader()}
      {renderBody()}
    </div>
  );
}

export default App;
