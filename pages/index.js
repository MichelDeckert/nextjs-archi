import { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from '../components/index/Hero';
import About from '../components/index/About';
import Goals from '../components/index/Goals';
import Projects from '../components/index/Projects';
import Form from '../components/index/Form';

export default function Home({ projects }) {
  const [showcasedProjects, setShowcasedProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);

  useEffect(() => {
    setShowcasedProjects(projects.filter(project => project.showcased));
    setOtherProjects(projects.filter(project => !project.showcased));
  }, [projects]);

  return (
    <>
      <Head>
        <title>Digital Project</title>
      </Head>
      <Hero projects={showcasedProjects} />
      <About />
      <Goals />
      <Projects projects={otherProjects} />
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
