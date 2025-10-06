import React, { forwardRef } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPytorch } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import GlareHover from "../GlareHover/GlareHover";
import { FaLinux } from "react-icons/fa6";
import { SiGnubash } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="max-w-[1240px] mx-auto">
      {/* heading  */}
      <div className="">
        <div className="w-fit mx-auto py-[6px] px-[20px] flex items-center justify-center bg-[#282732] gap-2 rounded-[16px]">
          <div>
            <FaHandsHelping />
          </div>
          <h3>What I Bring to the Table</h3>
        </div>
        <h1 className="text-[30px] md:text-[48px] text-center font-bold">
          My Key Skills
        </h1>
      </div>
      {/* cards  */}
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="elastic.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 justify-center gap-2 mt-[30px]">
          {/* card */}

          {/* html5 */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            width="100%"
            height="auto"
            background="#1C1C21"
            borderRadius="200px"
            className="hover:bg-[#2D3240] flex flex-col items-center justify-center p-6 md:p-10"
          >
            <FaHtml5 color="#E34F26" className="text-[40px] md:text-[130px]" />
            <h1 className="text-sm md:text-lg lg:text-2xl text-center">
              HTML5
            </h1>
          </GlareHover>

          {/* linux */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            width="100%"
            height="auto"
            background="#1C1C21"
            borderRadius="200px"
            className="hover:bg-[#2D3240] flex flex-col items-center justify-center p-6 md:p-10"
          >
            <FaLinux  color="white" className="text-[40px] md:text-[130px]" />
            <h1 className="text-sm md:text-lg lg:text-2xl text-center">
              LINUX
            </h1>
          </GlareHover>
          
          {/* JavaScript */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            width="100%"
            height="auto"
            background="#1C1C21"
            borderRadius="200px"
            className="hover:bg-[#2D3240] flex flex-col items-center justify-center p-6 md:p-10"
          >
            <IoLogoJavascript
              color="#F7DF1E"
              className="text-[40px] md:text-[130px]"
            />
            <h1 className="text-sm md:text-lg lg:text-2xl text-center">
              JavaScript
            </h1>
          </GlareHover>
          {/* React */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            width="100%"
            height="auto"
            background="#1C1C21"
            borderRadius="200px"
            className="hover:bg-[#2D3240] flex flex-col items-center justify-center p-6 md:p-10"
          >
            <SiGnubash color="#61dafb" className="text-[40px] md:text-[130px]" />
            <h1 className="text-sm md:text-lg lg:text-2xl text-center">
              CI/CD, Bash Scripting
            </h1>
          </GlareHover>
          {/* Git / Project Management */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            width="100%"
            height="auto"
            background="#1C1C21"
            borderRadius="200px"
            className="hover:bg-[#2D3240] flex flex-col items-center justify-center p-6 md:p-10"
          >
            <FaGitAlt color="#F97316" className="text-[40px] md:text-[130px]" />
            <h1 className="text-sm md:text-lg lg:text-2xl text-center">
              Project Management
            </h1>
          </GlareHover>
          {/* PyTorch */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            width="100%"
            height="auto"
            background="#1C1C21"
            borderRadius="200px"
            className="hover:bg-[#2D3240] flex flex-col items-center justify-center p-6 md:p-10"
          >
            <SiPytorch
              color="#EE4C2C"
              className="text-[40px] md:text-[130px]"
            />
            <h1 className="text-sm md:text-lg lg:text-2xl text-center">
              PyTorch
            </h1>
          </GlareHover>
          {/* NumPy */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            width="100%"
            height="auto"
            background="#1C1C21"
            borderRadius="200px"
            className="hover:bg-[#2D3240] flex flex-col items-center justify-center p-6 md:p-10"
          >
            <SiNumpy color="#013243" className="text-[40px] md:text-[130px]" />
            <h1 className="text-sm md:text-lg lg:text-2xl text-center">
              NumPy
            </h1>
          </GlareHover>
          {/* NumPy */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            width="100%"
            height="auto"
            background="#1C1C21"
            borderRadius="200px"
            className="hover:bg-[#2D3240] flex flex-col items-center justify-center p-6 md:p-10"
          >
            <FaDocker color="#1D63ED" className="text-[40px] md:text-[130px]" />
            <h1 className="text-sm md:text-lg lg:text-2xl text-center">
              Docker
            </h1>
          </GlareHover>
          {/* NumPy */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            width="100%"
            height="auto"
            background="#1C1C21"
            borderRadius="200px"
            className="hover:bg-[#2D3240] flex flex-col items-center justify-center p-6 md:p-10"
          >
            <SiKubernetes color="white" className="text-[40px] md:text-[130px]" />
            <h1 className="text-sm md:text-lg lg:text-2xl text-center">
              Kubernet
            </h1>
          </GlareHover>
          {/* NumPy */}
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            width="100%"
            height="auto"
            background="#1C1C21"
            borderRadius="200px"
            className="hover:bg-[#2D3240] flex flex-col items-center justify-center p-6 md:p-10"
          >
            <FaAws color="FF9900" className="text-[40px] md:text-[130px]" />
            <h1 className="text-sm md:text-lg lg:text-2xl text-center">
              AWS
            </h1>
          </GlareHover>
        </div>
      </AnimatedContent>
    </div>
  );
});

Skills.displayName = "Skills";

export default Skills;
