import { RootScreen } from "@/components/RootScreen";
import { ToastContainer } from "@/components/Layout/Toast";
import { ToastProvider } from "@/contexts/ToastContext";

export const App = () => {
  return (
    <ToastProvider>
      <RootScreen />
      <ToastContainer />
    </ToastProvider>
  );
};
