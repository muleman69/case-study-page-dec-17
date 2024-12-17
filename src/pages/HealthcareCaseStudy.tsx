import React from 'react';
import Header from '../components/Header/Header';
import { Activity, Database, Stethoscope, CheckSquare } from 'lucide-react';
import ResultsSection from '../components/ResultsSection';

const HealthcareCaseStudy = () => {
  return (
    <div className="w-full">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#0A0B14] text-white overflow-hidden">
        <div className="container mx-auto px-6 pt-32 pb-24 max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              {/* Breadcrumbs */}
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
                <a href="/" className="hover:text-[#F8B42E]">HOME</a>
                <span className="text-gray-600">|</span>
                <a href="/case-studies" className="hover:text-[#F8B42E]">CASE STUDIES</a>
                <span className="text-gray-600">|</span>
                <span className="text-[#F8B42E]">HEALTHCARE</span>
              </div>

              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Life-Saving Data: Revolutionizing Heart Failure Care Through Mobile Innovation
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Discover how we created a mobile app that empowers heart failure patients and their healthcare providers to better understand, manage, and improve treatment outcomes—guided by a systematic DMAIC approach.
              </p>
              
              <div className="space-y-6">
                <h3 className="text-[#F8B42E]">Services:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Activity className="w-5 h-5" />,
                      text: 'Data Collection & Visualization'
                    },
                    {
                      icon: <Database className="w-5 h-5" />,
                      text: 'EHR Integration via REDOX APIs'
                    },
                    {
                      icon: <Stethoscope className="w-5 h-5" />,
                      text: 'Remote Patient Monitoring & Health Surveys'
                    },
                    {
                      icon: <CheckSquare className="w-5 h-5" />,
                      text: 'Automated QA Processes & Quality Assurance'
                    }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-[#F8B42E]">{service.icon}</div>
                      <span className="text-sm">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <img
                src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/2640ea5c-8295-482b-905c-13ddf942e6a0.png?updatedAt=1734464780289"
                alt="Heart Failure App Interface"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="relative max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Decorative Lines */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#0A0B14]/10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-px bg-[#0A0B14]/10"></div>

            {/* Client Info */}
            <div className="px-8 space-y-6" data-aos="fade-right">
              <h3 className="text-xl font-bold text-[#0A0B14]">CLIENT INFO</h3>
              <p className="text-gray-600 text-sm">
                Leading healthcare network serving multiple metropolitan areas, specializing in cardiology and preventive care.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-[#0A0B14] text-sm font-medium mb-1">Industry</h4>
                  <p className="text-gray-600 text-sm">Healthcare / Medical Technology</p>
                </div>
                
                <div>
                  <h4 className="text-[#0A0B14] text-sm font-medium mb-1">Company type</h4>
                  <p className="text-gray-600 text-sm">Enterprise Healthcare System</p>
                </div>
                
                <div>
                  <h4 className="text-[#0A0B14] text-sm font-medium mb-1">Region</h4>
                  <p className="text-gray-600 text-sm">United States</p>
                </div>
              </div>
            </div>
            
            {/* Tech Info */}
            <div className="px-8 space-y-6" data-aos="fade-left">
              <h3 className="text-xl font-bold text-[#0A0B14]">TECH INFO</h3>
              <p className="text-gray-600 text-sm">
                Real-time health data processing & visualization
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-[#0A0B14] text-sm font-medium mb-1">Technologies</h4>
                  <p className="text-gray-600 text-sm">.NET Core | Flutter | Angular</p>
                </div>
                
                <div>
                  <h4 className="text-[#0A0B14] text-sm font-medium mb-1">Platforms</h4>
                  <p className="text-gray-600 text-sm">iOS | Android | Web | Provider Portal</p>
                </div>
                
                <div>
                  <h4 className="text-[#0A0B14] text-sm font-medium mb-1">Tech Stack</h4>
                  <div className="space-y-1 text-gray-600 text-sm">
                    <p>Backend: .NET Core | Entity Framework | LINQ | MSSQL Server</p>
                    <p>Frontend: Angular | TypeScript | Bootstrap</p>
                    <p>Mobile: Flutter | ReactiveX | OMRON SDK</p>
                    <p>Infrastructure: Azure Cloud | HIPAA-Compliant Storage</p>
                    <p>Integration: HL7 FHIR | REDOX API</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-[#0A0B14] text-white py-24">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[180px] font-bold leading-none bg-gradient-to-r from-[#2DD4BF] to-[#F8B42E] bg-clip-text text-transparent">
              4
              <span className="text-6xl align-top">Months</span>
            </h2>
            <h3 className="text-5xl font-bold mt-6 mb-12">
              FROM CONCEPT TO LIFE SAVING SOLUTION
            </h3>
            <button className="inline-flex items-center px-8 py-3 border-2 border-[#2DD4BF] text-[#2DD4BF] rounded-full hover:bg-[#2DD4BF] hover:text-black transition-all duration-300">
              Let's connect
            </button>
          </div>
        </div>
      </section>

      {/* DMAIC Process Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="space-y-24">
            {/* Define Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="relative lg:col-span-1">
                <img
                  src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/2640ea5c-8295-482b-905c-13ddf942e6a0.png?updatedAt=1734464780289"
                  alt="Heart Failure App Interface"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#2DD4BF] mb-6">DEFINE</h2>
                <p className="text-gray-600 mb-6">
                  Our client had a visionary goal: to empower heart failure patients to take control of their health by connecting wearable OMRON wristbands, a mobile application, and an Electronic Health Record (EHR) system. They needed a solution that would:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Continuously monitor patient vitals (blood pressure, symptoms, lab results)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Visualize critical health data in a simple, accessible way</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Integrate seamlessly with EHR systems (via REDOX APIs) to keep healthcare providers informed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Provide daily and bi-monthly health surveys for patients, alongside medication reminders</span>
                  </li>
                </ul>
                <p className="text-gray-600">
                  With a tight development timeline of under four months, our challenge was to build a secure, user-friendly mobile tool that would foster trust, improve patient outcomes, and streamline communication between patients and their care teams.
                </p>
              </div>
            </div>

            {/* Measure Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="relative lg:col-span-1">
                <img
                  src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/2640ea5c-8295-482b-905c-13ddf942e6a0.png?updatedAt=1734464780289"
                  alt="Heart Failure App Interface"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#2DD4BF] mb-6">MEASURE</h2>
                <p className="text-gray-600 mb-6">
                  To ensure patient and provider needs were met, we established clear performance metrics:
                </p>
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Data Collection Accuracy</h3>
                    <p className="text-gray-600">The app had to reliably capture vital signs, medication adherence, and symptom reports from OMRON wristbands and patient inputs.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">User Engagement & Accessibility</h3>
                    <p className="text-gray-600">We measured the ease of accessing information—how quickly patients could view their data and how reliably healthcare providers could retrieve updated patient records.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Integration Speed & Stability</h3>
                    <p className="text-gray-600">We closely monitored how quickly and effectively the app communicated with the backend, EHR systems, and OMRON APIs, ensuring minimal downtime and swift response times.</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  By maintaining a tight feedback loop with stakeholders, we adapted swiftly to evolving requirements, ensuring an empathetic user experience that supports vulnerable patients at a critical time in their healthcare journey.
                </p>
              </div>
            </div>

            {/* Analyze Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="relative lg:col-span-1">
                <img
                  src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/2640ea5c-8295-482b-905c-13ddf942e6a0.png?updatedAt=1734464780289"
                  alt="Heart Failure App Interface"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#2DD4BF] mb-6">ANALYZE</h2>
                <p className="text-gray-600 mb-6">
                  Our analysis revealed several key insights and challenges:
                </p>
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Limited API Documentation</h3>
                    <p className="text-gray-600">The OMRON APIs were not well documented, requiring repeated communication with OMRON to resolve integration hurdles.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Complex Data Flows</h3>
                    <p className="text-gray-600">Synchronizing data between the wearable device, mobile app, EHR system, and backend demanded meticulous attention to data models and validation protocols.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Time Constraints</h3>
                    <p className="text-gray-600">Under a four-month schedule, we had to streamline our approach. We focused on an MVP (Minimum Viable Product) that delivered core value—surveys, vitals monitoring, medication reminders—while leaving room for iterative improvements.</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  These findings guided us toward a solution that balanced complexity with clarity, ensuring patients and providers received the information they needed without technical friction.
                </p>
              </div>
            </div>

            {/* Improve Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="relative lg:col-span-1">
                <img
                  src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/2640ea5c-8295-482b-905c-13ddf942e6a0.png?updatedAt=1734464780289"
                  alt="Heart Failure App Interface"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#2DD4BF] mb-6">IMPROVE</h2>
                <p className="text-gray-600 mb-6">
                  With clarity around the obstacles, we implemented targeted enhancements:
                </p>
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Refined User Experience</h3>
                    <p className="text-gray-600">We created intuitive interfaces that help patients easily interpret vital signs, symptom alerts, and medications. Built-in reminders and readable graphs foster patient confidence and engagement in their health journey.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Robust EHR Integration</h3>
                    <p className="text-gray-600">By leveraging REDOX APIs, we ensured data from the app flowed seamlessly into EHR systems, giving healthcare providers immediate access to updated patient information—reinforcing a sense of partnership and trust in the treatment process.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Iterative Prototyping & Collaboration</h3>
                    <p className="text-gray-600">Through close collaboration with the client, we prioritized user flows and content, ensuring the MVP delivered meaningful patient value first. As a result, patients can now quickly view their data, track their progress, and share insights with their care teams.</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  At the heart of these improvements is a deep empathy for patients, who now have a clearer window into their health, and providers, who are better equipped to offer timely, personalized support.
                </p>
              </div>
            </div>

            {/* Control Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="relative lg:col-span-1">
                <img
                  src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/2640ea5c-8295-482b-905c-13ddf942e6a0.png?updatedAt=1734464780289"
                  alt="Heart Failure App Interface"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#2DD4BF] mb-6">CONTROL</h2>
                <p className="text-gray-600 mb-6">
                  To maintain the integrity and effectiveness of the heart failure treatment app, we established a systematic quality assurance process:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] text-sm mb-2">Automated & Manual QA</h3>
                    <p className="text-gray-600 text-sm">Each sprint concluded with rigorous testing involving engineers, designers, and a dedicated QA team to ensure reliability and accuracy.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] text-sm mb-2">UAT Environment for Client Validation</h3>
                    <p className="text-gray-600 text-sm">We deployed a production-ready application to a QA server, empowering the client to run User Acceptance Testing before going live.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] text-sm mb-2">Ongoing Research Access</h3>
                    <p className="text-gray-600 text-sm">By delivering structured, accessible patient data, the solution supports ongoing heart failure research, enabling new insights and improved care protocols over time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <ResultsSection />
    </div>
  );
};

export default HealthcareCaseStudy;