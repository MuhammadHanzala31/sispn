export default function VideoBg() {
  return (
    <div className="w-screen absolute left-0 justify-center top-0 -z-1 items-center flex h-[800px]">
      <video
        autoPlay
        muted   
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dvcfuwk8i/video/upload/v1776793699/hero-bg_jj0uzu.mp4" type="video/mp4" />
      </video>
    </div>
  );
}