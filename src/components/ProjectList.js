import Code from "./codes/code";
import earthquake from "../assets/earthquake.png.png"

// IMPORTANT: default export is an OBJECT (not a component)
const ProjectList = {
  "Data Pipelines": [
    {
      name: "Earthquake Data Pipeline",
       slug: "earthquake-data-pipeline",
      image: earthquake,
      medium: "https://medium.com/@cassandramzola/building-an-earthquake-data-pipeline-my-journey-57e55b10f778",
      dataset: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
      github: "https://github.com/CassandraMzola/PortfolioProjects/tree/main/Earthquake-Data-Pipeline",
      tags: ["Python", "ETL", "Data Pipeline", "BigQuery", "Jupyter Notebook", "API"],
      files: [
        {
          name: "README.md",
          type: "info",
          content: `The Earthquake Data Pipeline automatically collects live earthquake data 
from the USGS (United States Geological Survey) and stores it in Google BigQuery.
This enables real-time and historical analysis of earthquakes for research or data projects.`
        },
        {
          name: "earthquake.ipynb",
          type: "code",
          content: Code("Earthquake")["earthquake.ipynb"],
          language: "python"
        },
        {
          name: "earthquake.py",
          type: "code",
          content: Code("Earthquake")["earthquake.py"],
          language: "python"
        }
      ]
    }
  ]
};

export default ProjectList;


