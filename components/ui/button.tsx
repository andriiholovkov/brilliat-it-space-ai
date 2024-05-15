"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";
import { PolymorphicProps } from "@/global";

const buttonVariants = cva(
  "inline-flex w-fit items-center justify-center font-regular focus-visible:outline-none cursor-pointer" +
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none" +
    "p-0.5",
  {
    variants: {
      variant: {
        outline:
          "bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59] z-[1] relative borderGradient",
        ghost: "bg-none",
        link: "",
      },
      size: {
        sm: "px-6 py-4 text-xl max-h-[54px]",
        md: "px-12 py-6 font-medium text-2xl leading-[29px] max-h-[77px]",
      },
      rounded: {
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "outline",
      rounded: "full",
      size: "md",
    },
  },
);

type ButtonProps<T extends React.ElementType> = PolymorphicProps<T> & {
  animateOnInView?: boolean;
} & VariantProps<typeof buttonVariants>;

function Button<T extends React.ElementType = "button">({
  as,
  color,
  className,
  variant = "outline",
  size = "md",
  rounded,
  animateOnInView = true,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

Button.displayName = "Button";

export { Button, buttonVariants };
