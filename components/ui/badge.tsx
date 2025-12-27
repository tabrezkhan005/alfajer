import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium leading-none",
  {
    variants: {
      variant: {
        default: "border-gray-200 bg-white text-gray-700",
        success: "border-[#009746]/20 bg-[#009746]/10 text-[#009746]",
        accent: "border-[#AB1F22]/20 bg-[#AB1F22]/10 text-[#AB1F22]",
        neutral: "border-gray-200 bg-gray-50 text-gray-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
