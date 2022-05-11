import React from "react";
import { useState } from "react";

export default function DarkMode() {
  const [settings, setSettings] = useState({
    title: "Content here",
    dark_theme: true,
  });
  const className = settings.dark_theme ? "dark" : "light";

  function handleToggleClick() {
    setSettings({
      ...settings,
      dark_theme: !settings.dark_theme,
    });
  }

  return (
    <div className={className}>
      <h3>{settings.title}</h3>
      <button className="btn" onClick={handleToggleClick}>
        Toggle Theme
      </button>
    </div>
  );
}
