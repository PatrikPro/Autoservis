import Image from "next/image";

export default function ImageDivider() {
  return (
    <section className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
      <Image
        src="/images/engine-detail.jpg"
        alt="Detail motoru"
        fill
        className="object-cover object-center"
        sizes="100vw"
        quality={80}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-primary/10" />

      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-px bg-primary/60" />
        <div className="mx-4 w-3 h-3 rotate-45 border-2 border-primary/60" />
        <div className="w-20 h-px bg-primary/60" />
      </div>
    </section>
  );
}
