import * as React from "react";
import { cn } from "@/lib/utils";

export function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

export function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul className={cn("flex items-center gap-1", className)} {...props} />;
}

export function PaginationItem({ className, ...props }: React.ComponentProps<"li">) {
  return <li className={className} {...props} />;
}

export function PaginationLink({ isActive, className, ...props }: React.ComponentProps<"a"> & { isActive?: boolean }) {
  return (
    <a
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded border border-input bg-background px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
        isActive && "bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground",
        className
      )}
      {...props}
    />
  );
}

export function PaginationPrevious({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      aria-label="Anterior"
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded border border-input bg-background px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      &lt;
    </a>
  );
}

export function PaginationNext({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      aria-label="Siguiente"
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded border border-input bg-background px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      &gt;
    </a>
  );
} 