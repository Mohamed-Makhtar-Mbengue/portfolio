export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold dark:text-white relative inline-block">
        {children}
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-500 dark:bg-blue-400 rounded"></span>
      </h2>
    </div>
  );
}
