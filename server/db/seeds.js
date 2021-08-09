use carbonData;

db.dropDatabase();

db.transport.insertMany([
    {
        "transport":"Train",
        "co2_grams_per_km":39.94
    },
    {
        "transport":"E car",
        "co2_grams_per_km":57.28
    },
    {
        "transport":"D car",
        "co2_grams_per_km":168.44
    },
    {
        "transport":"P car",
        "co2_grams_per_km":174.3
    },
    {
        "transport":"Coach",
        "co2_grams_per_km":27.32
    },
    {
        "transport":"Motorbike",
        "co2_grams_per_km":113.37
    }
])

db.diet.insertMany([
    {
        "diet":"Vegan",
        "co2_grams_per_day":2890
    },
    {
        "diet":"Vegetarian",
        "co2_grams_per_day":3810
    },
    {
        "diet":"Omnivore",
        "co2_grams_per_day":5630
    }
])