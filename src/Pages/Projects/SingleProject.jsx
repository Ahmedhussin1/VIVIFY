import { useParams } from "react-router-dom";
import ProjectData from "./ProjectData";
function SingleProject() {
  const { id } = useParams();
  console.log(id);
  const project = ProjectData.find((p) => p.id === parseInt(id));
  console.log(project);
  if (!project) return <div>project not found</div>;
  return (
    <div className="flex flex-col justify-center items-center gap-[100px]">
      <h1 className="text-white text-4xl">{project.name}</h1>

      <div className="items-center w-[80%] flex justify-center">
        <img className="" src={project.mainImg} />
      </div>

      <p className="text-white">{project.longDesc}</p>
      <p className="text-white">{project.category}</p>
      <p className="text-white">{project.shortDesc}</p>
      {project.imgs.map((img, index) => (
        <img className="w-[70%]" key={index} src={img} />
      ))}
    </div>
  );
}

export default SingleProject;
