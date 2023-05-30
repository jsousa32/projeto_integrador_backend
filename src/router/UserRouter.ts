import { Router } from "express";
import { userId } from "../middleware/UserMiddleware";
import { userSchema } from "../validators/UserValidator";
import { userController } from "../controller";
import { checkToken } from "../middleware/AuthMiddleware";

const userRouter = Router();

userRouter.get("/", checkToken, userController.findAll);
userRouter.get("/:id", checkToken, userId, userController.findOne);
userRouter.post("/", userSchema, userController.create);
userRouter.post("/:id", userController.restore);
userRouter.put("/:id", checkToken, userId, userController.update);
userRouter.delete("/:id", checkToken, userId, userController.delete);

export default userRouter;
