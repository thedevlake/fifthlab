import key from "../images/key.png";
import settings from "../images/settings.png";

function Cards() {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-white px-4 py-10 md:px-10 md:py-16 space-y-12 mt-10 sm:mt-20">
      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 text-center">
        {[
          { value: "90%", label: "CUSTOMER SUCCESS RATE" },
          { value: "92%", label: "ACTIVE USERS" },
          {
            value: "5K+",
            label: "ACTIVE USERS ACROSS ALL PLATFORMS",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full sm:w-40"
          >
            <p className="text-[#00b4d8] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {stat.value}
            </p>
            <span className="text-muted-foreground text-sm sm:text-base font-medium min-h-[3.5rem] flex items-center text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Heading */}
      <div className="text-center space-y-4">
        <p className="text-[#03045E] text-2xl sm:text-4xl font-semibold">
          Be more, Do More
        </p>
        <p className="text-[#596780] text-sm sm:text-base">
          This is just a randomly generated text to be included in a later{" "}
          <br className="hidden sm:block" />
          date based on a final draft to be decided by the content team.
        </p>
      </div>

      {/* Cards Section */}
      <CardsPlace />
    </div>
  );
}

export default Cards;

const CardsPlace = () => {
  const details = [
    {
      img: key,
      title: "Unlock your business potential with Fifthlab",
      description:
        "At Fifthlab, we've curated a suite of digital solutions to drive growth and efficiency in today's competitive landscape. From optimizing operations to enhancing customer engagement.",
    },
    {
      img: settings,
      title: "Tailored Solutions For Every Need",
      description:
        "At Fifthlab, we've curated a suite of digital solutions to drive growth and efficiency in today's competitive landscape. From optimizing operations to enhancing customer engagement.",
    },
    {
      img: key,
      title: "Tailored Solutions For Every Need.",
      description:
        "At Fifthlab, we've curated a suite of digital solutions to drive growth and efficiency in today's competitive landscape. From optimizing operations to enhancing customer engagement.",
    },
    {
      img: settings,
      title: "Unlock your business potential with Fifthlab",
      description:
        "At Fifthlab, we've curated a suite of digital solutions to drive growth and efficiency in today's competitive landscape. From optimizing operations to enhancing customer engagement.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-10">
      {details.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl flex flex-col items-start gap-4 p-4 sm:p-6 w-full"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain p-3 rounded-lg border border-[#3F76FF80] bg-gradient-to-r from-[#EEF6FF] to-[#D0E6FF]"
          />
          <h3 className="text-lg sm:text-2xl font-semibold text-[#1D1C20]">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
