import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-center px-4">
      <div className="flex flex-col items-center gap-4">
        <AlertTriangle size={64} className="text-orange-500 mb-2" />
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">404 - Page Not Found</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mb-6 max-w-xl">Sorry, the page you are looking for does not exist or has been moved.</p>
        <Button className="bg-orange-500 text-white font-bold px-6 py-2 rounded hover:bg-orange-600" onClick={() => navigate('/')}>Go to Home</Button>
      </div>
    </div>
  );
} 