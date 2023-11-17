import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import TermsOfService from "../pages/TermsOfService";
import Privacy from "../pages/Privacy";
import Pricing from "../pages/Pricing";
import OnlinePersonalTrainer from "../pages/OnlinePersonalTrainer";
import FeaturesPage from "../pages/FeaturesPage";
import ProgressPage from "../pages/ProgressPage";
import DatabasePage from "../pages/DatabasePage";
import WorkoutPlans from "../pages/WorkoutPlans";
import SearchResults from "../pages/SearchResults";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/termsOfService" element={<TermsOfService />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/personalTrainer" element={<OnlinePersonalTrainer />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/database" element={<DatabasePage />} />
      <Route path="/workoutPlans" element={<WorkoutPlans />} />
      <Route path="/searchResults" element={<SearchResults />} />
    </Routes>
  );
}
