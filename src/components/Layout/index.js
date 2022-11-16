import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="mt-navbar">{children}</div>
    </>
  );
};

export default Layout;
