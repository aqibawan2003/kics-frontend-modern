import { stats } from '../data/siteData';
import WaveDivider from './WaveDivider';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-700 leading-tight mb-6">
              Al-Khwarizmi Institute<br />of Computer Science
            </h2>
            <p className="text-slate-600 leading-relaxed text-base mb-4">
              KICS (Al-Khwarizmi Institute of Computer Science) is a premier research institute at the
              University of Engineering & Technology (UET) Lahore, Pakistan. Established with the mission to
              advance knowledge and develop technology-based solutions for society, KICS has been at the
              forefront of applied research for over three decades.
            </p>
            <p className="text-slate-600 leading-relaxed text-base mb-8">
              Our multidisciplinary teams work across areas including Artificial Intelligence, Cybersecurity,
              Smart Cities, Software Engineering, and Embedded Systems — bridging the gap between academic
              research and real-world impact. KICS has built strong collaborations with leading national and
              international organizations including IEEE, Huawei, HEC, MIT, and various government bodies.
            </p>
            <a
              href="#research"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Research →
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 cursor-default shadow-lg hover:shadow-2xl"
              >
                <span className="text-5xl font-bold text-white mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-white/90 text-center font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
