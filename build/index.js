"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var app = express_1.default();
// app.get("/", (req: Request, resp: Response) => {
//     resp.send(`
//     <div>
//         <h1>Hey there!</h1>
//     </div>
//     `);
// });
app.use(loginRoutes_1.router);
app.listen(3000, function () {
    console.log("hello there");
});
