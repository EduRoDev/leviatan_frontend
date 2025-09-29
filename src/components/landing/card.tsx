import type React from "react"

interface CardProps {
    children: React.ReactNode
    className?: string
    [key: string]: any
}

export const Card = ({ children, className = "", ...props }: CardProps) => (
    <div className={`rounded-lg border bg-white shadow-sm ${className}`} {...props}>
        {children}
    </div>
)

interface CardContentProps {
    children: React.ReactNode
    className?: string
    [key: string]: any
}

export const CardContent = ({ children, className = "", ...props }: CardContentProps) => (
    <div className={`p-6 ${className}`} {...props}>
        {children}
    </div>
)
