import { Routes, Route } from "react-router-dom";
import { Navbar } from "../common/components/navbar/navbar.component";
import { FilmsPage } from "../films/pages/films.page";
import { usePrefetchFilms } from "../films/services/films.api";
import { PeoplePage } from "../people/pages/people.page";
import { PlanetsPage } from "../planets/pages/planets.page";
import { GlobalStyle } from "./app.styles";

export const App = () => {
  // TODO: custom hook to populate all tabs at once
  usePrefetchFilms();
    
  return (
    <main>
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route path="films" element={<FilmsPage />} />
        <Route path="people" element={<PeoplePage />} />
        <Route path="planets" element={<PlanetsPage />} />
        {/* TODO: add redirect page or 404 page */}
        <Route path="*" element={<FilmsPage />} />
      </Routes>
    </main>
  );
};
