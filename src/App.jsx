import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import {
  About,
  Home,
  Contact,
  User,
  Github,
  GithubInfoLoader,
} from "./components/index";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact />,
  //       },
  //     ],
  //   },
  // ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/reactRouter/" element={<Home />} />
        <Route path="/reactRouter/about" element={<About />} />
        <Route path="/reactRouter/contact" element={<Contact />} />
        <Route path="/reactRouter/contact" element={<Contact />} />
        <Route path="/reactRouter/user/:userid" element={<User />} />
        <Route
          path="/reactRouter/Github"
          element={<Github />}
          loader={GithubInfoLoader}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
