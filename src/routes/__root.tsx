import Footer from "@/components/Layout/Footer";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      <main className="flex-1 flex">
        {/* <Menu /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
