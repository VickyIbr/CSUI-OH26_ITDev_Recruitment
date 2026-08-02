import { ReactNode } from "react";
import clsx from "clsx";

interface AmbassadorCardProps {
    children: ReactNode;
    className?: string;
}

export default function AmbassadorCard({
    children,
    className,
}: AmbassadorCardProps) {
    return (
        <div className={clsx("relative w-full", className)}>
            {/* Shadow */}
            <div className="absolute inset-x-2 top-3 bottom-0 rounded-md bg-[#1C1C37]/40 blur-xl" />

            {/* Layer belakang */}
            {/* <div
                className="
          absolute
          inset-0
          translate-x-[10px]
          translate-y-[10px]
          bg-[linear-gradient(135deg,#3A276E_10%,#482B9B_80%,#D989CF_100%)]
          [clip-path:polygon(2.5%_10%,97.5%_10%,100%_18%,100%_90%,97.5%_100%,2.5%_100%,0_82%,0_18%)]
        "
            /> */}

            {/* Card utama */}
            <div
                className="
          relative
          overflow-hidden

          bg-[linear-gradient(180deg,#8B67D5_0%,#603ABF_60%,#45239C_100%)]

          [clip-path:polygon(2.5%_10%,97.5%_10%,100%_18%,100%_90%,97.5%_100%,2.5%_100%,0_82%,0_18%)]

          px-6
          py-4

          md:px-8
          md:py-6
        "
            >
                {/* Highlight kanan */}
                <div className="absolute right-0 top-5 h-[70%] w-[6px] rounded-full bg-[#E59DDB]" />

                {/* Highlight kiri bawah */}
                {/* <div className="absolute bottom-0 left-0 h-5 w-5 bg-white/70 blur-[1px]" /> */}

                {/* Shadow bawah */}
                <div className="absolute bottom-0 left-0 h-3 w-full bg-[#2B176D]" />

                <div className="relative z-10">{children}</div>
            </div>
        </div>
    );
}