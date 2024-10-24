import AppRoutes from "@/routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/theme-provider";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <AppRoutes />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
