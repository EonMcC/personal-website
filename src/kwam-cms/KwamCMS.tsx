import React, { CSSProperties } from 'react';

const KwamCms: React.FC<{
  content: string;
  isImage?: boolean;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}> = ({
  content,
  isImage,
  className = "",
  alt,
  width,
  height,
  style
}) => {
    if (!content && !isImage) return "Content not found.";

    if (!content && isImage) return "Image not found.";

    if (isImage) return (
      <img
        src={content}
        alt={alt}
        width={width}
        height={height}
        style={style}
        className={className}
      />
    )

    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: content }} className={className} />
      </>
    )
  }

export default KwamCms;