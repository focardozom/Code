import { SignOutButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="w-full mx-auto flex justify-between items-center px-4 py-2">
      <a href="/" className="text-2xl font-bold text-gray-800">
        ✴️ Astra AI
      </a>
      <div className="ml-auto">
        <SignOutButton className="text-blue-500 hover:text-blue-700 font-semibold">Sign Out</SignOutButton>
      </div>
    </nav>
  );
};
export default Navbar;
