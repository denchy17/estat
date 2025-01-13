import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface Props {
    imgLink: string | StaticImport;
    width: number;
    height: number;
    alt: string;
}

export default function IconImage({imgLink, width, height, alt}: Props) {
  return (
    <Image
        src={imgLink}
        alt={alt}
        width={width}
        height={height}
        priority
    />
    );
}