import { NavLink, useRouteError } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Errorpage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <>
      <Header />
      <h1>This is Error PAge</h1>
      <h2>Error:`{error.status} / {error.error.message}`</h2>
      <NavLink to='/'>
      <button>Go Back</button></NavLink>
      <Footer />
    </>
  );
};
