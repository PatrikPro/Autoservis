import { formatPrice } from "@/lib/calculator/calculatePrice";
import type { ServiceItem } from "@/lib/cms/types";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hover className="flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-foreground">{service.name}</h3>
          {service.badge && <Badge>{service.badge}</Badge>}
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4">
          {service.description}
        </p>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="text-lg font-black text-primary">
          {formatPrice(service.basePrice)}
        </span>
        <span className="text-xs text-muted">od / osobní auto</span>
      </div>
    </Card>
  );
}
