import React, { useState, useEffect, useCallback } from 'react';
import './slider.scss';

const Slider = ({
  children,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalSlides = React.Children.count(children);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(true);
  }, []);


  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setIsAutoPlaying(true);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
    setIsAutoPlaying(true);
  }, [totalSlides]);

  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, goToNext, totalSlides]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };


  return (
    <div
      className="slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider-wrapper">
        <div
          className="slider-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && totalSlides > 1 && (
        <>
          <button
            className="slider-arrow slider-arrow-prev"
            onClick={() => {
              goToPrev();
              setIsAutoPlaying(false);
            }}

          >
            ‹
          </button>
          <button
            className="slider-arrow slider-arrow-next"
            onClick={() => {
              goToNext();
              setIsAutoPlaying(false);
            }}

          >
            ›
          </button>
        </>
      )}

      {showDots && totalSlides > 1 && (
        <div className="slider-dots">
          {React.Children.map(children, (_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default Slider;