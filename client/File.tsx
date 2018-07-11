import React from "react"
import { Node } from "./Node"

type FileProps = {
    file: Node
}

export class File extends React.Component<FileProps> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="item">
                <i className="edit icon"></i>
                <div className="content">
                    <div className="header">{this.props.file.name}</div>
                    <div className="description">File</div>
                </div>
            </div>
        )
    }
}