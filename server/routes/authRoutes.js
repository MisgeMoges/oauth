import express from "express";
const router = express.Router();
import { body } from "express-validator";
import { signUp, signIn} from "../controller/authController.js";

// Route for user signup
router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .trim()
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    body("firstName").notEmpty().withMessage("Please enter your first name"),
    body("lastName").notEmpty().withMessage("Please enter your last name"),
    body("PhoneNumber").notEmpty().withMessage("Please enter your phone number"),
  ],
  signUp
);

// Route for user login
router.post(
  "/signin",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .trim()
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  signIn
);

// // Route for refreshing access token
// router.get(
//   "/refresh-token",
//   verifyRefreshToken,
//   refreshToken
// );

// // Route for logging out user
// router.delete(
//   "/logout",
//   verifyAccessToken,
//   logout
// );

export default router;
