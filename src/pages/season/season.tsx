import React, { useEffect, useState } from "react";
import api from "@/services/api";
import {
  getAtualYear,
} from "@/utils/functions/functions";

import { columns } from "./columns"
import { DataTable } from "./data-table"

export default function Season() {
  const [year, setYear] = useState(getAtualYear()); 
  const [seasonResults, setSeasonResults] = useState<any[]>([]);

  useEffect(() => {
    fetchSchedule();
  }, []);

  async function fetchSchedule() {
    try {
      const response = await api.get(`/${year}.json`);

      if (response.data.MRData) {

        const formattedData = response.data.MRData.RaceTable.Races.map((race) => ({
          round: race.round,
          raceName: race.raceName,
          circuitName: race.Circuit.circuitName,
          circuitUrl: race.Circuit.url,
          date: race.date,
          qualifyingDate: race.date,
          qualifyingTime: race.Qualifying.time,
        }));

        setSeasonResults(formattedData);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados da temporada:", error);
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Temporada {year}</h1>
      <DataTable columns={columns} data={seasonResults} enablePagination={false}  />
    
    </>
  );
}
