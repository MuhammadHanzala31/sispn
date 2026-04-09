import React from 'react'
import ProjectCard from '../ProjectCard'

export default function Projects() {
  return (
    <section className='p-12 grid grid-cols-3 gap-4 project'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </section>
  )
}
