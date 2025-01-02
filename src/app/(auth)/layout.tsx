interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen bg-neutral-50 p-6 lg:px-10">
      {children}
    </div>
  );
}
