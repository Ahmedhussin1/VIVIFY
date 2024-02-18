import { useParams } from "react-router-dom";
import ProjectData from "./ProjectData";
function SingleProject() {
  const { id } = useParams();
  console.log(id);
  const project = ProjectData.find((p) => p.id === parseInt(id));
  console.log(project);
  if (!project) return <div>project not found</div>;
  return (
    <div>
      <img src={project.mainImg} />
      <h1 className="text-white">{project.name}</h1>
      <p className="text-white">{project.longDesc}</p>
      <p className="text-white">{project.category}</p>
      <p className="text-white">{project.shortDesc}</p>
      <img src={project.mainImg} />
      {project.imgs.map((img, index) => (
        <img key={index} src={img} />
      ))}
    </div>
  );
}

export default SingleProject;
