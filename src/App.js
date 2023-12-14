import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestuarantMenu from "./components/ResturantMenu";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from ReactJs!"
// );
// // console.log(heading.props);
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // // root.render(heading);

// // const parent = React.createElement("div", { id: "parent" }, [
// //   React.createElement("div", { id: "child" }, [
// //     React.createElement("h1", {}, "I am h1 tag"),
// //     React.createElement("h2", {}, "I am h2 tag"),
// //   ]),
// //   React.createElement("div", { id: "child2" }, [
// //     React.createElement("h1", {}, "I am h1 tag"),
// //     React.createElement("h2", {}, "I am h2 tag"),
// //   ]),
// // ]);

// // JSX Syntax to create react element
// const jsxHeading = <h1 className="heading">Namaste React using Jsx 🚀</h1>;
// //const root = ReactDOM.createRoot(document.getElementById("root"));

// // React Fuctional component
// const Title = () => <h1 id="heading">Namaste React from ChildComponent</h1>;

// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h1>Namaste React from FunctionalComponent🚀</h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(<HeadingComponent />, heading);
// root.render(<HeadingComponent />);
// //root.render(jsxHeading);

// // Assignement 3 Part A

// //case 1
// const nestedElement = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "This is First Element"),
//   React.createElement("h2", {}, "This is Second Element"),
//   React.createElement("h3", {}, "This is Third Element"),
// ]);
// //root.render(nestedElement);

// //case 2
// const jsxnestedElement = (
//   <div className="title">
//     <h1>This is First element. </h1>
//     <h2>This is Second element.</h2>
//     <h3>This is Third element.</h3>
//   </div>
// );
// //root.render(jsxnestedElement);
// //case3
// const JsxnestedComponents = () => (
//   <div className="title">
//     {jsxnestedElement}
//     <h1>This is First element from JsxnestedComponents. </h1>
//     <h2>This is Second element from JsxnestedComponents.</h2>
//     <h3>This is Third element from JsxnestedComponents.</h3>
//   </div>
// );
// //root.render(<JsxnestedComponents />);
// //case 4 Component Composition
// const JsxnestedComponents1 = () => (
//   <div className="title">
//     <JsxnestedComponents />
//     <h1>This is First element from JsxnestedComponents1. </h1>
//     <h2>This is Second element from JsxnestedComponents1.</h2>
//     <h3>This is Third element from JsxnestedComponents1.</h3>
//   </div>
// );
// //console.log(JsxnestedComponents);

// //root.render(<JsxnestedComponents1 />);

// // Assignement 3 Part B

// const HeaderComponent = () => (
//   <div className="bar">
//     <img id="logo" className="icons" src={logo} alt="Logo Image" />
//     <input className="searchbox" type="text" placeholder="Enter to Search" />
//     <img id="user" className="icons" src={user} alt="User Icon" />
//   </div>
// );
// root.render(<HeaderComponent />);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturants/:resId",
        element: <RestuarantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

//console.log(appRouter);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
