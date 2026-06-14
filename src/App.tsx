import "./App.css";

const features = [
  {
    icon: "💬",
    title: "Private Chats",
    desc: "Talk only with people inside your Cirql. No public pressure, no random noise.",
  },
  {
    icon: "👥",
    title: "Cirql Friends",
    desc: "Your real people in one private circle, not fake followers or strangers.",
  },
  {
    icon: "⚡",
    title: "Signals",
    desc: "Ask your Cirql for reality checks, opinions, pulse votes, and honest answers.",
  },
  {
    icon: "🫥",
    title: "Anonymous Truths",
    desc: "Ask or receive anonymous truths that expire after 12 hours.",
  },
  {
    icon: "🌈",
    title: "Aura Ring",
    desc: "A Gen Z status system that replaces the boring green online dot.",
  },
  {
    icon: "👻",
    title: "Ghosting System",
    desc: "Fun social badges like Dodging, Ghosting, and Certified Ghost.",
  },
  {
    icon: "🔥",
    title: "Vibes Discover",
    desc: "Find people based on vibe, energy, freshness, and Cirql match.",
  },
  {
    icon: "🏆",
    title: "Reputation Badges",
    desc: "Earn behavior-based badges like Fast Replier, Night Owl, and Loyal Friend.",
  },
  {
    icon: "🔐",
    title: "Privacy First",
    desc: "No public likes, no follower competition, no fake popularity game.",
  },
];

const pros = [
  "Different from Instagram, Snapchat, and WhatsApp",
  "Built around real friends, not followers",
  "Gen Z friendly design and language",
  "More private and emotionally honest",
  "Fun features like Aura, Truths, Signals, and Ghosting",
  "Strong identity for college, friends, and close circles",
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#070d1c] text-white overflow-hidden">
      <nav className="sticky top-0 z-50 bg-[#070d1c]/90 backdrop-blur border-b border-[#20304a]">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-black">
            Mi<span className="text-[#ccff1a]">Cirql</span>
          </h1>

          <a
            href="#waitlist"
            className="bg-[#ccff1a] text-black px-5 py-3 rounded-full font-black text-sm"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-5 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#111a2b] border border-[#263856] rounded-full px-4 py-2 mb-6">
            <span>🔥</span>
            <span className="text-[#ccff1a] font-black">
              Gen Z Private Social App
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Your people.
            <br />
            Your vibe.
            <br />
            Your <span className="text-[#ccff1a]">Cirql.</span>
          </h2>

          <p className="text-[#b7c8e8] text-lg mt-6 max-w-xl mx-auto lg:mx-0">
            MiCirql is a private social app for real friends, honest reality
            checks, anonymous truths, aura profiles, and Gen Z conversations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <a
              href="#waitlist"
              className="bg-[#ccff1a] text-black font-black px-8 py-4 rounded-full"
            >
              Get Early Access
            </a>

            <a
              href="#features"
              className="border border-[#263856] px-8 py-4 rounded-full font-bold"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[290px] md:w-[360px] bg-[#111a2b] border border-[#263856] rounded-[40px] p-4 shadow-2xl">
            <div className="bg-[#080e1f] rounded-[32px] p-5 min-h-[620px]">
              <h3 className="text-3xl font-black">Chats</h3>
              <p className="text-[#9eb4d8] text-sm mb-5">
                Your cirql, one vibe at a time.
              </p>

              {[
                ["Karthik raja", "🔥 Locked In", "hiiishhshh"],
                ["dogesh", "✨ Vibing", "hi"],
                ["garuda", "✨ Vibing", "hiiii"],
                ["viyam 💖", "💀 Existing", "Say hi 👋"],
              ].map((item) => (
                <div key={item[0]} className="flex items-center gap-3 py-4">
                  <div className="w-14 h-14 rounded-full bg-[#ccff1a] text-black grid place-items-center font-black text-2xl">
                    {item[0][0]}
                  </div>
                  <div>
                    <h4 className="font-black">{item[0]}</h4>
                    <p className="text-[#ccff1a] text-xs font-black">
                      {item[1]}
                    </p>
                    <p className="text-[#9eb4d8] text-sm">{item[2]}</p>
                  </div>
                </div>
              ))}

              <div className="mt-8 bg-[#111a2b] border border-[#263856] rounded-3xl p-5">
                <h4 className="font-black text-[#ccff1a]">Signal Waiting ⚡</h4>
                <p className="text-[#b7c8e8] text-sm mt-2">
                  Someone asked for your reality check.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-5 py-16">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          Detailed MiCirql Features
        </h2>

        <p className="text-[#b7c8e8] text-center max-w-2xl mx-auto mb-12">
          MiCirql is not just another chat app. It is designed around private
          circles, real reactions, emotional honesty, and Gen Z social behavior.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#111a2b] border border-[#263856] rounded-[28px] p-6 hover:border-[#ccff1a] transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-black mb-2">{feature.title}</h3>
              <p className="text-[#b7c8e8]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-2 gap-6">
        <div className="bg-[#111a2b] border border-[#263856] rounded-[32px] p-8">
          <h2 className="text-4xl font-black mb-4">Signals ⚡</h2>
          <p className="text-[#b7c8e8] mb-6">
            Signals are small social moments where users ask their Cirql for
            honest feedback.
          </p>

          <div className="space-y-4">
            <div className="border border-pink-500 rounded-2xl p-5">
              <h3 className="font-black text-pink-400">🌐 Reality Check</h3>
              <p className="text-[#b7c8e8]">
                Ask your friends for brutally honest opinions.
              </p>
            </div>

            <div className="border border-[#ccff1a] rounded-2xl p-5">
              <h3 className="font-black text-[#ccff1a]">👥 Pulse</h3>
              <p className="text-[#b7c8e8]">
                Quickly ask what your Cirql thinks.
              </p>
            </div>

            <div className="border border-cyan-400 rounded-2xl p-5">
              <h3 className="font-black text-cyan-400">🫥 Anonymous Truths</h3>
              <p className="text-[#b7c8e8]">
                Anonymous questions that disappear after 12 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#111a2b] border border-[#263856] rounded-[32px] p-8">
          <h2 className="text-4xl font-black mb-4">Aura Profiles 🌈</h2>
          <p className="text-[#b7c8e8] mb-8">
            MiCirql replaces normal online status with aura rings, vibe badges,
            and behavior-based reputation.
          </p>

          <div className="flex items-center gap-5">
            <div className="w-24 h-24 rounded-full border-4 border-cyan-400 bg-[#ccff1a] text-black grid place-items-center text-4xl font-black">
              M
            </div>

            <div>
              <h3 className="text-2xl font-black">mindad_69</h3>
              <p className="text-cyan-400 font-black">Aura Rising</p>
              <p className="text-[#ccff1a] font-black mt-2">✨ 152 Aura</p>
              <p className="text-pink-400 font-black">💀 Cooked</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="bg-[#111a2b] border border-[#263856] rounded-[32px] p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Why MiCirql can work
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {pros.map((pro) => (
              <div
                key={pro}
                className="bg-[#080e1f] border border-[#263856] rounded-2xl p-5 flex gap-3"
              >
                <span className="text-[#ccff1a] font-black">✓</span>
                <p className="font-bold text-[#dce8ff]">{pro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 bg-[#111a2b] border border-[#263856] rounded-[32px] p-8">
            <h2 className="text-4xl font-black mb-4">Future Goals 🚀</h2>
            <p className="text-[#b7c8e8] mb-6">
              MiCirql can grow into a private Gen Z social network with
              personalization, aura intelligence, and close-friend culture.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "DOB-based birthday wishes",
                "Optional horoscope/personality content",
                "AI personal social assistant",
                "Better friend recommendations",
                "Private college/community Cirqls",
                "Real-time reactions and chat signals",
              ].map((goal) => (
                <div
                  key={goal}
                  className="bg-[#080e1f] rounded-2xl p-4 border border-[#263856] font-bold"
                >
                  {goal}
                </div>
              ))}
            </div>
          </div>

          <div
            id="waitlist"
            className="bg-[#ccff1a] text-black rounded-[32px] p-8 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl font-black mb-4">Join the Cirql</h2>
              <p className="font-bold">
                Be one of the first people to try MiCirql before public launch.
              </p>
            </div>

            <button className="bg-black text-white rounded-full py-4 font-black mt-8">
              Get Early Access
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#20304a] px-5 py-10 text-center">
        <h2 className="text-3xl font-black mb-2">
          Mi<span className="text-[#ccff1a]">Cirql</span>
        </h2>
        <p className="text-[#8fa7ce]">
          Private. Real. Gen Z. Built for your actual people.
        </p>
      </footer>
    </main>
  );
}