import Router from "koa-router";
import login from "../controllers/login/login.js";

const loginRouter = new Router({ prefix: "/login" });

loginRouter.post("/", async (ctx) => {
  const { email, password } = ctx.request.body;

  const result = await login(email, password);

  if (!result.success) {
    ctx.status = 404;
    return;
  }

  ctx.body = "login realizado correctamente";
});

export default loginRouter;
