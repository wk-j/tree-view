import React from "react"
import { Node } from "./Node"
import { File } from "./File"

type FolderProps = {
    onSelect: (Node) => void;
    isSelected: (Node) => boolean;
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
        return (
            <div className="item">
                <i className="folder icon"></i>
                <div className="content">
                    <div className="header">{this.props.folder.name}</div>
                    <div className="description">Folder</div>
                    <div className="list">
                        {this.getFolders(folder).map(x => <Folder isSelected={this.props.isSelected} onSelect={this.props.onSelect} folder={x} nodes={nodes} />)}
                        {this.getFiles(folder).map(x => <File isSelected={this.props.isSelected} onSelect={this.props.onSelect} file={x} />)}
                    </div>
                </div>
            </div>
        )
    }
}
