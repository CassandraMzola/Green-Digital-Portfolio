const ProjectList = [
  {
    name: "Earthquake Data Pipeline",
    github: "https://github.com/CassandraMzola/PortfolioProjects/tree/main/Earthquake-Data-Pipeline",
    tags: ["Python", "ETL", "Data Analysis", "Visualization"],
    files: [
      {
        folder: "Scripts",
        items: [
          { name: "etl.py", type: "code", language: "python", content: "Extracts, transforms, and loads earthquake data." },
          { name: "data_cleaning.py", type: "code", language: "python", content: "Cleans and preprocesses the data." },
          { name: "data_visualization.py", type: "code", language: "python", content: "Generates visualizations from the data." }
        ]
      },
      {
        folder: "Documentation",
        items: [
          { name: "README.md", type: "info", content: "Project overview, setup instructions, and usage." }
        ]
      },
      {
        folder: "Data",
        items: [
          { name: "earthquake_data.csv", type: "data", content: "Sample dataset used in the pipeline." }
        ]
      }
    ]
  }
];

export default ProjectList;


