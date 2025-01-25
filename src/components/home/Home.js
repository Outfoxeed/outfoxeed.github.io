import React from 'react';
import HeroSection from './HeroSection';
import ProjectBanners from '../projects/banners/ProjectBanners';

function Home({ projectsData }) {
  return (
    <>
      <HeroSection />
      <ProjectBanners projects={[
        projectsData.justdance, 
        projectsData.dyingsun,
        projectsData.kanpeki
        ]} /> 
    </>
  );
}

export default Home;
