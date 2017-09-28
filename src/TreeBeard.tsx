import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Treebeard } from 'react-treebeard';

const data = {
    name: 'root',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'loading parent',
            loading: true,
            children: []
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
};

type State = {
    cursor: any;
}

export class TreeExample extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = { cursor: {} };
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(node, toggled) {
        if (this.state.cursor) { this.state.cursor.active = false; }
        node.active = true;
        if (node.children) { node.toggled = toggled; }
        this.setState({ cursor: node });
    }
    render() {
        return (
            <Treebeard
                data={data}
                onToggle={this.onToggle}
            />
        );
    }
}