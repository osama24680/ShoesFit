// App.js
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import BlogDetails from "./components/Pages/BlogDetails";
import Gallery from "./components/Pages/Gallery";
import Models from "./components/Pages/AIModels";
import ModelDetails from "./components/Pages/ModelDetails";
import Dashboard from "./components/Pages/Dashboard";
import Contact from "./components/Pages/Contact";
import Register from "./components/Pages/Register";
import ErrorPage from "./components/Pages/ErrorPage";
import AuthProvider from "./AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route
            path="about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="blog"
            element={
              <PrivateRoute>
                <Blog />
              </PrivateRoute>
            }
          />
          <Route
            path="blog/:idBlogPost"
            element={
              <PrivateRoute>
                <BlogDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="gallery"
            element={
              <PrivateRoute>
                <Gallery />
              </PrivateRoute>
            }
          />
          <Route
            path="models"
            element={
              <PrivateRoute>
                <Models />
              </PrivateRoute>
            }
          />
          <Route
            path="models/:modelId"
            element={
              <PrivateRoute>
                <ModelDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
