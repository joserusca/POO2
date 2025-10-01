function createLeaf() {
  return { show: () => console.log("Leaf") };
}

function createComposite() {
  const children = [];
  return {
    add: (c) => children.push(c),
    show: () => {
      console.log("Composite");
      children.forEach((child) => child.show());
    },
  };
}

const root = createComposite();
root.add(createLeaf());
root.add(createLeaf());
root.show();
// Composite
// Leaf
// Leaf
