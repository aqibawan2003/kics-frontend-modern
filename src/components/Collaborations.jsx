import huaweiLogo from '../assets/images/collaborations/huawei.png';
import mitLogo from '../assets/images/collaborations/mit.png';
import punjabLogo from '../assets/images/collaborations/punjab.png';
import hecLogo from '../assets/images/collaborations/hec.png';
import sportsBoardLogo from '../assets/images/collaborations/sports-board.jpg';
import uetLogo from '../assets/images/collaborations/uet.png';
import igniteLogo from '../assets/images/collaborations/ignite.png';
import ieeeLogo from '../assets/images/collaborations/ieee.jpg';
import rescue1122Logo from '../assets/images/collaborations/rescue1122.png';

export default function Collaborations() {
  const partners = [
    { name: 'Huawei', logo: huaweiLogo, link: 'https://www.huawei.com' },
    { name: 'MIT', logo: mitLogo, link: 'https://www.mit.edu' },
    { name: 'Government of Punjab', logo: punjabLogo, link: 'https://punjab.gov.pk' },
    { name: 'HEC Pakistan', logo: hecLogo, link: 'https://www.hec.gov.pk' },
    {
      name: 'Sports Board Punjab',
      logo: sportsBoardLogo,
      link: 'https://sportsboard.punjab.gov.pk',
    },
    { name: 'UET Lahore', logo: uetLogo, link: 'https://www.uet.edu.pk' },
    { name: 'IGNITE', logo: igniteLogo, link: 'https://ignite.org.pk' },
    { name: 'IEEE', logo: ieeeLogo, link: 'https://www.ieee.org' },
    { name: 'Rescue 1122', logo: rescue1122Logo, link: 'https://rescue.gov.pk' },
  ];

  return (
    <section id="collaborations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
            Our Collaborations
          </h2>
          <p className="text-slate-600 mt-5 max-w-2xl mx-auto text-base leading-relaxed">
            KICS maintains strong partnerships with leading national and international
            organizations, driving collaborative research and technology development.
          </p>
        </div>

        {/* Animated logo carousel */}
        <div className="relative overflow-hidden py-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll-left">
            {partners.map((partner, idx) => (
              <a
                key={`1-${idx}`}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-44 h-32 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center justify-center p-6 group-hover:shadow-2xl group-hover:border-primary-400 group-hover:scale-110 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    title={partner.name}
                  />
                </div>
              </a>
            ))}
            {partners.map((partner, idx) => (
              <a
                key={`2-${idx}`}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-44 h-32 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center justify-center p-6 group-hover:shadow-2xl group-hover:border-primary-400 group-hover:scale-110 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    title={partner.name}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
