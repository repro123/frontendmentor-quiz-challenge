import Background from "@/components/background/Background";
import LayoutContainer from "@/components/containers/LayoutContainer";
import Header from "@/components/header/Header";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <LayoutContainer>
      <Background />
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}

export default RootLayout;
