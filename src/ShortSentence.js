import React from "react";

export default class ShortSentence extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sentence: "",
      shortSentence: ""
    };
  }

  handleChange = e => {
    const sentence = e.target.value;
    this.setState({ sentence });
  };

  shortSentence = () => {
    const { sentence } = this.state;
    const { length } = this.props;
    let shortSentence = "";

    if (sentence.length > length) {
      shortSentence = sentence.slice(0, length) + "...";
    } else {
      shortSentence = sentence;
    }
    this.setState({ shortSentence });
  };

  render() {
    return (
      <section>
        <h4>Ingresa una frase</h4>
        <input value={this.state.sentence} onChange={this.handleChange} />
        <button onClick={this.shortSentence}>cortar</button>
        <h4 id="frase-cortada">
          la frase cortada es: {this.state.shortSentence}
        </h4>
      </section>
    );--
  }
}
