function ProjectList (props) {
    return (
        <div className="project-list">
            {props.projects.map((project, index) => (
                <img
                key={index}
                className="project-list__item"
                src={project.img}
                />
            ))}
        </div>
    )
}


export default ProjectList