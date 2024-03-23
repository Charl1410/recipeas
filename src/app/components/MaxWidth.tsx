interface MaxWidthProps {
  children: React.ReactNode;
}

export default function MaxWidth({ children }: MaxWidthProps) {
  return <div className="max-w-7xl mx-auto w-full">{children}</div>;
}
