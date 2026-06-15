"use client";

import { useEffect, useState } from "react";

const BackgroundVideo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className="fixed inset-0 w-full h-full object-cover -z-10"
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
