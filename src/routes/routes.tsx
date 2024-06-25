import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "@/components/ui/layout/main-layout";
/* Pages */
import Season from "@/pages/season/season";
import SeasonRoundDriversResults from "@/pages/results/drivers/results";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/season"
        element={
          <MainLayout content={<Season />}/>
        }
      />

      <Route
        path="/season/drivers/:year/:round"
        element={
          <MainLayout content={<SeasonRoundDriversResults />}/>
        }
      />

     <Route
        path="/season/constructors/:year/:round"
        element={
          <MainLayout content={<Season />}/>
        }
      />
    </Routes>
  );
}
