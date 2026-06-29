export default function HorizontalAd({ className = "" }: { className?: string }) {
  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <div className="flex flex-col gap-3 items-center">
        <div className="ad-container bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center min-h-[90px] w-full max-w-[728px]" id="header-ad-1">
          <p className="text-gray-400 text-xs">إعلان</p>
        </div>
        <div className="ad-container bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center min-h-[90px] w-full max-w-[728px]" id="header-ad-2">
          <p className="text-gray-400 text-xs">إعلان</p>
        </div>
      </div>
    </div>
  );
}
