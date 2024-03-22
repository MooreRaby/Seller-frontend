// components
import Pagination from '@ui/Pagination';
import SellerListItem from '@components/SellerListItem';
import CalendarSelector from '@components/CalendarSelector';
import Select from '@ui/Select';

// hooks
import usePagination from '@hooks/usePagination';
import {useState, useEffect} from 'react';

// utils
import {sortSellers} from '@utils/helpers';

// constants
import {SELLER_SORT_OPTIONS} from '@constants/options';

// data placeholder
import sellers from '@db/sellers';

const SellerProfilesList = () => {
    const [sort, setSort] = useState(SELLER_SORT_OPTIONS[0]);
    const data = sellers.slice(0, 12);
    const sortedData = sortSellers(data, sort.value);
    const pagination = usePagination(sortedData, 4);

    // go to first page when sort changes
    useEffect(() => {
        pagination.goToPage(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort]);

    return (
        <>
            <div className="flex flex-col gap-4 mb-5 md:flex-row md:mb-[26px] justify-between">
                <CalendarSelector wrapperClass="md:max-w-[275px]" id="sellerList"/>
                <div className="flex flex-col-reverse gap-2.5 md:flex-col md:min-w-[220px]">
                    <p className="md:text-right">
                        View profiles: {pagination.showingOf()}
                    </p>
                    <Select value={sort} onChange={setSort} options={SELLER_SORT_OPTIONS}/>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-5 mb-[30px] md:gap-[26px]">
                {
                    pagination.currentItems().map((seller, index) => (
                        <SellerListItem key={seller.id} seller={seller} index={index}/>
                    ))
                }
            </div>
            {pagination.maxPage > 1 && <Pagination pagination={pagination}/>}
        </>
    )
}

export default SellerProfilesList