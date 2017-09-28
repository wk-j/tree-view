import * as React from "react";
import * as TreeView from "react-treeview";

console.log(TreeView);

type State = {
    collapsedBookkeeping: any
}

type Props = { }

const dataSource = [
    ['Apple', 'Orange'],
    ['Facebook', 'Google'],
    ['Celery', 'Cheeseburger'],
];

export class _Demo extends React.Component<Props, State> {
    render() {
        return (
            <h1>Hello, world!</h1>
        )
    }
}

export class Demo extends React.Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            collapsedBookkeeping: dataSource.map(() => false)
        };
        this.handleClick = this.handleClick.bind(this);
        this.collapseAll = this.collapseAll.bind(this);
    }

    handleClick(i) {
        let [...collapsedBookkeeping] = this.state.collapsedBookkeeping;
        collapsedBookkeeping[i] = !collapsedBookkeeping[i];
        this.setState({ collapsedBookkeeping: collapsedBookkeeping });
    }

    collapseAll() {
        this.setState({
            collapsedBookkeeping: this.state.collapsedBookkeeping.map(() => true),
        });
    }

    render() {
        const collapsedBookkeeping = this.state.collapsedBookkeeping;
        return (
            <div>
                <button onClick={this.collapseAll}>Collapse all</button>
                {dataSource.map((node, i) => {
                    const label =
                        <span className="node" onClick={this.handleClick.bind(null, i)}>
                            Type {i}
                        </span>;
                    return (
                        <TreeView
                            key={i}
                            nodeLabel={label}
                            collapsed={collapsedBookkeeping[i]}
                            onClick={this.handleClick.bind(null, i)}>
                            {node.map(entry => <div className="info" key={entry}>{entry}</div>)}
                        </TreeView>
                    );
                })}
            </div>
        );
    }
}