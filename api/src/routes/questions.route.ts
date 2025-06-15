import { Router } from "express";
import questionsController from "../controllers/questions.controller.ts";
import { authenticateSession } from "../middleware/session.middleware.ts";
const router: Router = Router();

router.get("/get", authenticateSession, questionsController.getRandomQuestions)
router.get("/get-multiple", authenticateSession, questionsController.getMultipleQuestions)

export default router;