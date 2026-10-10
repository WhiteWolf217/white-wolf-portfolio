// src/App.tsx
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css";

/* ─── reusable card wrapper ─────────────────────────────────────── */
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div
    className={`p-6 rounded-xl border border-green-500/40 bg-gray-900/60 backdrop-blur-sm hover:border-green-400 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

/* ─── skill pill ────────────────────────────────────────────────── */
const Pill: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 border border-green-500/30 text-green-400 mr-2 mb-2">
    {label}
  </span>
);

/* ─── section heading ───────────────────────────────────────────── */
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="mb-12 text-4xl md:text-5xl tracking-tight font-extrabold text-white text-center">
    {children}
  </h2>
);

/* ─── timeline dot bullet ───────────────────────────────────────── */
const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-3 text-gray-400 text-sm leading-relaxed">
    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-green-500" />
    <span>{children}</span>
  </li>
);

/* ─── project card ──────────────────────────────────────────────── */
interface ProjectProps {
  title: string;
  tag: string;
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}
const ProjectCard: React.FC<ProjectProps> = ({ title, tag, href, icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col h-full p-6 rounded-xl border border-green-500/40 bg-gray-900/60 backdrop-blur-sm hover:border-green-400 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-500/10 text-green-500 group-hover:text-green-400 group-hover:bg-green-500/20 transition-all duration-300 shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
          {title}
        </h3>
        <span className="text-xs text-green-500/80 font-medium">{tag}</span>
      </div>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed flex-grow">{children}</p>
  </a>
);

/* ═══════════════════════════════════════════════════════════════════
   APP
═══════════════════════════════════════════════════════════════════ */
const App: React.FC = () => {
  return (
    <>
      <Nav />
      <main id="home" className="w-full bg-black">
        {/* Floating light particles */}
        {[1,2,3,4,5,6,7,8,9].map(n => (
          <div key={n} className={`light x${n}`} />
        ))}

        {/* ══════════ HERO ══════════ */}
        <section className="pt-20 md:pt-0 min-h-screen flex items-center">
          <div className="grid max-w-screen-xl px-6 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10 w-full">
            <div className="mr-auto place-self-center lg:col-span-7">
              {/* name */}
              <h1
                id="dynamicHeadline"
                className="max-w-2xl mb-3 text-5xl font-extrabold tracking-tight leading-tight md:text-6xl xl:text-7xl text-white"
              >
                White Wolf
              </h1>
              {/* animated role */}
              <p className="mb-5 text-2xl md:text-3xl font-bold">
                <span id="dynamicWords" className="text-green-400" />
              </p>
              {/* bio */}
              <p className="max-w-xl mb-8 text-gray-400 text-lg leading-relaxed">
                Security enthusiast at LNMIIT specializing in offensive security,
                OT/ICS security, and red teaming. <span className="text-green-400 font-semibold">CNSP &amp; CBTP</span> certified —
                pursuing <span className="text-green-400 font-semibold">CPTS &amp; CKA</span>. Top-percentile CTF competitor globally.
              </p>
              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30"
                >
                  View Experience
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* hero image */}
            <div
              id="hacker-logo"
              className="hidden lg:flex lg:col-span-5 items-center justify-center relative z-10"
              style={{ opacity: 0 }}
            >
              <img src="./assets/images/hacker.png" alt="hacker" className="max-w-full" />
            </div>
          </div>
        </section>

        {/* ══════════ SKILLS ══════════ */}
        <section className="py-20 px-6 bg-black border-t border-white/5">
          <div className="max-w-screen-xl mx-auto">
            <SectionTitle>Technical Skills &amp; Expertise</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              <Card className="flex flex-col h-full">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-green-500">⚔</span> Active Directory
                </h3>
                <div>
                  {["Kerberoasting","AS-REP Roasting","Shadow Credentials","RBCD","DCSync","Pass-the-Hash","Pass-the-Ticket","Pass-the-Certificate"].map(s => <Pill key={s} label={s} />)}
                </div>
              </Card>

              <Card className="flex flex-col h-full">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-green-500">🏭</span> OT / ICS Security
                </h3>
                <div>
                  {["NetWall OD-102","BSG-100","Fend Optical Diode","SCADA/Modbus","MQTT","OPC-UA","MetaDefender Core","MITRE ATT&CK ICS"].map(s => <Pill key={s} label={s} />)}
                </div>
              </Card>

              <Card className="flex flex-col h-full">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-green-500">🔧</span> AD Tooling
                </h3>
                <div>
                  {["BloodHound","Impacket","CrackMapExec","Rubeus","Mimikatz","Kerbrute","Nmap","Wireshark"].map(s => <Pill key={s} label={s} />)}
                </div>
              </Card>

              <Card className="flex flex-col h-full">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-green-500">☁</span> Cloud &amp; DevOps
                </h3>
                <div>
                  {["Kubernetes","Helm","kubectl","kind","Azure","GCP","Docker","GitHub Actions","CI/CD"].map(s => <Pill key={s} label={s} />)}
                </div>
              </Card>

              <Card className="flex flex-col h-full">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-green-500">🌐</span> Web Exploitation
                </h3>
                <div>
                  {["Burp Suite","OWASP ZAP","Gobuster","SQLMap","Subfinder","JWT attacks","SSRF","CORS","Android APK reversal"].map(s => <Pill key={s} label={s} />)}
                </div>
              </Card>

              <Card className="flex flex-col h-full">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-green-500">🤖</span> Languages &amp; AI/LLM
                </h3>
                <div>
                  {["Python","Bash","PowerShell","Java","C","Ollama/Llama 3.1","Adversarial ML","GNN-based IDS"].map(s => <Pill key={s} label={s} />)}
                </div>
              </Card>

            </div>
          </div>
        </section>

        {/* ══════════ PROJECTS ══════════ */}
        <section id="projects" className="py-20 px-6 bg-black border-t border-white/5">
          <div className="max-w-screen-xl mx-auto">
            <SectionTitle>Featured Projects &amp; Research</SectionTitle>
            <p className="text-gray-500 text-lg text-center -mt-6 mb-12">
              Security research, tooling, and infrastructure built in the real world.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              <ProjectCard title="SPECTRE" tag="AI Red Team · Mar–Apr 2026"
                href="https://github.com/WhiteWolf217/SPECTRE/releases/tag/phase-2"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.091z"/></svg>}
              >
                AI-powered red team automation integrating <strong className="text-white">23 offensive tools</strong> with Ollama/Llama 3.1. Executes MITRE ATT&amp;CK-mapped attack chains autonomously with operator confirmation gates.
              </ProjectCard>

              <ProjectCard title="GNN-based IDS" tag="Graph Neural Networks · 2025"
                href="https://github.com/WhiteWolf217/RealTime-Intrusion-Detection-GNNs"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>}
              >
                Real-time intrusion detection using Graph Neural Networks on CICIDS2017. Live packet capture via Scapy with sliding-window graph construction. Exploring adversarial attacks against the model.
              </ProjectCard>

              <ProjectCard title="Syslog OT Pipeline" tag="OT Security · OPSWAT · 2026"
                href="https://github.com/WhiteWolf217"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"/></svg>}
              >
                End-to-end syslog forwarding pipeline across a Fend Optical Data Diode (Python/Flask, real-time UDP). <strong className="text-green-400">Caught a live CVE exploit attempt</strong> during testing. Built Python FTPS &amp; PowerShell WinSCP automation for one-way file sync.
              </ProjectCard>

              <ProjectCard title="MetaDefender on K8s" tag="Kubernetes · Helm · OPSWAT"
                href="https://github.com/WhiteWolf217"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/></svg>}
              >
                Deployed OPSWAT MetaDefender Core on a local Kubernetes cluster (kind) with in-cluster PostgreSQL via Helm. Authored the full deployment SOP resolving kind-specific storage-node and license verification issues.
              </ProjectCard>

              <ProjectCard title="PhantomNet" tag="ESP8266 · Wi-Fi Security"
                href="https://github.com/WhiteWolf217/PhantomNet---ESP8266-WiFi-Security-Toolkit"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"/></svg>}
              >
                ESP8266-based Wi-Fi security toolkit featuring beacon-flood jamming, evil-twin attacks with captive portal password capture, and real-time network scanning — built for authorized penetration testing.
              </ProjectCard>

              <ProjectCard title="LNMHacks 8.0" tag="CTF Infrastructure · GCP"
                href="https://github.com/WhiteWolf217"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"/></svg>}
              >
                Deployed and managed CTF infrastructure on GCP, containerizing each challenge in Docker for isolated environments. Handled full container lifecycle (build, deploy, teardown) across the live competition.
              </ProjectCard>

            </div>
          </div>
        </section>

        {/* ══════════ CTF RANKINGS ══════════ */}
        <section className="py-20 px-6 border-t-2 border-b-2 border-green-700/50 bg-black">
          <div className="max-w-screen-xl mx-auto">
            <SectionTitle>CTF Competition Rankings</SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { rank: "139 / 5,637", event: "HTB Holmes CTF 2026", sub: "111/111 challenges · 8,725 pts", highlight: true },
                { rank: "1850 / 1850", event: "FamPay Security CTF",  sub: "Perfect score · All 6 challenges", highlight: true },
                { rank: "363 / 1,014", event: "HTB University CTF 2025", sub: null },
                { rank: "845 / 8,129", event: "HTB Cyber Apocalypse 2025", sub: null },
              ].map(({ rank, event, sub, highlight }) => (
                <div
                  key={event}
                  className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 text-center transition-all duration-300 hover:-translate-y-1 ${
                    highlight
                      ? "border-green-400 bg-green-500/5 shadow-lg shadow-green-500/10"
                      : "border-green-500/40 bg-gray-900/60"
                  }`}
                >
                  <p className="text-3xl font-extrabold text-green-400 mb-1">{rank}</p>
                  <p className="text-base font-bold text-white mb-1">{event}</p>
                  {sub && <p className="text-xs text-gray-400">{sub}</p>}
                </div>
              ))}
            </div>

            {/* HTB profile badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "HTB Prodigy Rank",
                "Season 11 Ruby Tier",
                "Level 78",
                "NahamCon CTF",
                "picoCTF",
                "BSides Mussoorie",
              ].map(badge => (
                <span
                  key={badge}
                  className="px-4 py-1.5 rounded-full border border-green-500/40 text-green-400 text-sm font-semibold bg-green-500/5"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ EXPERIENCE ══════════ */}
        <section id="experience" className="py-20 px-6 bg-black border-t border-white/5">
          <div className="max-w-screen-xl mx-auto">
            <SectionTitle>Experience &amp; Background</SectionTitle>

            {/* Education */}
            <Card className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">2024 – 2028</p>
                <h3 className="text-xl font-bold text-white">B.Tech — Electronics &amp; Communication Engineering</h3>
                <p className="text-gray-400 text-sm mt-0.5">LNM Institute of Information Technology (LNMIIT), Jaipur</p>
              </div>
              <span className="shrink-0 px-3 py-1 text-xs rounded-full border border-green-500/40 text-green-400 bg-green-500/5 self-start sm:self-center">
                🎓 Education
              </span>
            </Card>

            {/* Experience timeline */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

              <Card className="flex flex-col h-full">
                <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-2">Jul 2026 – Aug 2026</p>
                <h3 className="text-lg font-bold text-white mb-0.5">Network Engineer Intern</h3>
                <p className="text-green-500 text-sm font-semibold mb-4">OPSWAT — Pelorus Project · Delhi</p>
                <ul className="space-y-2 flex-grow">
                  <Bullet>NetWall Diode (OD-102) &amp; BSG-100 lab configuration, one-way Blue→Red transfer</Bullet>
                  <Bullet>Built Python FTPS &amp; PowerShell WinSCP automation for diode file sync</Bullet>
                  <Bullet>Syslog pipeline (Fend Optical Diode) — <strong className="text-green-300">caught a live CVE exploit</strong> during testing</Bullet>
                  <Bullet>Applied CCNA-level networking across OT and IT segments</Bullet>
                </ul>
              </Card>

              <Card className="flex flex-col h-full">
                <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-2">Mar 2026 – Present</p>
                <h3 className="text-lg font-bold text-white mb-0.5">Cybersecurity Vertical Coordinator</h3>
                <p className="text-green-500 text-sm font-semibold mb-4">Cipher — LNMIIT's Official Tech Club · Jaipur</p>
                <ul className="space-y-2 flex-grow">
                  <Bullet>Leads CTF practice, workshops &amp; offensive-security learning tracks</Bullet>
                  <Bullet>Mentors peers on AD attacks, bug bounty methodology, and CTF strategy</Bullet>
                </ul>
              </Card>

              <Card className="flex flex-col h-full">
                <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-2">May 2025 – Jul 2025</p>
                <h3 className="text-lg font-bold text-white mb-0.5">Cybersecurity Research Intern</h3>
                <p className="text-green-500 text-sm font-semibold mb-4">DA-IICT · Gandhinagar, Gujarat</p>
                <ul className="space-y-2 flex-grow">
                  <Bullet>Built GNN-based Intrusion Detection System on CICIDS2017 under Dr. Abhishek Jindal</Bullet>
                  <Bullet>Live traffic capture &amp; adversarial robustness research</Bullet>
                </ul>
              </Card>

            </div>

            {/* Certifications */}
            <Card className="mb-6">
              <h3 className="text-lg font-bold text-white mb-5">🏆 Certifications &amp; Achievements</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "✓", color: "text-green-400", label: "CNSP", full: "Certified Network Security Practitioner", issuer: "The SecOps Group", done: true },
                  { icon: "✓", color: "text-green-400", label: "CBTP", full: "Certified Bug Bounty Professional", issuer: "TCM Security", done: true },
                  { icon: "⟳", color: "text-yellow-400", label: "CPTS", full: "Certified Penetration Testing Specialist", issuer: "HackTheBox — In Progress", done: false },
                  { icon: "⟳", color: "text-yellow-400", label: "CKA", full: "Certified Kubernetes Administrator", issuer: "CNCF — In Progress", done: false },
                ].map(c => (
                  <div key={c.label} className="flex items-start gap-3">
                    <span className={`${c.color} font-bold text-lg mt-0.5 shrink-0`}>{c.icon}</span>
                    <div>
                      <p className={`text-sm font-bold ${c.done ? "text-white" : "text-gray-300"}`}>{c.label} — {c.full}</p>
                      <p className="text-xs text-gray-500">{c.issuer}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3 sm:col-span-2">
                  <span className="text-green-400 font-bold text-lg mt-0.5 shrink-0">🏅</span>
                  <div>
                    <p className="text-sm font-bold text-white">Amazon ML Summer School 2026</p>
                    <p className="text-xs text-gray-500">Shortlisted among top 3,000 applicants</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bug Bounty */}
            <Card>
              <h3 className="text-lg font-bold text-white mb-5">🐛 Bug Bounty &amp; Responsible Disclosure</h3>
              <ul className="space-y-3">
                <Bullet>
                  <strong className="text-white">FamPay Security CTF</strong> — Perfect <strong className="text-green-400">1850/1850</strong>, all 6 challenges solved: Android APK reversal, JWT alg:none bypass, SSRF-to-IAM credential-theft chain
                </Bullet>
                <Bullet>CORS misconfiguration on <strong className="text-white">Zerodha</strong> — responsibly disclosed</Bullet>
                <Bullet>Exposed admin interfaces on <strong className="text-white">Wibmo</strong></Bullet>
                <Bullet>Subdomain enumeration findings under <strong className="text-white">GovTech Singapore's VDP</strong></Bullet>
              </ul>
            </Card>

          </div>
        </section>

        {/* ══════════ CONTACT ══════════ */}
        <section id="contact" className="py-24 px-6 bg-black border-t border-white/5">
          <div className="max-w-screen-xl px-4 mx-auto text-center">
            <h2 className="mb-3 text-4xl md:text-5xl tracking-tight font-extrabold text-white">Get In Touch</h2>
            <p className="text-gray-500 mb-10 text-lg">Open to internships, research collaborations, and CTF teams.</p>

            <a
              href="mailto:nitishmatta2326@gmail.com"
              className="inline-flex items-center gap-4 px-8 py-5 rounded-xl border-2 border-green-500 bg-gray-900 hover:bg-green-500/10 hover:border-green-400 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105 group"
            >
              <svg className="w-6 h-6 text-green-500 group-hover:text-green-400 transition-colors" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8L12 13 3 8M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8M3 8l9-4 9 4"/>
              </svg>
              <span className="text-xl font-semibold text-gray-300 group-hover:text-green-400 transition-colors">
                nitishmatta2326@gmail.com
              </span>
            </a>

            <div className="flex items-center justify-center gap-5 mt-10">
              <a href="https://github.com/whiteWolf217/" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-xl border border-gray-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 hover:scale-110 transition-all duration-300 group">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/nitish-matta-b1545930b" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-xl border border-gray-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 hover:scale-110 transition-all duration-300 group">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://profile.hackthebox.com/profile/019c8a07-e0c4-7293-a1a2-f0b469ed1f0f" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-black rounded-xl border border-gray-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 hover:scale-110 transition-all duration-300 overflow-hidden group">
                <img src="./assets/images/hackthebox-logo.png" alt="HackTheBox" className="w-full h-full object-cover" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default App;
