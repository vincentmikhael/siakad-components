import {Text} from "@/components";

const ChartData = ({data, className}) => {
    return data.map((value, index) => {
        return <div className="flex flex-col gap-5 w-20" key={index}>
            <Text size="lg" weight={800}>{value.percentage}%</Text>
            <div className="flex flex-col gap-2">
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: value.color}}></div>
                <Text color="text-gray-70" weight="500" size="xs">
                    {value.label}
                </Text>
            </div>
        </div>
    })
}

export default ChartData