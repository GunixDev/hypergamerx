import type { Locale } from '../../types';

interface FormattedDateProps {
  date: Date | undefined;
  locale: Locale;
}

export default function FormattedDate({ date, locale }: FormattedDateProps) {
  return (
    <time datetime={date?.toISOString()}>
      {date?.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
  );
}
