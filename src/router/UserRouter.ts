import { Router } from "express";
import { UserController } from "../controller/UserController";
import { userFields, userId } from "../middleware/UserMiddleware";
import { userSchema } from "../validators/UserValidator";

const userController = new UserController();
const userRouter = Router();

userRouter.get("/", userController.findAll);
userRouter.get("/:id", userId, userController.findOne);
userRouter.post("/", userSchema, userFields, userController.create);
userRouter.post("/:id", userController.restore);
userRouter.put("/:id", userId, userFields, userController.update);
userRouter.delete("/:id", userId, userController.delete);

export default userRouter;
