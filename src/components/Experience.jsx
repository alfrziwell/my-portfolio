import { Briefcase, Calendar, Users } from 'lucide-react';
import PTNexa from '../assets/img/instansi/pt_nexa.png';
import FIKTelU from '../assets/img/instansi/fik_telu.png';
import OSIS13 from '../assets/img/instansi/osis_smkn13.png';
import FOKUS from '../assets/img/instansi/fokus.png';
import ProdiInformatika from '../assets/img/instansi/prodi_informatika.png';
import BEMIWU from '../assets/img/instansi/bem_iwu.png';
import SMKN13 from '../assets/img/instansi/smkn13.png';

// Import or use placeholder logo URLs
const workExperienceData = [
  {
    company: 'PT Nexa Media Pratama',
    position: 'Programmer',
    period: 'May 2024 - Jul 2024',
    description: 'Developed web applications and software solutions for media projects.',
    logo: PTNexa
  },
  {
    company: 'FIK Telkom University',
    position: 'Web Development',
    period: 'Oct 2023 - Mar 2024',
    description: 'Built web applications and worked on university digital initiatives.',
    logo: FIKTelU
  }
];

const organizationExperienceData = [
  {
    company: 'Vice Head of Event Committee – Community Service Program',
    position: 'Program Studi Informatika International Women University',
    period: '28 Juli 2023 | Bandung, Indonesia',
    description: 'Led community service initiatives and coordinated academic programs.',
    logo: ProdiInformatika
  },
  {
    company: 'Event Division Member',
    position: 'POM Gebyar Nusantara Badan Eksekutif Mahasiswa',
    period: '28 Juli 2023 | Bandung, Indonesia',
    description: 'Organized student events and cultural activities.',
    logo: BEMIWU
  },
  {
    company: 'Team Creative',
    position: 'Graduation at SMKN 13 Bandung',
    period: '28 Juli 2023 | Bandung, Indonesia',
    description: 'Creative team member for graduation ceremony event.',
    logo: SMKN13
  },
  {
    company: 'Head of Event Committee',
    position: 'MPLS at SMKN 13 Bandung',
    period: '28 Juli 2023 | Bandung, Indonesia',
    description: 'Coordinated school orientation program and student integration.',
    logo: SMKN13
  },
  {
    company: 'Lead Coordinator',
    position: 'Pentas Seni SMKN 13 X SMKN 9 Bandung',
    period: '21 Juni 2023 | Bandung, Indonesia',
    description: 'Responsible for organizing inter-school arts performance event.',
    logo: OSIS13
  },
  {
    company: 'Forum Komunikasi Siswa Kota Bandung',
    position: 'Interest and Talent Division',
    period: 'Apr 2022 - Nov 2023',
    description: 'Managed interest and talent division activities and digital platforms.',
    logo: FOKUS
  },
  {
    company: 'Vice President of Student Council',
    position: 'Organisasi Siswa Intra Sekolah SMKN 13 Bandung',
    period: 'Nov 2022 - Nov 2023',
    description: 'Led student council operations and organized school events.',
    logo: OSIS13
  }
];

export default function Experience() {
  const ExperienceCard = ({ exp, icon: Icon }) => (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-blue-600 group"
    >
      <div className="flex items-start gap-4 mb-3">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-110 transition duration-300">
          <img 
            src={exp.logo} 
            alt={exp.company}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
          <p className="text-sm text-blue-600 font-semibold">{exp.company}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-600 mb-3 text-sm">
        <Calendar size={16} />
        <span className="font-semibold">{exp.period}</span>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
    </div>
  );

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Experience</h2>
          <p className="text-lg text-gray-600">
            A journey through my professional and organizational experiences
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Briefcase size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Work Experience</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {workExperienceData.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} icon={Briefcase} />
            ))}
          </div>
        </div>

        {/* Organization Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Organization Experience</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {organizationExperienceData.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} icon={Users} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
