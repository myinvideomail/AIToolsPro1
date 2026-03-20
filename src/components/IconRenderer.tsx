import * as Icons from 'lucide-react';

export function IconRenderer({ name, className }: { name: string, className?: string }) {
  const Icon = (Icons as any)[name] || Icons.Wrench;
  return <Icon className={className} />;
}
