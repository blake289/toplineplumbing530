export default function StatusDot() {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-white text-xs xl:text-sm font-medium whitespace-nowrap">
      <span className="status-dot" />
      <span className="hidden xl:inline">24/7 Emergency Support</span>
      <span className="xl:hidden">24/7 Support</span>
    </div>
  );
}
