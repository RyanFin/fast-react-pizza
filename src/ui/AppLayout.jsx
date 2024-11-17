import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        {/* <h1>Content</h1> */}
        {/* outlet provided by react router dom alls */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
