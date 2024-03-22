// components
import Spring from '@components/Spring';
import LabeledProgressBar from '@components/LabeledProgressBar';

const OrdersAverageRate = () => {
    return (
        <Spring className="card flex flex-col gap-4">
            <h5>Average Rate (%)</h5>
            <div className="flex flex-col gap-2.5">
                <LabeledProgressBar color="header" label="Product Views" value={87} displayValue="87%"/>
                <LabeledProgressBar color="header" label="Cart Abandonment Rate" value={23} displayValue="23%"/>
            </div>
        </Spring>
    )
}

export default OrdersAverageRate