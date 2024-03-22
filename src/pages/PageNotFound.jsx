// components
import DocumentTitle from '@components/DocumentTitle';
import Error from '@components/Error';

const PageNotFound = () => {
    return (
        <>
            <DocumentTitle title="Page 404"/>
            <Error/>
        </>
    )
}

export default PageNotFound