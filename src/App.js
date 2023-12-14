import { useEffect } from "react";
import Header from "./components/Header";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HotelsPage from "./pages/HotelsPage";
import ResultsPage from "./pages/ResultsPage";
import Homepage from "./pages/Homepage";

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
        title = "Joybor Co.";
        metaDescription = "Keyingi boshpanangizni biz bilan toping!";
        break;
      case "/hotels-page":
        title = "Uylar";
        metaDescription = "";
        break;
      case "/results-page":
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
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hotels-page" element={<HotelsPage />} />
      <Route path="/results-page" element={<ResultsPage />} />
    </Routes>
    </>
  );
}
export default App;
