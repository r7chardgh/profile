import React, { Component } from "react";
import {ReactComponent as Clipboard} from "../icon/button/clipboard.svg"
class Contact extends Component {
  state = {
    TextToCopy: "richardtcfung@gmail.com",
    CopyTextMsg: ["Click me to copy :)", "Copied to your clipboard!"],
  };
  handleBtnIconChange(){
    const target = document.getElementsByClassName("clipboard");
    target[0].classList.add("checked");
  }
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
    this.handleBtnIconChange();
  };
  componentDidMount(){
    
  }
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
            
            <input
              className="copyText"
              id="copyText"
              value={this.state.TextToCopy}
              // onMouseOver={this.handleDisplayMsg}
              // onMouseLeave={this.handleRemoveMsg}
              // onMouseDown={this.handleCopy}
              onClick={this.handleCopy}
              spellCheck="false"
              readOnly
            /><label htmlFor="copyText" className="copyLabel">Email</label>
            <button onClick={this.handleCopy} className="copyButton"><Clipboard /></button>
          </div>

          <p className="min-break" />
        </main>
      </div>
    );
  }
}

export default Contact;
