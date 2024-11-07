export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="rounded-md bg-primary-100 p-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-200 border-t-primary-800" />
      </div>
    </div>
  );
}
