import { motion } from "framer-motion";
import raghul from "@/assets/team/t1.jpg";
import hari from "@/assets/team/t2.jpeg";
import siva from "@/assets/team/t3.jpeg";
import dhanush from "@/assets/team/t4.jpeg";
import ezhil from "@/assets/team/t5.jpeg";
import fasulu from "@/assets/team/t6.jpeg";


const teamMembers = [
  { img: raghul, name: "Raghul" },
  { img: hari, name: "Hari Haran" },
  { img: siva, name: "Siva" },
  { img: dhanush, name: "Dhanush" },
  { img: ezhil, name: "Ezhil" },
  { img: fasulu, name: "Fasulu Rahman" },
];

const TeamSection = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">

      {/* 🔵 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0284C7]/10 via-transparent to-[#0284C7]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 text-xs rounded-full border border-[#0284C7]/30 text-[#0284C7] bg-[#0284C7]/10 mb-4">
            Our Team
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">
            Growing with Trusted{" "}
            <span className="text-[#0284C7]">
              Drone Partners
            </span>
          </h2>

          <p className="text-white/60 text-sm sm:text-base">
            A dedicated aerial crew, coordinated for each project across Telangana and Andhra Pradesh.
          </p>
        </div>

        {/* 🧑‍🚀 SCROLLING TEAM */}
        <div className="relative overflow-hidden">

          <div className="flex w-max animate-marquee items-center">

            {/* First set */}
            {teamMembers.map((member, i) => (
              <div
                key={`first-${i}`}
                className="mx-4 sm:mx-6 lg:mx-8 flex-shrink-0 text-center group"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#0284C7] transition duration-300">

                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Blue glow hover */}
                  <div className="absolute inset-0 bg-[#0284C7]/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                <p className="mt-3 text-white text-sm sm:text-base font-medium group-hover:text-[#0284C7] transition">
                  {member.name}
                </p>
              </div>
            ))}

            {/* Duplicate set for infinite loop */}
            {teamMembers.map((member, i) => (
              <div
                key={`second-${i}`}
                className="mx-4 sm:mx-6 lg:mx-8 flex-shrink-0 text-center group"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#0284C7] transition duration-300">

                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-[#0284C7]/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                <p className="mt-3 text-white text-sm sm:text-base font-medium group-hover:text-[#0284C7] transition">
                  {member.name}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;