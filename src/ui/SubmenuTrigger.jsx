const SubmenuTrigger = ({className, onClick}) => {
    return (
        <button className={className || ''} onClick={onClick} aria-label="Open submenu">
            <i className="icon icon-ellipsis-vertical-solid text-[24px]" />
        </button>
    )
}

export default SubmenuTrigger