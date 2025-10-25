import Image from "next/image";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <div className="bg-transparent">
      <div className="mx-0 mt-0 mb-6 h-48 overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-0">
        <a
          href="#"
          className="text-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        </a>
        <p className="mb-6 font-normal text-gray-500">{desc}</p>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded text-sm">
          see details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
