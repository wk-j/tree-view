
import React from "react"
import ReactDOM from "react-dom"
import axois from "axios"

import "semantic-ui-css/semantic.min.css"
import "./style.css"
import { getNodes, Node } from "./Node";
import { Folder } from "./Folder";

type State = {
    nodes: Node[]
    selectedNode: Node
}

class App extends React.Component<{}, State> {
    constructor(props) {
        super(props);

        this.state = {
            nodes: [],
            selectedNode: {
                name: "",
                id: 0,
                isRoot: true,
                parent: 0,
                isFile: false
            }
        }
    }

    componentDidMount() {
        getNodes().then(rs => {
            this.setState({
                nodes: rs.data
            })
        })
    }

    onSelect = (node) => {
        this.setState({
            selectedNode: node
        })
    }

    getRoot = (): Node => {
        if (this.state.nodes.length) {
            return this.state.nodes.filter(x => x.isRoot)[0];
        } else {
            return {
                name: "Loading ...",
                isRoot: true,
                isFile: false,
                id: 0,
                parent: 0
            }
        }
    }

    isSelected = (node) => this.state.selectedNode == node;

    render() {
        return (
            <div className="ui list">
                <Folder isSelected={this.isSelected} onSelect={this.onSelect} nodes={this.state.nodes} folder={this.getRoot()} />
            </div>
        )
    }
}

var root = document.getElementById("root")
ReactDOM.render(<App />, root)