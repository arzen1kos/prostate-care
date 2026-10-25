// src/components/features/clinics/ClinicList.tsx
import ClinicCard  from "./ClinicCard";

interface Clinic {
  id: string;
  name: string;
  description: string;
  address: string[];
  phone?: string;
  link: string;
  lat: number;
  lng: number;
  radiusKm?: number;
}

export default function ClinicList({ clinics }: { clinics: Clinic[] }) {
  return (
    <section aria-labelledby="clinic-list-heading" className="mt-10">
      <h1 id="clinic-list-heading" className="text-2xl font-bold">Clinics</h1>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {clinics.map((clinic) => (
          <ClinicCard key={clinic.id} {...clinic} />
        ))}
      </div>
    </section>
  );
}   