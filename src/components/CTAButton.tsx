interface CTAButtonProps {
  phone: string;
  label: string;
  variant?: 'primary' | 'secondary';
}

export function CTAButton({ phone, label, variant = 'primary' }: CTAButtonProps) {
  // Format for tel: link — strip spaces and leading +
  const telHref = `tel:${phone.replace(/\s+/g, '')}`;

  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-base font-semibold leading-none transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 min-h-[56px] min-w-[200px]';

  const variantClasses: Record<string, string> = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-500',
    secondary:
      'border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 active:bg-blue-100 focus-visible:ring-blue-500',
  };

  return (
    <a
      href={telHref}
      className={`${baseClasses} ${variantClasses[variant ?? 'primary']}`}
      aria-label={`${label} — call ${phone}`}
    >
      <span aria-hidden="true" className="text-xl leading-none">
        ☎
      </span>
      <span>{label}</span>
    </a>
  );
}

export default CTAButton;
