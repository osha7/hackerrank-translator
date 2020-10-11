import React from 'react';

class Translator extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input type="text" className="text-input" data-testid="text-input" />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input type="text" className="text-output" data-testid="text-output" readOnly />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
