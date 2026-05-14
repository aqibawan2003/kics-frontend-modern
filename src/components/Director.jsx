export default function Director() {
  return (
    <section id="director" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Quote block */}
          <div>
            <span className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest mb-4">Leadership</span>
            <h2 className="text-4xl font-heading font-bold mb-6 leading-tight text-slate-900">
              Director's Message
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mb-8 rounded-full" />
            <blockquote className="border-l-4 border-blue-600 pl-6 leading-relaxed text-lg mb-8 bg-white p-6 rounded-r-lg shadow-sm">
              <span className="text-blue-700 font-semibold text-xl">
                "KICS is on a fast track to become a premier research and advanced technology organization in Pakistan.
              </span>
              <span className="text-slate-600 text-base block mt-3">
                We focus on software systems, embedded systems, wireless and networking technologies, information security,
                and industrial automation. Our goal is regional recognition as a technology innovation center, leveraging
                our position at UET Lahore to collaborate with domestic and international research centers. We take pride
                in our team and the research-nurturing environment we've created to advance technological innovation and
                socio-economic development.
              </span>
            </blockquote>
            <div>
              <p className="font-bold text-slate-900 text-xl">Prof. Dr. Hafiz Muhammad Shahzad Asif</p>
              <p className="text-blue-600 text-base font-medium">Director, KICS — UET Lahore</p>
            </div>
          </div>

          {/* Vision & Mission cards */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl p-8 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-slate-900 font-bold text-2xl font-heading">Vision</h3>
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                To drive Pakistan toward a knowledge-based economy by developing world-class research in algorithms,
                software engineering, and digital control systems. KICS aims to be recognized as a premier research
                and advanced technology organization, serving as a center of excellence for cutting-edge research,
                technology innovation, and industrial collaboration.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-slate-900 font-bold text-2xl font-heading">Mission</h3>
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                To conduct result-oriented research and development activities using ICT for national socio-economic
                advancement. We bridge the gap between academia and industry while fostering innovation in Computer
                Sciences and Information Technology to advance science and technology throughout Pakistan.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-slate-900 font-bold text-2xl font-heading">Values</h3>
              </div>
              <ul className="text-slate-600 text-base leading-relaxed space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">1</span>
                  <span><strong className="text-slate-900">Excellence:</strong> Striving for the highest quality in research and innovation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">2</span>
                  <span><strong className="text-slate-900">Collaboration:</strong> Building strong partnerships across academia and industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">3</span>
                  <span><strong className="text-slate-900">Impact:</strong> Creating solutions that address real-world challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">4</span>
                  <span><strong className="text-slate-900">Innovation:</strong> Fostering creativity and technological advancement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
