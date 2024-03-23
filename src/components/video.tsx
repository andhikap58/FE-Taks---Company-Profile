export default function Video() {
  return (
    <div>
      <div className="w-sreen h-auto md:flex md:w-screen md:h-[600px]">
        <video className="w-full h-auto object-cover" controls={false} loop={true} muted={true} autoPlay={true}>
          <source src={"Videos/VideoAbout.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
