export default function Navbar() {
  return (
    <nav className="bg-[#111] text-white px-6 py-3 flex items-center justify-between">
      {/* Left Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/logo.png" // replace with your logo path
          alt="Logo"
          className="h-8 w-8"
        />
        <span className="font-bold text-lg">NamasteDev<span className="text-yellow-500">.com</span></span>
      </div>

      {/* Center Menu */}
      <div className="flex items-center space-x-6">
        <a href="#" className="hover:text-yellow-400">Interview Practice 
          <span className="ml-1 bg-orange-500 text-xs px-2 py-0.5 rounded-full">New</span>
        </a>
        <a href="#" className="hover:text-yellow-400">Courses</a>
        <a href="#" className="hover:text-yellow-400">Join Community</a>
      </div>

      {/* Right Profile + Streak */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-md">
          <span role="img" aria-label="fire">🔥</span>
          <span>40 Day Streak</span>
        </button>
        <img
          src="/profile.jpg" // replace with profile image
          alt="Profile"
          className="h-8 w-8 rounded-full border border-gray-600"
        />
      </div>
    </nav>
  );
}
