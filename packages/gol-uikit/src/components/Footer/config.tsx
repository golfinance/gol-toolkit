import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.golfinance.io/contact-us",
      },
      {
        label: "Blog",
        href: "https://golfinance.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.golfinance.io/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.golfinance.io/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://golfinance.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.golfinance.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.golfinance.io/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.golfinance.io/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/golfinance",
      },
      {
        label: "Documentation",
        href: "https://docs.golfinance.io",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@golfinance-1/s/golfinance/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.golfinance.io/help/faq#is-golfinance-safe-has-golfinance-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.golfinance.io/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/FinanceGol",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/golfinance",
      },
      // {
      //   label: "Bahasa Indonesia",
      //   href: "https://t.me/PancakeSwapIndonesia",
      // },
      // {
      //   label: "中文",
      //   href: "https://t.me/PancakeSwap_CN",
      // },
      // {
      //   label: "Tiếng Việt",
      //   href: "https://t.me/PancakeSwapVN",
      // },
      // {
      //   label: "Italiano",
      //   href: "https://t.me/pancakeswap_ita",
      // },
      // {
      //   label: "русский",
      //   href: "https://t.me/pancakeswap_ru",
      // },
      // {
      //   label: "Türkiye",
      //   href: "https://t.me/pancakeswapturkiye",
      // },
      // {
      //   label: "Português",
      //   href: "https://t.me/PancakeSwapPortuguese",
      // },
      {
        label: "Español",
        href: "https://t.me/golfinance_es",
      },
      // {
      //   label: "日本語",
      //   href: "https://t.me/pancakeswapjp",
      // },
      // {
      //   label: "Français",
      //   href: "https://t.me/pancakeswapfr",
      // },
      {
        label: "Announcements",
        href: "https://t.me/golfinance_channel",
      },
      // {
      //   label: "Whale Alert",
      //   href: "https://t.me/PancakeSwapWhales",
      // },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://www.reddit.com/r/golfinance/",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://www.instagram.com/golfinance/",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/golfinance/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
