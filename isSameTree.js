var isSameTree = function(p, q) {
    let pQueue = [p];
    let qQueue = [q];

    while (pQueue.length > 0 && qQueue.length > 0) {
        if (pQueue.length !== qQueue.length) return false;

        const levelSize = pQueue.length;

        for (let i = 0; i < levelSize; i++) {
            const nodeP = pQueue.shift();
            const nodeQ = qQueue.shift();

            if ((nodeP === null && nodeQ !== null) || (nodeP !== null && nodeQ === null)) {
                return false;
            }

            if (nodeP === null && nodeQ === null) continue;

            if (nodeP.val !== nodeQ.val) {
                return false;
            }
            pQueue.push(nodeP.left, nodeP.right);
            qQueue.push(nodeQ.left, nodeQ.right);
        }
    }

    return pQueue.length === qQueue.length;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Test cases
const tree1a = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree1b = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log("Same trees:", isSameTree(tree1a, tree1b));

const tree2a = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2b = new TreeNode(1, new TreeNode(2), new TreeNode(4));
console.log("Different values:", isSameTree(tree2a, tree2b));

const tree3a = new TreeNode(1, new TreeNode(2), null);
const tree3b = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log("Different structure:", isSameTree(tree3a, tree3b));

console.log("Both null:", isSameTree(null, null));

const tree5a = new TreeNode(1);
console.log("One null:", isSameTree(tree5a, null));

const tree6a = new TreeNode(5);
const tree6b = new TreeNode(5);
console.log("Single node same:", isSameTree(tree6a, tree6b));

const tree7a = new TreeNode(5);
const tree7b = new TreeNode(10);
console.log("Single node different:", isSameTree(tree7a, tree7b));

const tree8a = new TreeNode(1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
);
const tree8b = new TreeNode(1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
);
console.log("Deeper tree:", isSameTree(tree8a, tree8b));