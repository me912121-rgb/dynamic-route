
export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-8 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">
          BLAZE<span className="text-red-500">.</span>
        </h2>

        <p className="text-gray-400 text-sm">
          Wear your style. Own your fire.
        </p>

        <p className="text-gray-500 text-sm">
          © 2026 Blaze. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
