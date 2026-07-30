import React from 'react';
import { socialMedia } from '@/data';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from './icons';

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

function getSocialMeta(link: string) {
  if (link.includes('github.com')) return { label: 'GitHub', Icon: GitHubIcon };
  if (link.includes('instagram.com')) return { label: 'Instagram', Icon: InstagramIcon };
  if (link.includes('linkedin.com')) return { label: 'LinkedIn', Icon: LinkedInIcon };
  return { label: 'Réseau social', Icon: GitHubIcon };
}

// Utilise data/index.ts -> socialMedia comme source unique de vérité pour les
// liens sociaux (au lieu de liens texte codés en dur dans chaque composant).
export function SocialLinks({ className = 'gap-5', iconClassName = 'h-[18px] w-[18px]' }: SocialLinksProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {socialMedia.map((social) => {
        const { label, Icon } = getSocialMeta(social.link);
        return (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
}
