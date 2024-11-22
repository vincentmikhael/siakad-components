'use client'
import {Button, Card, Hr, Text} from "@/components";
import {CaretRight} from "@phosphor-icons/react/dist/ssr";

export default function CardDataDosen({className}) {
    return <Card className={className}>
        <div className="flex flex-row gap-3 w-full justify-between items-start">
            <div>
                <Text className="mb-3" tag="h2" color="text-black" weight="600" size="xl">
                    Data dosen
                </Text>
                <Text className="mb-3" color="text-gray-50" weight="400" size="base">
                    Terhitung dari daftar total 1.024
                </Text>
            </div>
            <Button className="text-gray-50" size="sm" variant="outlined"
                    rightIcon={<CaretRight weight="bold" size={16}/>}>Detail</Button>
        </div>
        <Hr/>
    </Card>
}