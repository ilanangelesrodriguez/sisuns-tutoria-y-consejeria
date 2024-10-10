import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import NotFound from "@/pages/notFound/notFound";

function App() {
  //MI COMENTARIO G
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/nosotros" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
