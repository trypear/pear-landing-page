import PageIllustration from "@/components/ui/page-illustration";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grow">
      <PageIllustration />
      {children}
    </main>
  );
}
