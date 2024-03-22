// components
import TopRetailCard from '@components/TopRetailCard';

// data placeholder
import sellers from '@db/sellers';

const TopRetail = () => {
    const data = sellers.slice(0,4);

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-[26px] lg:grid-cols-4 2xl:col-span-4">
            {
                data.map((item, index) => (
                    <TopRetailCard key={index} data={item} />
                ))
            }
        </div>
    )
}

export default TopRetail