import { z } from "zod";

export const promptSchema = z.object({
  title: z.string().min(3, "Tiêu đề phải từ 3 ký tự"),
  content: z.string().min(10, "Nội dung phải từ 10 ký tự"),
  tags: z.array(z.string()).min(1, "Phải có ít nhất một thẻ"),
});

export type PromptSchema = z.infer<typeof promptSchema>;
