import Spring from '@components/Spring';

const UserProfileInfo = () => {
    return (
        <Spring className="card flex items-center">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                    <span className="icon-wrapper mt-1">
                        <i className="icon icon-envelope-solid"/>
                    </span>
                    maria@email.com
                </div>
                <div className="flex items-start gap-4">
                    <span className="icon-wrapper mt-1.5">
                        <i className="icon icon-location-dot-solid"/>
                    </span>
                    <span className="max-w-[156px]">
                        312 3rd St, Albany, New York 12206, USA
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="icon-wrapper mt-1">
                        <i className="icon icon-mobile-solid"/>
                    </span>
                    +1 123-123-123
                </div>
                <div className="flex items-center gap-4">
                    <span className="icon-wrapper mt-1">
                        <i className="icon icon-whatsapp"/>
                    </span>
                    +1 123-123-123
                </div>
                <button className="flex items-center gap-4 w-fit">
                        <span className="icon-wrapper mt-1">
                            <i className="icon icon-file-arrow-down-solid"/>
                        </span>
                    Profile Information file
                </button>
            </div>
        </Spring>
    )
}

export default UserProfileInfo