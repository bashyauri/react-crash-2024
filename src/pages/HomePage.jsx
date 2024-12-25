import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobsListing from "../components/JobsListing";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeCards />

      <JobsListing isHome={true} />

      <ViewAllJobs />
    </div>
  );
};

export default HomePage;
