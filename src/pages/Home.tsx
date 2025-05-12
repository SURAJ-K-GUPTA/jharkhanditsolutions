import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Pencil, Monitor, Wrench, BarChart2, Code, Smartphone, Users, Globe, CheckCircle2 } from 'lucide-react';

const heroImages = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
];

const services = [
  { icon: <Monitor size={32} className="text-cyan-500" />, title: 'Web Design', desc: 'Modern, responsive, and creative web design.' },
  { icon: <Code size={32} className="text-orange-500" />, title: 'Web Development', desc: 'Full-stack web development for all needs.' },
  { icon: <Smartphone size={32} className="text-cyan-500" />, title: 'Mobile Apps', desc: 'Android & iOS app development.' },
  { icon: <BarChart2 size={32} className="text-orange-500" />, title: 'Digital Marketing', desc: 'SEO, SEM, and social media marketing.' },
  { icon: <Users size={32} className="text-cyan-500" />, title: 'UI/UX Design', desc: 'User-centric UI/UX for web & mobile.' },
  { icon: <Wrench size={32} className="text-orange-500" />, title: 'Software Solutions', desc: 'Custom software for your business.' },
  { icon: <Globe size={32} className="text-cyan-500" />, title: 'Domain & Hosting', desc: 'Reliable domain registration & hosting.' },
  { icon: <Pencil size={32} className="text-orange-500" />, title: 'Branding', desc: 'Logo, branding, and identity design.' },
];

const process = [
  {
    icon: <Pencil size={40} className="text-white" />,
    title: 'Planning',
    desc: "Our approach is strategic. We do not design work unless we set the goals, identify the target market and define the desired user action. As a first step, we dig. It's all about really getting under the skin of your business so that we understand it as well as you do."
  },
  {
    icon: <Monitor size={40} className="text-white" />,
    title: 'Designing',
    desc: 'JIS helps you uncover the opportunities of growth and innovation by Creative Web Design, Logo, Multimedia, PSD Conversation and print production services that creates new opportunities for your online business.'
  },
  {
    icon: <Wrench size={40} className="text-white" />,
    title: 'Development',
    desc: 'Our Web, Software and Mobile application development services help you address evolving market challenges by defining, designing and building applications tailored to meet your specific business requirements.'
  },
  {
    icon: <BarChart2 size={40} className="text-white" />,
    title: 'Marketing',
    desc: 'Professional Marketing services helps enterprises and businesses to leverage domain expertise, provides Guaranteed Search engine optimization, lead generation, conversion, social media, analytics Services to power your business.'
  },
];

const whyChoose = {
  heading: 'Why you Choose JIS for Complete IT Solutions?',
  subheading: 'Our Designers, Developers & Marketing team are here to Serve you !',
  description: `JIS is one of the most trusted offshore development companies today. We delivering the HIGHEST QUALITY of Designing, Development and Marketing services to businesses across all industries over the Globe, providing end-to-end IT Solutions. The company has made groundbreaking accomplishments in the field of Software Development, Mobile Apps Development, Web hosting, website Designing, web development, E-commerce solutions, Internet marketing, search engine optimization Services.`,
  values: [
    'Customer First',
    'Innovation & quality',
    'Teamwork',
    'Experienced and Certified Professional, we employ highly experienced consultants.',
    'Dedication',
    'Transparency',
    'One shop solution for all your IT Needs (Development, Design, Mobile App, SEO etc)',
  ],
};

const testimonials = [
  {
    quote: 'Good Cooperation',
    text: `I\'m very much satisfied with your high-quality web work. I would like to express my sincere thanks, gratitude and appreciation to all your nice staff for the excellent web service.`,
    name: 'Zaki Rahman',
    title: 'Director at Sadaf Public School',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: 'Great Experience',
    text: `JIS demonstrated us that they are highly dedicated and committed professionals which bring a wealth of knowledge and experience. They tackle challenges and get to the source of technical issues.`,
    name: 'Asif Kabir, Morocco',
    title: 'Md at Al-banki',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    quote: 'Excellent Work',
    text: `JIS demonstrated us that they are highly dedicated and committed professionals which bring a wealth of knowledge and experience. They tackle challenges and get to the source of technical issues.`,
    name: 'Bhanu Singh',
    title: 'Director at Hotel Genista Inn',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const navigate = useNavigate();

  // Simple auto-advance for hero images
  useEffect(() => {
    const interval = setInterval(() => setCurrent((c) => (c + 1) % heroImages.length), 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => setTestimonialIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center bg-zinc-100 overflow-hidden">
        {heroImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="hero"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ transition: 'opacity 0.7s' }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-20">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg text-center">Empowering Your Digital Presence</h1>
          <Button
            className="bg-orange-500 text-white font-bold px-8 py-3 text-lg rounded shadow-lg hover:bg-orange-600"
            onClick={() => navigate('/get-quote')}
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* Our Services and Expertise */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-zinc-800">Our Services and Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-zinc-50 rounded-xl shadow hover:shadow-lg p-6 flex flex-col items-center text-center border border-zinc-100 transition-all">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-zinc-800">{service.title}</h3>
                <p className="text-zinc-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
            {process.map((step, idx) => (
              <div key={step.title} className="flex flex-col items-center text-center flex-1 relative">
                <div className="relative mb-6 flex flex-col items-center">
                  <div className={`w-36 h-36 md:w-40 md:h-40 rounded-full border-4 flex items-center justify-center ${idx % 2 === 0 ? 'bg-orange-500 border-orange-200' : 'bg-cyan-400 border-cyan-200'}`}>
                    {step.icon}
                  </div>
                  {/* Connector line, only for non-last step */}
                  {idx !== process.length - 1 && (
                    <div className={`hidden md:block absolute top-1/2 right-[-50%] w-full h-0.5 border-t-2 border-dashed z-0 ${idx % 2 === 0 ? 'border-orange-300' : 'border-cyan-300'}`} style={{ left: '100%', width: '80px', transform: 'translateY(-50%)' }} />
                  )}
                </div>
                <h4 className="text-xl font-bold mb-2 text-zinc-700">{step.title}</h4>
                <p className="text-zinc-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JIS Section */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white leading-tight">{whyChoose.heading}</h2>
            <div className="text-lg font-semibold mb-4 text-orange-500">{whyChoose.subheading}</div>
            <p className="mb-4 text-zinc-700 dark:text-zinc-200">{whyChoose.description} <span className="font-semibold text-zinc-900 dark:text-white">Read more…</span></p>
            <div className="font-bold mb-2 text-zinc-900 dark:text-white">Our success is fueled by our commitment to the five core values :-</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-zinc-700 dark:text-zinc-200">
              {whyChoose.values.map((val, i) => (
                <div key={val} className="flex items-start gap-2">
                  <CheckCircle2 className="text-lime-500 mt-1" size={20} />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="flex-1 flex items-center justify-center">
            {/* Replace with your own SVG or image if available */}
            <img src="/rocket-illustration.svg" alt="Rocket Launch" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* What They Said Section */}
      <section className="py-16 bg-cyan-400 dark:bg-cyan-700">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white">What They Said</h2>
          <div className="text-center text-white mb-8">JIS is one of the most trusted offshore development companies today</div>
          <div className="relative flex items-center justify-center">
            {/* Carousel Controls */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-600/70 hover:bg-cyan-800 text-white rounded-full p-2 z-10"
              onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              &#8592;
            </button>
            <div className="flex-1 flex justify-center">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`transition-all duration-500 ${i === testimonialIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} w-full max-w-md mx-2 bg-white/70 dark:bg-zinc-900/80 rounded-lg shadow-lg p-8 flex flex-col items-center`}
                  style={{ position: i === testimonialIdx ? 'relative' : 'absolute' }}
                >
                  <div className="text-lg font-bold text-cyan-700 dark:text-cyan-300 mb-2">"{t.quote}"</div>
                  <div className="text-zinc-800 dark:text-zinc-100 mb-4 text-center">{t.text}</div>
                  <div className="flex items-center gap-4 mt-4">
                    <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-cyan-400 object-cover" />
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white">{t.name}</div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-300">{t.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-600/70 hover:bg-cyan-800 text-white rounded-full p-2 z-10"
              onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 