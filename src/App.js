import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AndroidSmall8 from "./pages/AndroidSmall8";
import AndroidSmall5 from "./pages/AndroidSmall5";
import AndroidSmall4 from "./pages/AndroidSmall4";
import AndroidSmall3 from "./pages/AndroidSmall3";
import AndroidSmall2 from "./pages/AndroidSmall2";
import AndroidSmall11 from "./pages/AndroidSmall11";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-5":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-4":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-3":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-2":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-11":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AndroidSmall8 />} />
      <Route path="/android-small-5" element={<AndroidSmall5 />} />
      <Route path="/android-small-4" element={<AndroidSmall4 />} />
      <Route path="/android-small-3" element={<AndroidSmall3 />} />
      <Route path="/android-small-2" element={<AndroidSmall2 />} />
      <Route path="/android-small-11" element={<AndroidSmall11 />} />
    </Routes>
  );
}
export default App;
