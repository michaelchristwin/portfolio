import PFP from "../assets/031afa9849249d84d16414025b4ad279624a2459.jpeg";
function Hero() {
  return (
    <div className={`flex w-full justify-center h-[100vh] items-center`}>
      <div
        className={`h-fit flex w-[60%] px-[20px] justify-between items-center`}
      >
        <div className={`w-[330px]`}>
          <p className={`text-[80px] font-[900]`}>
            Hello, I'm Michael Christwin
          </p>
        </div>
        <img
          src={PFP}
          alt="image"
          className={`h-[500px] w-[400px] rounded-[10px]`}
        />
      </div>
    </div>
  );
}
export default Hero;
