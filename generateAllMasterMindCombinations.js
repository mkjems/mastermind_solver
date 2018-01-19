#!/usr/bin/env node

const {colors, colorKeys} = require('./constants');
const {log} = require('./log');
const { NodeTransform, flattenTree} = require('./treeFunctions')

const Node = (val, children = []) => ({
    val: val,
    children: [...children]
});

const AddChildrenToLeaf = node => {
    if (node.children.length === 0) {
        notUsed = colorKeys.filter(color => (node.val.indexOf(color) === -1))
        node.children = notUsed.map(u => Node([...node.val,u]));
        return node;
    }
    return node;
};

const generateMasterMindCombinations = (colorPool, numPegs) => {
    var count = 0;
    var combinationTree = Node([]);
    while (numPegs > count) {
        combinationTree = NodeTransform(AddChildrenToLeaf, combinationTree);
        count++;
    }
    const arrayOfAllCombination = flattenTree(combinationTree).filter(a=>a.length==numPegs)
    return arrayOfAllCombination;
};

module.exports = {
    generate: generateMasterMindCombinations
}
