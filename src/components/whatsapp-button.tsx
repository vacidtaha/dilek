import { WhatsAppIcon } from "@/components/icons";
import { getDictionary } from "@/i18n/get-dictionary";
import { contact } from "@/lib/contact";

export async function WhatsAppButton() {
  const dict = await getDictionary();

  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.contact.whatsapp}
      title={dict.contact.whatsapp}
      className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25d366] md:right-8 md:bottom-8 md:size-16"
    >
      <WhatsAppIcon className="size-8 md:size-9" />
    </a>
  );
}
