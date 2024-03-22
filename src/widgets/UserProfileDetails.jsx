// components
import Spring from '@components/Spring';
import {NavLink} from 'react-router-dom';
import {PatternFormat} from 'react-number-format';
import PasswordInput from '@components/PasswordInput';
import {toast} from 'react-toastify';
import Select from '@ui/Select';

// hooks
import {useForm, Controller} from 'react-hook-form';
import {useTheme} from '@contexts/themeContext';
import {useState} from 'react';

// utils
import classNames from 'classnames';
import countryList from 'react-select-country-list';
import {City} from 'country-state-city';

const UserProfileDetails = () => {
    const {theme, toggleTheme} = useTheme();
    const {register, setValue, handleSubmit, formState: {errors}, control} = useForm({
        defaultValues: {
            firstName: 'Maria',
            lastName: 'Smith',
            email: 'maria@email.com',
            phone: '',
            password: 'password',
            country: null,
            city: null,
            state: '',
            zip: '',
            address: '',
        }
    });
    // eslint-disable-next-line no-unused-vars
    const [selectedCountry, setSelectedCountry] = useState();
    // eslint-disable-next-line no-unused-vars
    const [selectedCity, setSelectedCity] = useState();
    const [cities, setCities] = useState([]);

    const getCountriesOptions = () => {
        let countries = countryList().getData();
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].value === 'RU') {
                countries[i].label = 'Russia [terrorist state]';
            }
        }
        return countries
    }

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setSelectedCity(null);
        let options = [];
        const rawData = City.getCitiesOfCountry(country.value);
        rawData.map(item => options.push({value: item.name, label: item.name}));
        setCities(options);
    }

    // do something with the data
    const onSubmit = data => {
        console.log(data);
        toast.success('Profile updated successfully');
    }

    return (
        <Spring className="card flex flex-col gap-[30px] md:gap-12 md:row-start-2 md:col-span-2 md:!pb-[50px]
                xl:row-start-1 xl:col-start-2 xl:col-span-1">
            <div className="flex flex-col gap-5">
                <h5>My Profile Details</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                        <div className="grid gap-4">
                            <div className="field-wrapper">
                                <label className="field-label" htmlFor="firstName">First Name</label>
                                <input className={classNames('field-input', {'field-input--error': errors.firstName})}
                                       type="text"
                                       id="firstName"
                                       placeholder="First Name"
                                       defaultValue="Maria"
                                       {...register('firstName', {required: true})}/>
                            </div>
                            <div className="field-wrapper">
                                <label className="field-label" htmlFor="lastName">Last Name</label>
                                <input className={classNames('field-input', {'field-input--error': errors.lastName})}
                                       type="text"
                                       id="lastName"
                                       placeholder="Last Name"
                                       defaultValue="Smith"
                                       {...register('lastName', {required: true})}/>
                            </div>
                            <div className="field-wrapper">
                                <label className="field-label" htmlFor="email">Email</label>
                                <input className={classNames('field-input', {'field-input--error': errors.email})}
                                       type="text"
                                       id="email"
                                       placeholder="Email"
                                       defaultValue="maria@email.com"
                                       {...register('email', {required: true, pattern: /^\S+@\S+$/i})}/>
                            </div>
                            <div className="field-wrapper">
                                <label className="field-label" htmlFor="phone">Phone Number</label>
                                <Controller
                                    name="phone"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            value={field.value}
                                            format="+#-###-###-####"
                                            placeholder="(123) 456-7890"
                                            className={classNames('field-input', {'field-input--error': errors.phone})}
                                            getInputRef={field.ref}/>
                                    )}
                                />
                            </div>
                            <Controller name="password"
                                        control={control}
                                        rules={{required: true}}
                                        render={({field: {onChange, value, ref}}) => (
                                            <PasswordInput id="profilePassword"
                                                           innerRef={ref}
                                                           value={value}
                                                           isInvalid={errors.password}
                                                           onChange={onChange}/>
                                        )}/>
                        </div>
                        <div className="grid gap-4">
                            <div className="field-wrapper">
                                <label className="field-label" htmlFor="country">Country</label>
                                <Controller
                                    name="country"
                                    control={control}
                                    render={({field}) => {
                                        return (
                                            <Select
                                                options={getCountriesOptions()}
                                                value={field.value}
                                                onChange={(value) => {
                                                    field.onChange(value);
                                                    handleCountryChange(value);
                                                    setValue('city', null);
                                                }}
                                                placeholder="Country"
                                                isSearchable={true}
                                                innerRef={field.ref}
                                            />
                                        )
                                    }}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label className="field-label" htmlFor="city">City</label>
                                <Controller
                                    name="city"
                                    control={control}
                                    render={({field}) => {
                                        return (
                                            <Select
                                                options={cities}
                                                value={field.value}
                                                onChange={(value) => {
                                                    field.onChange(value);
                                                    setSelectedCity(value);
                                                }}
                                                placeholder="City"
                                                isSearchable={true}
                                                innerRef={field.ref}
                                            />
                                        )
                                    }}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label className="field-label" htmlFor="state">State</label>
                                <input className="field-input"
                                       type="text"
                                       id="state"
                                       placeholder="State"
                                       {...register('state')}/>
                            </div>
                            <div className="field-wrapper">
                                <label className="field-label" htmlFor="zip">Zip Code</label>
                                <input className="field-input"
                                       type="text"
                                       id="zip"
                                       placeholder="Zip Code"
                                       {...register('zip', {pattern: /^\d{5}(?:[-\s]\d{4})?$/i})}/>
                            </div>
                            <div className="field-wrapper">
                                <label className="field-label" htmlFor="address">Address</label>
                                <input className="field-input"
                                       type="text"
                                       id="address"
                                       placeholder="Address"
                                       {...register('address')}/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2.5">
                        <button className="text-btn" type="button">
                            Change password
                        </button>
                        <button className="btn btn--primary w-full mt-5 md:w-fit md:px-[70px]" type="submit">
                            Update information
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <h5>Admin Panel Tools</h5>
                <div className="grid gap-4 mt-5 md:grid-cols-2 md:gap-y-8 md:gap-x-[50px] md:mt-8 lg:grid-cols-3 lg:max-w-[780px]">
                    <NavLink className="tool-btn" to="/connected-apps">
                        <span className="icon-wrapper">
                            <i className="icon icon-window-solid"/>
                        </span>
                        <span>
                            Connected Apps <span className="subheading-2">(12)</span>
                        </span>
                    </NavLink>
                    <NavLink className="tool-btn" to="/connected-apps">
                        <span className="icon-wrapper">
                            <i className="icon icon-money-check-dollar-pen-solid" style={{fontSize: 16}}/>
                        </span>
                        Payment Methods
                    </NavLink>
                    <NavLink className="tool-btn" to="/connected-apps">
                        <span className="icon-wrapper">
                            <i className="icon icon-screwdriver-wrench-solid"/>
                        </span>
                        Appearance
                    </NavLink>
                    <NavLink className="tool-btn" to="/connected-apps">
                        <span className="icon-wrapper">
                            <i className="icon icon-shield-halved-solid"/>
                        </span>
                        Security Assets
                    </NavLink>
                    <NavLink className="tool-btn" to="/connected-apps">
                        <span className="icon-wrapper">
                            <i className="icon icon-sliders-solid"/>
                        </span>
                        Configuration Settings
                    </NavLink>
                    <button className="tool-btn" aria-label="Change theme" onClick={toggleTheme}>
                        <span className="icon-wrapper">
                            <i className={`icon icon-${theme === 'light' ? 'sun-bright' : 'moon'}-solid`}/>
                        </span>
                        View Mode
                    </button>
                </div>
            </div>
        </Spring>
    )
}

export default UserProfileDetails