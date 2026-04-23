import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <iframe
      src="/about.html"
      style={{ width: "100%", height: "100vh", border: "none" }}
      title="About Eric Carney | Happy Detour Travel"
    />
  );
}
