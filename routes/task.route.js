const express = require("express");
const router = express.Router();

const task_controller = require("../controllers/task.controller");

router.get("/", task_controller.tasks_details);
router.post("/task", task_controller.task_create);
router.get("/task/:id", task_controller.task_details);
router.put("/task/:id", task_controller.task_update);
router.delete("/task/:id", task_controller.task_delete);

module.exports = router;
