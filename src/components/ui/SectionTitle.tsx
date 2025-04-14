import type { SectionTitleProps } from '../../types';

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-200">{children}</h2>;
}
