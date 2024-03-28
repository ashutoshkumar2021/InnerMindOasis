import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";
import WriteNew from "./pages/dashboard/WriteNew";
import PrivateJournals from "./pages/dashboard/PrivateJournals";
import PublicJournals from "./pages/dashboard/PublicJournals";
import PostViewPage from "./pages/dashboard/PostViewPage";
import Uplift from "./pages/dashboard/Uplift";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Meditate from "./pages/dashboard/uplift/Meditate";
import axios from "axios";
import Resources from "./pages/dashboard/Resources";
import Insights from "./pages/dashboard/Insights";
import Therapist from "./pages/dashboard/uplift/Therapist";
import DashboardLayout from "./components/DashboardLayout";
function App() {
  axios.defaults.baseURL = "http://localhost:5000/";

  const testimonies = [
    {
      name: "Ashutosh Kumar",
      review:
        "Simple easy to use MentalHealth website with a clean and user friendly UI. One can make daily entries easily and and can capture the mood of the writer pretty accurately.",
    },
    {
      name: "Anubhav Raj",
      review:
        "It was a pleasure working with the entire InnerMind Oasis development team.",
    },
    {
      name: "Sanjeev Kumar",
      review:
        "An amazing and thoughful app.It helps to express myself only to me with full security.",
    },
  ];

  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home testimonies={testimonies} />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/dashboard/write-new"
            element={
              <ProtectedRoute>
                <WriteNew />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/public-journals/:postId"
            element={
              <ProtectedRoute>
                <PostViewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/private-journals"
            element={
              <ProtectedRoute>
                <PrivateJournals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/public-journals"
            element={
              <ProtectedRoute>
                <PublicJournals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/insights"
            element={
              <ProtectedRoute>
                <Insights />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/uplift/meditate"
            element={
              <ProtectedRoute>
                <Meditate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/uplift/therapy"
            element={
              <ProtectedRoute>
                <Therapist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/uplift"
            element={
              <ProtectedRoute>
                <Uplift />
              </ProtectedRoute>
            }
          />
          <Route path="/dashboard/resources" element={<Resources/>}/>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
