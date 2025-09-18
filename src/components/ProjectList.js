import Code from "./codes/code";
import earthquake from "../assets/earthquake.png.png";
import analysis from "../assets/earthquake_map.png";
import depthVsMagnitude from "../assets/visuals/depth_vs_magnitude.png";
import earthquakesPerDay from "../assets/visuals/earthquakes_per_day.png";
import magnitudeCategories from "../assets/visuals/magnitude_categories.png";
import magnitudeDistribution from "../assets/visuals/magnitude_distribution.png";

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
from the USGS and stores it in Google BigQuery, enabling real-time and historical analysis.`
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
        },
      ],
    },
  ],

  "Earthquakes": [
    {
      name: "Earthquake Analysis",
      image: analysis,
      github: "https://github.com/CassandraMzola/PortfolioProjects/tree/main/EarthquakeAnalysis",
      tags: ["Python", "Pandas", "Matplotlib", "Geospatial Analysis"],
      dataset: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv",
      files: [
        {
          name: "README.md",
          type: "info",
          content: "Analyzed earthquake data to visualize magnitude distribution, top affected regions, earthquakes per day, depth vs magnitude, and geospatial mapping using Python libraries like Pandas and Matplotlib."
        },
        {
          name: "earthquake_analysis.ipynb",
          type: "notebook",
          content: "https://nbviewer.org/github/CassandraMzola/PortfolioProjects/blob/main/EarthquakeAnalysis/earthquake_analysis.ipynb?flush_cache=true",
          language: "python"
        },
      ],
    },
  ],
};

export default ProjectList;
