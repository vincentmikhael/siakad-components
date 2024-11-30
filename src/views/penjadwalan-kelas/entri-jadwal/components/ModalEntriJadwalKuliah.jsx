import {Button, Hr, Modal, Select, Spinner} from "@/components";

export default function ModalEntriJadwalKuliah({
                                                   open, setOpen, onClose, onSubmit, buttonSubmitName = 'Tambah',
                                                   pending = false, title = 'Tambah jadwal kuliah'
                                               }) {
    return <Modal size='lg' open={open} onClose={onClose} title={title}
                  style={{maxHeight: 'calc(100vh-(2rem*2)-(99px*2))'}}>
        <Modal.Body>
            <div className="flex overflow-y-auto -m-8 p-8">{/*h-[calc(100%-(2rem*2)-(99px*2))]*/}
                <form className='flex flex-wrap -mx-2 gap-y-4 w-full'>
                    <div className="w-full xl:w-1/2 px-2">
                        <Select isRelative={false} label="Fakultas" options={[]} showLabel/>
                    </div>
                    <div className="w-full xl:w-1/2 px-2">
                        <Select isRelative={false} label="Program atudi" options={[]} showLabel/>
                    </div>
                    <div className="w-full xl:w-1/2 px-2">
                        <Select isRelative={false} label="Konsentrasi" options={[]} showLabel/>
                    </div>
                    <div className="w-full xl:w-1/2 px-2">
                        <Select isRelative={false} label="Mata kuliah" options={[]} showLabel/>
                    </div>
                    <div className="w-full xl:w-1/2 px-2">
                        <Select isRelative={false} label="Semester" options={[]} showLabel/>
                    </div>
                    <div className="w-full xl:w-1/2 px-2">
                        <Select isRelative={false} label="Tahun akademik" options={[]} showLabel/>
                    </div>
                    <div className="w-full xl:w-1/2 px-2">
                        <Select isRelative={false} label="Kelas" options={[]} showLabel/>
                    </div>
                    <div className="w-full xl:w-1/2 px-2">
                        <Select isRelative={false} label="Pengajar" options={[]} showLabel/>
                    </div>
                    <Hr className="w-full"/>
                    <div className="w-full xl:w-1/2 px-2">
                        <Select isRelative={false} label="Hari" options={[]} showLabel/>
                    </div>
                    <div className="w-full xl:w-1/2 px-2">
                        <Select isRelative={false} label="Jam pembelajaran" options={[]} showLabel/>
                    </div>
                    <div className="w-full xl:w-1/2 px-2">
                        <Select isRelative={false} label="Jumlah SKS" options={[]} showLabel/>
                    </div>
                    <div className="w-full xl:w-1/2 px-2">
                        <Select isRelative={false} label="Ruang kuliah" options={[]} showLabel/>
                    </div>
                </form>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <div className="gap-4 flex flex-row">
                <Button
                    type="button"
                    variant="primary"
                    size="md"
                    fullWidth={false}
                    filled
                    disabled={/*()!password || !passwordNew || !passwordConfirmation) ||*/ pending}
                    onClick={onSubmit}
                >
                    {pending ? <Spinner/> : buttonSubmitName}
                </Button>
                <Button variant="white" size="md" filled onClick={() => setOpen && setOpen(false)}>
                    Batal
                </Button>
            </div>
        </Modal.Footer>
    </Modal>
}