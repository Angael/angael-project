import React, { useEffect } from 'react';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { useRouter } from 'next/router';

import { app } from './analytics';

const AnalyticsComponent = () => {
    const router = useRouter();

    useEffect(() => {
        const analytics = getAnalytics(app);
        logEvent(analytics, 'page_view', { page_path: router.asPath });
    }, [router.asPath]);

    return null;
};

export default AnalyticsComponent;
