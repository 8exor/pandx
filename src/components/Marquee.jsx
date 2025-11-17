const Marquee = () => {
  const icons = ["/assets/images/$pande.svg", "/assets/images/hash.svg"];
  const repeated = Array.from({ length: 20 }).flatMap(() => icons);
  return (
    <>
      <div className="bg-[#72A314]">
        <div className="overflow-hidden shadow-marquee whitespace-nowrap py-4 w-full bg-[#5B5BAC] rotate-[-2deg]">
          <div className="marquee flex gap-10">
            {repeated.map((src, i) => (
              <img key={i} src={src} alt="$panda"  />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Marquee;
