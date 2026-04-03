// app/properties/[slug]/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-red-50">
      
      <div className="flex flex-col items-center gap-6">

        {/* Premium Dual Ring Spinner */}
        <div className="relative w-16 h-16">

          {/* Outer Soft Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-red-200"></div>

          {/* Spinning Brand Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#AF1740] border-r-black animate-spin"></div>

          {/* Inner Glow Dot */}
          <div className="absolute inset-4 bg-[#AF1740] rounded-full animate-pulse shadow-lg shadow-[#AF1740]/40"></div>

        </div>

        {/* Main Text */}
        <p className="text-[#AF1740] font-semibold text-lg tracking-wide">
          Loading Property Details...
        </p>

        {/* Sub Text */}
        <p className="text-sm text-gray-500 text-center max-w-xs">
          Please wait while we fetch premium real estate information for you.
        </p>

      </div>
    </div>
  );
}