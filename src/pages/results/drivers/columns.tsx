import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { IoConstructOutline } from "react-icons/io5";

import CountryFlag from "@/components/ui/country-flag";

import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { getCurrentDate } from "@/utils/functions/functions";

import { ArrowUpDown } from "lucide-react";

interface Driver {
  position: number;
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  number: string;
  driverUrl: string;
  points: number;
  grid: number;
  status: string;
  fastestLapRank: string;
  constructorId: string;
  constructorUrl: string;
  constructorName: string;
  constructorNationality: string;
}

export const columns: ColumnDef<Driver>[] = [
  {
    accessorKey: "position",
    header: "Posição",
    cell: ({ row }) => {
      const position = row.original.position;
      return (
        <div className="flex flex-col">
          <span>{position}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "points",
    header: "Pontos",
    cell: ({ row }) => {
      const points = row.original.points;
      return <span>{`${points}`}</span>;
    },
  },
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => {
      const driver = row.original;
      return (
        <div className="flex gap-x-2 items-center">
          <div>
            <CountryFlag nationality={driver.nationality} />
          </div>
          <span>
            {`${driver.givenName} ${driver.familyName} #${driver.permanentNumber} ${driver.nationality}`}{" "}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "constructor",
    header: "Construtor",
    cell: ({ row }) => {
      const constructor = row.original;
      return (
        <div className="flex gap-x-2 items-center">
          <div>
            <CountryFlag nationality={constructor.constructorNationality} />
          </div>
          <span>{`${constructor.constructorName}`}</span>
        </div>
      );
    },
  },
];
