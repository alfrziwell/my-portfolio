import { BookOpen, Calendar } from 'lucide-react';
import IWU from '../assets/img/instansi/iwu.png';
import SMKN13 from '../assets/img/instansi/smkn13.png';

const educationData = [
  {
    degree: 'Bachelor of Informatics',
    school: 'International Women University',
    period: 'October 2024 - Present',
    periodBadge: 'Ongoing',
    description: 'Pursuing a Bachelor\'s degree in Computer Science at International Women University',
    logo: IWU
  },
  {
    degree: 'Computer and Network Engineering',
    school: 'SMKN 13 Bandung',
    period: 'July 2021 - May 2024',
    periodBadge: 'Completed',
    description: 'Graduated with a degree in Computer and Network Engineering',
    logo: SMKN13
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">EDUCATION</h2>
          <p className="text-lg text-gray-600">
            My educational background and qualifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-teal-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img 
                      src={edu.logo} 
                      alt={edu.school}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-teal-600 font-semibold">{edu.school}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold text-white ${
                    edu.periodBadge === 'Ongoing' 
                      ? 'bg-gradient-to-r from-teal-500 to-teal-600' 
                      : 'bg-gradient-to-r from-green-500 to-green-600'
                  }`}>
                    {edu.periodBadge}
                  </span>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    <span className="font-semibold">{edu.period}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
