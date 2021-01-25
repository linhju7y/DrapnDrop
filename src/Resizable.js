import React from "react";
import ReactDOM from "react-dom";
import { ResizableBox } from "react-resizable";
import { ReplaceOnOverflow } from "./overflower";
import "./styles.css";
import "react-resizable/css/styles.css";


function Resizable() {
  return (

    <div className="Resizable" align="center">
        <h1>Resizable Box</h1>
      <ResizableBox width={300} height={300} className="box">
        <ReplaceOnOverflow orientation="horizontal" short="no horizontal space">
          <ReplaceOnOverflow orientation="vertical" short="no vertical space">
            <div className="content-wrap">
              <span className="content">
                Resizable
                <br />
                box
              </span>
            </div>
          </ReplaceOnOverflow>
        </ReplaceOnOverflow>
      </ResizableBox>
    </div>
  );
}
export default Resizable;

const rootElement = document.getElementById("root");
ReactDOM.render(<Resizable />, rootElement);
