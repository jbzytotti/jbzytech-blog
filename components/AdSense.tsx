export default function AdSense({ slot, className = "" }: { slot: string; className?: string }) {
  return (
    <div
      className={`ad-container bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center min-h-[90px] ${className}`}
      id={slot}
    >
      <p className="text-gray-400 text-xs">إعلان</p>
    </div>
  );
}
