"use client";

import Countdown from "@/components/elements/Countdown";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Book, Contact, MessageCircle, Search } from "lucide-react";
import HerosecPilarl from '@/public/herosec_pilar-l.svg';
import HerosecPilarr from '@/public/herosec_pilar-r.svg';
import AmbassadorsecKristall from '@/public/ambassadorsec_kristall.svg';
import AmbassadorsecKristalr from '@/public/ambassadorsec_kristalr.svg';
import AmbassadorsecPanda from '@/public/ambassadorsec_panda.svg';
import AmbassadorsecArchive from '@/public/ambassadorsec_archive.svg';
import AmbassadorsecArchiveMd from '@/public/ambassadorsec_archive_md.svg';
import NMHsecPanda from '@/public/nmhsec_panda.svg';
import FAQsecPanda from '@/public/faqsec_panda.svg';
import AmbassadorCard from "./components/ambassadorcard";
import AmbassadorBoard from "./components/ambassadorboard";
import ImageSparkle from "@/public/sparkle.svg"
import Image from "next/image";

export default function LandingPage() {
  return (
    <main>

      <div className="bg-[linear-gradient(180deg,#040F27_13.94%,#0C265E_52.4%,#3F178D_100%)] w-full mt-20 flex flex-col items-center justify-center gap-10 ">
        <section className="flex w-full items-center justify-center relative">
          <Image
            src={HerosecPilarl}
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
            src={HerosecPilarr}
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
            md:translate-x-[20%]
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
        <section className="flex w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-15 py-20  md:max-w-7xl max-w-sm">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="font-league-spartan text-center font-bold md:text-h1 text-h4 text-neutral-100">Apa itu Ambassador</h1>
              <h1 className="font-league-spartan text-center font-bold md:text-h1 text-h5 text-neutral-100">Open House Fasilkom UI?</h1>
            </div>
            <div className="flex items-center justify-center gap-24">
              <AmbassadorBoard>
                <div className="flex flex-col items-center justify-center gap-6 p-1 md:p-6">
                  <p className="font-aileron text-b8 md:text-b6 primary-80 text-center"><span className="primary-90 font-bold">Program Ambassador</span> Open House Fasilkom UI 2026 mengajak anak-anak SMA/K sederajat dan influencer untuk meningkatkan <span className="primary-90 font-bold">brand awareness Fasilkom UI.</span> Ambassador bertugas membuat konten digital untuk menyebarkan informasi mengenai Open House Fasilkom UI dan Fasilkom UI.</p>
                </div>
                <div className="flex justify-center items-center gap-6">
                  <AmbassadorCard className="max-w-xl">
                    <p
                      className="
                          font-league-spartan
                          font-bold
                          text-h6
                          md:text-h3
                          text-transparent
                          bg-clip-text
                          bg-[linear-gradient(93.65deg,_#43F5E7_0%,_#D6F5F2_100%)]
                        "
                    >
                      200+
                    </p>

                    <p className="font-aileron md:text-b7 text-b9 font-normal text-white">
                      Pendaftar dari seluruh Indonesia
                    </p>
                  </AmbassadorCard>
                  <AmbassadorCard className="max-w-xl">
                    <p
                      className="
                          font-league-spartan
                          font-bold
                          text-h6
                          md:text-h3
                          text-transparent
                          bg-clip-text
                          bg-[linear-gradient(93.65deg,_#43F5E7_0%,_#D6F5F2_100%)]
                        "
                    >
                      250+
                    </p>

                    <p className="font-aileron md:text-b7 text-b9 font-normal text-white">
                      Pengguna Referral Code
                    </p>
                  </AmbassadorCard>
                </div>
              </AmbassadorBoard>

              <Image
                src={AmbassadorsecPanda}
                alt="Ambas"
                className="hidden md:block"
              ></Image>
            </div>
          </div>
        </section>
      </div>
      <div
        className="
          bg-[linear-gradient(180deg,#3F178D_15.38%,#99B5F2_68.99%,#C0D2F8_100%)] w-full flex flex-col items-center justify-center gap-10"
      >
        <section className="flex w-full items-center justify-center relative gap-15 py-8 md:pt-30 md:pb-20 ">
          <Image
            src={ImageSparkle}
            alt=""
            className="absolute inset-0 top-0 h-full w-auto object-cover pointer-events-none select-none translate-x-[-70%] md:translate-x-[-40%]"
          />
          <Image
            src={AmbassadorsecKristall}
            alt=""
            className="
             translate-y-[50%]
              absolute
              left-0
              bottom-0
              h-[50%]
              w-auto
              max-w-none
              -translate-x-[40%]
              md:-translate-x-[30%]
              lg:translate-x-0
            "
          />

          <Image
            src={AmbassadorsecKristalr}
            alt=""
            className="
            translate-y-[50%]
            absolute
            right-0
            bottom-0
            h-[50%]
            w-auto
            max-w-none
            translate-x-[40%]
            md:translate-x-[30%]
            lg:translate-x-0
          "
          />
          <div className="flex flex-col items-center justify-center gap-8 pb-20  md:max-w-4xl max-w-sm z-10">
            <h1 className="font-league-spartan text-center font-bold md:text-h1 text-h5 text-neutral-100">Ambassador 2025’s Archive</h1>
            <Image
              src={AmbassadorsecArchive}
              alt=""
              className="block md:hidden"
            >
            </Image>
            <Image
              src={AmbassadorsecArchiveMd}
              alt=""
              className="hidden md:block"
            >
            </Image>
          </div>

        </section>
        <section className="flex w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-15 py-20 md:max-w-7xl max-w-sm">
            <div className="flex flex-col items-center justify-center gap-6 z-10">
              <h1 className="font-league-spartan text-center font-bold md:text-h1 text-h4 text-neutral-100">Need More Help?</h1>
              <p className="font-aileron text-s7 md:text-s4 font-bold text-neutral-100 text-center">"Temukan berbagai pertanyaan serta jawaban seputar ambassador di sini"</p>
            </div>
            <div className="flex items-start justify-center gap-25 md:px-5 lg:p-0">
              <Accordion type="single" defaultValue="item-1" >
                <AccordionItem value="item-1">
                  <AccordionTrigger >Apa aja benefit daftar Ambassador?</AccordionTrigger>
                  <AccordionContent>Sebagai Ambassador, kamu akan terlibat langsung dalam promosi OH Fasilkom, berkesempatan membangun relasi dengan teman-teman dari seluruh Indonesia, mendapatkan akses ke program eksklusif seperti webinar dan mentoring, serta memperluas wawasan seputar teknologi, bisnis digital, dan masa depan industri IT.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger >Bagaimana jika aku memiliki kesibukan lain dan ingin mendaftar?</AccordionTrigger>
                  <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, recusandae! Fugit nobis, cupiditate sint pariatur officiis in! Iure repellendus magni natus deserunt minima, laborum ducimus explicabo optio nostrum fuga aut!</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger >Harus bisa ngedit video gak kak?</AccordionTrigger>
                  <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, recusandae! Fugit nobis, cupiditate sint pariatur officiis in! Iure repellendus magni natus deserunt minima, laborum ducimus explicabo optio nostrum fuga aut!</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger >Aku dari luar Jabodetabek, bisa ikut juga gak?</AccordionTrigger>
                  <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, recusandae! Fugit nobis, cupiditate sint pariatur officiis in! Iure repellendus magni natus deserunt minima, laborum ducimus explicabo optio nostrum fuga aut!</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger >Apakah program ini berbayar?</AccordionTrigger>
                  <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, recusandae! Fugit nobis, cupiditate sint pariatur officiis in! Iure repellendus magni natus deserunt minima, laborum ducimus explicabo optio nostrum fuga aut!</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger >Harus terkenal ya kak?</AccordionTrigger>
                  <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, recusandae! Fugit nobis, cupiditate sint pariatur officiis in! Iure repellendus magni natus deserunt minima, laborum ducimus explicabo optio nostrum fuga aut!</AccordionContent>
                </AccordionItem>
              </Accordion>
              <Image
                src={NMHsecPanda}
                alt="Ambas"
                className="hidden md:block shrink-0"
              ></Image>
            </div>
          </div>
        </section>
        <section className="flex w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-16 py-20 md:max-w-7xl max-w-sm">
            <div className="flex flex-col items-center justify-center gap-6 z-10">
              <h1 className="font-league-spartan text-center font-bold md:text-h1 text-h4 text-primary-80 md:text-neutral-100">Butuh bantuan atau punya pertanyaan lain?</h1>
              <p className="font-aileron text-s7 md:text-s4 font-bold text-primary-80 md:text-neutral-100 text-center">Kamu dapat hubungi kontak di bawah ini untuk informasi lebih lnajut ya!</p>
            </div>

            <Image
              src={FAQsecPanda}
              alt="Ambas"
              className=" shrink-0"
            ></Image>
            <div className="flex items-center justify-center gap-4">
              <Button variant="primary">
                <MessageCircle></MessageCircle>
                <p className="font-aileron text-s9 md:text-s7 font-bold text-neutral-100 text-center">Contact Person</p>
              </Button>
              <Button variant="primary">
                <MessageCircle></MessageCircle>
                <p className="font-aileron text-s9 md:text-s7 font-bold text-neutral-100 text-center">Contact Person</p>
              </Button>

            </div>
          </div>

        </section>
      </div>

    </main >
  );
}
