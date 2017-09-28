import * as cx from 'classnames';
import * as React from 'react';
import * as Tree from 'react-ui-tree';
import { tree } from './Tree';
import './Theme.less';
//import './App.less';
import "react-ui-tree/dist/react-ui-tree.css";

console.log(cx);

export class UiTree extends React.Component {
    state = {
        active: null,
        tree: tree
    };

    renderNode = node => {
        return (
            <span
                className={cx('node', {
                    'is-active': node === this.state.active
                })}
                onClick={this.onClickNode.bind(null, node)}
            >
                {node.module}
            </span>
        );
    };

    onClickNode = node => {
        this.setState({
            active: node
        });
    };

    render() {
        return (
            <div className="app">
                <div className="tree">
                    <Tree
                        paddingLeft={20}
                        tree={this.state.tree}
                        onChange={this.handleChange}
                        isNodeCollapsed={false}
                        renderNode={this.renderNode}
                    />
                </div>
                <div className="inspector">
                    <h1>
                        Hello, world!
          </h1>
                    <button onClick={this.updateTree}>update tree</button>
                    <pre>{JSON.stringify(this.state.tree, null, '  ')}</pre>
                </div>
            </div>
        );
    }

    handleChange = tree => {
        this.setState({
            tree: tree
        });
    };

    updateTree = () => {
        const { tree } = this.state;
        tree.children.push({ module: 'test', collapsed: false, children: [] });
        this.setState({
            tree: tree
        });
    };
}