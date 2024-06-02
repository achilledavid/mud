import * as React from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Password = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = "password", ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false);
        const toggleShowPassword = () => setShowPassword(!showPassword);

        return (
            <div className="relative">
                <input
                    type={showPassword ? 'text' : type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {type === 'password' && (
                    <div className="absolute inset-y-0 right-0 px-3 flex items-center cursor-pointer" onClick={toggleShowPassword}>
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </div>
                )}
            </div>
        )
    }
)
Password.displayName = "Password"

export { Password }