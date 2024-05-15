import {useState} from "react";
import {useMotionValueEvent, useScroll} from "framer-motion";

export const useHero = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isUpdateImagePosition, setIsUpdateImagePosition] = useState(false);
    const [isUpdateImage, setIsUpdateImage] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        latest > 30 ? setIsScrolled(true) : setIsScrolled(false);
        latest > 500 ? setIsUpdateImagePosition(true) : setIsUpdateImagePosition(false);
        latest > 1800 ? setIsUpdateImage(true) : setIsUpdateImage(false);
    });

    return {
        isScrolled,
        setIsScrolled,
        isUpdateImagePosition,
        setIsUpdateImagePosition,
        isUpdateImage,
        setIsUpdateImage,
        scrollY
    }
}
