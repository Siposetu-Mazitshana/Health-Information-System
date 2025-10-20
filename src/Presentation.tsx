import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Home, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface PresentationProps {
  onBack: () => void;
}

export default function Presentation({ onBack }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      type: 'title',
      title: 'Designing Reference Architecture for Healthcare Information Systems in South Africa',
      subtitle: '',
      author: 'Okuhle Gebashe',
      institution: '221797300',
      background: 'https://images.pexels.com/photos/3279203/pexels-photo-3279203.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      type: 'content',
      title: 'Introduction',
      background: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920',
      content: [
        {
          heading: 'Context',
          text: 'South Africa\'s healthcare system faces significant digital transformation challenges in managing patient information across diverse public healthcare institutions.'
        },
        {
          heading: 'Current State',
          text: 'Multiple fragmented systems with limited interoperability, creating data silos and inefficiencies in patient care delivery.'
        },
        {
          heading: 'Need',
          text: 'A unified, scalable reference architecture to standardize health information systems while ensuring security and compliance with regulations.'
        }
      ]
    },
    {
      type: 'content',
      title: 'Problem Statement',
      background: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1920',
      content: [
        {
          heading: 'Key Challenges',
          text: 'Lack of standardized architecture for health information systems in South African public healthcare institutions.'
        },
        {
          heading: 'Impact',
          text: 'Limited interoperability between systems, data security concerns, and inefficient patient care coordination across facilities.'
        },
        {
          heading: 'Consequences',
          text: 'Delays in treatment decisions, duplicate testing, increased healthcare costs, and compromised patient safety.'
        }
      ]
    },
    {
      type: 'content',
      title: 'Research Methodology',
      background: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1920',
      content: [
        {
          heading: 'Approach',
          text: 'Design Science Research (DSR) methodology combining literature review, case studies, and architectural design principles.'
        },
        {
          heading: 'Analysis',
          text: 'Comprehensive examination of existing health information systems, international best practices, and South African healthcare requirements.'
        },
        {
          heading: 'Development',
          text: 'Iterative design and validation of reference architecture components with stakeholder engagement.'
        }
      ]
    },
    {
      type: 'architecture',
      title: 'Proposed Reference Architecture',
      background: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920',
      layers: [
        { name: 'Presentation Layer', desc: 'User interfaces for healthcare providers and patients', color: 'from-blue-500 to-blue-600' },
        { name: 'Application Layer', desc: 'Core clinical and administrative applications', color: 'from-green-500 to-green-600' },
        { name: 'Integration Layer', desc: 'APIs and interoperability services', color: 'from-yellow-500 to-yellow-600' },
        { name: 'Data Layer', desc: 'Secure data storage and management', color: 'from-orange-500 to-orange-600' },
        { name: 'Infrastructure Layer', desc: 'Cloud and on-premise infrastructure', color: 'from-red-500 to-red-600' }
      ]
    },
    {
      type: 'diagram',
      title: 'System Architecture Diagram',
      background: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      type: 'features',
      title: 'Key Components',
      background: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1920',
      features: [
        {
          icon: '🔒',
          title: 'Security Framework',
          desc: 'POPIA-compliant security with encryption, access control, and audit trails'
        },
        {
          icon: '🔄',
          title: 'Interoperability',
          desc: 'HL7 FHIR standards for seamless data exchange between systems'
        },
        {
          icon: '📊',
          title: 'Data Analytics',
          desc: 'Business intelligence and reporting for informed decision-making'
        },
        {
          icon: '☁️',
          title: 'Cloud Infrastructure',
          desc: 'Scalable hybrid cloud architecture for flexibility and growth'
        },
        {
          icon: '👥',
          title: 'Patient-Centric',
          desc: 'Unified patient records accessible across healthcare facilities'
        },
        {
          icon: '⚡',
          title: 'Performance',
          desc: 'Optimized for high-volume transactions and real-time data access'
        }
      ]
    },
    {
      type: 'content',
      title: 'Expected Benefits',
      background: 'https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&w=1920',
      content: [
        {
          heading: 'Clinical Excellence',
          text: 'Improved patient care quality through comprehensive health records and clinical decision support systems.'
        },
        {
          heading: 'Operational Efficiency',
          text: 'Streamlined workflows, reduced administrative burden, and optimized resource utilization across facilities.'
        },
        {
          heading: 'Strategic Value',
          text: 'Enhanced data analytics capabilities for policy-making, research, and public health management.'
        }
      ]
    },
    {
      type: 'content',
      title: 'Implementation Considerations',
      background: 'https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=1920',
      content: [
        {
          heading: 'Phased Approach',
          text: 'Gradual rollout starting with pilot facilities, followed by regional expansion and national integration.'
        },
        {
          heading: 'Change Management',
          text: 'Comprehensive training programs, stakeholder engagement, and user adoption strategies.'
        },
        {
          heading: 'Sustainability',
          text: 'Long-term support model with continuous improvement, monitoring, and governance frameworks.'
        }
      ]
    },
    {
      type: 'conclusion',
      title: 'Conclusion',
      background: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1920',
      points: [
        'Comprehensive framework for healthcare information systems transformation',
        'Addresses critical challenges of interoperability, security, and scalability',
        'Supports sustainable healthcare delivery and improved patient outcomes',
        'Ensures compliance with national data protection regulations',
        'Provides foundation for digital health innovation in South Africa'
      ]
    },
    {
      type: 'references',
      title: 'References',
      background: 'https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=1920',
      references: [
        'Garces Rodriguez, L.M., Ampatzoglou, A., Avgeriou, P. and Nakagawa, E.Y. (2022). A Reference Architecture for Healthcare Supportive Home Systems. IEEE Access, 10, pp. 35965–35981.',
        'Gohar, A.N., Abdelmawgoud, S.A. and Farhan, M.S. (2022). A Patient-Centric Healthcare Framework Reference Architecture for Better Semantic Interoperability Based on Blockchain, Cloud, and IoT. IEEE Access, 10, pp. 92137–92157.',
        'Seebregts, C., Dane, P., Parsons, A.N., Fogwill, T., Barron, P., Benjamin, P. and Fraser, H.S.F. (2018). Designing for Scale: Optimising the Health Information System Architecture for Mobile Maternal Health Messaging in South Africa (MomConnect). BMJ Global Health, 3 (Suppl 2), pp. 1–7.',
        'Tummers, J., Tobi, H., Catal, C. and Tekinerdogan, B. (2021). Designing a Reference Architecture for Health Information Systems. BMC Medical Informatics and Decision Making, 21, pp. 1–14.',
        'Udekwe, E., Iwu, C.G. and Obadire, O.S. (2024). Impact of Human Resource Information System Performance for Sustainable Health Sector in South Africa. Electronic Journal of Knowledge Management, 22 (2), pp. 84–98.'
      ]
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const downloadPDF = async () => {
    if (!slideRef.current) return;

    const downloadBtn = document.getElementById('presentation-download-btn');
    if (downloadBtn) downloadBtn.style.display = 'none';

    try {
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      for (let i = 0; i < slides.length; i++) {
        setCurrentSlide(i);
        await new Promise(resolve => setTimeout(resolve, 500));

        const canvas = await html2canvas(slideRef.current, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#1f2937'
        });

        const imgWidth = 297;
        const imgHeight = 210;
        const imgData = canvas.toDataURL('image/png');

        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      }

      pdf.save('healthcare-presentation.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      if (downloadBtn) downloadBtn.style.display = 'flex';
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 relative" ref={slideRef}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slide.background})`,
            filter: 'brightness(0.3)'
          }}
        />

        <div className="relative z-10 h-full flex items-center justify-center p-12">
          <div className="max-w-6xl w-full">
            {slide.type === 'title' && (
              <div className="text-center text-white">
                <h1 className="text-6xl font-bold mb-8 leading-tight drop-shadow-2xl">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <h2 className="text-3xl font-light mb-12 text-blue-300 drop-shadow-lg">
                    {slide.subtitle}
                  </h2>
                )}
                <div className="mt-16">
                  <p className="text-2xl font-semibold mb-2">{slide.author}</p>
                  <p className="text-xl text-gray-300">{slide.institution}</p>
                </div>
              </div>
            )}

            {slide.type === 'content' && (
              <div className="text-white">
                <h2 className="text-5xl font-bold mb-12 text-center drop-shadow-2xl border-b-4 border-blue-500 pb-4">
                  {slide.title}
                </h2>
                <div className="space-y-8">
                  {slide.content.map((item, idx) => (
                    <div key={idx} className="bg-black bg-opacity-50 p-6 rounded-xl backdrop-blur-sm border-l-4 border-blue-500">
                      <h3 className="text-2xl font-bold mb-3 text-blue-300">{item.heading}</h3>
                      <p className="text-xl leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {slide.type === 'architecture' && (
              <div className="text-white">
                <h2 className="text-5xl font-bold mb-12 text-center drop-shadow-2xl border-b-4 border-blue-500 pb-4">
                  {slide.title}
                </h2>
                <div className="space-y-4">
                  {slide.layers.map((layer, idx) => (
                    <div
                      key={idx}
                      className={`bg-gradient-to-r ${layer.color} p-6 rounded-xl shadow-2xl transform transition-transform hover:scale-105`}
                    >
                      <h3 className="text-2xl font-bold mb-2">{layer.name}</h3>
                      <p className="text-lg text-white">{layer.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {slide.type === 'diagram' && (
              <div className="text-white">
                <h2 className="text-5xl font-bold mb-12 text-center drop-shadow-2xl border-b-4 border-blue-500 pb-4">
                  {slide.title}
                </h2>
                <div className="bg-white bg-opacity-95 p-8 rounded-xl">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl text-xl font-bold mb-6">
                        Healthcare Providers & Patients
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-1 h-12 bg-gray-400"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center font-semibold">
                        Web Portal
                      </div>
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center font-semibold">
                        Mobile App
                      </div>
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center font-semibold">
                        Admin Dashboard
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-1 h-12 bg-gray-400"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg text-center font-semibold">
                        Electronic Health Records
                      </div>
                      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg text-center font-semibold">
                        Appointment Management
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-1 h-12 bg-gray-400"></div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-lg text-center">
                      <div className="font-bold text-lg mb-2">Integration & Interoperability Layer</div>
                      <div className="text-sm">HL7 FHIR API | REST Services | Message Queue</div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-1 h-12 bg-gray-400"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-lg text-center font-semibold text-sm">
                        Patient Database
                      </div>
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-lg text-center font-semibold text-sm">
                        Clinical Data
                      </div>
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-lg text-center font-semibold text-sm">
                        Analytics Store
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-1 h-12 bg-gray-400"></div>
                    </div>

                    <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg text-center">
                      <div className="font-bold text-lg mb-2">Infrastructure Layer</div>
                      <div className="text-sm">Hybrid Cloud | Security | Monitoring | Backup</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {slide.type === 'features' && (
              <div className="text-white">
                <h2 className="text-5xl font-bold mb-12 text-center drop-shadow-2xl border-b-4 border-blue-500 pb-4">
                  {slide.title}
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {slide.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-black bg-opacity-50 p-6 rounded-xl backdrop-blur-sm border-2 border-blue-500 transform transition-transform hover:scale-105"
                    >
                      <div className="text-4xl mb-3">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-blue-300">{feature.title}</h3>
                      <p className="text-base leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {slide.type === 'conclusion' && (
              <div className="text-white">
                <h2 className="text-5xl font-bold mb-12 text-center drop-shadow-2xl border-b-4 border-blue-500 pb-4">
                  {slide.title}
                </h2>
                <div className="bg-black bg-opacity-50 p-8 rounded-xl backdrop-blur-sm">
                  <ul className="space-y-6">
                    {slide.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-400 font-bold text-2xl mr-4">✓</span>
                        <span className="text-xl leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {slide.type === 'references' && (
              <div className="text-white">
                <h2 className="text-5xl font-bold mb-12 text-center drop-shadow-2xl border-b-4 border-blue-500 pb-4">
                  {slide.title}
                </h2>
                <div className="bg-black bg-opacity-50 p-8 rounded-xl backdrop-blur-sm max-h-[600px] overflow-y-auto">
                  <ol className="space-y-6">
                    {slide.references.map((ref, idx) => (
                      <li key={idx} className="text-base leading-relaxed">
                        <span className="text-blue-400 font-bold mr-3">[{idx + 1}]</span>
                        {ref}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-gray-800 border-t-2 border-gray-700 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Home size={20} />
              <span>Back to Poster</span>
            </button>
            <button
              id="presentation-download-btn"
              onClick={downloadPDF}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download size={20} />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-3 rounded-lg transition-colors ${
                currentSlide === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="text-white text-lg font-semibold">
              {currentSlide + 1} / {slides.length}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`p-3 rounded-lg transition-colors ${
                currentSlide === slides.length - 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentSlide ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
