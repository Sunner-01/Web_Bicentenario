import * as React from "react"
import { cn } from "@/lib/utils"

// Card
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { style?: React.CSSProperties }
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    style={style}
    {...props}
  />
))
Card.displayName = "Card"

// CardHeader
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { style?: React.CSSProperties }
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    style={style}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

// CardTitle
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { style?: React.CSSProperties }
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    style={style}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

// CardDescription
const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { style?: React.CSSProperties }
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    style={style}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

// CardContent
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { style?: React.CSSProperties }
>(({ className, style, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} style={style} {...props} />
))
CardContent.displayName = "CardContent"

// CardFooter
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { style?: React.CSSProperties }
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    style={style}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
