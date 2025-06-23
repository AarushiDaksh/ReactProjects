'use client';

export default function Projects() {
  const projects = [
    { title: "Voqit AI", description: "AI avatar game with voice-based interaction." },
    { title: "SkillSwap", description: "Peer-to-peer platform to exchange skills." },
  ];

  return (
    <main className="min-h-screen p-8 bg-white dark:bg-black text-black dark:text-white font-sans">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="border rounded-lg p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{proj.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{proj.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
