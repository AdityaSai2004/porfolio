import Image from "next/image";
import Link from "next/link";
import React from "react";
import agrotis from "../public/assets/projects/agrotis.png";
import fitnut from "../public/assets/projects/fitnut.jpg";
import mood_music from "../public/assets/projects/mood-music.png";
import Linktree from "../public/assets/projects/linktree-clone.png";
import ProjectItem from "./ProjectItem.jsx";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#aff038]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Agrotis"
            backgroundImg={agrotis}
            projectUrl="https://youtu.be/bhFt-4c-_hI"
            tech="Flask"
          />
          <ProjectItem
            title="Fitnut"
            backgroundImg={fitnut}
            projectUrl="https://github.com/AdityaSai2004/FitNut-V2"
            tech="Kotlin"
          />
          <ProjectItem
            title="Mood Music"
            backgroundImg={mood_music}
            projectUrl="https://github.com/AdityaSai2004/mood_music"
            tech="Python"
            className="max-h-md	"
          />
          <ProjectItem
            title="Linktree Clone"
            backgroundImg={Linktree}
            projectUrl="https://github.com/AdityaSai2004/Linktree-clone"
            tech="HTML & CSS"
          />
        </div>
        <br />
        <div className="">
          <Link href="https://github.com/AdityaSai2004" className="mt-10px">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Click here to see more of my projects
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
