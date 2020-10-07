export seed = function(knex, Promise) {
    return knex('cars').insert([
        {
            "vin": "J23F42345GG4987FV",
            "make": "Subaru",
            "model": "Impreza",
            "mileage": "23023.34",
            "transmission": "Manual",
            "title": "Clean"
        }
    ])
}