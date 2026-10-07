import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { FALLBACK_IMAGE_PLACEHOLDER } from '../../assets/images';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackText?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Project Image',
  fallbackSrc = FALLBACK_IMAGE_PLACEHOLDER,
  fallbackText = 'Preview Not Available',
  aspectRatioClass = 'aspect-[16/10]',
  className = '',
  loading = 'lazy',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (hasError || !src) {
    return (
      <div
        className={`w-full ${aspectRatioClass} bg-[#0F172A] border border-[#1E293B] rounded-[inherit] flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64748B] mb-2.5">
          <ImageOff className="w-6 h-6" />
        </div>
        <span className="text-xs font-medium text-[#94A3B8] max-w-[200px] truncate">
          {alt}
        </span>
        <span className="text-[11px] text-[#64748B] mt-1 font-mono">
          {fallbackText}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectRatioClass} overflow-hidden rounded-[inherit]`}>
      {/* Background placeholder during loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#0F172A] animate-pulse pointer-events-none" />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
};
