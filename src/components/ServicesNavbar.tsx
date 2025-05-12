import { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const services = [
  {
    label: 'WEB DESIGN & GRAPHICS',
    children: [
      { label: 'Logo Design' },
      { label: 'UI/UX Design' },
      { label: 'Banner Design' },
    ],
  },
  {
    label: 'WEB DEVELOPMENT',
    children: [
      { label: 'Frontend' },
      { label: 'Backend' },
      { label: 'Full Stack' },
    ],
  },
  {
    label: 'SOFTWARE & MOBILE',
    children: [
      { label: 'Android Apps' },
      { label: 'iOS Apps' },
      { label: 'Desktop Apps' },
    ],
  },
  {
    label: 'WEB MARKETING',
    children: [
      { label: 'SEO' },
      { label: 'Social Media' },
      { label: 'Email Marketing' },
    ],
  },
  { label: 'HIRE US', children: [{ label: 'Freelancer' }, { label: 'Full Time' }] },
  { label: 'PORTFOLIO', children: [{ label: 'Web' }, { label: 'Mobile' }] },
  { label: 'COMPANY', children: [{ label: 'About' }, { label: 'Team' }] },
  { label: 'CAREER', children: [{ label: 'Openings' }, { label: 'Internships' }] },
];

export function ServicesNavbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="w-full bg-cyan-400 py-2 flex justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-2 gap-2 md:gap-0">
        {/* Nav Items */}
        <div className="flex gap-2 md:gap-3 items-center flex-nowrap overflow-x-auto md:overflow-visible w-full md:w-auto pb-2 md:pb-0 scrollbar-thin scrollbar-thumb-cyan-300 scrollbar-track-cyan-100">
          {services.map((service) => (
            <Popover key={service.label}>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="text-white font-semibold text-xs md:text-sm px-1 md:px-2 py-1 hover:bg-cyan-500 focus:bg-cyan-600 whitespace-nowrap">
                  {service.label}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-white text-zinc-800 min-w-[140px] shadow-lg p-2">
                <ul>
                  {service.children?.map((child) => (
                    <li key={child.label} className="py-1 px-2 hover:bg-cyan-100 rounded cursor-pointer text-xs md:text-sm">
                      {child.label}
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          ))}
        </div>
        {/* Divider */}
        <div className="hidden md:block h-6 w-px bg-white/60 mx-2" />
        {/* Icons */}
        <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-0">
          {/* Search */}
          <Button variant="ghost" className="p-2" onClick={() => setSearchOpen(true)}>
            <Search className="text-black" size={20} />
          </Button>
          {/* Hamburger/Sidebar */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2">
                <Menu className="text-black" size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-md bg-white dark:bg-zinc-900">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                <form className="flex flex-col gap-4">
                  <input className="border rounded px-3 py-2" placeholder="Name" />
                  <input className="border rounded px-3 py-2" placeholder="Email" />
                  <textarea className="border rounded px-3 py-2" placeholder="Message" rows={4} />
                  <Button type="submit" className="bg-cyan-500 text-white font-bold hover:bg-cyan-600">Send</Button>
                </form>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-2">
            <Search className="text-cyan-500" size={20} />
            <input
              autoFocus
              className="outline-none border-b border-cyan-400 px-2 py-1 text-base"
              placeholder="Search site..."
              onBlur={() => setSearchOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
} 