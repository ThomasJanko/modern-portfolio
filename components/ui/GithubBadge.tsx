import Image from 'next/image';

type GithubBadgeProps = {
  href: string;
  className?: string;
};

// Petit badge rond (fond sombre + logo GitHub blanc), pensé pour être posé
// juste à côté d'un lien texte (ex. "Voir le projet →"), pas en overlay sur une image.
export function GithubBadge({ href, className = '' }: GithubBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Voir le code sur GitHub"
      title="Voir le code sur GitHub"
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink transition-opacity hover:opacity-80 ${className}`}
    >
      <Image src="/git.svg" alt="" width={15} height={14} />
    </a>
  );
}
