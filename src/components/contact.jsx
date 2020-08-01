import React, { Component } from "react";

class Contact extends Component {
  state = {
    TextToCopy: "richardtcfung@gmail.com",
    CopyTextMsg: ["Click me to copy :)", "Copied to your clipboard!"],
  };
  handleDisplayMsg = () => {
    document.getElementById("myEmail").innerHTML = this.state.CopyTextMsg[0];
  };
  handleRemoveMsg = () => {
    document.getElementById("myEmail").innerHTML = this.state.TextToCopy;
  };
  handleCopy = () => {
    const copyInput = document.createElement("input");
    const copyText = document.getElementById("myEmail");
    copyInput.value = copyText.value;
    copyInput.id = "myInput";
    document.body.appendChild(copyInput);
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(copyInput);
    document.getElementById("myEmail").innerHTML = this.state.CopyTextMsg[1];
  };
  render() {
    if (!this.props.option.isSelected) return null;
    return (
      <div id="contact" className="page">
        <h1 className="page-title load">{this.props.option.title}</h1>
        <main className="page-content load">
          <p className="contactMsg">
            Whether you have any questions for me or comments about my website,
            feel free to send me an email to let me know:
          </p>
          <p className="min-break" />
          <button
            className="copyButton"
            type="text"
            value="richardtcfung@gmail.com"
            id="myEmail"
            onMouseOver={this.handleDisplayMsg}
            onMouseLeave={this.handleRemoveMsg}
            onMouseDown={this.handleCopy}
          >
            {this.state.TextToCopy}
          </button>
          <p className="min-break" />
          <p className="contactMsg">I am all ears.</p>
        </main>
      </div>
    );
  }
}

export default Contact;
