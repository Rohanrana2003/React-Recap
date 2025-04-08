const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Hello! Iam an H1 tag!"),
    React.createElement("h2", { id: "heading" }, "Hello! Iam an H2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello! Iam an H1 tag!"),
    React.createElement("h2", { id: "heading" }, "Hello! Iam an H2 tag!"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "Main" },
//   "React Basics"
// );     //It is an Javascript object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
