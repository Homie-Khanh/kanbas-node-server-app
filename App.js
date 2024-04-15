import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from './Kanbas/users/routes.js';
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from './Kanbas/modules/routes.js';

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express()
app.use(cors());
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app)
CourseRoutes(app)
Hello(app)
Lab5(app)
// app.listen(4000)
app.listen(process.env.PORT || 4000); // for Heroku