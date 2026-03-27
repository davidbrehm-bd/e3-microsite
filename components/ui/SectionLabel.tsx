interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">
      {children}
    </p>
  );
}