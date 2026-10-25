import { staticMapUrl } from "@utils/static-map-url";

interface ClinicCardProps {
  key: string;
  name: string;
  description: string;
  address: string[];
  phone?: string;
  link: string;
  lat: number;
  lng: number;
  radiusKm?: number;
}

export default function ClinicCard({
  key,
  name,
  description,
  address,
  phone,
  link,
  lat,
  lng,
  radiusKm = 1,
}: ClinicCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={staticMapUrl(lat, lng, radiusKm)}
          alt={`Map of ${name}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-neutral-900">{name}</h3>
        <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{description}</p>

        <address className="mt-3 text-sm not-italic text-neutral-500">
          {address.join(", ")}
        </address>

        {phone && (
          <p className="mt-2 text-sm text-neutral-500">
            <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:underline">
              {phone}
            </a>
          </p>
        )}

        <div className="flex-1" />

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-sm font-medium text-blue-600 hover:underline"
        >
          Directions
          <span className="sr-only"> for {name} (opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}   