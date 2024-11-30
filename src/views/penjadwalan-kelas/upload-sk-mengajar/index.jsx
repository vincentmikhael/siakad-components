'use client'
import {FileUpload, Label} from "@/components";
import {useState} from "react";

export default function Index({}){
    const [file1, setFile1] = useState(null);
    return <>
        <div className="flex flex-col w-full">
            <Label>Upload SK mengajar</Label>
            <FileUpload file={file1} setFile={setFile1} allowDeleted={false}/>
        </div>
    </>
}