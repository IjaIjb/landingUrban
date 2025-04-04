import { EyeIcon, EyeOffIcon } from "lucide-react";
import * as React from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Label } from "@radix-ui/react-label";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const FloatingPasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <Input
        type={type} // Use the passed type prop to toggle visibility
        placeholder=" "
        className={cn("peer", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
FloatingPasswordInput.displayName = "FloatingPasswordInput";

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        "peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-background px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
FloatingLabel.displayName = "FloatingLabel";

type PasswordVisibilityTogglerProps = {
  showPassword: boolean;
  toggleVisibility: () => void;
};

const PasswordVisibilityToggler: React.FC<PasswordVisibilityTogglerProps> = ({
  showPassword,
  toggleVisibility,
}) => {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="absolute cursor-pointer right-0 top-0 h-full px-3 py-2 text-gray-500 hover:bg-transparent"
      onClick={toggleVisibility}
    >
      {showPassword ? (
        <EyeIcon className="h-4 w-4" aria-hidden="true" tabIndex={-1} />
      ) : (
        <EyeOffIcon className="h-4 w-4" aria-hidden="true" tabIndex={-1} />
      )}
      <span className="sr-only">
        {showPassword ? "Hide password" : "Show password"}
      </span>
      {/* Hide browser password toggles */}
      <style>{`
        .hide-password-toggle::-ms-reveal,
        .hide-password-toggle::-ms-clear {
          visibility: hidden;
          pointer-events: none;
          display: none;
        }
      `}</style>
    </Button>
  );
};

const FloatingLabelPasswordInput = React.forwardRef<
  React.ElementRef<typeof FloatingPasswordInput>,
  React.PropsWithoutRef<InputProps & { label?: string }>
>(({ id, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative">
      <FloatingPasswordInput
        ref={ref}
        id={id}
        type={showPassword ? "text" : "password"} // Change input type based on visibility
        {...props}
      />
      {/* <FloatingLabel htmlFor={id}>{label}</FloatingLabel> */}
      <PasswordVisibilityToggler
        showPassword={showPassword}
        toggleVisibility={toggleVisibility}
      />
    </div>
  );
});
FloatingLabelPasswordInput.displayName = "FloatingLabelPasswordInput";

export { FloatingLabel, FloatingLabelPasswordInput, FloatingPasswordInput };
