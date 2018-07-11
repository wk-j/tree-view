import React from "react"
import { Node } from "./Node"
import { File } from "./File"

type FolderProps = {
    folder: Node
    nodes: Node[]
}

export class Folder extends React.Component<FolderProps> {
    constructor(props) {
        super(props)
    }

    getFiles = (node: Node) => {
        return this.props.nodes.filter(x => x.parent === node.id && x.isFile)
    }

    getFolders = (node: Node) => {
        return this.props.nodes.filter(x => x.parent === node.id && !x.isFile)
    }

    render() {
        var { folder, nodes } = this.props;
        console.log(nodes)
        return (
            <div className="item">
                <i className="folder icon"></i>
                <div className="content">
                    <div className="header">{this.props.folder.name}</div>
                    <div className="description">Folder</div>
                    <div className="list">
                        {this.getFiles(folder).map(x => <File file={x} />)}
                        {this.getFolders(folder).map(x => <Folder folder={x} nodes={nodes} />)}
                    </div>
                </div>
            </div>
        )
    }
}
