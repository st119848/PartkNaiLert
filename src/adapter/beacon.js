
export const transformBeaconsConfig = (data=[]) => {

    return data.reduce((result, item) => {
        const {tags=[], distance} = item;
        for (const tag of tags) {
            const isExistTags = result.find(item => item.tag === tag);
            if(isExistTags) {
                return result;
            }
            const newConfig = {
                tag,
                distance,
            };
            return [
                ...result,
                newConfig
            ];
        };
        return result;
    }, [])
};