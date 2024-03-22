// components
import Pagination from '@ui/Pagination';
import SellerGridItem from '@components/SellerGridItem';
import CalendarSelector from '@components/CalendarSelector';
import Select from '@ui/Select';

// hooks
import usePagination from '@hooks/usePagination';
import {useState, useEffect} from 'react';
import {useWindowSize} from 'react-use';

// constants
import {SELLER_SORT_OPTIONS} from '@constants/options';

// utils
import {sortSellers} from '@utils/helpers';

// data placeholder
import sellers from '@db/sellers';

const SellerProfilesGrid = () => {
    const {width} = useWindowSize();
    const [sort, setSort] = useState(SELLER_SORT_OPTIONS[0]);
    const sortedSellers = sortSellers(sellers, sort.value);
    const pagination = usePagination(sortedSellers, width >= 1280 && width < 1536 ? 20 : 18);
    const data = pagination.currentItems();

    useEffect(() => {
        pagination.setCurrentPage(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort]);

    return (
        <div className="flex flex-1 flex-col">
            <div className="grid gap-2.5 md:grid-cols-3 md:gap-[26px] xl:grid-cols-5 2xl:grid-cols-6">
                <CalendarSelector wrapperClass="md:col-span-2 md:max-w-[275px] xl:col-span-4 2xl:col-span-5"
                                  id="sellerGridPeriodSelector"/>
                <div className="flex flex-col-reverse gap-4 md:flex-col md:gap-2">
                    <p className="md:text-right">View profiles: {pagination.showingOf()}</p>
                    <Select options={SELLER_SORT_OPTIONS} value={sort} onChange={setSort}/>
                </div>
            </div>
            <div className="flex-1 grid content-start gap-5 mt-4 mb-8 sm:grid-cols-2 md:grid-cols-3 md:gap-[26px]
                 md:mt-[27px] xl:grid-cols-5 2xl:grid-cols-6">
                {
                    data.map((seller, index) => (
                        <SellerGridItem key={`${seller.id}-${sort.value}`} seller={seller} index={index}/>
                    ))
                }
            </div>
            <Pagination pagination={pagination}/>
        </div>
    )
}

export default SellerProfilesGrid