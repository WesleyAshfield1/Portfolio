import React from 'react';
import Card from 'react-bootstrap/Card';

function Projects({ projects }) {
     return (
        <>
            {projects.map((project, i) => (
                <Card key={i} className="bg-dark text-white" style={{ display: 'flex', flexDirection: 'row' }}>
                    <Card.Img variant='top' style={{ height: '300px', width: '533px' }} src={project.imageUrl} alt={project.title} />
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.resources}</Card.Text>
                        <Card.Text>{project.description}</Card.Text>
                        <Card.Text>{project.githubURI}</Card.Text>                   
                        {/* make the githuburi a link */}
                    </Card.Body>
                </Card>
            ))}
        </>
    )


}

export default Projects;

