export enum Pages {
    Home = "Home",
    WhatWeOffer = "What We Offer",
    RequestAPerformance = "Request a Performance",
    GWCDInTheNews = "GWCD in the News",
    Contact = "Contact",
    // Donate = "Donate",
}

type Page = {
    title: string;
    description: string;
    content: string;
    url: string;
};

export const pages: Record<Pages, Page> = {
    [Pages.Home]: {
        title: "Home",
        description: "Home",
        content: "Home",
        url: "/",
    },
    [Pages.WhatWeOffer]: {
        title: "What We Offer",
        description: "What We Offer",
        content: "What We Offer",
        url: "/what-we-offer",
    },
    [Pages.RequestAPerformance]: {
        title: "Request a Performance",
        description: "Request a Performance",
        content: "Request a Performance",
        url: "/request-a-performance",
    },
    [Pages.GWCDInTheNews]: {
        title: "GWCD in the News",
        description: "GWCD in the News",
        content: "GWCD in the News",
        url: "/gwcd-in-the-news",
    },
    [Pages.Contact]: {
        title: "Contact",
        description: "Contact",
        content: "Contact",
        url: "/contact",
    },
    // [Pages.Donate]: {
    //     title: "Donate",
    //     description: "Donate",
    //     content: "Donate",
    //     url: "/donate",
    // },
};
