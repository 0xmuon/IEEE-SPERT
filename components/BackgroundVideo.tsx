"use client"

export function BackgroundVideo() {
  return (
    <>
      {/* Fullscreen background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-20"
        src="/images/Video.mp4"
      />

      {/* Optional overlay for readability */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] -z-10" />
    </>
  )
}
