import * as React from "react";
import * as ReactDOM from "react-dom";

import { Demo } from "./TreeView";
import { TreeExample } from "./TreeBeard";
import { demo } from "./RcTree";

ReactDOM.render(<TreeExample />, document.getElementById("app"));
ReactDOM.render(demo, document.getElementById("rc-tree"));
