import { HTMLProps } from "react";
import { TestProps } from "../types";

const computeButtonColors = (
  variant: ButtonVariants
): { backgroundColor: string; color: string } => {
  switch (variant) {
    case "standard":
      return {
        backgroundColor: "lightgrey",
        color: "black",
      };
    case "primary":
    default:
      return {
        backgroundColor: "blue",
        color: "white",
      };
  }
};

export type ButtonVariants = "primary" | "standard";

// expose base HTML props.  restrict to only necessary
type BaseButtonProps = Pick<
  HTMLProps<HTMLButtonElement>,
  "disabled" | "id" | "onClick" | "onBlur" | "onFocus"
>;
// do not export MUI specific props to allow easy switching to other frameworks
export type ButtonProps = BaseButtonProps &
  TestProps & {
    label: string;
    variant?: ButtonVariants;
  };
export const Button = (props: ButtonProps) => {
  const { label, variant = "standard", ...rest } = props;

  return (
    <button
      {...rest}
      data-component={"Button"}
      style={{
        border: "none",
        padding: "6px 16px",
        height: 40,
        borderRadius: "8px",
        ...computeButtonColors(variant),
        textTransform: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};
