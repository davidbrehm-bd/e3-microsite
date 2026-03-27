interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-brand-orange ${className}`}
    >
      {children}
    </span>
  );
}