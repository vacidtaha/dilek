import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Images,
  type LucideProps,
  Navigation,
  Phone,
  X,
} from "lucide-react";
import type { ReactNode, SVGProps } from "react";

/**
 * Sitenin simge dili tek yerde toplanır:
 * - Hizmet simgeleri bu site için çizildi: lacivert ince çizgi, firmanın ürettiği beton parça mavi dolgu.
 * - Düğme ve liste simgeleri dolu şekillerdir; yanındaki kalın yazıyla aynı ağırlıkta durur.
 * - Ok ve kapatma gibi yön simgeleri çizgidir; kalınlıkları kullanıldıkları yazıya göre ayarlanır.
 * Boyut ve renk, kullanıldığı yerde `className` ile verilir.
 */
type IconProps = SVGProps<SVGSVGElement>;

/* ------------------------------ Hizmet simgeleri ------------------------------ */

/**
 * 48'lik ızgarada 2 birim çizgiyle çizildi; görünen alan ortadaki 40 birimdir.
 * Çizimler soldan aynı hizada başlar; böylece simge altındaki başlıkla aynı hizaya oturur.
 */
function ServiceIcon({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="4 4 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

const accent = "fill-brand-blue stroke-none";

/** Köşeleri yumuşatılmış altıgen parke taşı; merkezi (0, 0) noktasıdır. */
const HEX_PAVER =
  "M-1.73-8.24Q0-9.24 1.73-8.24L6.27-5.62Q8-4.62 8-2.62V2.62Q8 4.62 6.27 5.62L1.73 8.24Q0 9.24-1.73 8.24L-6.27 5.62Q-8 4.62-8 2.62V-2.62Q-8-4.62-6.27-5.62Z";

/** Parke taşı: petek düzeninde döşenen altıgen taşlar. */
export function PaversIcon(props: IconProps) {
  return (
    <ServiceIcon {...props}>
      <path d={HEX_PAVER} transform="translate(24 15.12) scale(1.125)" className={accent} />
      <path d={HEX_PAVER} transform="translate(13.75 32.88)" />
      <path d={HEX_PAVER} transform="translate(34.25 32.88)" />
    </ServiceIcon>
  );
}

/** Kaldırım taşı: üstte kaldırım döşemesi, ortada kaldırım taşları, altta yol çizgisi. */
export function KerbIcon(props: IconProps) {
  return (
    <ServiceIcon {...props}>
      <rect x="6" y="9" width="10" height="7" rx="2" />
      <rect x="20" y="9" width="22" height="7" rx="2" />
      <rect x="5" y="21" width="18" height="10" rx="3" className={accent} />
      <rect x="25" y="21" width="18" height="10" rx="3" className={accent} />
      <path d="M6 38h7M20.5 38h7M35 38h7" />
    </ServiceIcon>
  );
}

/** Karayolu lojistiği: kasasında taş paletleri taşıyan kamyon. */
export function TruckIcon(props: IconProps) {
  return (
    <ServiceIcon {...props}>
      <rect x="7" y="12" width="9" height="9" rx="2" className={accent} />
      <rect x="18" y="12" width="9" height="9" rx="2" className={accent} />
      <path d="M10 32H8a2 2 0 0 1-2-2v-5h24" />
      <path d="M18 32h13" />
      <path d="M30 32V14a2 2 0 0 1 2-2h3.6a2 2 0 0 1 1.6.8l5.4 7.2a2 2 0 0 1 .4 1.2V30a2 2 0 0 1-2 2h-2" />
      <path d="M34 17h1.5l2.6 3.5H34Z" strokeWidth={1.5} />
      <circle cx="14" cy="32" r="4" />
      <circle cx="35" cy="32" r="4" />
    </ServiceIcon>
  );
}

/** Kablo kanalı ve kapağı: kesitte beton kanal, içinde kablolar, üstünde kapak. */
export function CableDuctIcon(props: IconProps) {
  return (
    <ServiceIcon {...props}>
      <rect x="6" y="8" width="36" height="6" rx="2" />
      <path
        d="M8 19h5a1 1 0 0 1 1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V20a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v19a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V20a1 1 0 0 1 1-1Z"
        className={accent}
      />
      <g fill="currentColor" stroke="none">
        <circle cx="20" cy="30" r="2.5" />
        <circle cx="28" cy="30" r="2.5" />
        <circle cx="24" cy="24" r="2.5" />
      </g>
    </ServiceIcon>
  );
}

/** Çevre düzenlemesi: ağaçlar ve altlarında taş döşeli yol. */
export function LandscapeIcon(props: IconProps) {
  return (
    <ServiceIcon {...props}>
      <circle cx="15" cy="17" r="8" />
      <path d="M15 25v9" />
      <path d="m34 11 5 8h-2.5l4.5 7H27l4.5-7H29Z" />
      <path d="M34 26v8" />
      <rect x="5" y="38" width="11" height="5" rx="2" className={accent} />
      <rect x="18.5" y="38" width="11" height="5" rx="2" className={accent} />
      <rect x="32" y="38" width="11" height="5" rx="2" className={accent} />
    </ServiceIcon>
  );
}

/* --------------------------- Düğme ve liste simgeleri --------------------------- */

function Glyph({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      {children}
    </svg>
  );
}

export function PhoneIcon(props: LucideProps) {
  return <Phone aria-hidden fill="currentColor" strokeWidth={1.5} {...props} />;
}

export function DirectionsIcon(props: LucideProps) {
  return <Navigation aria-hidden fill="currentColor" {...props} />;
}

export function EnvelopeIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M5 4.5h14a3 3 0 0 1 3 3v.02l-8.94 5.59a2 2 0 0 1-2.12 0L2 7.52V7.5a3 3 0 0 1 3-3Z" />
      <path d="M2 9.29v7.21a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9.29l-8.15 5.09a3.5 3.5 0 0 1-3.7 0L2 9.29Z" />
    </Glyph>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </Glyph>
  );
}

/** Belediye ve kamu kurumu: sütunlu bina. */
export function InstitutionIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="m12.6 2.74 8.2 4.5a1.25 1.25 0 0 1-.6 2.36H3.8a1.25 1.25 0 0 1-.6-2.36l8.2-4.5a1.25 1.25 0 0 1 1.2 0Z" />
      <rect x="4.6" y="11.4" width="2.8" height="6.2" rx=".8" />
      <rect x="10.6" y="11.4" width="2.8" height="6.2" rx=".8" />
      <rect x="16.6" y="11.4" width="2.8" height="6.2" rx=".8" />
      <rect x="2.5" y="19.4" width="19" height="2.6" rx="1.1" />
    </Glyph>
  );
}

/** Konut projesi: yan yana iki apartman. */
export function HousingIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path
        fillRule="evenodd"
        d="M4.5 2.5h7A1.5 1.5 0 0 1 13 4v17.5H3V4a1.5 1.5 0 0 1 1.5-1.5Zm.75 3v2h2v-2Zm3.5 0v2h2v-2Zm-3.5 4v2h2v-2Zm3.5 0v2h2v-2Zm-3.5 4v2h2v-2Zm3.5 0v2h2v-2ZM14.5 8.5h5A1.5 1.5 0 0 1 21 10v11.5h-6.5Zm2 3v2H19v-2Zm0 4v2H19v-2Z"
      />
    </Glyph>
  );
}

/** Hızlı tren hattı projesi: önden görünen tren. */
export function TrainIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path
        fillRule="evenodd"
        d="M8.5 2.5h7a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4Zm0 3A1.5 1.5 0 0 0 7 7v2.5A1.5 1.5 0 0 0 8.5 11h7A1.5 1.5 0 0 0 17 9.5V7a1.5 1.5 0 0 0-1.5-1.5Zm0 8a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm7 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
      />
      <path
        d="m8 19.5-1.5 2.2M16 19.5l1.5 2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Glyph>
  );
}

/* --------------------------------- Yön simgeleri --------------------------------- */

/** Kalın yazının yanında duran oklar için çizgi kalınlığı. */
const BOLD_STROKE = 2.5;

export function ChevronDownIcon(props: LucideProps) {
  return <ChevronDown aria-hidden strokeWidth={BOLD_STROKE} {...props} />;
}

export function ChevronRightIcon(props: LucideProps) {
  return <ChevronRight aria-hidden strokeWidth={BOLD_STROKE} {...props} />;
}

export function PreviousIcon(props: LucideProps) {
  return <ChevronLeft aria-hidden {...props} />;
}

export function NextIcon(props: LucideProps) {
  return <ChevronRight aria-hidden {...props} />;
}

export function CloseIcon(props: LucideProps) {
  return <X aria-hidden {...props} />;
}

export function PhotosIcon(props: LucideProps) {
  return <Images aria-hidden {...props} />;
}

/** İki çizgili menü simgesi. */
export function MenuIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <path d="M4 9h16M4 15h16" />
    </svg>
  );
}
