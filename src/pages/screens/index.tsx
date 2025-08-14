import React from 'react';

type ScreenDef = { name: string; slug: string; Component: React.FC };

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\//g, '-')
    .replace(/_/g, '-')
    .replace(/-+/g, '-');
}

// Eagerly import all .tsx files in this folder except this index
const modules = import.meta.glob<Record<string, any>>('./*.tsx', { eager: true });

export const screens: ScreenDef[] = Object.entries(modules)
  .filter(([path]) => !/\/index\.tsx$/.test(path))
  .map(([path, mod]) => {
    const fileName = path.split('/').pop()!.replace(/\.tsx$/, '');
    const name = fileName;
    const slug = toSlug(name);
    const Component: React.FC = (mod as any).default;
    return { name, slug, Component };
  })
  // Stable sort by name for consistent menu
  .sort((a, b) => a.name.localeCompare(b.name));


