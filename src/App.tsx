// src/App.tsx
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css"; 

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <main id="home" className="w-full">
       {/* Floating light elements contained within the hero section */} 

        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      
      {/* #### HERO SECTION #### */}
      
      <section className="pt-20 md:pt-0 bg-white dark:bg-black">

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
        <h1
            id="dynamicHeadline"
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white"
          >
            White Wolf
            <br />
            <span id="dynamicWords" className="text-green-500 font-bold">
              Cybersecurity Enthusiast
            </span>
          </h1>

          <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-3xl dark:text-gray-400">
          Cybersecurity-focused ECE student with hands-on experience in red team tooling, network intrusion detection, and Active Directory attacks. CNSP & CBTP certified with consistent top-percentile CTF rankings globally.
          </p>
          <a
            href="#experience"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text:3xl text-center text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            View My Experience
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
          >
            Get In Touch
          </a>
        </div>
        <div 
          id="hacker-logo" 
          className="lg:mt-0 lg:col-span-5 lg:flex relative z-10"
          style={{ opacity: 0 }}  // This ensures it's initially invisible but still rendered
        >
          <img
            src="./assets/images/hacker.png"
            alt="hacker"
          />
        </div>
      </div>
    </section>


        {/* #### SKILLS SECTION #### */}
        <section className="bg-white dark:bg-black">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
            <h2 className="mb-8 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Technical Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border-2 border-green-500 bg-gray-50 dark:bg-gray-900">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Programming Languages</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">Python, C, Java, JavaScript, C++</p>
              </div>
              <div className="p-6 rounded-lg border-2 border-green-500 bg-gray-50 dark:bg-gray-900">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Network Security</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">Nmap, Masscan, Wireshark, Netcat, SMBMap, CrackMapExec</p>
              </div>
              <div className="p-6 rounded-lg border-2 border-green-500 bg-gray-50 dark:bg-gray-900">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Active Directory</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">BloodHound, CrackMapExec, SMBMap, Kerbrute, Impacket, Rubeus, Mimikatz</p>
              </div>
              <div className="p-6 rounded-lg border-2 border-green-500 bg-gray-50 dark:bg-gray-900">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Web Exploitation</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">Burp Suite, OWASP ZAP, Gobuster, SQLMap, Subfinder, Postman</p>
              </div>
              <div className="p-6 rounded-lg border-2 border-green-500 bg-gray-50 dark:bg-gray-900">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Reverse Engineering</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">Ghidra, GDB, John the Ripper, Hashcat</p>
              </div>
              <div className="p-6 rounded-lg border-2 border-green-500 bg-gray-50 dark:bg-gray-900">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Cloud & DevOps</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">GCP, Docker, Maven, Linux, Windows</p>
              </div>
            </div>
          </div>
        </section>

        {/* #### PROJECTS SECTION #### */}
          <section id="projects" className="pt-8 pb-12 bg-white dark:bg-black flex justify-center items-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">

              <div className="max-w-screen-md mb-8 lg:mb-12 mx-auto">
                <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Featured Security Projects & Research
                </h2>
                <p className="text-gray-500 text-2xl dark:text-gray-400">
                A showcase of my security research, tools, and projects in cybersecurity and vulnerability assessment.
                </p>
              </div>

              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
              <a href="https://github.com/WhiteWolf217/RealTime-Intrusion-Detection-GNNs" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-105 group block">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg 
                      className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                      aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1" 
                        d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white group-hover:text-green-500 transition-colors duration-300">GNN-based IDS</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                    Built static & real-time IDS using Graph Neural Networks on CICIDS2017, achieving 99.7% accuracy. Engineered live packet capture via Scapy with sliding-window graph construction for sub-second anomaly detection.
                  </p>
                </a>

                <a href="https://github.com/WhiteWolf217/SAST-JAVA" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-105 group block">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"/>
                </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white group-hover:text-green-500 transition-colors duration-300">SAST Tool</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  Java-based static analysis tool using JavaParser AST traversal to detect SQL injection, XSS, and command injection patterns early in the SDLC without code execution.
                  </p>
                </a>

                <a href="https://github.com/WhiteWolf217/SPECTRE/releases/tag/phase-2" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-105 group block">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.7141 15h4.268c.4043 0 .732-.3838.732-.8571V3.85714c0-.47338-.3277-.85714-.732-.85714H6.71411c-.55228 0-1 .44772-1 1v4m10.99999 7v-3h3v3h-3Zm-3 6H6.71411c-.55228 0-1-.4477-1-1 0-1.6569 1.34315-3 3-3h2.99999c1.6569 0 3 1.3431 3 3 0 .5523-.4477 1-1 1Zm-1-9.5c0 1.3807-1.1193 2.5-2.5 2.5s-2.49999-1.1193-2.49999-2.5S8.8334 9 10.2141 9s2.5 1.1193 2.5 2.5Z"/>
                  </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white group-hover:text-green-500 transition-colors duration-300">SPECTRE</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  AI red team platform integrating 23 offensive tools with Ollama/llama3.1. Autonomous ATT&CK-mapped attack chains with operator confirmation gates for safe, intelligent penetration testing.
                  </p>
                </a>

                <a href="https://github.com/WhiteWolf217/PhantomNet---ESP8266-WiFi-Security-Toolkit" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-105 group block">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3 14l2-2m0 0 2-2m-2 2-2-2m2 2 2 2M19 14l2-2m0 0 2-2m-2 2-2-2m2 2 2 2"/>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white group-hover:text-green-500 transition-colors duration-300">PhantomNet</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                  ESP8266-based WiFi security toolkit featuring beacon flood jamming, evil twin attacks with captive portal password capture, and real-time network scanning — built for authorized penetration testing &amp; security research.
                  </p>
                </a>
              </div>
            </div>
          </section>
          
          {/* #### CTF RANKINGS SECTION #### */}

          <section className="bg-gray-100 dark:bg-black lg:py-18 lg:px-6 border-t-4 border-b-4 border-solid border-green-700 bg-white dark:bg-black relative z-20">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 ">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">CTF Competition Rankings</h2>
                <div className="grid grid-cols-2 gap-8 text-gray-900 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 dark:text-white">
                    <div className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-green-500 bg-gray-50 dark:bg-gray-900">
                      <p className="text-3xl font-extrabold text-green-500 mb-2">363 / 1014</p>
                      <p className="text-lg font-bold">University CTF 2025</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-green-500 bg-gray-50 dark:bg-gray-900">
                      <p className="text-3xl font-extrabold text-green-500 mb-2">613 / 2931</p>
                      <p className="text-lg font-bold">NahamCon CTF 2025</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-green-500 bg-gray-50 dark:bg-gray-900">
                      <p className="text-3xl font-extrabold text-green-500 mb-2">845 / 8129</p>
                      <p className="text-lg font-bold">HTB Cyber Apocalypse 2025</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-green-500 bg-gray-50 dark:bg-gray-900">
                      <p className="text-3xl font-extrabold text-green-500 mb-2">Team Rank 288</p>
                      <p className="text-lg font-bold">picoCTF 2025</p>
                    </div>
                </div>
            </div>
        </section>

          {/* #### EXPERIENCE SECTION #### */}
          <section id="experience" className="bg-white dark:bg-black pt-8">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                My Experience & Background
              </h2>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Education</h3>
                <p className="text-xl mb-2">B.Tech in Electronics & Communication Engineering</p>
                <p className="text-lg">Lovely Naamd Delhi Institute of Technology (LNMIT), 2024-2028</p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Internship Experience</h3>
                <p className="text-xl font-semibold mb-2">Cybersecurity Research Intern</p>
                <p className="text-lg mb-2">DAHU, May - July 2025</p>
                <p className="text-lg">Developed GNN-based intrusion detection system and conducted advanced security research on network anomaly detection.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Certifications</h3>
                <ul className="text-lg space-y-2">
                  <li>✓ CNSP - Certified Network Security Professional (SecOps)</li>
                  <li>✓ CBTP - Certified Breach and Threat Professional (SecOps)</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
              src="./assets/images/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
              src="./assets/images/office-long-1.png"
              alt="office content 2"
            />
          </div>
          </div>
           {/* #### LEADERSHIP SECTION #### */}
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div className="max-w-screen-md mx-auto text-center">
              <h2 className="mb-8 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">Leadership</h2>
              <a href="https://www.linkedin.com/company/cipher-lnmiit/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="block p-8 rounded-lg border-2 border-green-500 bg-gray-50 dark:bg-gray-900 transform transition-all duration-300 hover:scale-105 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 group">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-500 transition-colors duration-300">Club Co-ordinator</h3>
                <p className="text-xl font-semibold text-green-500 mb-3">Cipher — LNMIIT</p>
                <p className="text-sm font-medium text-gray-400 mb-4">MAR 2026 – PRESENT</p>
                <p className="text-lg text-gray-700 dark:text-gray-300">Leading the cybersecurity division of Cipher — LNMIIT's official Blockchain &amp; Cybersecurity club.</p>
              </a>
            </div>
          </div>
        </section>

        {/* #### CONTACT SECTION #### */}
        <section id="contact" className="bg-black py-16">
          <div className="max-w-screen-xl px-4 mx-auto text-center">
            <h2 className="mb-8 text-4xl md:text-5xl tracking-tight font-extrabold text-white">Contact Me</h2>
            <a href="mailto:nitishmatta2326@gmail.com" className="inline-flex items-center gap-4 px-8 py-6 rounded-lg border-2 border-green-500 bg-gray-900 transform transition-all duration-300 hover:scale-105 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 group">
              <svg className="w-10 h-10 text-green-500 group-hover:text-green-400 transition-colors duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8L12 13 3 8M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8M3 8l9-4 9 4"/>
              </svg>
              <span className="text-xl md:text-2xl font-semibold text-gray-300 group-hover:text-green-400 transition-colors duration-300">nitishmatta2326@gmail.com</span>
            </a>
            <div className="flex items-center justify-center gap-6 mt-8">
              <a href="https://github.com/whiteWolf217/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center bg-gray-900 rounded-2xl border border-gray-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 hover:scale-110 transition-all duration-300 group">
                <svg className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/nitish-matta-b1545930b" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center bg-gray-900 rounded-2xl border border-gray-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 hover:scale-110 transition-all duration-300 group">
                <svg className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://profile.hackthebox.com/profile/019c8a07-e0c4-7293-a1a2-f0b469ed1f0f" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center bg-black rounded-2xl border border-gray-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 hover:scale-110 transition-all duration-300 overflow-hidden group">
                <img src="./assets/images/hackthebox-logo.png" alt="HackTheBox" className="w-full h-full object-cover rounded-2xl" />
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
