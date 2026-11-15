type CatalogEntry = {
  name: string;
  repository: string;
  description: string;
  href?: string;
};

type CatalogGroup = {
  name: string;
  entries: CatalogEntry[];
};

const github = "https://github.com/WhiteWolf217";

export const projectCatalog: CatalogGroup[] = [
  {
    name: "Security engineering",
    entries: [
      { name: "ChainXray", repository: "ChainXray", description: "Windows workbench for investigating Ethereum wallet requests and transaction outcomes.", href: "#chainxray" },
      { name: "SPECTRE", repository: "SPECTRE", description: "Local-LLM red-team research, operator review, and engagement reporting.", href: "#spectre" },
      { name: "SAST-JAVA", repository: "SAST-JAVA", description: "JavaParser-based static source analysis.", href: `${github}/SAST-JAVA` },
      { name: "Log Analyzer", repository: "Log-Analyzer", description: "Multithreaded Python tooling for investigating suspicious SSH and web log activity.", href: `${github}/Log-Analyzer` },
      { name: "PhantomNet", repository: "PhantomNet---ESP8266-WiFi-Security-Toolkit", description: "ESP8266 Wi-Fi security research for controlled lab environments." },
    ],
  },
  {
    name: "Research and applied AI",
    entries: [
      { name: "Real-Time Intrusion Detection", repository: "RealTime-Intrusion-Detection-GNNs", description: "Graph-based intrusion detection on live network traffic.", href: `${github}/RealTime-Intrusion-Detection-GNNs` },
      { name: "Static Intrusion Detection", repository: "Static-Intrusion-Detection-GNNs", description: "Offline graph-based intrusion detection research using CICIDS2017.", href: `${github}/Static-Intrusion-Detection-GNNs` },
      { name: "VerdictFlow", repository: "Verdictflow", description: "AMD Hackathon project for multi-agent contract review, version comparison, and negotiation practice.", href: `${github}/Verdictflow` },
      { name: "Electricity Cost Prediction", repository: "Electricity-Cost-Prediction", description: "PyTorch regression served through FastAPI with a Streamlit frontend.", href: `${github}/Electricity-Cost-Prediction` },
    ],
  },
  {
    name: "CTFs and practice",
    entries: [
      { name: "Basic Reverse Engineering", repository: "Basic-Reverse-Engineering", description: "Repository for introductory reverse-engineering practice." },
      { name: "Gnireenigne-Esrever", repository: "Gnireenigne-Esrever", description: "Reverse-engineering CTF project." },
      { name: "Operational Lockdown", repository: "Operational-Lockdown-CTF", description: "CTF project centered on cryptographic hashes." },
    ],
  },
  {
    name: "Web and profile repositories",
    entries: [
      { name: "ChainXray site", repository: "ChainXray-site", description: "Static product and download page for the Windows workbench.", href: `${github}/ChainXray-site` },
      { name: "White Wolf portfolio", repository: "white-wolf-portfolio", description: "This React portfolio, deployed through GitHub Actions.", href: `${github}/white-wolf-portfolio` },
      { name: "GitHub profile", repository: "WhiteWolf217", description: "The White Wolf profile README and branding.", href: github },
      { name: "Wild Stone site recreation", repository: "Wild-stone-clone", description: "Early front-end practice project built with HTML and image assets.", href: `${github}/Wild-stone-clone` },
      { name: "sheet-ai-pro-backup", repository: "sheet-ai-pro-backup", description: "Public backup repository with no project documentation." },
    ],
  },
  {
    name: "Forks and reference collections",
    entries: [
      { name: "StablePay", repository: "StablePay", description: "Fork of StabilityNexus’s StablePay project.", href: `${github}/StablePay` },
      { name: "Neptune client", repository: "neptune-client", description: "Fork of Neptune’s Python experiment-tracking client.", href: `${github}/neptune-client` },
      { name: "Aikido Safe Chain", repository: "safe-chain", description: "Fork of Aikido’s dependency supply-chain security tool.", href: `${github}/safe-chain` },
      { name: "Awesome Red Team Operations", repository: "Awesome-Red-Team-Operations", description: "Forked red-team reference collection." },
      { name: "Cybersecurity cheatsheets", repository: "cybersecurity_cheatsheets", description: "Forked security reference notes." },
      { name: "scripts", repository: "scripts", description: "Forked security scripting collection." },
    ],
  },
];
