import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  PanelLeft,
  Calendar,
  Trophy,
  AudioWaveform,
  User,
  Users,
} from "lucide-react";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { GiCheckeredFlag } from "react-icons/gi";
import { IoConstructOutline } from "react-icons/io5";
import { SiArtifacthub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/theme-toggle";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center justify-start gap-4 px-2 sm:py-5">
        <Link
          to="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <SiArtifacthub className="h-5 w-5 transition-all group-hover:scale-110" />
          <span className="sr-only">F1 - Hub</span>
        </Link>
        <SidebarLink
          to="/season"
          icon={<GiCheckeredFlag className="h-[1.2rem] w-[1.2rem]"/>}
          text="Temporada"
        />
        <SidebarLink
          to="/ranking"
          icon={<Trophy className="h-[1.2rem] w-[1.2rem]" />}
          text="Ranking"
        />
        <SidebarLink
          to="/circuits"
          icon={<AudioWaveform className="h-[1.2rem] w-[1.2rem]"/>}
          text="Circuitos"
        />
        <SidebarLink
          to="/drivers"
          icon={<GiFullMotorcycleHelmet className="h-[1.2rem] w-[1.2rem]"/>}
          text="Pilotos"
        />
        <SidebarLink
          to="/constructors"
          icon={<IoConstructOutline className="h-[1.2rem] w-[1.2rem]" />}
          text="Construtores"
        />
      </nav>
      <div className="flex justify-center items-center h-16 mt-auto">
        <ModeToggle />
      </div>
    </aside>
  );
};



const SidebarLink = ({ to, icon, text }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            to={to}>
            <Button variant="ghost" size="icon">
              {icon}
            </Button>
            <span className="sr-only">{text}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <SiArtifacthub className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Home</span>
            </Link>
            <HeaderLink
              to="/season"
              icon={<Calendar className="h-[1.2rem] w-[1.2rem]" />}
              text="Season"
            />
            <HeaderLink
              to="/calendar"
              icon={<Calendar className="h-[1.2rem] w-[1.2rem]" />}
              text="Calendar"
            />
            <HeaderLink
              to="/ranking"
              icon={<Trophy className="h-[1.2rem] w-[1.2rem]" />}
              text="Ranking"
            />
            <HeaderLink
              to="/circuits"
              icon={<AudioWaveform className="h-[1.2rem] w-[1.2rem]" />}
              text="Circuits"
            />
            <HeaderLink
              to="/drivers"
              icon={<User className="h-[1.2rem] w-[1.2rem]" />}
              text="Drivers"
            />
            <HeaderLink
              to="/constructors"
              icon={<Users className="h-[1.2rem] w-[1.2rem]" />}
              text="Constructors"
            />
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

const HeaderLink = ({ to, icon, text }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}>
      {icon}
      {text}
    </Link>
  );
};

const MainLayout = ({ content }) => {
  return (
    <div className="flex min-h-screen w-full flex-col ">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-3 sm:pl-14">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:p-8 md:gap-8">
          {content}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
