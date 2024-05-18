import { Route, Routes, useLocation } from "react-router-dom";
import { Tabs, Tab } from "@nextui-org/react";

function TabApps() {
  return (
    <div className="flex flex-col gap-2">
      <Tabs aria-label="Tabs">
        <Tab id="/" href="/" title="Home" />
        <Tab id="/photos" href="/photos" title="Photos" />
        <Tab id="/music" href="/music" title="Music" />
        <Tab id="/videos" href="/videos" title="Videos" />
      </Tabs>
    </div>
  );
}
