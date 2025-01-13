import Image from "next/image";

const FileIcon = ({width = 40, height = 40, type = "image"}) => {
    const fileType = {
        'image': '/images/jpg-icon.svg',
        'pdf': '/images/pdf-icon.svg',
        'excel': '/images/xls-icon.svg',
    }
    const fileAlt = {
        'image': 'jpg-icon',
        'pdf': 'pdf-icon',
        'excel': 'xlsx-icon',
    }
    return (
        <Image
            src={fileType[type]}
            alt={fileAlt[type]}
            width={0}
            height={0}
            priority
            style={{width: `${width}px`, height: `${height}px`}}
        />
    );
};
export default FileIcon;
