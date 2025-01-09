// App.js
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/index.jsx";
import Home from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import Blog from "./components/Pages/Blog.jsx";
import BlogDetails from "./components/Pages/BlogDetails.jsx";
import Gallery from "./components/Pages/Gallery.jsx";
import Models from "./components/Pages/AIModels.jsx";
import ModelDetails from "./components/Pages/ModelDetails.jsx";
import Dashboard from "./components/Pages/Dashboard.jsx";
import Contact from "./components/Pages/Contact.jsx";
import Register from "./components/Pages/Register.jsx";
import ErrorPage from "./components/Pages/ErrorPage.jsx";
import AuthProvider from "./AuthContext.js";
import PrivateRoute from "./components/PrivateRoute.js";

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
