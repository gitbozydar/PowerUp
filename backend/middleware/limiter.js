import rateLimit from "express-rate-limit";

export const contactLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 1,

  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: "Za dużo wiadomości. Spróbuj ponownie za chwilę.",
  },
});
