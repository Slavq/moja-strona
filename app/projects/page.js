export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-6">Moje projekty</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Ta strona</h2>
          <p className="mb-4">Moja pierwsza strona Next.js wdrożona na Vercel.</p>
          <p className="text-gray-600">Technologie: Next.js, Tailwind CSS</p>
        </div>
        
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Przyszły projekt</h2>
          <p className="mb-4">Opis projektu, który planuję zbudować.</p>
          <p className="text-gray-600">Technologie: Do ustalenia</p>
        </div>
      </div>
      
      <div className="mt-6">
        <a href="/" className="text-blue-500 hover:underline">
          Powrót do strony głównej
        </a>
      </div>
    </main>
  );
}
