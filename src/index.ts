import experss from "express";

import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
// routers
import projectRoute from "./routes/project.route";
import taskRoute from "./routes/task.route";
import searchRoute from "./routes/search.route";
import teamRoute from "./routes/team.route";
import userRoute from "./routes/user.route";

dotenv.config();

const app = experss();

// cogfig
app.use(experss.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//  ROUTES
app.get("/", (req, res) => {
  res.send("This is home route \n");
});

app.use("/projects", projectRoute);
app.use("/tasks", taskRoute);
app.use("/search", searchRoute);
app.use("/teams", teamRoute);
app.use("/users", userRoute);

// SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port:", port, "\n");
});
