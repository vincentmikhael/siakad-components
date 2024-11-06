import Image from 'next/image';
const LogoItn = ({width=40, height=40, type='color'}) => {
    const logoType = {
        'color': {src: '/images/itn-logo.webp', alt: 'My ITN Logo'},
        'white': {src: '/images/itn-white-logo.webp', alt: 'My ITN White Logo'},
    }
    return (
      <Image
        src={logoType[type].src}
        alt={logoType[type].alt}
        width={width}
        height={height}
        priority
      />
    );
};
export default LogoItn;