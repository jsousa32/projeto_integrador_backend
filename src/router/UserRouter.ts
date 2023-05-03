import { Router } from "express";
import { userId } from "../middleware/UserMiddleware";
import { userSchema } from "../validators/UserValidator";
import { userController } from "../controller";

const userRouter = Router();

userRouter.get("/", userController.findAll);
userRouter.get("/:id", userId, userController.findOne);
userRouter.post("/", userSchema, userController.create);
userRouter.post("/:id", userController.restore);
userRouter.put("/:id", userId, userController.update);
userRouter.delete("/:id", userId, userController.delete);

export default userRouter;
