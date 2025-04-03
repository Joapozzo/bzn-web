import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const TypingTitle = () => {
    const [text, setText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "SABEMOS LO QUE HACEMOS";

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(TextPlugin);

            gsap.to({}, { // Parpadeo del cursor
                repeat: -1,
                duration: 1,
                onRepeat: () => setShowCursor((prev) => !prev),
            });

            gsap.to({}, {
                duration: 2,
                onUpdate: function () {
                    const progress = Math.floor(this.progress() * fullText.length);
                    setText(fullText.substring(0, progress));
                },
                ease: "power2.out",
            });
        }
    }, []);

    return (
        <h1 className="mt-6 text-5xl md:text-5xl lg:text-7xl font-bold text-left">
            <span>
                {text.substring(0, 7)} {/* "SABEMOS" */}
            </span>
            {text.length > 7 && (
                <span className="block font-light">
                    {text.length > 15 ? "LO QUE " : text.substring(8)}
                    {text.length > 18 && (
                        <span className="font-bold text-[var(--red)]">
                            {text.substring(15, fullText.length)}{showCursor && "|"}
                        </span>
                    )}
                </span>
            )}
            {text.length <= 7 && showCursor && "|"}
        </h1>
    );
};

export default TypingTitle;
