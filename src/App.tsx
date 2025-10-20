import { Database, Server, Shield, Users, Network, FileText, BarChart3, Globe, Activity, Stethoscope, Download, Presentation as PresentationIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Presentation from './Presentation';

function App() {
  const posterRef = useRef<HTMLDivElement>(null);
  const [showPresentation, setShowPresentation] = useState(false);

  const downloadPDF = async () => {
    if (!posterRef.current) return;

    const button = document.getElementById('download-button');
    if (button) button.style.display = 'none';

    try {
      const canvas = await html2canvas(posterRef.current, {
        scale: 3,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgWidth = 420;
      const imgHeight = 594;

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a2'
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('Health-Information-Systems-Poster-A2.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      if (button) button.style.display = 'flex';
    }
  };

  if (showPresentation) {
    return <Presentation onBack={() => setShowPresentation(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8">
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <button
          onClick={() => setShowPresentation(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 hover:scale-105 font-semibold"
        >
          <PresentationIcon className="w-5 h-5" />
          View Presentation
        </button>
        <button
          id="download-button"
          onClick={downloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 hover:scale-105 font-semibold"
        >
          <Download className="w-5 h-5" />
          Download A2 PDF
        </button>
      </div>
      <div ref={posterRef} className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 to-blue-800/95" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <Activity className="w-12 h-12 text-white" />
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <Database className="w-12 h-12 text-white" />
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <Stethoscope className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
              Designing a Reference Architecture for Health Information Systems in South Africa
            </h1>
            <div className="flex items-start justify-between mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-xl font-semibold">Okuhle Gebashe</p>
                <p className="text-lg opacity-90">Student No. 221797300</p>
              </div>
              <div className="text-right bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-lg font-semibold">Cape Peninsula University of Technology</p>
                <p className="text-base opacity-90">Advanced Diploma in ICT – Application Development</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-12">
          <div className="grid grid-cols-3 gap-8 mb-10">
            <div className="col-span-2 space-y-8">
              <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200 shadow-lg">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 p-3 rounded-lg shadow-md">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
                  </div>
                  <p className="text-gray-800 leading-relaxed text-lg">
                    South Africa's healthcare system faces significant challenges due to fragmented Health Information Systems (HIS).
                    The lack of standardized architecture results in poor interoperability between systems, inefficient data management,
                    and compliance issues with data protection regulations such as POPIA. A unified reference architecture is essential
                    to transform healthcare delivery, improve patient outcomes, and ensure efficient resource allocation across public
                    healthcare institutions.
                  </p>
                </div>
              </section>

              <section className="relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-2 border-red-300 shadow-lg">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/8376267/pexels-photo-8376267.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-500 p-3 rounded-lg shadow-md">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">Research Problem</h2>
                  </div>
                  <p className="text-gray-800 leading-relaxed font-semibold text-lg">
                    South Africa's public healthcare system lacks a unified reference architecture for Health Information Systems,
                    leading to inefficiencies, poor data integration across facilities, fragmented patient records, and significant
                    compliance risks regarding data privacy and security.
                  </p>
                </div>
              </section>

              <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl border-2 border-green-300 shadow-lg">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-600 p-3 rounded-lg shadow-md">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">Aim</h2>
                  </div>
                  <p className="text-gray-800 leading-relaxed font-semibold text-lg">
                    To design a scalable, interoperable, and secure reference architecture for Health Information Systems that
                    improves data flow, enhances operational efficiency, and ensures compliance with the Protection of Personal
                    Information Act (POPIA) across South African healthcare institutions.
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-xl shadow-xl border-2 border-blue-300">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-700 p-2 rounded-lg shadow-md">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Objectives</h2>
                  </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">1.</span>
                    <span className="text-gray-700">Identify stakeholder needs and architectural requirements for HIS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">2.</span>
                    <span className="text-gray-700">Develop a modular, scalable, and secure reference architecture framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">3.</span>
                    <span className="text-gray-700">Evaluate its feasibility in real-world healthcare contexts</span>
                  </li>
                </ul>
                </div>
              </section>

              <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-gray-50 p-6 rounded-xl shadow-xl border-2 border-gray-300">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gray-700 p-2 rounded-lg shadow-md">
                      <Network className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
                  </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">POPIA Compliance</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <Database className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Data Interoperability</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <Server className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Scalable Infrastructure</span>
                  </div>
                </div>
                </div>
              </section>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-10">
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl shadow-xl border-2 border-slate-300">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/5863389/pexels-photo-5863389.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Methodology</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This research employs a <span className="font-semibold">qualitative research design</span> combining:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><span className="font-semibold">Literature Review:</span> Analysis of existing HIS frameworks and architectural patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><span className="font-semibold">System Analysis:</span> Evaluation of current South African healthcare systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><span className="font-semibold">Case Studies:</span> Real-world implementation scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><span className="font-semibold">Expert Validation:</span> Consultation with healthcare IT professionals</span>
                </li>
              </ul>
              </div>
            </section>

            <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-xl border-2 border-green-300">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Findings</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The proposed reference architecture demonstrates significant potential for:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><span className="font-semibold">Enhanced Interoperability:</span> Seamless data exchange between healthcare facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><span className="font-semibold">Improved Data Security:</span> Compliance with POPIA through robust security layers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><span className="font-semibold">Operational Efficiency:</span> Reduced duplication and streamlined workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><span className="font-semibold">Scalability:</span> Adaptable framework for growing healthcare demands</span>
                </li>
              </ul>
              </div>
            </section>
          </div>

          <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl mb-8 shadow-2xl border-2 border-blue-500">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 drop-shadow-lg">Conclusion</h2>
            <p className="leading-relaxed text-lg">
              The proposed reference architecture provides a comprehensive framework for transforming South Africa's
              healthcare information systems. By addressing critical challenges of interoperability, security, and
              scalability, this architecture supports sustainable healthcare transformation and improved patient care
              delivery. Implementation of this framework can significantly enhance the efficiency and effectiveness of
              public healthcare institutions while ensuring compliance with national data protection regulations.
            </p>
            </div>
          </section>

          <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-slate-100 p-8 rounded-xl shadow-lg border-2 border-gray-300">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">References</h2>
                  <div className="space-y-3 text-sm text-gray-800">
                    <p className="leading-relaxed">
                      <span className="font-bold text-blue-600">1.</span> Garces Rodriguez, L.M., Ampatzoglou, A., Avgeriou, P. and Nakagawa, E.Y. (2022). A Reference Architecture for Healthcare Supportive Home Systems. <span className="italic">IEEE Access</span>, 10, pp. 35965–35981.
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-bold text-blue-600">2.</span> Gohar, A.N., Abdelmawgoud, S.A. and Farhan, M.S. (2022). A Patient-Centric Healthcare Framework Reference Architecture for Better Semantic Interoperability Based on Blockchain, Cloud, and IoT. <span className="italic">IEEE Access</span>, 10, pp. 92137–92157.
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-bold text-blue-600">3.</span> Seebregts, C., Dane, P., Parsons, A.N., Fogwill, T., Barron, P., Benjamin, P. and Fraser, H.S.F. (2018). Designing for Scale: Optimising the Health Information System Architecture for Mobile Maternal Health Messaging in South Africa (MomConnect). <span className="italic">BMJ Global Health</span>, 3 (Suppl 2), pp. 1–7.
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-bold text-blue-600">4.</span> Tummers, J., Tobi, H., Catal, C. and Tekinerdogan, B. (2021). Designing a Reference Architecture for Health Information Systems. <span className="italic">BMC Medical Informatics and Decision Making</span>, 21, pp. 1–14.
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-bold text-blue-600">5.</span> Udekwe, E., Iwu, C.G. and Obadire, O.S. (2024). Impact of Human Resource Information System Performance for Sustainable Health Sector in South Africa. <span className="italic">Electronic Journal of Knowledge Management</span>, 22 (2), pp. 84–98.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-white p-6 rounded-xl shadow-xl border-4 border-blue-600">
                    <div className="text-center mb-3">
                      <p className="text-xs font-bold text-gray-800 mb-2">Scan for Full Study Report</p>
                    </div>
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://1drv.ms/w/c/700679b871348793/ETWlOmqEII9OloAondbM53gB9wjFMz2-aeJJmv2Fwx5ROA?e=1Enoj4"
                      alt="QR Code to Study Report"
                      className="w-48 h-48"
                    />
                    <div className="text-center mt-3">
                      <p className="text-xs text-gray-600 font-medium">Access Complete Research</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 text-center">
          <p className="text-sm">Research Poster | Cape Peninsula University of Technology | 2024</p>
        </div>
      </div>
    </div>
  );
}

export default App;
