import { Routes, Route, Navigate } from "react-router-dom";

import TripsPage from "../features/trips/pages/TripsPage";
import NewTripPage from "../features/trips/pages/NewTripPage";
import ItineraryPage from "../features/itinerary/pages/ItineraryPage";
import ExplorePage from "../features/explore/pages/ExplorePage";
import SettingsPage from "../features/settings/pages/SettingsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/trips" replace />} />
      <Route path="/trips" element={<TripsPage />} />
      <Route path="/trips/new" element={<NewTripPage />} />
      <Route path="/trips/:tripId" element={<ItineraryPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/settings" element={<SettingsPage />} /> 
    </Routes>
  );
}