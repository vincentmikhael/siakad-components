"use client"

import {FileIcon, Modal, Text} from "@/components";
import {useEffect, useState} from "react";
import Image from "next/image";

const ModalSignature = ({fileName}) => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        if (fileName) {
            const fetchFileInfo = async () => {
                setLoading(true);
                try {
                    const res = await fetch(`/api/get-info-file?fileName=${fileName}`);
                    const data = await res.json();
                    if (res.ok) {
                        setFile(data.data);
                    }
                } catch (error) {
                    setFile(null);
                } finally {
                    setLoading(false);
                }
            };

            fetchFileInfo()
        } else {
            setFile(null)
        }
    }, [fileName]);

    const openSignatureModal = () => {
        if (fileName) {
            setOpenModal(true);
        }
    }
    const closeSignatureModal = () => {
        setOpenModal(false);
    }

    const formatFileSize = (size) => {
        if (size < 1024) {
            return `${size} B`;
        } else if (size < 1024 * 1024) {
            return `${(size / 1024).toFixed(2)} KB`;
        } else {
            return `${(size / (1024 * 1024)).toFixed(2)} MB`;
        }
    };

    return (
        <>
            <button type="button"
                    className={`flex flex-row gap-3 items-start ${loading ? "skeleton-box" : !fileName && "pointer-events-none"}`}
                    disabled={!fileName}
                    onClick={openSignatureModal}>
                <FileIcon type="image" width={24} height={24}/>
                <div className="flex flex-col">
                    {file && (
                        <Text color="text-primary-100" weight={500} size="xs">
                            {file?.name}
                        </Text>
                    )}
                    <Text color="text-gray-50" weight={400} size="xs">
                        {file ? formatFileSize(file?.size) : 'No file chosen'}
                    </Text>
                </div>
            </button>
            {fileName && (
                <Modal size="md" open={openModal} onClose={closeSignatureModal} title="Tanda tangan" dismissable
                       outsideClose>
                    <Modal.Body>
                        <div className="flex flex-col gap-4">
                            <Image src={`/uploads/${fileName}`} alt={fileName} width={200} height={200}
                                   className="w-full h-auto"/>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </>
    )
}
export default ModalSignature