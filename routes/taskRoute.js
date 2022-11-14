const express = require("express")
const { createTask, getAllTasks, getSingleTask, deleteTask, updateTask } = require("../controllers/taskController.js")
const router = express.Router()

router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getSingleTask).put(updateTask).delete(deleteTask)

// router.post("/", createTask)
// router.get("/", getAllTasks)
// router.get("/:id", getSingleTask)
// router.delete("/:id", deleteTask)
// router.put("/:id", updateTask)

module.exports = router