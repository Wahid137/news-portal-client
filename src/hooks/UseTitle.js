import React, { useEffect } from 'react';

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title}-News Portal`;
    }, [title])
};

export default UseTitle;