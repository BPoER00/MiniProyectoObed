import  express  from "express";
import  {router} from "./routes/routes.js";

const app = express();

app.use(express.json());

app.use('/api',router);


app.listen(3000)
console.log("Server runnin on port 3000")