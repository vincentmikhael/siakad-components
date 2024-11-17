"use client"
import { useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Card,
    Select,
    Modal, //Utils,
} from "@/components";

// export async function generateMetadata(/*{params}*/){
//     return {
//         title: Utils.getDocumentTitle('Konfigurasi'),
//     }
// }
// export const metadata = {
//     title: Utils.getDocumentTitle('Konfigurasi'),
// }
export default function Konfigurasi() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const options = [
      { value: "1", label: "Menu Item 1" },
      { value: "2", label: "Menu Item 2" },
      { value: "3", label: "Menu Item 3" },
      { value: "4", label: "Menu Item 4" },
      { value: "5", label: "Menu Item 5" },
      { value: "6", label: "Menu Item 6" },
      { value: "7", label: "Menu Item 7" },
      { value: "8", label: "Menu Item 8" },
      { value: "9", label: "Menu Item 9" },
      { value: "10", label: "Menu Item 10" },
    ];

    const handleSelectChange = (selected) => {
      console.log("Selected option:", selected);
    };

    const [selectedValue, setSelectedValue] = useState("1");

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const columns = [
      { header: 'ID', accessor: 'id' },
      { header: 'Name', accessor: 'name',pinned: true },
    ]


  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem home href="/dashboard">
          Dashboard
        </BreadcrumbItem>
        <BreadcrumbItem>Konfigurasi</BreadcrumbItem>
      </Breadcrumb>
      <Card>
        <Select
          className={"w-64"}
          options={options}
          onChange={handleSelectChange}
        />
        <Button onClick={openModal}>Modal</Button>
        <Modal
          open={isOpen}
          onClose={closeModal}
          title="Hapus data"
          description="Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan."
          dismissable
          outsideClose
          autoClose
        >
          <div className="gap-4 flex flex-row">
            <Button variant="danger" size="md">
              Hapus
            </Button>
            <Button variant="white" size="md">
              Batal
            </Button>
          </div>
        </Modal>


      </Card>
    </div>
  );
}
