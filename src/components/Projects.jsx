import { motion } from "framer-motion";
import hero from "../../src/hero.png";
import img1 from "../../src/img1.png";
import img2 from "../../src/img2.png";
import img3 from "../../src/img3.png";
import img4 from "../../src/img4.png";

const PROJECTS = [
  {
    id: 1,
    img: hero,
  },
  {
    id: 2,
    img: img1,
  },
  {
    id: 3,
    img: img2,
  },
  {
    id: 4,
    img: img3,
  },
  {
    id: 5,
    img: img4,
  },
];

const Projects = () => {
  return (
    <section className="px-6 py-10">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight">Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((item) => {
          <div key={item.id}>
            <img
              src={item.img}
              alt={`project ${item.id}`}
              className="w-full h-auto border border-red-500"
            />
          </div>;
        })}
      </div>
    </section>
  );
};

export default Projects;
