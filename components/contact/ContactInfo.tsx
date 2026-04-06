import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { loadSiteContent, loadOpeningHours } from "@/lib/cms/loadContent";
import Card from "@/components/ui/Card";

export default async function ContactInfo() {
  const site = await loadSiteContent();
  const hours = await loadOpeningHours();

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="font-bold text-foreground mb-4">Kontaktní údaje</h3>
        <ul className="space-y-3 text-sm text-muted">
          <li className="flex items-start gap-3">
            <FiMapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>{site.contact.address}</span>
          </li>
          <li className="flex items-center gap-3">
            <FiPhone className="w-5 h-5 text-primary shrink-0" />
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
              className="hover:text-primary transition-colors"
            >
              {site.contact.phone}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FiMail className="w-5 h-5 text-primary shrink-0" />
            <a
              href={`mailto:${site.contact.email}`}
              className="hover:text-primary transition-colors"
            >
              {site.contact.email}
            </a>
          </li>
        </ul>
      </Card>

      <Card>
        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <FiClock className="w-5 h-5 text-primary" />
          Otevírací doba
        </h3>
        <ul className="space-y-2 text-sm">
          {hours.days.map((day) => (
            <li key={day.label} className="flex justify-between">
              <span className="text-muted">{day.label}</span>
              <span className={day.closed ? "text-red-400 font-bold" : "text-foreground font-bold"}>
                {day.closed ? (day.note ?? "Zavřeno") : day.hours}
              </span>
            </li>
          ))}
        </ul>
        {hours.note && (
          <p className="text-xs text-muted mt-4 border-t border-border pt-3">
            {hours.note}
          </p>
        )}
      </Card>
    </div>
  );
}
