const DiscussionController = require("../controllers/discussion.controller")

module.exports = (app) => {
    app.get("/api/discussion", DiscussionController.findAllPosts)
    app.post("/api/discussion", DiscussionController.createPost)
    app.get("/api/discussion/:id", DiscussionController.findPost)
    app.put("/api/discussion/:id", DiscussionController.editPost)
    app.delete("/api/discussion/:id", DiscussionController.deletePost)
}