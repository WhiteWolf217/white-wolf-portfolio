import { projectCatalog } from "./projectCatalog";

const logo = `${import.meta.env.BASE_URL}assets/images/white-wolf-mark.jpg`;
const github = "https://github.com/WhiteWolf217";
const htb = "https://profile.hackthebox.com/profile/019c8a07-e0c4-7293-a1a2-f0b469ed1f0f";
const linkedin = "https://www.linkedin.com/in/nitish-matta-b1545930b/";
const email = "mailto:nitishmatta2326@gmail.com";

const navigation = [
  ["Work", "#projects"],
  ["Hack The Box", "#hack-the-box"],
  ["Experience", "#experience"],
];

const projects = [
  {
    title: "Static analysis for Java",
    stack: "SAST-JAVA · JavaParser · Maven",
    description: "A lightweight source scanner that helps reviewers spot common application security issues in Java code.",
    links: [["View source", `${github}/SAST-JAVA`]],
  },
  {
    title: "Graph-based intrusion detection",
    stack: "DA-IICT research · Python · CICIDS2017",
    description: "I built offline and live prototypes that represent network flows as graphs so a classifier can flag suspicious traffic.",
    links: [["Live prototype", `${github}/RealTime-Intrusion-Detection-GNNs`], ["Offline prototype", `${github}/Static-Intrusion-Detection-GNNs`]],
  },
];

const results = [
  {
    name: "Hack The Box Holmes CTF 2026",
    score: "111 / 111",
    description: "Tasks solved solo. 8,725 points and 139th of 5,637 teams.",
  },
  {
    name: "FamPay Security CTF",
    score: "1,850 / 1,850",
    description: "Perfect score across all six challenges.",
  },
  {
    name: "Hack The Box University CTF 2025",
    score: "363rd / 1,014",
    description: "My LNMIIT team solved 18 of 34 challenges.",
  },
];

const badges = [
  ["Comfortably Numb", "Labs milestone for owning 20 machines"],
  ["Stand above all", "Local Privilege Escalation path"],
  ["Enumerate & Attack! · AD Security Captain", "Active Directory enumeration and Windows security"],
  ["Endpoint Explorer · Graph invader", "API security and GraphQL testing"],
];

const experience = [
  {
    dates: "Jul – Aug 2026",
    organization: "OPSWAT–Pelorus project",
    role: "Network Engineering Intern",
    description: "Built a syslog pipeline through an optical data diode and automated one-way file transfers. Deployed MetaDefender Core on Kubernetes with Helm and documented the setup.",
  },
  {
    dates: "Mar 2026 – Present",
    organization: "Cipher · LNMIIT",
    role: "Cybersecurity Coordinator",
    description: "Lead security workshops and CTF practice. For LNMHacks 8.0, deployed isolated Docker challenge environments on Google Cloud.",
  },
  {
    dates: "May – Jul 2025",
    organization: "DA-IICT",
    role: "Cybersecurity Research Intern",
    description: "Researched graph neural networks for intrusion detection with Dr. Abhishek Jindal, using CICIDS2017 data and live network traffic.",
  },
];

function App() {
  return (
    <>
      <a className="skip-link" href="#home">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#home">
            <img src={logo} alt="" width="36" height="36" />
            <span>White Wolf</span>
          </a>
          <nav aria-label="Main navigation">
            {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
            <a className="nav-contact" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="shell hero" aria-labelledby="site-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Offensive security portfolio</p>
            <h1 id="site-title">White <span>Wolf</span></h1>
            <p className="hero-summary">Active Directory, web and API security, and reverse engineering.</p>
            <p className="hero-detail">I practice in labs, compete in CTFs, and build tools that make security investigations easier to follow.</p>
            <div className="actions">
              <a className="button primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="button secondary" href="#hack-the-box">Hack The Box results</a>
            </div>
          </div>
          <div className="hero-art">
            <img src={logo} alt="White and lavender geometric wolf emblem" width="512" height="512" />
          </div>
        </section>

        <section className="shell proof-band" aria-label="Security milestones">
          <div><strong>Hacker</strong><span>HTB Labs rank earned</span></div>
          <div><strong>20+</strong><span>HTB machines owned</span></div>
          <div><strong>94</strong><span>HTB Academy badges</span></div>
          <div><strong>111/111</strong><span>Holmes CTF tasks solved solo</span></div>
        </section>

        <section className="shell content-section" id="projects">
          <div className="section-heading">
            <h2>Selected work</h2>
            <a className="text-link" href="#project-catalog">View all projects <span aria-hidden="true">↓</span></a>
          </div>
          <article className="feature" id="chainxray">
            <div className="feature-copy">
              <p className="eyebrow">Flagship project · Web3 security</p>
              <h3>ChainXray</h3>
              <p className="feature-summary">Follow an Ethereum transaction from wallet request to on-chain outcome.</p>
              <p>I built ChainXray as a Windows desktop workbench. It decodes supported wallet requests and lets you compare them with transaction receipts and contract traces. Records stay in a local SQLite archive, and signing stays in the wallet.</p>
              <p className="stack">Tauri · TypeScript · Ethereum · SQLite</p>
              <a className="text-link" href={`${github}/ChainXray`}>Source and documentation <span aria-hidden="true">↗</span></a>
            </div>
            <div className="workflow">
              <p className="eyebrow">Investigation workflow</p>
              <ol>
                <li><strong>Wallet request</strong><span>Inspect the destination and decoded inputs.</span></li>
                <li><strong>Receipt and trace</strong><span>Check what executed after submission.</span></li>
                <li><strong>Evidence archive</strong><span>Keep the investigation record locally.</span></li>
              </ol>
            </div>
          </article>
          <article className="spectre-feature" id="spectre" aria-labelledby="spectre-title">
            <div className="spectre-intro">
              <p className="eyebrow">Red-team research · Local LLMs</p>
              <h3 id="spectre-title">SPECTRE</h3>
              <p className="spectre-lead">I built SPECTRE to study how a local language model can help coordinate an authorized red-team engagement.</p>
              <p className="spectre-detail">The model can draft and revise a plan as new information comes in. The documented design requires operator confirmation before each tool run and records findings for review and reporting.</p>
            </div>
            <dl className="spectre-facts">
              <div><dt>Local planning</dt><dd>A locally run model proposes and updates a plan.</dd></div>
              <div><dt>Operator review</dt><dd>Individual actions go through an approval step.</dd></div>
              <div><dt>Engagement reporting</dt><dd>Records findings and maps them to MITRE ATT&amp;CK for reports.</dd></div>
            </dl>
          </article>
          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.title}>
                <p className="stack">{project.stack}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.links.map(([label, href]) => <a className="text-link" key={href} href={href}>{label} <span aria-hidden="true">↗</span></a>)}
                </div>
              </article>
            ))}
          </div>
          <section className="catalog" id="project-catalog" aria-labelledby="catalog-title">
            <div className="catalog-heading">
              <div>
                <h3 id="catalog-title">Project catalog</h3>
                <p>Public repositories, including research, practice projects, and forks.</p>
              </div>
              <a className="text-link" href={`${github}?tab=repositories`}>Browse on GitHub <span aria-hidden="true">↗</span></a>
            </div>
            <div className="catalog-grid">
              {projectCatalog.map(group => (
                <section className="catalog-group" key={group.name}>
                  <h4>{group.name}</h4>
                  <ul>
                    {group.entries.map(entry => (
                      <li key={entry.repository} data-repository={entry.repository}>
                        {entry.href ? <a href={entry.href}>{entry.name}</a> : <strong>{entry.name}</strong>}
                        <p>{entry.description}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        </section>

        <section className="section-band" id="hack-the-box">
          <div className="shell content-section">
            <div className="section-heading">
              <h2>Hack The Box &amp; CTFs</h2>
              <a className="text-link" href={`${htb}?tab=badges`}>View completed badges <span aria-hidden="true">↗</span></a>
            </div>
            <div className="competition-grid">
              {results.map(result => (
                <article className="competition" key={result.name}>
                  <h3>{result.name}</h3>
                  <strong>{result.score}</strong>
                  <p>{result.description}</p>
                </article>
              ))}
            </div>
            <div className="badge-block">
              <div>
                <h3>Selected earned badges</h3>
                <p>Five Academy paths completed. Highlights from my Labs and Academy training.</p>
              </div>
              <dl className="badges">
                {badges.map(([name, detail]) => <div key={name}><dt>{name}</dt><dd>{detail}</dd></div>)}
              </dl>
            </div>
            <p className="research-note"><strong>Responsible disclosure</strong> · A CORS report I submitted through a bug bounty program was triaged as P5.</p>
          </div>
        </section>

        <section className="shell content-section" id="experience">
          <div className="section-heading"><h2>Experience</h2></div>
          <div className="experience-layout">
            <ol className="timeline">
              {experience.map(item => (
                <li key={item.organization}>
                  <p className="eyebrow">{item.dates}</p>
                  <h3>{item.role}</h3>
                  <p className="organization">{item.organization}</p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
            <aside className="credentials" aria-labelledby="credentials-heading">
              <h3 id="credentials-heading">Credentials &amp; education</h3>
              <dl>
                <div>
                  <dt>CNSP &amp; CBTP</dt>
                  <dd>Certified Network Security Practitioner and Certified Blue Team Practitioner, both with merit from The SecOps Group.</dd>
                </div>
                <div>
                  <dt>CPTS &amp; CKA</dt>
                  <dd>Certification preparation in progress.</dd>
                </div>
                <div>
                  <dt>LNMIIT</dt>
                  <dd>B.Tech in Electronics and Communication Engineering, expected 2028.</dd>
                </div>
                <div>
                  <dt>Amazon ML Summer School 2026</dt>
                  <dd>Shortlisted among the top 3,000 applicants.</dd>
                </div>
              </dl>
            </aside>
          </div>
          <dl className="toolkit" aria-label="Technical toolkit">
            <div><dt>Security testing</dt><dd>Active Directory · Burp Suite · Wireshark · Ghidra</dd></div>
            <div><dt>Infrastructure</dt><dd>OT data diodes · Kubernetes · Helm · Docker · Google Cloud</dd></div>
            <div><dt>Development</dt><dd>Python · TypeScript · Java · Bash · PowerShell</dd></div>
          </dl>
        </section>

        <section className="section-band" id="contact">
          <div className="shell contact">
            <div>
              <h2>Get in touch</h2>
              <p>Open to security internships, research collaborations, and CTF teams.</p>
            </div>
            <div className="actions">
              <a className="button primary" href={email}>Email me <span aria-hidden="true">↗</span></a>
              <a className="button secondary" href={linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell site-footer">
        <a className="brand" href="#home"><img src={logo} alt="" width="32" height="32" /><span>White Wolf</span></a>
        <div><a href={github}>GitHub</a><a href={htb}>Hack The Box</a><a href="#home">Back to top ↑</a></div>
      </footer>
    </>
  );
}

export default App;
