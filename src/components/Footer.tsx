import { Facebook, Youtube, Linkedin } from 'lucide-react';

const recentPosts = [
  'Poetry App Design Development',
  'Hospital Management System Development',
  'Gift Plan Development',
  'Fuel Delivery App Development',
  'Blood Bank Software',
];

const webGraphics = [
  'Web Designing',
  'Website Redesigning',
  'Logo Designing',
  'Facebook Landing Pages',
  'Ade Banner Design',
  'Mailer Designing',
  'Magento Development',
  'WordPress Web Development',
  'Joomla Web Development',
];

const softwareMobile = [
  'Drupal Web Development',
  'ASP .Net Development',
  'Software Development',
  'Retail Software',
  'Android Mobile Development',
  'iPhone Mobile Development',
  'Windows Mobile Development',
];

const webMarketing = [
  'Search Engine Optimization Services',
  'Dedicated SEO Services',
  'Affordable SMO Services',
  'Reputation Management',
  'Directory Submission Services',
  'Link Baiting Service',
  'Blog Commenting Service',
  'Forum Link Building Service',
  'Election Management Services',
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-zinc-100 pt-12 pb-4 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-zinc-800 pb-10">
        {/* Recent Posts */}
        <div>
          <h4 className="font-bold mb-4 text-white">Recent Posts</h4>
          <ul className="space-y-2 text-zinc-300 text-sm">
            {recentPosts.map((post) => (
              <li key={post} className="border-b border-zinc-800 pb-1 last:border-b-0 last:pb-0">
                <a href="#" className="hover:text-orange-400 transition-colors duration-150">{post}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Web & Graphics */}
        <div>
          <h4 className="font-bold mb-4 text-white">Web & Graphics</h4>
          <ul className="space-y-1 text-zinc-300 text-sm">
            {webGraphics.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-150">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Software & Mobile */}
        <div>
          <h4 className="font-bold mb-4 text-white">Software & Mobile</h4>
          <ul className="space-y-1 text-zinc-300 text-sm">
            {softwareMobile.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-150">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Web Marketing */}
        <div>
          <h4 className="font-bold mb-4 text-white">Web Marketing</h4>
          <ul className="space-y-1 text-zinc-300 text-sm">
            {webMarketing.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-cyan-400 transition-colors duration-150">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Socials, Payment, Hiring */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          {/* WhatsApp/Payment */}
          <a href="#" className="w-full flex items-center gap-2 bg-green-700 rounded-lg px-4 py-2 text-white font-bold text-lg justify-center hover:bg-green-800 transition shadow-md">
            <img src="/whatsapp.svg" alt="WhatsApp" className="w-7 h-7" />
            Whatsapp Chat with us now!
          </a>
          <div className="w-full flex flex-col items-center">
            <span className="font-bold text-white mb-1">We Accept Payment Method</span>
            <a href="#" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl rounded px-4 py-2 text-center transition shadow">Pay Online</a>
          </div>
          {/* Hiring Banner */}
          <div className="w-full bg-orange-100 border-2 border-orange-400 rounded-lg p-3 flex flex-col items-center text-center mt-2 shadow-md">
            <img src="/logo.png" alt="JIS Logo" className="w-16 h-10 object-contain mb-2" />
            <div className="font-bold text-orange-700">ANDROID DEVELOPER<br /><span className="text-xs">(2+ year exp)</span></div>
            <div className="font-bold text-orange-700 mt-1">PHP DEVELOPER<br /><span className="text-xs">(0-2 YEAR EXP)</span></div>
            <div className="my-2">
              <span className="inline-block bg-orange-500 text-white font-bold rounded-full px-3 py-1 text-sm shadow">WE'RE HIRING!</span>
            </div>
            <div className="text-xs text-zinc-700">Sharo CV or Call Us<br />info@jharkhanditsolutions.com / 9031143738</div>
          </div>
          {/* Socials */}
          <div className="mt-4">
            <span className="font-bold text-white">Follow Us on</span>
            <div className="flex gap-2 mt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} className="bg-zinc-800 hover:bg-cyan-500 rounded p-2 transition shadow" aria-label={label}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto px-4 mt-10 border-t border-zinc-800 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
          <a href="#" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="#" className="hover:text-orange-400 transition-colors">About us</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Career</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Blog</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-orange-400 transition-colors">FAQ's</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Sitemap</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Copyright</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Refund Policy</a>
        </div>
        <div className="flex items-center gap-2">
          <span>Copyrights © 2011-20 <span className="text-white">Jharkhand IT Solutions</span> - All rights reserved.</span>
          <a href="#" className="ml-2"><img src="/dmca-badge.svg" alt="DMCA" className="h-6" /></a>
        </div>
      </div>
    </footer>
  );
} 