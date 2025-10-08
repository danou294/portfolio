import { Language } from '../context/LanguageContext';
import frTranslations from './translations/fr.json';
import enTranslations from './translations/en.json';

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
  content: string;
  githubLink?: string;
  liveLink?: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    tiktok?: string;
  };
}

// Fonction pour obtenir les articles traduits
export function getArticles(language: Language = 'fr'): Article[] {
  const translations = language === 'fr' ? frTranslations : enTranslations;

  return [
    {
      id: 'codesphere',
      title: translations.projects.articles.codesphere.title,
      description: translations.projects.articles.codesphere.subtitle,
      image: '/images/codesphere.svg',
      tags: translations.projects.articles.codesphere.tags,
      color: 'from-purple-500 to-blue-500',
      content: translations.projects.articles.codesphere.content,
      githubLink: translations.projects.articles.codesphere.githubLink,
      liveLink: translations.projects.articles.codesphere.liveLink
    },
    {
      id: 'butter',
      title: translations.projects.articles.butter.title,
      description: translations.projects.articles.butter.subtitle,
      image: '/images/butter.png',
      tags: translations.projects.articles.butter.tags,
      color: 'from-yellow-400 to-orange-500',
      content: translations.projects.articles.butter.content,
      githubLink: translations.projects.articles.butter.githubLink,
      liveLink: translations.projects.articles.butter.liveLink,
      socialLinks: translations.projects.articles.butter.socialLinks
    }
  ];
}

// Articles par défaut (pour compatibilité)
export const articles: Article[] = getArticles('fr');
