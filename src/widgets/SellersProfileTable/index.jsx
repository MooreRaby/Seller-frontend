// components
import Spring from '@components/Spring';
import StyledTable from './styles';
import CalendarSelector from '@components/CalendarSelector';
import Select from '@ui/Select';
import Empty from '@components/Empty';
import SellerCollapseItem from '@components/SellerCollapseItem';

// hooks
import {useState, useEffect} from 'react';
import usePagination from '@hooks/usePagination';
import {useWindowSize} from 'react-use';

// constants
import {SELLERS_COLUMN_DEFS} from '@constants/columnDefs';
import {SELLER_SORT_OPTIONS} from '@constants/options';

// utils
import {sortSellers} from '@utils/helpers';

// data placeholder
import sellers from '@db/sellers';
import Pagination from '@ui/Pagination';

const SellersProfileTable = () => {
    const {width} = useWindowSize();
    const [activeCollapse, setActiveCollapse] = useState('');
    const [sort, setSort] = useState(SELLER_SORT_OPTIONS[0]);
    const perPage = width < 1280 ? 6 : 3;

    const pagination = usePagination(sellers.slice(0, 12), perPage);

    const sortedData = sortSellers(pagination.currentItems(), sort.value);

    // go to first page when period or sort changes and reset active collapse
    useEffect(() => {
        pagination.goToPage(0);
        setActiveCollapse('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort]);

    // reset active collapse when page or window width changes
    useEffect(() => {
        setActiveCollapse('');
    }, [pagination.currentPage, width]);

    const handleCollapse = (id) => {
        if (activeCollapse === id) {
            setActiveCollapse('');
        } else {
            setActiveCollapse(id);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-4 mb-5 md:flex-row justify-between md:mb-[30px]">
                <CalendarSelector wrapperClass="md:max-w-[275px]" id="salesPeriod"/>
                <div className="flex flex-col-reverse gap-2.5 md:flex-col md:min-w-[220px]">
                    <p className="md:text-right">
                        View profiles: {pagination.showingOf()}
                    </p>
                    <Select options={SELLER_SORT_OPTIONS}
                            value={sort}
                            onChange={setSort}/>
                </div>
            </div>
            <Spring className="flex flex-col flex-1 gap-5">
                {
                    width >= 768 ? (
                        <StyledTable columns={SELLERS_COLUMN_DEFS}
                                     dataSource={sortedData}
                                     locale={{
                                         emptyText: <Empty text="No sellers found"/>
                                     }}
                                     rowKey={record => record.id}
                                     pagination={false}/>
                    ) : (
                        <div className="flex flex-col flex-1 gap-4">
                            {
                                sortedData.map((item, index) => (
                                    <SellerCollapseItem key={item.id}
                                                        handleCollapse={handleCollapse}
                                                        activeCollapse={activeCollapse}
                                                        seller={item}/>
                                ))
                            }
                        </div>
                    )
                }
                {
                    pagination.maxPage > 1 && <Pagination pagination={pagination}/>
                }
            </Spring>
        </>
    )
}

export default SellersProfileTable