import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/services/api";
import { Button } from "@/components/ui/button";

export default function SeasonRoundLapsVisualizer() {
  const { year, round } = useParams();

  const [raceInfo, setRaceInfo] = useState({ raceName: "", totalLaps: 0 });
  const [lapResults, setLapResults] = useState([]);

  async function fetchLaps() {
    try {
      const response = await api.get(`/${year}/${round}/laps.json?limit=1140`);
      if (response.data.MRData) {
        const race = response.data.MRData.RaceTable.Races[0];
        const info = {
          raceName: race.raceName,
          totalLaps: race.Laps.length,
        };
        setRaceInfo(info);
        
        const laps = race.Laps.map(lap => {
          const lapNumber = lap.number;
          const timings = lap.Timings.map(timing => {
            const position = timing.position;
            const driverId = timing.driverId;
            const time = timing.time;

       

            return {
              position,
              driverId,
              time: time,
            };
          });

          return {
            lap: lapNumber,
            timings
          };
        });
        
        setLapResults(laps);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados das voltas:", error);
    }
  }


  return (
    <div className="w-full p-4 overflow-x-auto">
      <div className="w-auto mb-4">
        <Button onClick={() => fetchLaps()}>Carregar voltas</Button>
      </div>
      
      <h2>{raceInfo.raceName}</h2>
      <p>Total de voltas: {raceInfo.totalLaps}</p>
    </div>
  );
}
