import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Header />
      <main className="container mt-4">
        <Outlet />
      </main>
    </div>
  );
};
