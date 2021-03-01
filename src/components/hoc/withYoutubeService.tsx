import React from 'react';

const WithYoutubeService = <P extends object>(Wrapped: React.ComponentType<P>):React.FC<P> => {

    return (props: P) => {
        return <Wrapped {...props} />
    }
}

export default WithYoutubeService;