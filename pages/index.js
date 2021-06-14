import { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from '../components/index/Hero';
import About from '../components/index/About';
import Goals from '../components/index/Goals';
import Projects from '../components/index/Projects';
import Form from '../components/index/Form';

export default function Home({ projects }) {
  const [heroProjects, setHeroProjects] = useState([]);
  const [projectsProjects, setProjectsProjects] = useState([]);

  useEffect(() => {
    setHeroProjects(projects.filter(project => project.showcased === 'HERO'));
    setProjectsProjects(
      projects.filter(project => project.showcased === 'PROJECTS')
    );
  }, [projects]);

  return (
    <>
      <Head>
        <title>Digital Project</title>
      </Head>
      <Hero projects={heroProjects} />
      <About />
      <Goals />
      <Projects projects={projectsProjects.slice(0, 5)} />
      <Form />
    </>
  );
}

export async function getStaticProps() {
  const data = await import('./api/db.json');

  return {
    props: {
      projects: data.projects
    }
  };
}
