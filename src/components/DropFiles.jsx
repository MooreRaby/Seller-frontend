// components
import {toast} from 'react-toastify';

// hooks
import {useDropzone} from 'react-dropzone';

// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';

const imgTypes = {
    'image/jpeg': [],
    'image/png': [],
    'image/gif': [],
    'image/bmp': [],
    'image/webp': [],
    'image/svg+xml': []
}

const docTypes = {
    'application/pdf': [],
    'application/msword': [],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
    'application/vnd.ms-excel': [],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': []
}

const DropFiles = ({wrapperClass, type = 'image', multiple = false, children, onChange}) => {
    const {
        getRootProps,
        getInputProps,
        isDragActive
    } = useDropzone({
        accept: type === 'image' ? {...imgTypes} : {...docTypes},
        multiple: multiple,
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length > 0) {
                onChange(acceptedFiles);
            } else {
                toast.error('File type not supported');
            }
        }
    });

    return (
        <div {...getRootProps()} className={classNames(`${wrapperClass} cursor-pointer`, {activeClass: isDragActive})}>
            <input {...getInputProps()} />
            {children}
        </div>
    )
}

DropFiles.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['image', 'doc']),
    multiple: PropTypes.bool,
    children: PropTypes.node
}

export default DropFiles