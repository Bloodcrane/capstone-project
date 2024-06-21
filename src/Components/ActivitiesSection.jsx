import { useMediaQuery } from 'react-responsive'

import "../Styles/ActivitiesSection.css"

import fishing from "../Styles/Images/Activities/fishing.png"
import museum from "../Styles/Images/Activities/museum.png"
import hiking from "../Styles/Images/Activities/hiking.png"
import harvesting from "../Styles/Images/Activities/harvesting.png"
import cooking from "../Styles/Images/Activities/cookingmasterclass.png"
import riding from "../Styles/Images/Activities/horsebackriding.png"

import { useTranslation } from 'react-i18next';

const Activities = () => {
    const { t } = useTranslation();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div id="activities-section">
            <h2>{t('activities.title')}</h2>
            {/* Desktop Structure */}
            {isDesktopOrLaptop && <>
                <div className='activities-desktop'>
                    <div style={{backgroundImage: `url(${riding})`}}>
                        <p>{t('activities.riding')}</p>
                    </div>
                    <div style={{backgroundImage: `url(${hiking})`}}>
                        <p>{t('activities.hiking')}</p>
                    </div>
                    <div style={{backgroundImage: `url(${cooking})`}}>
                        <p>{t('activities.cooking')}</p>
                    </div>
                    <div style={{backgroundImage: `url(${fishing})`}}>
                        <p>{t('activities.fishing')}</p>
                    </div>
                    <div style={{backgroundImage: `url(${museum})`}}>
                        <p>{t('activities.museum')}</p>
                    </div>
                    <div style={{backgroundImage: `url(${harvesting})`}}>
                        <p>{t('activities.harvesting')}</p>
                    </div>
                </div>
            </>}

            {/* Mobile Structure */}
            {isTabletOrMobile && <>
                <div className='activities-mobile'>
                    <div style={{backgroundImage: `url(${fishing})`}}>
                        <p>{t('activities.fishing')}</p>
                    </div>
                    <div style={{backgroundImage: `url(${museum})`}}>
                        <p>{t('activities.museum')}</p>
                    </div>
                    <div style={{backgroundImage: `url(${hiking})`}}>
                        <p>{t('activities.hiking')}</p>
                    </div>
                    <div style={{backgroundImage: `url(${harvesting})`}}>
                        <p>{t('activities.harvesting')}</p>
                    </div>
                    <div style={{backgroundImage: `url(${cooking})`}}>
                        <p>{t('activities.cooking')}</p>
                    </div>
                    <div style={{backgroundImage: `url(${riding})`}}>
                        <p>{t('activities.riding')}</p>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Activities