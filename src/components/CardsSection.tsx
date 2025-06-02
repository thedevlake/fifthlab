function cards() {
  return (
    <div className="grid  gap-y-15  mt-10 p-10 bg-[linear-gradient(to_right,purple-100,white)]">
      {/*  */}
      <div className="flex items-center justify-center-safe gap-30">
        <div className="">
          <p className="w-[211px]  flex items-center justify-start text-[89.35px] leading-[147.43px] font-bold text-[#00b4d8]  text-shadow-gray-500 text-shadow-lg font-jarkata">
            90%
          </p>
          <span className="text-muted-foreground text-2xl">
            CUSTOMER SUCESS RATE
          </span>
        </div>
        <div>
          <p className="w-[211px]  flex items-center justify-start text-[89.35px] leading-[147.43px] font-bold text-[#00b4d8]  text-shadow-gray-500 text-shadow-lg">
            92%
          </p>
          <span className="text-muted-foreground text-2xl">ACTIVE USERS</span>
        </div>
        <div>
          <p className="w-[211px]  flex items-center justify-start text-[89.35px] leading-[147.43px] font-bold text-[#00b4d8]  text-shadow-gray-500 text-shadow-lg">
            5K+
          </p>
          <span className="text-muted-foreground text-2xl">
            ACTIVE USERS ACROSS ALL <br /> PLATFORMS
          </span>
        </div>
      </div>

      <div className="justify-center items-center flex flex-col gap-5">
        <p className="text-[#03045E] text-4xl font-semibold">
          Be more, Do More
        </p>
        <p className="text-[#596780]  text-sm ">
          This is just a randomly generated text to be included in a later{" "}
          <br />
          date based on a final draft to be decided by the content team
        </p>
      </div>

      {/* card section */}
      <div className="">
        <Cardsplace />
      </div>
    </div>
  );
}

export default cards;
const Cardsplace = () => {
  const details = [
    {
      img: "/src/images/key.png",
      title: "Unlock your business potential with fifthlab",
      description:
        "At Fifthlab, we've curated a suite of digital solutions to drive growth and efficiency in today's competitive landscape. From optimizing operations to enhancing customer engagement.",
    },
    {
      img: "/src/images/settings.png",
      title: "Tailored Solutions For Every Need",
      description:
        "At Fifthlab, we've curated a suite of digital solutions to drive growth and efficiency in today's competitive landscape. From optimizing operations to enhancing customer engagement.",
    },
    {
      img: "/src/images/key.png",
      title: "Tailored Solutions For Every Need.",
      description:
        "At Fifthlab, we've curated a suite of digital solutions to drive growth and efficiency in today's competitive landscape. From optimizing operations to enhancing customer engagement.",
    },
    {
      img: "/src/images/settings.png",
      title: "Unlock your business potential with fifthlab",
      description:
        "At Fifthlab, we've curated a suite of digital solutions to drive growth and efficiency in today's competitive landscape. From optimizing operations to enhancing customer engagement.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 px-6 md:px-20 overflow-hidden ">
      {details.map((item, index) => {
        // Determine column span per card
        let colSpanClass = "md:col-span-6";
        if (index === 0 || index === 3) {
          colSpanClass = "md:col-span-7";
        } else if (index === 1 || index === 2) {
          colSpanClass = "md:col-span-5";
        }

        return (
          <div
            key={index}
            className={`bg-white shadow-md rounded-xl  flex flex-col items-start justify-center gap-2 ${colSpanClass} px-3  md:h-[25rem]`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="size-24 mb-4 object-cover bg-[linear-gradient(to_right,_#EEF6FF,_#D0E6FF)] p-3 rounded-lg border border-[#3F76FF80] "
            />
            <h3 className="font-semibold text-[#1D1C20] mb-2  text-left text-2xl break-words w-10/12 place-self-start">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 text-left w-10/12 leading-loose">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
