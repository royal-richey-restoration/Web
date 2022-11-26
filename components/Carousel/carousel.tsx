import React from "react";

import styles from "./Carousel.module.scss";

interface CarouselProps extends React.PropsWithChildren {}

export const Carousel = ({ children }: CarouselProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [prevLoc, setPrevLoc] = React.useState(0);
  const [clickLoc, setClickLoc] = React.useState(0);
  const [scrolling, setScrolling] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    setScrolling(true);
    setClickLoc(event.clientX);
  };

  const handleDrag = (event: React.MouseEvent) => {
    if (ref.current && scrolling) {
      ref.current.scrollLeft = prevLoc + clickLoc - event.clientX;
    }
  };

  const handleMouseUp = () => {
    setScrolling(false);
    setPrevLoc(ref.current?.scrollLeft ?? 0);
  };

  const handleMouseLeave = () => {
    setScrolling(false);
    setPrevLoc(ref.current?.scrollLeft ?? 0);
  };

  const handleScroll = (event: React.UIEvent) => {
    const scrollLeft = (event.target as HTMLElement)?.scrollLeft;
    const scrollWidth = ref.current?.scrollWidth ?? 1;
    const clientWidth = ref.current?.clientWidth ?? 0;
    if (scrollLeft && !scrolling) setPrevLoc(scrollLeft);
    setProgress(scrollLeft / (scrollWidth - clientWidth));
  };

  React.useEffect(() => {
    if (ref.current) {
      const scrollLeft = ref.current.scrollLeft;
      const scrollWidth = ref.current.scrollWidth;
      const clientWidth = ref.current.clientWidth;
      setProgress(scrollLeft / (scrollWidth - clientWidth));
    }
  }, [ref.current?.scrollLeft]);

  return (
    <div className={styles.wrapper}>
      <progress max={1} value={progress} />
      <div
        className={styles.childrenContainer}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleDrag}
        onMouseUp={handleMouseUp}
        onScrollCapture={handleScroll}
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
};
