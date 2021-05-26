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
    const copyText = document.getElementById("copyText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
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
            Oh! It seems you have visited my profile, feel free to contact me if you have any thoughts to me!
            <br></br>I am all ears.
          </p>
          <p className="min-break" />
          <div className="copyBar">
            
            <input
              className="copyText"
              id="copyText"
              value={this.state.TextToCopy}
              onClick={this.handleCopy}
              spellCheck="false"
              readOnly
            /><label htmlFor="copyText" className="copyLabel">Email</label>
            <button onClick={this.handleCopy} className="copyButton" aria-label="copy button"><Clipboard /></button>
          </div>

          <p className="min-break" />
        </main>
      </div>
    );
  }
}

export default Contact;
