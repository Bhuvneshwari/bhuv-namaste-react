const heading = React.createElement(
  "div",
  {
    id: "maindiv",
  },
  
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
    ]),

    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
    ]),
  ]
);

/*
testing code
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
