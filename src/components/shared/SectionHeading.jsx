import React from 'react';

export const SectionHeading = ({
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  variant = 'default', // 'default' (red title, navy underline) | 'white' (white title & underline) | 'navy' (navy title, red underline)
  className = ''
}) => {
  const isLeft = align === 'left';
  const isWhite = variant === 'white';
  const isNavy = variant === 'navy';

  return (
    <div className={`section-heading-wrapper ${isLeft ? 'left' : ''} ${className}`}>
      <h2 className={`section-title ${isWhite ? 'white' : ''} ${isNavy ? 'navy' : ''}`}>
        {title}
      </h2>
      <div
        className={`title-underline ${isLeft ? 'left' : ''} ${
          isWhite ? 'white' : isNavy ? 'red' : ''
        }`}
      />
      {subtitle && (
        <p className={`section-subtitle ${isLeft ? 'left' : ''} ${isWhite ? 'white' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
