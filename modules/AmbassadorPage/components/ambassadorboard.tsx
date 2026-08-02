import { ReactNode } from "react";
import clsx from "clsx";

interface AmbassadorBoardProps {
    children: ReactNode;
    className?: string;
}

export default function AmbassadorBoard({
    children,
    className,
}: AmbassadorBoardProps) {
    return (
        <div
            className={clsx(
                "relative mx-auto flex w-full max-w-6xl flex-col items-center",
                className
            )}
        >
            {/* Top Ornament */}
            <div className="relative h-8 w-full">
                <div className="absolute left-1/2 top-0 h-7 w-3 -translate-x-1/2 rounded-t-sm bg-[#1C0A3E]" />

                <div
                    className="
            absolute
            top-8
            md:top-6
            left-0
            right-0
            h-4

            [clip-path:polygon(2%_50%,4%_0,96%_0,98%_50%,96%_100%,4%_100%)]

            bg-[#1C0A3E]
          "
                />
            </div>

            {/* Board */}
            <div
                className="
          relative
          w-full

          rounded-[24px]

          border-[12px]
          border-[#1C0A3E]

          bg-[rgba(242,235,255,0.8)]

          px-6
          py-6

          md:px-14
          md:py-12
        "
            >
                {children}
            </div>

            {/* Bottom Ornament */}
            <div className="relative h-6 w-full">
                <div
                    className="
            absolute
            top-0
            left-0
            right-0
            h-4

            [clip-path:polygon(2%_0,98%_0,96%_100%,4%_100%)]

            bg-[#1C0A3E]
          "
                />
            </div>

            {/* Stand */}
            {/* Stand */}
            <div className="relative h-28 w-full">
                {/* Tiang */}
                <div className="absolute left-1/2 -top-5 h-24 w-[10px] -translate-x-1/2 bg-[#1C0A3E]" />

                {/* Kaki kiri */}
                <div
                    className="absolute left-1/2 top-[52px] h-12 w-24 -translate-x-full bg-[#1C0A3E]"
                    style={{
                        clipPath: "polygon(100% 0, 100% 20%, 0 100%, 0 80%)",
                    }}
                />

                {/* Kaki kanan */}
                <div
                    className="absolute left-1/2 top-[52px] h-12 w-24 bg-[#1C0A3E]"
                    style={{
                        clipPath: "polygon(0 0, 100% 80%, 100% 100%, 0 20%)",
                    }}
                />
            </div>
        </div>
    );
}