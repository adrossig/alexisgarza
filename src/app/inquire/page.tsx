import type { Metadata } from "next";
import Image from "next/image";
import InquireForm from "./InquireForm";

export const metadata: Metadata = {
  title: "Inquire — Alexis Garza",
  description:
    "Start a project with Alexis Garza. Tell the studio about your home or hospitality space.",
};

export default function InquirePage() {
  return (
    <section className="shell pb-20 pt-14 md:pt-20">
      {/* Title + intro */}
      <div className="max-w-3xl">
        <h1 className="font-display text-6xl font-semibold leading-[1.02] tracking-[-0.02em] md:text-8xl">
          Begin a Conversation
        </h1>
        <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-muted">
          We take on a handful of projects a year, so each one gets the studio&apos;s own
          hours. Tell us about the space, your timing, and what bothers you about the
          room now.
        </p>
      </div>

      {/* Form + studio */}
      <div className="mt-12 grid gap-16 md:mt-16 md:grid-cols-2 md:gap-20">
        {/* Form */}
        <div>
          <InquireForm />
        </div>

        {/* Image + contact */}
        <div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/projects/los-vitrales/02-living-dining.jpeg"
              alt="Sheer linen and white marble in the Los Vitrales living and dining room"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="img-grade object-cover"
            />
            <span className="grain" />
          </div>

          <div className="mt-12 space-y-10">
            <div>
              <p className="label-caps text-accent">The Studio</p>
              <address className="mt-4 not-italic font-light leading-relaxed text-foreground/90">
                144 Minimalist Avenue
                <br />
                Design District, Suite 400
                <br />
                Marbella, 29600
              </address>
            </div>

            <div>
              <p className="label-caps text-accent">Direct Inquiries</p>
              <div className="mt-4 space-y-1 font-light">
                <a
                  href="mailto:studio@alexisgarza.com"
                  className="block transition hover:text-accent"
                >
                  studio@alexisgarza.com
                </a>
                <a
                  href="tel:+5218186564134"
                  className="block transition hover:text-accent"
                >
                  +52 1 81 8656 4134
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
