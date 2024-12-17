import React, { useEffect } from 'react';
import { Activity, Heart, Clock, Users, ArrowRight, MessageSquare } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';
import FeatureSection from './components/FeatureSection';
import ImplementationTimeline from './components/ImplementationTimeline';
import VideoResults from './components/VideoResults';
import MetricsCard from './components/MetricsCard';
import Header from './components/Header/Header';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-[#0A0B14] text-white overflow-hidden">
        <div className="container mx-auto px-6 h-full pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl" data-aos="fade-right">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Transforming Heart Failure Care Through Connected Technology
              </h1>
              <p className="text-xl text-gray-300">
                Buildable and leading healthcare providers partnered to revolutionize heart failure monitoring through an innovative mobile app that connects patients, doctors, and life-saving data in real-time
              </p>
            </div>
            <div className="relative" data-aos="fade-left">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-lg shadow-xl"
              >
                <source
                  src="https://ik.imagekit.io/buildable/20241216_0013_Smart%20Health%20Monitoring_simple_compose_01jf78dy07e6gagj9qanbmfcby.mp4?updatedAt=1734338884306"
                  type="video/mp4"
                />
              </video>
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

      {/* Journey Section */}
      <section className="bg-[#0A0B14] text-white py-24 -mt-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:ml-[25%]" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-8 text-[#2DD4BF]">
                The beginning of our journey together
              </h2>
              <p className="text-gray-300 mb-6">
                Heart failure monitoring was at a critical turning point. With the rise of remote patient care and wearable technology, healthcare providers needed a technology partner who could help them harness the power of real-time patient data to save lives.
              </p>
              <p className="text-gray-300">
                Our partnership began with a major healthcare network in 2021 to support their digital monitoring initiative. The challenge was clear: create an intuitive mobile app that could seamlessly connect OMRON wristbands, electronic health records, and healthcare providers - all while meeting strict medical compliance standards and an aggressive 4-month timeline.
              </p>
              <p className="text-gray-300">
                Today, this platform is transforming how providers monitor and respond to heart failure patients. Here's how this partnership is redefining patient care through technology.
              </p>
            </div>
            <div className="relative lg:-mr-12" data-aos="fade-left">
              <img
                src="https://ik.imagekit.io/buildable/169120ae-d3f5-45a7-a2e4-e8d152f9fa27.png?updatedAt=1734340240933"
                alt="Blood Pressure Monitoring"
                className="w-[90%] ml-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Section */}
      <section className="bg-[#2DD4BF] text-black py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:ml-[10%] relative" data-aos="fade-right">
              <div className="bg-[#0A0B14] text-[#F8B42E] p-8 rounded-lg shadow-xl max-w-lg">
                <p className="mb-6 leading-relaxed">
                  The amount of data we receive from patient monitoring devices was overwhelming our staff. Buildable's solution transformed this challenge into an opportunity, helping us identify at-risk patients before they become critical cases.
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Dr. Michael Lavigne"
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">Dr. Michael Lavigne</h4>
                    <p className="text-sm text-gray-300">Director of Cardiology, United Health System</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pr-[10%]" data-aos="fade-left">
              <h2 className="text-4xl font-bold mb-8">
                Empowering patient care and beyond
              </h2>
              <p className="text-lg">
                Aligned with modern healthcare's focus on prevention, Buildable's heart failure monitoring system reinvented the patient care experience through seamless data integration. While supporting immediate response to critical cases, we're also driving more efficient and accessible healthcare monitoring across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Landing Page Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:pr-[10%]" data-aos="fade-right">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Simplifying life-saving monitoring
              </h2>
              <p className="text-xl mb-4">
                Healthcare providers leveraged Buildable's unique visualization capabilities to prototype a new way to monitor patient vitals.
                Unlike traditional systems that buried critical data in complex interfaces, we introduced an intuitive digital experience featuring:
              </p>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#2DD4BF]/10 rounded-[2rem] -rotate-3"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-xl">
                  <ul className="space-y-6">
                    {[
                      'Real-time vitals monitoring',
                      'Automated medication reminders',
                      'Trend analysis and early warning systems',
                      'One-touch access to healthcare providers',
                      'Integration with major EHR systems'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-[#2DD4BF] rounded-full mr-4"></div>
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Results Section */}
      <section className="py-24 bg-gray-100">
        <div className="relative w-[60%] mx-auto">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg shadow-xl"
          >
            <source
              src="https://ik.imagekit.io/buildable/Tech%20Architecture.mp4?updatedAt=1734391746354"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-[#0A0B14]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white" data-aos="fade-up">
            The Results Speak For Themselves
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up">
            Within three months of launch, the platform was processing over 100,000 daily readings with a 53% increase in early interventions for at-risk patients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
            <MetricsCard
              icon={<Activity className="w-8 h-8 text-[#2DD4BF]" />}
              number="8.2M"
              label="Daily Readings"
            />
            <MetricsCard
              icon={<Clock className="w-8 h-8 text-[#2DD4BF]" />}
              number="15min"
              label="Response Time"
            />
            <MetricsCard
              icon={<Users className="w-8 h-8 text-[#2DD4BF]" />}
              number="50,000+"
              label="Patients Protected"
            />
          </div>
        </div>
      </section>
      
      {/* Implementation Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">Easy to implement, easy to scale</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up">
              We partnered to build a scalable digital experience ensuring providers could monitor more patients more effectively. The solution takes providers from data overload to actionable insights in 3 steps and less than 15 seconds, accelerating critical care response.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12" data-aos="fade-right">
              <h3 className="text-2xl font-bold text-[#2DD4BF]">Implementation Milestones</h3>
              <div className="space-y-8">
                {[
                  { time: 'Week 1', count: '100', label: 'patients monitored' },
                  { time: 'Month 1', count: '1,000', label: 'patients tracked' },
                  { time: 'Month 3', count: '5,000', label: 'active monitoring sessions' },
                  { time: 'Today', count: '10,000+', label: 'patients across multiple healthcare networks' }
                ].map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-6">
                    <div className="w-24 h-24 rounded-full border-2 border-[#2DD4BF] flex items-center justify-center bg-white">
                      <span className="text-2xl font-bold">{milestone.count}</span>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-[#2DD4BF]">{milestone.time}</div>
                      <div className="text-gray-600">{milestone.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <div className="absolute -inset-4 bg-[#2DD4BF]/10 rounded-[2rem] -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                alt="Medical monitoring dashboard"
                className="relative rounded-xl shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#2DD4BF] text-white p-4 rounded-lg shadow-lg">
                <div className="font-bold">Current Goal</div>
                <div className="text-2xl font-bold">25,000 patients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <FeatureSection />

      {/* Testimonial Section */}
      <section className="py-24 bg-[#0A0B14] text-white">
        <div className="container mx-auto px-6">
          <Testimonial />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#0A0B14]">
        <div className="container mx-auto px-6">
          <Stats />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-teal-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-10" data-aos="fade-up">Ready to Transform Patient Care?</h2>
          <button 
            className="bg-white text-teal-500 px-10 py-5 rounded-xl font-semibold hover:bg-gray-100 
                     transition-all duration-300 transform hover:scale-105 hover:shadow-xl 
                     inline-flex items-center"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Explore Our Healthcare Studio
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;