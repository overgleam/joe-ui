import { Routes, Route, useLocation } from "react-router-dom";
import Joseph from "@/pages/Joseph";
import Alforque from "@/pages/Alforque";
import Layout from "@/components/Layout";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Joseph />} />
        <Route path="alforque" element={<Alforque />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
