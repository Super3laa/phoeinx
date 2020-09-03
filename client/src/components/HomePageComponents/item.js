import React from "react";
import "./item.css";
import github from "./github.png";
import npm from "./npm.png";
import Medium from "./Medium.png";
export default function Item(props) {
  console.log(props);
  const imgPath = "http://localhost:5000/" + encodeURI(props.content.image);
  return (
    <React.Fragment>
      <div className="Item" style={props.style}>
        <div
          className="pic"
          style={{
            backgroundImage: `url(${imgPath})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "30vh",
          }}
        ></div>
        <div
          className="Filter"
          style={{
            backgroundImage:
              props.type == "article"
                ? "linear-gradient(to right, #449aa27a, #bc4083a8)"
                : "linear-gradient(to right, #f3822187, #273bb091)",
          }}
        ></div>
        <div>
          <p className="Title">{props.content.title}</p>
          <p className="content">{props.content.description}</p>
        </div>
        <div className="break"></div>
        <div className="ItemActions">
          {props.content.medium ? (
            <div className="actionItem">
              <img src={Medium} alt="Medium" height="auto" width="100%"></img>
            </div>
          ) : null}
          {props.content.npm ? (
            <div className="actionItem">
              <img src={npm} alt="npm" height="auto" width="100%"></img>
            </div>
          ) : null}
          {props.content.github ? (
            <div className="actionItem">
              <img src={github} alt="GitHub" height="auto" width="100%"></img>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}
