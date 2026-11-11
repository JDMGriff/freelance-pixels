import type { CSSProperties } from 'react';
import type { ProjectImage as ImageData } from '../data/projects';

export default function ProjectImage({ image, name }: { image: ImageData; name: string }) {
    const crop = image.crop;
    const frameStyle: CSSProperties | undefined = crop
        ? { aspectRatio: `${crop.width} / ${crop.height}`, maxWidth: crop.width }
        : undefined;
    const imageStyle: CSSProperties | undefined = crop
        ? {
              width: `${(image.width / crop.width) * 100}%`,
              left: `${(-crop.x / crop.width) * 100}%`,
              top: `${(-crop.y / crop.height) * 100}%`
          }
        : undefined;

    return (
        <a
            className={`project-image-link${crop ? ' has-crop' : ''}`}
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open full-size screenshot of ${name}: ${image.caption}`}
            style={frameStyle}
        >
            <img
                src={image.src}
                alt={`${name}: ${image.caption}`}
                width={image.width}
                height={image.height}
                loading="lazy"
                style={imageStyle}
            />
        </a>
    );
}
