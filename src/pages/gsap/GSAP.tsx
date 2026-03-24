import { NavLink, Outlet } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function GSAP() {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to GSAP Animations!</h1>
        <aside>
          <h2>Navigation</h2>
          <nav>
            <NavLink to={"/gsap/tween"}>Tween</NavLink>
          </nav>
        </aside>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default GSAP;
