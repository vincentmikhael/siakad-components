import {Text, Utils} from "@/components";
import {Minus, TrendDown, TrendUp} from "@phosphor-icons/react";

export {default as CardDataDosen} from './CardDataDosen';
export {default as CardDataMahasiswa} from './CardDataMahasiswa';
export {default as CardKelulusan} from './CardKelulusan';
export {default as CardKeuanganAkademik} from './CardKeuanganAkademik';
export {default as CardMahasiswaKritis} from './CardMahasiswaKritis';
export {default as CardMasaStudy} from './CardMasaStudy';
export {default as CardPenerimaanMahasiswaBaru} from './CardPenerimaanMahasiswaBaru';
export {default as CardTotalDosen} from './CardTotalDosen';
export {default as CardTotalKaryawan} from './CardTotalKaryawan';
export {default as CardTotalMahasiswa} from './CardTotalMahasiswa';
export {default as DashboardDate} from './DashboardDate';

const CardDataLegends = ({defaultList, namePrefix, className}) => {
    return defaultList.map((value, index) => {
        const isPercentGrowthValid = !Number.isNaN(value.percent_growth)
        const percent_growth = ((isPercentGrowthValid && value.percent_growth) ? Math.abs(value.percent_growth) + '%' : '-');
        return <div className={className} key={index}>
            <Text className="mb-2" tag="p" size="lg" weight={1000}
                  color="text-black"><b>{Utils.thousandth(value.quantity)}</b></Text>
            <div className="flex flex-row mb-5 items-center gap-2">
                {isPercentGrowthValid ? (value.percent_growth > 0 ? <><TrendUp className="text-success-100"/>
                    <Text tag="p" color="text-success-100" weight="600" size="sm">
                        {percent_growth}
                    </Text></> : (value.percent_growth < 0 ? <><TrendDown className="text-danger-100"/>
                    <Text tag="p" color="text-danger-100" weight="600" size="sm">
                        {percent_growth}
                    </Text></> : <><Minus className="text-info-100"/>
                    <Text tag="p" color="text-info-100" weight="600" size="sm">
                        {percent_growth}
                    </Text></>)) : '-'}
            </div>
            <div className="w-3 h-3 rounded-full mb-3" style={{backgroundColor: value.color}}></div>
            <Text className="" tag="p" color="text-gray-90" weight="600" size="sm">
                {`${namePrefix} ${value.status}`}
            </Text>
        </div>
    })
}

export {CardDataLegends}
