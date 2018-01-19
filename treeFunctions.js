
const traverseTreeValues = (f, tree) => {
    f(tree.val),
    tree.children.map( ctree => traverseTreeValues(f, ctree))
};

const treeMapval = (f, tree) => {
    return {
        val: f(tree.val),
        children: tree.children.map( ctree => treeMapval(f, ctree))
    };
};

const NodeTransform = (f, node) => {
    return f({
        val: node.val,
        children: node.children.map( childNode => NodeTransform(f, childNode))
    });
};

const flattenTree = (tree) => {
    var ft = []
    const flattener = (tree, acc) => {
        acc.push(tree.val);
        tree.children.map( ctree => flattener(ctree, acc));
    };
    flattener(tree,ft);
    return ft;
};

module.exports = {
    traverseTreeValues,
    treeMapval,
    NodeTransform,
    flattenTree
}
