import { z } from "zod";

export const emailSchema = z.email("Niepoprawny format e-mail");
