export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-6">Więcej o mnie</h1>
      <p className="max-w-2xl mb-4">
        To bardziej szczegółowa strona O mnie, na której mogę podzielić się moją historią,
        wykształceniem, zainteresowaniami i celami.
      </p>

      <p className="max-w-2xl mb-4">
        Stworzyłem tę stronę jako część ćwiczenia w klasie, aby nauczyć się
        Next.js, GitHuba i wdrażania na Vercel.

        <br />Jestem studentem uczącym się tworzenia stron internetowych z Next.js.
        Interesuję się grafiką 3D, programowaniem i grami.
        Ta strona jest moim pierwszym projektem w Next.js, który stworzyłem w ramach nauki.
      </p>
      <div className="mt-6">
        <a href="/" className="text-blue-500 hover:underline">
          Powrót do strony głównej
        </a>
      </div>
    </main>
  );
}
