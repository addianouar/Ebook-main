import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const luxuryButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-luxury-gold text-luxury-dark hover:bg-luxury-gold-muted shadow-luxury hover:shadow-elegant",
        secondary: "bg-luxury-dark-lighter text-luxury-light border border-luxury-gold/20 hover:border-luxury-gold/40 hover:bg-luxury-dark-lightest",
        ghost: "text-luxury-gold hover:bg-luxury-gold/10 hover:text-luxury-gold",
        outline: "border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark",
        hero: "bg-gradient-to-r from-luxury-gold to-luxury-gold-muted text-luxury-dark font-semibold shadow-luxury hover:shadow-elegant hover:scale-105 transform transition-all duration-300",
        paypal: "bg-[#0070ba] text-white hover:bg-[#005ea6] shadow-luxury",
        whatsapp: "bg-[#25d366] text-white hover:bg-[#20bd5a] shadow-luxury"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface LuxuryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof luxuryButtonVariants> {
  asChild?: boolean
}

const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(luxuryButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
LuxuryButton.displayName = "LuxuryButton"

export { LuxuryButton, luxuryButtonVariants }