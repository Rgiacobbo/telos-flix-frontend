import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/video";
import MovieProvider from "./contexts/MovieProvider";
import MovieDetails from "./pages/MovieDetails";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <MovieProvider>
            <Home />
          </MovieProvider>
        } 
        path="/" 
        exact />

        <Route
          element={
            <MovieProvider>
              <Video />
            </MovieProvider>
          }
          path="/video"
          exact
        />
        <Route
          element={
            <MovieProvider>
              <Video />
            </MovieProvider>
          }
          path="/video/:id"
        />

        <Route element={
        <MovieProvider>
        <MovieDetails />
      </MovieProvider>
        } path="/Movie/:id" exact />
      </Routes>
    </BrowserRouter>
  );
}
