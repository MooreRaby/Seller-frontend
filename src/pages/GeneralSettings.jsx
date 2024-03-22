// components
import PageHeader from '@layout/PageHeader';
import UserProfileCard from '@widgets/UserProfileCard';
import UserProfileDetails from '@widgets/UserProfileDetails';
import UserProfilePanel from '@widgets/UserProfilePanel';
import UserProfileInfo from '@widgets/UserProfileInfo';

const GeneralSettings = () => {
    return (
        <>
            <PageHeader title="Settings"/>
            <div className="widgets-grid md:!grid-cols-2 xl:!grid-cols-[340px,_minmax(0,1fr)]">
                <div className="widgets-grid md:!grid-cols-2 md:col-span-2 xl:!grid-cols-1 xl:col-span-1">
                    <UserProfileCard/>
                    <div className="widgets-grid">
                        <UserProfilePanel/>
                        <UserProfileInfo/>
                    </div>
                </div>
                <UserProfileDetails/>
            </div>
        </>
    )
}

export default GeneralSettings