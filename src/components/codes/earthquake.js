const earthquake = {
  "earthquake.ipynb": `Open In Colab

from google.colab import auth
auth.authenticate_user()

!pip install --upgrade google-cloud-bigquery

from google.cloud import bigquery
import requests
import pandas as pd

# Pull JSON data from USGS
url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
response = requests.get(url)
data = response.json()

# Flatten JSON
earthquakes = pd.json_normalize(data['features'])

# Keep important columns
earthquakes = earthquakes[['properties.time','properties.place','properties.mag','geometry.coordinates']]
earthquakes[['longitude','latitude','depth']] = pd.DataFrame(
    earthquakes['geometry.coordinates'].tolist(), index=earthquakes.index
)
earthquakes.drop(columns=['geometry.coordinates'], inplace=True)
earthquakes.rename(columns={
    'properties.time': 'time',
    'properties.place': 'place',
    'properties.mag': 'magnitude'
}, inplace=True)
earthquakes['time'] = pd.to_datetime(earthquakes['time'], unit='ms')

print(earthquakes.head())

from pandas_gbq import to_gbq
dataset_id = 'earthquake_dataset'
table_id = 'earthquakes'
to_gbq(dataframe=earthquakes, destination_table=f"{dataset_id}.{table_id}",
       project_id='earthquake-project-469810', if_exists='append')

print("Upload complete!")
`,

  "earthquake.py": `import requests
import pandas as pd
from google.cloud import bigquery
from pandas_gbq import to_gbq

client = bigquery.Client(project="earthquake-project-469810")

url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
response = requests.get(url)
data = response.json()

earthquakes = pd.json_normalize(data['features'])
earthquakes = earthquakes[['properties.time','properties.place','properties.mag','geometry.coordinates']]
earthquakes[['longitude','latitude','depth']] = pd.DataFrame(
    earthquakes['geometry.coordinates'].tolist(), index=earthquakes.index
)
earthquakes.drop(columns=['geometry.coordinates'], inplace=True)
earthquakes.rename(columns={
    'properties.time': 'time',
    'properties.place': 'place',
    'properties.mag': 'magnitude'
}, inplace=True)
earthquakes['time'] = pd.to_datetime(earthquakes['time'], unit='ms')

print(earthquakes.head())

dataset_id = "earthquake_dataset"
table_id = "earthquakes"
to_gbq(dataframe=earthquakes, destination_table=f"{dataset_id}.{table_id}",
       project_id="earthquake-project-469810", if_exists="append")

print("Upload complete!")
`
};

export default earthquake;
