const description = "New open-source donate system for community. Easy, fast and secure."
export default {
    head: {
        title: "RepeatPay",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: description,
            },
            {
                hid: "twitter:title",
                name: "twitter:title",
                content: "repeatpay.ga",
            },
            {
                hid: "twitter:description",
                name: "twitter:description",
                content: description,
            },
            {
                hid: "twitter:image",
                name: "twitter:image",
                content: "/icon.png",
            },
            /* Open-Graph */
            {
                hid: "og:title",
                name: "og:title",
                content: "RepeatPay"
            },
            {
                hid: "og:type",
                name: "og:type",
                content: "website",
            },
            {
                hid: "og:site_name",
                name: "og:site_name",
                content: "repeatpay.ga",
            },
            {
                hid: "og:description",
                name: "og:description",
                content: description,
            },
            {
                hid: "og:image",
                name: "og:image",
                content: "https://repeatpay.ga/icon.png",
            },
            /* Others */
            {
                hid: "theme-color",
                name: "theme-color",
                content: "#6762a6",
            },
        ].map((i) => {
            if (i.name && !i.property) i.property = i.name
            return i
        }),
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico",
            },
        ],
    },
}
