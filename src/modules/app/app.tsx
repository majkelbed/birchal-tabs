import { Routes, Route } from "react-router-dom"
import { FilmsPage } from "../films/pages/films.page"
import { PeoplePage } from "../people/pages/people.page"
import { PlanetsPage } from "../planets/pages/planets.page"

export const App = () => {
  return (
    <main>
      <Routes>
        <Route path="films" element={<FilmsPage />} />
        <Route path="people" element={<PeoplePage />} />
        <Route path="planets" element={<PlanetsPage />} />
        {/* TODO: add redirect page or 404 page */}
        <Route path="*" element={<FilmsPage />} />
      </Routes>
    </main>
  )
}