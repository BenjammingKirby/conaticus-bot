interface IReactionMessage {
    title: string;
    reactions: {
        [key: string]: {
            emoji: string;
            roleId: string;
        };
    };
}

interface IConfig {
    suggestionsChannelId: string;
    welcomeChannelId: string;
    announcementsChannelId: string;
    announcementsRoleId: string;
    guildId: string;
    rolesChannelId: string;
    reactionMessages: IReactionMessage[];
    memberRoleId: string;
}

const config: IConfig = {
    suggestionsChannelId: "949572444656648262",
    announcementsChannelId: "949567953211387945",
    announcementsRoleId: "960144630857465866",
    welcomeChannelId: "949566381068795936",
    guildId: "949566380523548672",
    rolesChannelId: "949572424079376414",
    reactionMessages: [
        {
            title: "Languages",
            reactions: {
                JavaScript: {
                    emoji: "<:js:960813493135757352>",
                    roleId: "960816210835038228",
                },
                TypeScript: {
                    emoji: "<:ts:960813517982822410>",
                    roleId: "960816240715243530",
                },
                Python: {
                    emoji: "<:py:960813603492081694>",
                    roleId: "960816353110024232",
                },
                C: {
                    emoji: "<:clang:960813561284788244>",
                    roleId: "960816289671155732",
                },
                "C++": {
                    emoji: "<:cpp:960813535649210379>",
                    roleId: "960816260147478538",
                },
                "C#": {
                    emoji: "<:cs:960815222921244712>",
                    roleId: "960816310806265876",
                },
                Java: {
                    emoji: "<:java:960813579530043412>",
                    roleId: "960816335196160040",
                },
                Go: {
                    emoji: "<:go:960813668721889320>",
                    roleId: "960816400283361340",
                },
                Rust: {
                    emoji: "<:rust:960813646567583786>",
                    roleId: "960816373255258133",
                },
                PHP: {
                    emoji: "<:php:960813688502226974>",
                    roleId: "960816427756040212",
                },
            },
        },
        {
            title: "Pings",
            reactions: {
                Announcements: {
                    emoji: "📢",
                    roleId: "960144630857465866",
                },
                Events: {
                    emoji: "🗓️",
                    roleId: "960889231184650242",
                },
            },
        },
    ],
    memberRoleId: "949569759308025856",
};

export default config;
