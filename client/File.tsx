import React from "react"
import { Node } from "./Node"

type FileProps = {
    file: Node
    onSelect: (Node) => void;
    isSelected: (Node) => boolean
}

export class File extends React.Component<FileProps> {
    constructor(props) {
        super(props)
    }

    onClick = (node) => (e) => {
        this.props.onSelect(node)
    }

    render() {
        let className = this.props.isSelected(this.props.file) ? "active tree-file item" : "tree-file item"
        return (
            <div className={className} onClick={this.onClick(this.props.file)}>
                <i className="edit icon"></i>
                <div className="content">
                    <div className="header">{this.props.file.name}</div>
                    <div className="description">File</div>
                </div>
            </div>
        )
    }
}