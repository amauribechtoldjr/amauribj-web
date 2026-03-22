import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
