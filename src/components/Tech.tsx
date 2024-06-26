"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasReveal";

export function CanvasRevealEffectDemo(props) {

    var icons = [];
    return (
        <>
            <div className="py-[40px] flex items-center justify-center bg-[#0e0e0e] w-full gap-[8px] mx-auto px-8">
                <Card title="Web Dev" icon={props.weblist}>
                    <CanvasRevealEffect
                        animationSpeed={4.5}
                        containerClassName="bg-black"
                        colors={[
                            [109, 179, 63],
                            [10, 207, 131],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
                </Card>
                <Card title="Mobile Apps" icon={props.applist}>
                    <CanvasRevealEffect
                        animationSpeed={4.5}
                        containerClassName="bg-black"
                        colors={[
                            [100, 125, 255],
                            [97, 218, 251],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
                </Card>
                <Card title="UI/UX Design" icon={props.dsglist}>
                    <CanvasRevealEffect
                        animationSpeed={4.5}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
                </Card>
            </div>
        </>
    );
}

const Card = ({
    title,
    icon,
    children,
}: {
    title: string;
    icon: string[];
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className=" border border-white/[0.1] group/canvas-card flex items-center justify-center  max-w-sm w-full p-4 h-[30rem] relative overflow-hidden"
        >
            {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="absolute left-(1/2 - 64px) -translate-x-(1/2) top-(1/2 - 64px) -translate-y-1/2 opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white group-hover/canvas-card:translate-y-2 transition duration-200">
                <div className="grid grid-cols-2 gap-8 ">
                    {icon.map((i, idx) =>
                        <img key={idx} src={i} className="w-16 h-16"></img>

                    )}
                </div>
            </div>
            <div className="absolute font-[clash] text-[1.5vw] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover/canvas-card:translate-y-2 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
                {title}
            </div>

        </div>
    );
};

// const AceternityIcon = () => {
//     return (
//         <svg
//             width="66"
//             height="65"
//             viewBox="0 0 66 65"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
//         >
//             <path
//                 d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//                 stroke="currentColor"
//                 strokeWidth="15"
//                 strokeMiterlimit="3.86874"
//                 strokeLinecap="round"
//                 style={{ mixBlendMode: "darken" }}
//             />
//         </svg>
//     );
// };

// export const Icon = ({ className, ...rest }: any) => {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className={className}
//             {...rest}
//         >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//         </svg>
//     );
// };

