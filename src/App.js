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
              Second Closet
            </h1>
            <h2 className="subtitle">
              Sales Team Pricing Calculator
            </h2>
          </div>
        </div>
      </section>
    )
  }

  const renderBody = () => {
    return (
      <div className="container" style={{ padding: '1rem 0rem 1rem 0rem' }}>
        <div className="columns">
          <div className="column">
            <Input />
          </div>
          <div className="column is-one-quarter">
            <Output />
          </div>
        </div>
      </div>
    )
  }

  const renderFooter = () => {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>API Interview Question V2</strong> / <a href="https://www.linkedin.com/in/refayathaque" target="_blank">Refayat Haque</a> \ <span><a href="https://github.com/refayathaque/bxfy9pgue5fcs9yd" target="_blank" className="is-inline icon">
              <i className="fab fa-2x fa-github"></i>
            </a></span>
          </p>
        </div>
      </footer>
    )
  }

  return (
    <React.Fragment>
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </React.Fragment>
  );
}

export default App;
