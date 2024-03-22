// components
import PageHeader from '@layout/PageHeader';
import CustomerRetentionRate from '@widgets/CustomerRetentionRate';
import DemographicSegmentation from '@widgets/DemographicSegmentation';
import ConversionRate from '@widgets/ConversionRate';
import CustomersInfobox from '@components/CustomersInfobox';

const Customers = () => {
    return (
        <>
            <PageHeader title="Customers"/>
            <div className="widgets-grid grid-cols-1 xl:grid-cols-6">
                <div className="widgets-grid grid-cols-1 md:grid-cols-3 xl:col-span-3">
                    <CustomersInfobox count={32987} color="green"/>
                    <CustomersInfobox label="New" count={17153} iconClass="user-plus-solid"/>
                    <CustomersInfobox label="Regular" count={7587} color="red" iconClass="user-group-crown-solid"/>
                </div>
                <ConversionRate/>
                <CustomerRetentionRate/>
                <DemographicSegmentation/>
            </div>
        </>
    )
}

export default Customers