// components/PricingCard.tsx

import Link from "next/link";

type Props = {
  title: string;
  price: number;
  subtitle: string;
  features: string[];
};

export default function PricingCard({
  title,
  price,
  subtitle,
  features,
}: Props) {
  return (
    <div className="bg-gradient-to-b flex flex-col gap-2 justify-between from-[#81358A] to-[#662C6D] text-white rounded-2xl p-6 w-full max-w-sm shadow-xl">

      <h3 className="text-2xl font-bold uppercase">{title}</h3>

      <h2 className="text-4xl font-bold mt-2">${price}.00</h2>
      <p className="text-sm mt-1 text-gray-200">{subtitle}</p>

      <hr className="my-4 border-white/20" />

      <ul className="space-y-2 max-h-[250px] overflow-y-auto pr-2">
        {features.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm items-center">
           <i className="ri-checkbox-circle-fill text-2xl"></i> <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link href={'/contact-us'} className="mt-6 text-center w-full bg-white text-[#662C6D] py-2 rounded-full font-semibold hover:opacity-90 transition">
        Get Started
      </Link>
    </div>
  );
}