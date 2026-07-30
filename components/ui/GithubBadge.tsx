import Image from 'next/image';

type GithubBadgeProps = {
  href: string;
  className?: string;
};

export function GithubBadge({ href, className = '' }: GithubBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => event.stopPropagation()}
      aria-label="Voir le code sur GitHub"
      title="Voir le code sur GitHub"
      className={`absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 backdrop-blur-sm transition-colors hover:bg-ink ${className}`}
    >
      <Image src="/git.svg" alt="" width={17} height={16} />
    </a>
  );
}
