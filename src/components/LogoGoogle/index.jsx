import Image from "next/image";
const LogoGoogle = ({ width = 24, height = 24}) => {
  return (
    <Image
      src="/images/google-logo.png"
      alt="google-logo"
      width={width}
      height={height}
      priority
    />
  );
};
export default LogoGoogle;
