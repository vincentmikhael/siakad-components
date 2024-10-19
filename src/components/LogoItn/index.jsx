import Image from 'next/image';
const LogoItn = ({width=40, height=40, type='color'}) => {
    const logoType = {
        'color': '/images/itn-logo.png',
        'white': '/images/itn-white-logo.png'
    }
    return (
      <Image
        src={logoType[type]}
        alt="ITN White Logo"
        width={width}
        height={height} 
        priority
      />
    );
};
export default LogoItn;