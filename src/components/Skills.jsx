const skillsData = [
  {
    category: 'Programming Language',
    icon: '💻',
    skills: [
      { name: 'PHP', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' },
      { name: 'C++ Arduino', level: 'Basic' }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    icon: '🔧',
    skills: [
      { name: 'Codeigniter 3/4', level: '' },
      { name: 'Laravel', level: '' },
      { name: 'React.js', level: '' },
      { name: 'Tailwind CSS', level: '' }
    ]
  },
  {
    category: 'Database & Server',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: '' },
      { name: 'PostgreSQL', level: '' },
      { name: 'Linux Ubuntu', level: '' },
      { name: 'Linux Debian', level: '' }
    ]
  },
  {
    category: 'Tools & Technologies',
    icon: '⚙️',
    skills: [
      { name: 'Arduino & IoT', level: '' },
      { name: 'Cisco Networking', level: '' },
      { name: 'Mikrotik', level: '' },
      { name: 'Microsoft Office', level: '' },
      { name: 'API Integration', level: '' },
      { name: 'JSON', level: '' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Skills</h2>
          <p className="text-lg text-gray-600">
            I have expertise in modern web development technologies, backend frameworks, and
            server management.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillsData.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-600"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{skillGroup.icon}</span>
                <h3 className="text-lg font-bold text-gray-900">{skillGroup.category}</h3>
              </div>
              <div className="space-y-3">
                {skillGroup.skills.map((skill, i) => (
                  <div key={i} className="flex items-start justify-between gap-2">
                    <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                    {skill.level && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full whitespace-nowrap">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4">What I Do Best</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-2xl leading-none mt-1">→</span>
                <span>Full-stack web application development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-2xl leading-none mt-1">→</span>
                <span>Database design and optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-2xl leading-none mt-1">→</span>
                <span>Server administration and deployment</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4">My Approach</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-2xl leading-none mt-1">→</span>
                <span>Clean and maintainable code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-2xl leading-none mt-1">→</span>
                <span>User-centric design thinking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-2xl leading-none mt-1">→</span>
                <span>Continuous learning and improvement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
