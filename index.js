import Koa from "koa";
import { koaBody } from "koa-body";
import { port } from "./config/enviroment.js";
import { connectToDb } from "./config/connectToDb.js";
import loginRouter from "./routes/login.js";
import signupRouter from "./routes/signup.js";

const app = new Koa();

app.use(koaBody());
app.use(loginRouter.routes());
app.use(signupRouter.routes());

connectToDb()
  .then(() => {
    app.listen(port);
  })
  .catch((e) => console.error(e.message));
