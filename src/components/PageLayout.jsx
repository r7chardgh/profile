import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useScrollToHighlightMenu } from "../hooks/useScrollToHighlightMenu";
function PageLayout() {
  const { currentPos, setSections } = useScrollToHighlightMenu();
  return (
    <main>
      <Header currentPos={currentPos} />
      <Outlet context={setSections} />
      <Footer />
    </main>
  );
}

export default PageLayout;
