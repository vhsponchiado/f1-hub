import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/services/api";
import { getAtualYear } from "@/utils/functions/functions";

import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function SeasonRoundDriversResults() {

  const { year, round } = useParams();

  const [driverResults, setDriversResults] = useState<any[]>([]);

  const [raceInfo, setRaceInfo] = useState<any>({});


  useEffect(() => {
    fetchResults();
  }, []);

  async function fetchResults() {
    try {
      const response = await api.get(
        `/${year}/${round}/results.json?limit=5000`
      );

      if (response.data.MRData) {

        const race =  response.data.MRData.RaceTable.Races[0];
            
        const info = {
          raceName: race.raceName,
        }

        setRaceInfo(info);


        const formattedData =
          race.Results.map(
            (result) => ({
              position: result.position,
              code: result.Driver.code,
              dateOfBirth: result.Driver.dateOfBirth,
              driverId: result.Driver.driverId,
              familyName: result.Driver.familyName,
              givenName: result.Driver.givenName,
              nationality: result.Driver.nationality,
              permanentNumber: result.Driver.permanentNumber,
              number: result.number,
              driverUrl: result.Driver.url,
              points: result.points,
              grid: result.grid,
              status: result.status,
              fastestLapRank: result.FastestLap?.rank,
              fastestLapTime: result.FastestLap?.Time?.time, 
              constructorId: result.Constructor.constructorId,
              constructorUrl: result.Constructor.url,
              constructorName: result.Constructor.name,
              constructorNationality: result.Constructor.nationality

            })
          );

        setDriversResults(formattedData);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados da temporada:", error);
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Resultado - {raceInfo.raceName}</h1>
      <DataTable
        columns={columns}
        data={driverResults}
        enablePagination={false}
        enableColumnVisibility={false} enableFiltering={false}
      />
    </>
  );
}
