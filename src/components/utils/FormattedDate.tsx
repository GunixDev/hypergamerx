import type {Locale} from '../../types';

interface FormattedDateProps {
  date: Date | string | undefined;
  locale: Locale;
}

export default function FormattedDate({date, locale}: FormattedDateProps) {
  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  return (
    <time dateTime={parsedDate?.toISOString()}>
      {parsedDate?.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
  );
}
