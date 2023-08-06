import { ReactNode } from "react";
import Appbar from "./appbar";
import Footer from "./footer";

type props = {
  children: ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <div className="">
      <div className="">
        <Appbar />
        <div className="container w-full mx-auto max-w-[1700px] ">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
