
import { Button as ShadcnButton } from "@/components/ui/button";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// Extendemos el componente Button de shadcn para agregar nuestras propias clases
const Button = forwardRef<
  React.ElementRef<typeof ShadcnButton>,
  React.ComponentPropsWithoutRef<typeof ShadcnButton>
>(({ className, children, ...props }, ref) => (
  <ShadcnButton className={cn(className)} ref={ref} {...props}>
    {children}
  </ShadcnButton>
));
Button.displayName = "Button";

export { Button };
