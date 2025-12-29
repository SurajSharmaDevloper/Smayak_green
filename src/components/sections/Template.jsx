import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FooterNew from "./FooterNew";

const Template = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] relative flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Dynamic Content */}
      <main className="grow bg-[#fafafa]">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="">
        <FooterNew />
      </div>
    </div>
  );
};

export default Template;
