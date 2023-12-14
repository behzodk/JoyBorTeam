import { useEffect } from "react";
import "./MatterhornPopup.css";

const MatterhornPopup = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="matterhorn-popup">
      <section className="video" video_1 data-animate-on-scroll>
        <img
          className="video-thumbnail-icon"
          alt=""
          src="/video-thumbnail@2x.png"
        />
        <div className="video-border" />
        <img className="play-icon" alt="" src="/play-icon@2x.png" />
      </section>
    </div>
  );
};

export default MatterhornPopup;
