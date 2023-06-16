"use client";
export default function HistoryPage() {
  const storedData = localStorage.getItem("myData");
  return (
    <h1>This is the history page test: {localStorage.getItem("myData")}</h1>
  );
}
