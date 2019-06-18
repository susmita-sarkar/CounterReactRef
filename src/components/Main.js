import React, { Component } from "react";
import Counter from "./Counter";
import { tsImportEqualsDeclaration } from "@babel/types";
class Main extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      num: 100,
      startCounter: false
    };
  }

  goScroll = () => {
    console.log(this.myRef);
    this.myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (this.myRef.current.offsetTop <= window.scrollY + 300) {
      if (this.state.startCounter === false)
        this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <div onClick={() => alert("outer")}>
        <div style={{ backgroundColor: "red", height: "500px" }}>
          <button onClick={this.goScroll}>Scroll</button>
        </div>

        <div
          onClick={() => alert("orange")}
          style={{ backgroundColor: "orange", height: "500px" }}
        />

        <div
          style={{ backgroundColor: "blue", height: "500px" }}
          ref={this.myRef}
        >
          <Modal>
            <Counter num={this.state.num} signal={this.state.startCounter} />
          </Modal>
        </div>

        <div style={{ backgroundColor: "green", height: "500px" }} />

        <div style={{ backgroundColor: "yellow", height: "500px" }} />
      </div>
    );
  }
}

export default Main;
