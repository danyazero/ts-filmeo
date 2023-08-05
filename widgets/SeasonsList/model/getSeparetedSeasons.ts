import {IEpisode} from "@/widgets/SeasonsList/model/SeasonList.interface";

export function getSeparatedSeasons(data: IEpisode[]){
    const seasonArrays: { [key: string]: IEpisode[] } = {};

    data.forEach(item => {
        const season = item.season;
        if (!seasonArrays[`Season ${season}`]) {
            seasonArrays[`Season ${season}`] = [];
        }
        seasonArrays[`Season ${season}`].push(item);
    });

    return seasonArrays
}