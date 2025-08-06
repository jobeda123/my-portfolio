import { IconType } from '@/components/icons/types';
import { Section, SECTIONS } from '@/constants/sections';
import { SKILLS_INFO } from '@/constants/user';

// Helper functions for section management
export const getSectionIds = (): string[] => SECTIONS.map(section => section.id);

export const getSectionById = (id: string): Section | undefined => 
  SECTIONS.find(section => section.id === id);

export const getSectionLabel = (id: string): string => 
  getSectionById(id)?.label || id;

export const getSectionIcon = (id: string): IconType => 
  getSectionById(id)?.icon || 'resume';


 // Define random color options for categories
  const categoryColors = [
    'bg-emerald-100 text-emerald-800',
    'bg-teal-100 text-teal-800',
    'bg-cyan-100 text-cyan-800',
    'bg-blue-100 text-blue-800',
    'bg-indigo-100 text-indigo-800',
    'bg-purple-100 text-purple-800',
    // 'bg-pink-100 text-pink-800',
    // 'bg-rose-100 text-rose-800',
    'bg-orange-100 text-orange-800',
    'bg-amber-100 text-amber-800',
    'bg-yellow-100 text-yellow-800',
    'bg-lime-100 text-lime-800',
  ];

  // Get random color based on category name (consistent across renders)
  export const getCategoryColor = (categoryName: string) => {
    const hash = categoryName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return categoryColors[hash % categoryColors.length];
  };