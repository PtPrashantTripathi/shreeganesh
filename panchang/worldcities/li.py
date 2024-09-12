import pandas as pd, json

# Read the CSV file into a Pandas DataFrame
df = pd.read_csv("worldcities/worldcities.csv")

# Update city column based on city_ascii
df["city"] = df.apply(
    lambda x: f'{x["city"]}, {x["country"]}'
    if x["city"] == x["city_ascii"]
    else f'{x["city_ascii"]} ({x["city"]}), {x["country"]}',
    axis=1,
)

# Create new column containing list of lat and lng values
df["lat_lon"] = list(zip(df["lat"], df["lng"]))

output_dict = df[["city", "lat_lon"]].to_dict(orient="list")

# Save the dictionary to a JSON file
with open("worldcities/worldcities.json", "w", encoding="utf-8") as j:
    json.dump(output_dict, j, ensure_ascii=False)
