import express from 'express';
import { validateGeoJSON } from '../validate.js';
import appRoute from "./routes/app.route.js";
import convertRoutes from "./routes/conversion.routes.js"


const app = express();
const PORT = 3000;
app.use(express.json());

const router = express.Router();



// Routing
router.get("/api", appRoute);
router.get("/api/convert", convertRoutes);



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});





 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
