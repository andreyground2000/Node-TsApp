import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Mr. nice guy");
});

export { router };