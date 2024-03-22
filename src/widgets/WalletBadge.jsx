// components
import Spring from '@components/Spring';

// utils
import {numFormatter} from '@utils/helpers';

const WalletBadge = ({value = 0, label = 'Lorem ipsum', image = 'https://placehold.co/52', imgClass}) => {
    return (
        <Spring className="card flex items-center !py-[13px] !pl-[18px] !pr-6">
            <div className={`w-[52px] h-[52px] mr-8 hidden xs:flex items-center ${imgClass || ''}`}>
                <img src={image} alt={label}/>
            </div>
            <span className="h6 !text-sm">{label}</span>
            <span className="h6 !text-sm ml-auto">{numFormatter(value, 1, '$')}</span>
        </Spring>
    )
}

export default WalletBadge
