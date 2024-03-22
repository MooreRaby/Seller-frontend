// components
import Spring from '@components/Spring';

// utils
import {numFormatter, getCategory} from '@utils/helpers';

const TopRetailCard = ({data}) => {
    const arr = Object.entries(data.profit).map(([key, value]) => ({key, value}))
        .sort((a, b) => b.value - a.value);
    const category = getCategory(arr[0].key);

    return (
        <Spring className="card">
            <div className="img-wrapper h-[157px] flex justify-center items-center mb-6">
                <img className="max-w-[120px]" src={data.logo} alt={data.name} />
            </div>
            <div className="flex gap-5">
                <div className={`badge-icon badge-icon--sm bg-${category.color}`}>
                    <i className={`${category.icon} text-base`}/>
                </div>
                <div className="flex flex-col">
                    <span className="label-text truncate">{category.label}</span>
                    <span className="h5">${numFormatter(arr[0].value)}</span>
                </div>
            </div>
        </Spring>
    )
}

export default TopRetailCard