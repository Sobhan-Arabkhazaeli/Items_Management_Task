import * as Yup from "yup";

export const productSchema = Yup.object({
  id: Yup.string().optional(),
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(120, "Title must be less than 120 characters"),
  subtitle: Yup.string()
    .required("Subtitle is required")
    .min(10, "Subtitle must be at least 10 characters")
    .max(420, "Subtitle must be less than 420 characters")
    .test(
      "subtitle-longer-than-title",
      "Subtitle must be longer than the title",
      function (subtitle) {
        const { title } = this.parent;
        if (!subtitle || !title) return true;
        return subtitle.length > title.length;
      }
    ),
  dateCreated: Yup.string().optional(),
});

export type TProductForm = Yup.InferType<typeof productSchema>;
