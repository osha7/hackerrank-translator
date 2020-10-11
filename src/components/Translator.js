import React from 'react';

class Translator extends React.Component {

  // newArray = []
  // componentDidMount = () => {
  //   // debugger
  //   const { translations } = this.props
  //   console.log (translations)
  //   translations.forEach((value, key) => {
  //     console.log("componentDidMount", `${key}, ${value}`)
  //     this.newArray.push([`${key}, ${value}`])
  //   })
  //   // debugger
  //   console.log(this.newArray)
  // }

  state = {
    input: '',
    // output: ''
  }

  inputOnChange = (e) => {
    this.setState({
      input: e.target.value
    }) 
    // console.log(e.target.value)
    // console.log(this.state.input)
  }

  render() {
    const { input } = this.state;
    const { translations } = this.props;
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input onChange={this.inputOnChange} value={this.state.input} type="text" className="text-input" data-testid="text-input" />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input value={translations.get(input) || ''} type="text" className="text-output" data-testid="text-output" readOnly />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
