"use client";

import Countdown from "@/components/elements/Countdown";
import { Button } from "@/components/ui/button";
import { Book, Contact, Search } from "lucide-react";
import pilarl from '@/public/pilar-l.svg';
import pilarr from '@/public/pilar-r.svg';
import Image from "next/image";

export default function LandingPage() {
  return (
    <main>
      <div className="mt-20 flex flex-col items-center justify-center gap-10">
        <section className="flex w-full items-center justify-center  relative">
          <Image
            src={pilarl}
            alt=""
            className="
             -translate-y-[15%]
      absolute
      left-0
      top-0
      h-6xl
      w-auto
      max-w-none
      -translate-x-[40%]
      md:-translate-x-[20%]
      lg:translate-x-0
    "
          />

          <Image
            src={pilarr}
            alt=""
            className="
            -translate-y-[15%]
      absolute
      right-0
      top-0
      h-6xl
      w-auto
      max-w-none
      translate-x-[40%]
      md:translate-x-[10%]
      lg:translate-x-0
    "
          />
          <div className="mt-20 flex flex-col items-center justify-center gap-8 pb-20  md:max-w-4xl max-w-sm z-10">
            <div className="flex flex-col items-center justify-center gap-8">

              <div className="flex flex-col items-center justify-center gap-5">
                {/* Title */}
                <div className="flex flex-col items-center justify-center gap-5">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="font-league-spartan text-center font-bold md:text-h1 text-h4 text-neutral-100">Open Recruitment Ambassador</h1>
                    <h1 className="font-league-spartan text-center font-bold md:text-h1 text-h5 text-neutral-100">Open House Fasilkom UI 2026</h1>
                  </div>
                  <p className="font-aileron text-s5 hidden md:block font-bold text-neutral-100 text-center">Ambassador Open House Fasilkom UI adalah ikon OH Fasilkom UI yang bertugas untuk mempromosikan acara OH Fasilkom UI dan Fakultas Ilmu Komputer Universitas Indonesia kepada masyarakat.</p>
                </div>
                <div>
                  <Countdown targetDate={new Date('21 August 2026 23:59:59')} />
                </div>
              </div>
              <p className="font-aileron md:text-b6 text-b9 font-normal text-neutral-100 text-center">Pendaftaran dibuka pada 22 Agustus 2026</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 max-w-sm">
              <Button variant="tertiary">
                <Contact></Contact>
                <p className="font-aileron text-s7 font-bold text-neutral-100 text-center">Button</p>
              </Button>
              <div className="flex items-center gap-5">
                <Button variant="ghost">
                  <Search></Search>
                  <p className="font-aileron text-s7 font-bold text-tertiary-50 text-center">Button</p>
                </Button>
                <Button variant="ghost">
                  <Book></Book>
                  <p className="font-aileron text-s7 font-bold text-tertiary-50 text-center">Button</p>
                </Button>
              </div>
            </div>

          </div>
        </section>
      </div>

    </main>
  );
}
