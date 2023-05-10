import Router from "koa-router";
import signup from "../controllers/login/signup.js";

const signupRouter = new Router({ prefix: "/signup" });

signupRouter.post("/", async (ctx) => {
  const { email, password } = ctx.request.body;

  const result = await signup(email, password);

  if (!result.success) {
    ctx.status = 404;
    return;
  }

  ctx.body = "signup realizado correctamente";
});

export default signupRouter;
