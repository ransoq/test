type id = {
    kind: string,
    videoId: string
}

type hight = {
    url: string
}

type thumbnails = {
    hight: hight
}

type snippet = {
    title: string,
    description: string,
    channelTitle: string,
    publishedAt: string,
    thumbnails: thumbnails,
    liveBroadcastContent: string,
    publishTime: string
}

export default interface Video {
    kind: string,
    etag: string,
    id: id,
    snippet: snippet
}