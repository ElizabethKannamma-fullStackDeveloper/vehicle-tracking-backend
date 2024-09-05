const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let vehiclePosition = { lat: 37.7749, lng: -122.4194 }; // Initial position (San Francisco)
let route = [{ lat: 37.7749, lng: -122.4194 }]; // Route array

// Function to update vehicle position randomly (simulate movement)
const updateVehiclePosition = () => {
    const deltaLat = (Math.random() - 0.5) / 100;
    const deltaLng = (Math.random() - 0.5) / 100;
    vehiclePosition.lat += deltaLat;
    vehiclePosition.lng += deltaLng;
    route.push({ ...vehiclePosition });
};

setInterval(updateVehiclePosition, 3000); // Update every 3 seconds

// API endpoint to get the current vehicle position and route
app.get('/vehicle-data', (req, res) => {
    res.json({
        position: vehiclePosition,
        route: route,
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
