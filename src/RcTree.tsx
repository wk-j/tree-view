import 'rc-tree/assets/index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Tree, { TreeNode } from 'rc-tree';
import cssAnimation from 'css-animation';
import styled from "styled-components";

import "semantic-ui-css/semantic.css";

const STYLE = `
.collapse {
  overflow: hidden;
  display: block;
}

.collapse-active {
  transition: height 0.1s ease-out;
}
`;

function animate(node, show, done) {
    let height = node.offsetHeight;
    return cssAnimation(node, 'collapse', {
        start() {
            if (!show) {
                node.style.height = `${node.offsetHeight}px`;
            } else {
                height = node.offsetHeight;
                node.style.height = 0;
            }
        },
        active() {
            node.style.height = `${show ? height : 0}px`;
        },
        end() {
            node.style.height = '';
            done();
        },
    });
}

const animation = {
    enter(node, done) {
        return animate(node, true, done);
    },
    leave(node, done) {
        return animate(node, false, done);
    },
    appear(node, done) {
        return animate(node, true, done);
    },
};

function renderArray(arr) {
    return arr.map((comp, index) => <span key={index}>{comp}</span>);
}

let title = (t) => renderArray([<i className="ui windows icon" />, ' ', t]);

const QTreeNode = styled(TreeNode) `
    /*height: 50px;*/
`;

export const demo = (
    <div>
        <h2>expanded</h2>
        <style dangerouslySetInnerHTML={{ __html: STYLE }} />
        <Tree
            showIcon={false}
            defaultExpandAll={false}
            defaultExpandedKeys={['p1']}
            openAnimation={animation} >
            <QTreeNode className="" title={title("Hello, world")} key="p1">
                <TreeNode key="p10" title={title("File")} />
                <TreeNode title={title("Hello, world 2")} key="p11">
                    <TreeNode title="parent 2-1" key="p21">
                        <TreeNode title="leaf" />
                        <TreeNode title="leaf" />
                    </TreeNode>
                    <TreeNode key="p22" title="leaf" />
                </TreeNode>
            </QTreeNode>
        </Tree>
    </div>
);