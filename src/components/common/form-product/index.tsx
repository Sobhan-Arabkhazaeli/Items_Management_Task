import { Button } from "@heroui/react";
import { Form, Field, ErrorMessage } from "formik";
import type { FC } from "react";
import { CiCirclePlus } from "react-icons/ci";

interface IFormProduct {
  variant: boolean;
}

const FormProduct: FC<IFormProduct> = ({ variant }) => {
  return (
    <Form className="flex flex-col gap-4 w-full max-w-md">
      {/* --- Title --- */}
      <div className="flex flex-col">
        <label htmlFor="title" className="text-text font-medium">
          Title
        </label>
        <Field
          as="textarea"
          id="title"
          name="title"
          maxLength={120}
          rows={2}
          className="chip-primary resize-none overflow-hidden p-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
        <ErrorMessage
          name="title"
          component="p"
          className="text-danger text-xs mt-1"
        />
      </div>

      {/* --- Subtitle --- */}
      <div className="flex flex-col">
        <label htmlFor="subtitle" className="text-text font-medium">
          Subtitle
        </label>
        <Field
          as="textarea"
          id="subtitle"
          name="subtitle"
          maxLength={300}
          rows={5}
          className="chip-primary resize-none overflow-hidden p-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
        <ErrorMessage
          name="subtitle"
          component="p"
          className="text-danger text-xs mt-1"
        />
      </div>

      <Button
        type="submit"
        className="group transition-all duration-300 transform hover:scale-105 bg-primary flex items-center justify-center gap-2"
        startContent={
          <CiCirclePlus
            size={24}
            className="text-white group-hover:rotate-90 transition-transform duration-300"
          />
        }
        variant="solid"
        size="md"
        radius="lg"
      >
        <span className="font-semibold text-white drop-shadow-sm">
          {variant ? "Edit Product" : "Create Product"}
        </span>
      </Button>
    </Form>
  );
};

export default FormProduct;
