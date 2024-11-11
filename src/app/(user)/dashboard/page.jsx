import {Text} from "@/components";

export default function Dashboard() {
    return (
        <main>
            <div className="flex flex-col gap-3">
                <Text size="4xl" weight={600} color="text-white">Dashboard master</Text>
                <Text size="xl" weight={400} color="text-white">Rabu, 23 October 2024</Text>
            </div>
        </main>
    );
}