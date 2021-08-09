import express, {Request, Response} from "express";
import { router } from "./routes/loginRoutes";

const app = express();

// app.get("/", (req: Request, resp: Response) => {
//     resp.send(`
//     <div>
//         <h1>Hey there!</h1>
//     </div>
//     `);
// });
app.use(router);

app.listen(3000, () => {
    console.log("hello there")
})