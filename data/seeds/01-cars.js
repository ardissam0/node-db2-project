
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: "ABC12345678910",
          Make: "Ford",
          Model: "Fiesta",
          Mileage: 88000,
          Transmission: "Automatic",
          Title: "Clean"
        },
        {
          VIN: "ABC12345678911",
          Make: "Chevorlet",
          Model: "Silverado",
          Mileage: 50000,
          Transmission: "Automatic",
          Title: "Clean"
        },
        {
          VIN: "ABC12345678912",
          Make: "Mercedes-Benz",
          Model: "G-Wagon",
          Mileage: 100000,
          Transmission: "Automatic",
          Title: "Clean"
        },
        {
          VIN: "ABC12345678913",
          Make: "GMC",
          Model: "Sierra",
          Mileage: 40000,
          Transmission: "Automatic",
          Title: "Clean"
        },
        {
          VIN: "ABC12345678920",
          Make: "Toyota",
          Model: "Camry",
          Mileage: 140000,
          Transmission: "Automatic",
          Title: "Clean"
        },
        {
          VIN: "ABC12345678921",
          Make: "Ford",
          Model: "Fusion",
          Mileage: 25000,
          Transmission: "Automatic",
          Title: "Clean"
        },

      ]);
    });
};
