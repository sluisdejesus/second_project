use users;
db.dropDatabase();

db.userInfo.insertMany([
    {
      "Name":"Jeremy Clarkson",
      "Diet":"Omnivore",
      "Transport":"Car"
    },
    {
        "Name":"Moby",
        "Diet":"Vegan",
        "Transport":"Bike"
    }
])