import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <img
          src="/krezel.jpg"
          alt="Zdjęcie profilowe - S. Krężel"
          width={128}
          height={128}
          className="rounded-full mb-4"
        />

        <h1 className="text-4xl font-bold mb-6">Sławomir Krężel</h1>
        
        <nav className="mb-8">
          <ul className="flex space-x-4">
            <li><a href="/" className="text-purple-500 hover:underline">Strona główna</a></li>
            <li><a href="/projects" className="text-cyan-500 hover:underline">Moje projekty</a></li>
            <li><a href="/about" className="text-green-500 hover:underline">Więcej o mnie</a></li>
          </ul>
        </nav>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">O mnie</h2>
          <p className="mb-4">
            Jestem studentem uczącym się tworzenia stron internetowych z Next.js.
            <br />Interesuję się grafiką 3D, programowaniem i grami.
            <br />Ta strona jest moim pierwszym projektem w Next.js, który stworzyłem w ramach nauki.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Moje projekty</h2>
          <ul className="list-disc pl-5">
            <li>Ta strona</li>
            <li><Link href="https://www.fab.com/sellers/S.%20Krezel" className="font-bold text-sky-400 hover:underline">Moje projekty w Unreal Engine</Link></li>
            <li>Więcej wkrótce!</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
          <p>Email: slavq7@gmail.com</p>
        </div>
      </div>
    </main>
  );
}