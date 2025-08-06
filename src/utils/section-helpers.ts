import { IconType } from '@/components/icons/types';
import { Section, SECTIONS } from '@/constants/sections';

// Helper functions for section management
export const getSectionIds = (): string[] => SECTIONS.map(section => section.id);

export const getSectionById = (id: string): Section | undefined => 
  SECTIONS.find(section => section.id === id);

export const getSectionLabel = (id: string): string => 
  getSectionById(id)?.label || id;

export const getSectionIcon = (id: string): IconType => 
  getSectionById(id)?.icon || 'resume';

