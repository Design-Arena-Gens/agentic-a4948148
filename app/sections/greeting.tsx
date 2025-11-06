'use client';

import { useEffect, useState } from "react";

function formatTime(date: Date) {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

export default function Greeting() {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="card hero">
      <h1 className="title">Hi there 👋</h1>
      <p className="subtitle">
        Welcome to your freshly generated Next.js project, deployed in minutes.
      </p>
      <div className="timebox">
        <span className="label">Current time</span>
        <span className="value">{time}</span>
      </div>
    </section>
  );
}
