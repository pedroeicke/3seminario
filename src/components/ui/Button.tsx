import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth = false, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-primary text-white hover:bg-blue-800 focus:ring-blue-500",
            secondary: "bg-secondary text-secondary-foreground hover:bg-slate-200 focus:ring-slate-500",
            outline: "border border-white/20 bg-transparent hover:bg-white/10 text-white",
            ghost: "bg-transparent hover:bg-white/10 text-white",
        };

        const sizes = {
            sm: "h-9 px-3 text-sm",
            md: "h-10 px-4 py-2",
            lg: "h-12 px-8 text-lg",
        };

        return (
            <button
                ref={ref}
                className={twMerge(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    fullWidth && "w-full",
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
