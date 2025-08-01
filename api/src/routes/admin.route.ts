import { Router } from "express"
import { authenticateAdminSession } from "../middleware/session.middleware.ts";
import adminController from "../controllers/admin.controller.ts";

const router: Router = Router();

router.post("/create-question", authenticateAdminSession, adminController.createQuestion)
router.delete("/delete-question", authenticateAdminSession, adminController.deleteQuestion)
router.get("/get-session", adminController.getInfoSession)

export default router;