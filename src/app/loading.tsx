export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div
        className="size-12 animate-spin rounded-full border-4 border-[#f5f5f5] border-t-[#f4a31d]"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
