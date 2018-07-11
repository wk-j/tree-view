
import React from "react"
import ReactDOM from "react-dom"
import axois from "axios"

import "semantic-ui-css/semantic.min.css"
import "./style.css"
import { getNodes, Node } from "./Node";
import { Folder } from "./Folder";

type State = {
    nodes: Node[]
}

class App extends React.Component<{}, State> {
    constructor(props) {
        super(props);

        this.state = {
            nodes: []
        }
    }

    componentDidMount() {
        getNodes().then(rs => {
            this.setState({
                nodes: rs.data
            })
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

    render() {
        return (
            <div className="ui list">
                <Folder nodes={this.state.nodes} folder={this.getRoot()} />
            </div>
        )
    }
}

var root = document.getElementById("root")
ReactDOM.render(<App />, root)