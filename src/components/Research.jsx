import { researchAreas } from '../data/siteData';
import { FiArrowRight } from 'react-icons/fi';
import WaveDivider from './WaveDivider';

export default function Research() {
  return (
    <>
      {/* Wave divider from previous section */}
      <WaveDivider color="white" />

      <section id="research" className="py-20 bg-primary-600 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Research Areas
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              KICS conducts cutting-edge research across multiple domains of computer science and technology
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer hover:-translate-y-2"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x250/0066cc/ffffff?text=${encodeURIComponent(
                        area.title
                      )}`;
                    }}
                  />
                  {/* Blue overlay like ZJU */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-bold text-white text-xl">
                      {area.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary-600 text-sm font-semibold hover:text-primary-700 transition-colors group/link"
                  >
                    Learn More
                    <FiArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider to next section */}
      <WaveDivider color="white" flip={true} />
    </>
  );
}
