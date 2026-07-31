import type { Metadata } from "next";
import Image from "next/image";
import InquireForm from "./InquireForm";

export const metadata: Metadata = {
  title: "Inquire — Alexis Garza",
  description:
    "Begin a conversation with Alexis Garza about your home or hospitality interior design project.",
};

export default function InquirePage() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-14 md:px-10 md:pt-20 lg:px-20">
      {/* Title + intro */}
      <div className="max-w-3xl">
        <h1 className="font-display text-6xl font-semibold leading-[1.02] tracking-[-0.02em] md:text-8xl">
          Begin a Conversation
        </h1>
        <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-muted">
          We accept a limited number of commissions each year to ensure uncompromising
          quality and dedicated attention to detail. Share the vision for your space, and
          let us explore the possibilities of our collaboration.
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
              src="/Image.png"
              alt="The Alexis Garza studio at work"
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
                  href="tel:+528186564134"
                  className="block transition hover:text-accent"
                >
                  +52 81 8656 4134
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
