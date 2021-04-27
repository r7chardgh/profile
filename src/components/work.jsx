import React, { Component } from "react";
class Work extends Component {
  state = {
    work: [
      {
        id: 1,
        title: "x123",
        description:
          "Donec malesuada leo sagittis ultricies venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit felis non est sagittis posuere. Morbi mollis ligula ante, ornare cursus tellus euismod nec. In interdum sem sit amet risus condimentum varius. Praesent vel quam ut justo pellentesque tempus. Duis aliquet quis lacus vel rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vitae convallis arcu. Proin ac justo lacus.",
        screenshot: ["https://via.placeholder.com/500x300", "2", "3", "4"],
        type: "A",
        isExpanded: false,bg:"#32a852"
      },
      {
        id: 2,
        title: "a608",
        description:
          "ip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru",
        screenshot: ["1", "2", "3", "4"],
        type: "B",
        isExpanded: false,bg:"#329ca8"
      },
      {
        id: 3,
        title: "c445",
        description:
          "orta. Quam viverra orci sagittis eu volutpat. Nibh tortor id aliquet lectus. Elementum integer enim neque volutpat ac tincidunt. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Imperdiet sed euismod nisi porta. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque",
        screenshot: ["1", "2", "3", "4"],
        type: "C",
        isExpanded: false,bg:"#4a32a8"
      },
      {
        id: 4,
        title: "g231",
        description:
          "a duis convallis. Dictum sit amet justo donec enim diam. Sit amet risus nullam eget. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Ornare suspendisse sed nisi lacus sed. Feugiat nisl pretium fusce id velit. Dui id ornare arcu odio ut sem nulla pharetra diam. Morbi tristique senectus et netus et. Fusce ut placerat orci nulla. Leo urna molestie at elementum eu facilisis sed. M",
        screenshot: ["1", "2", "3", "4"],
        type: "D",
        isExpanded: false,bg:"#85a832"
      },
      {
        id: 5,
        title: "j867",
        description:
          " bibendum. Fermentum posuere urna nec tincidunt praesent semper feugiat. Semper viverra nam libero justo laoreet. Et odio pellentesque diam volutpat commodo. Sit amet volutpat consequat mauris nunc. Molestie nunc non blandit massa enim nec. Cursus in hac habitasse platea dictumst quisque sagittis purus. Augue interdum velit euismod in. Ullamcorper velit sed ullamcorper morbi tincidunt. No",
        screenshot: ["1", "2", "3", "4"],
        type: "A",
        isExpanded: false,bg:"#a85532"
      },
      
    ],
    isChanged:false
  };
  // resetState = (id) => {
  //   const work = this.state.work.map((w) => {
  //     if (w.id == id) w.isExpanded = false;
  //     return w;
  //   });
  //   this.setState({ work });
  // };
  // handleReadMore = (id) => {
  //   const target = document.getElementsByClassName("work-card")[id-1];
  //   setTimeout(() => {
  //     document.getElementById("page").scrollTo({top: target.offsetTop+120,
  //       behavior: 'smooth'});
  //   }, 300);
  //   const work = this.state.work.map((w) => {
  //     w.id == id ? (w.isExpanded = true) : (w.isExpanded = false);
  //     return w;
  //   });
  //   this.setState({ work });
  // };
  render() {
    if (!this.props.option.isSelected) return null;
    return (
      <div id="works" className="page">
        <h1 className="page-title load">{this.props.option.title}</h1>
        <main className="page-content load">
          <div className="work-card-wrap">
            {/** content */}

            {/* {this.state.work.map((w) => (
              <div
                key={w.id}
                  id={w.id}
                  // onBlur={() => this.resetState(w.id)}
                className={w.isExpanded ? "work-card expanded" : "work-card"}
                tabIndex={w.id}
                // style={{background:w.bg}}
              >
                <span className="work-card-id"># {w.id}</span>
                <img
                  className="work-image"
                  src="https://via.placeholder.com/500x300"
                />
                <div className="work-info">
                  <div className="work-title">
                    {w.title}
                    <span className="work-type">{w.type}</span>
                  </div>
                  <div className="work-description">
                    {w.isExpanded
                      ? w.description
                      : w.description.slice(0, 60).concat("...")}
                  </div>
                  {w.isExpanded ? null : (
                    <button
                      onClick={() => this.handleReadMore(w.id)}
                      className="work-expand-btn"
                    >
                      Read More
                    </button>
                  )}
                </div>
              </div>
            ))} */}

            {/** content */}
          </div>
          <div className="work-view-panel">
            
          </div>
          <div id="4" className="endbar"></div>
        </main>
      </div>
    );
  }
}

export default Work;
