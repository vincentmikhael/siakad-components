import {Button, Modal, Spinner} from "@/components";

export default function ModalEntriJadwalKuliah({
                                                   open, setOpen, onClose, onSubmit, buttonSubmitName = 'Tambah',
                                                   pending = false, title = 'Tambah data report'
                                               }) {
    return <Modal size='lg' open={open} onClose={onClose} title={title}
                  style={{maxHeight: 'calc(100vh-(2rem*2)-(99px*2))'}}>
        <Modal.Body>
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