import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { IoConstructOutline } from "react-icons/io5";

import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { getCurrentDate } from "@/utils/functions/functions";

import { ArrowUpDown } from "lucide-react";

interface Race {
  round: string,
  raceName: string,
  circuitName: string,
  circuitUrl: string,
  date: string,
  qualifyingDate: string,
  qualifyingTime: string,
}

export const columns: ColumnDef<Race>[] = [
  {
    accessorKey: "round",
    header: "#",
    cell: ({ row }) => {
      const round = row.original.round;
      return (
        <div className="flex flex-col">
          <span>{round}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "circuitName",
    header: "Circuito",
    cell: ({ row }) => {
      const circuit = row.original;
      return (
        <div className="flex flex-col">
          <span>{circuit.circuitName}</span>
          <Link to={row.original.circuitUrl} target="_blank">
            <span className="hover:underline text-blue-500">
              {row.original.raceName}
            </span>
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "qualifying",
    header: "Qualificação",
    cell: ({ row }) => {
      const qualifying = row.original;
      return (
        <div className="flex flex-col">
          <span>{qualifying.qualifyingDate}</span>
          <span>{qualifying.qualifyingTime}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.original.date;
      return (
        <div>
          <span>{date}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "results",
    header: "Resultados",
    cell: ({ row }) => {
      const currentDate = getCurrentDate(); 

      const isDisabled = currentDate < row.original.date;

      const navigate = useNavigate();

      return (
        <div className="flex gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" disabled={isDisabled} onClick={() => navigate(`/season/drivers/2024/${row.original.round}`)}>
                  <GiFullMotorcycleHelmet className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Pilotos</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" disabled={isDisabled}>
                  <IoConstructOutline className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Construtores</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
  },
];
