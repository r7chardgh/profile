import React, { Component } from "react";

class Contact extends Component {
  state = {
    TextToCopy: "richardtcfung@gmail.com",
    CopyTextMsg: ["Click me to copy :)", "Copied to your clipboard!"],
  };
  handleDisplayMsg = () => {
    const target = document.getElementById("myEmail");
    target.innerHTML = this.state.CopyTextMsg[0];
  };
  handleRemoveMsg = () => {
    document.getElementById("myEmail").innerHTML = this.state.TextToCopy;
  };
  handleCopy = () => {
    // const copyInput = document.createElement("input");
    const copyText = document.getElementById("copyText");
    // copyInput.value = copyText.value;
    // copyInput.id = "myInput";
    // document.body.appendChild(copyInput);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // document.body.removeChild(copyInput);
    // document.getElementById("copyText").innerHTML = this.state.CopyTextMsg[1];
  };
  render() {
    if (!this.props.option.isSelected) return null;
    return (
      <div id="contact" className="page">
        <h1 className="page-title load">{this.props.option.title}</h1>
        <main className="page-content load">
          <p className="contactMsg">
            Whether you have any questions for me or comments about my website,
            feel free to send me an email to let me know.
            <br></br>I am all ears.
          </p>
          <p className="min-break" />
          <div className="copyBar">
            <label for="copyText" className="copyLabel">Email</label>
            <input
              className="copyText"
              id="copyText"
              value={this.state.TextToCopy}
              // onMouseOver={this.handleDisplayMsg}
              // onMouseLeave={this.handleRemoveMsg}
              // onMouseDown={this.handleCopy}
              onClick={this.handleCopy}
              spellcheck="false"
              readonly
            />
            <button onClick={this.handleCopy} className="copyButton">press</button>
          </div>

          <p className="min-break" />
        </main>
      </div>
    );
  }
}

export default Contact;
