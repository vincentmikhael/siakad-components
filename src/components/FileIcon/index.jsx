import Image from "next/image";

const FileIcon = ({width = 40, height = 40, type = "image"}) => {
    const fileType = {
        'image': '/images/jpg-icon.svg',
        'pdf': '/images/pdf-icon.svg',
        'excel': '/images/xls-icon.svg',
    }
    return (
        <Image
            src={fileType[type]}
            alt="google-logo"
            width={width}
            height={height}
            priority
        />
    );
};
export default FileIcon;
