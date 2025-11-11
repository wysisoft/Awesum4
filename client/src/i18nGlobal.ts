import { createI18n, type I18n } from "vue-i18n";
import type { ResourceValue } from "./resources/ResourceValue";
import { resourcesEnGB } from "./resources/Resources.en-GB";
import { resources } from "./resources/Resources";
import type { TypeOnlyImportDeclaration } from "typescript";
import type { Table } from "dexie";

if(typeof window == 'undefined') {
    var window = {
        navigator: {
            languages: ['en-US', 'en-GB', 'en'],
            language: 'en-US'
        }
    } as any;
}

if (typeof document == 'undefined') {
    var document = {
        documentElement: {
            lang: 'en-US'
        }
    } as any;
}


export class I18nGlobal {

    static getLang(supportedLocales: string[], fallbackLocale: string) {
        // Get the user's preferred locales
        const userLocales = window.navigator.languages || [window.navigator.language];

        // Find the first supported locale that matches the user's preferred locales
        return userLocales.find((locale: string) => supportedLocales.includes(locale)) || fallbackLocale;
    }

    static _t:I18n;

    static ensurei18nLoaded() {
        if (!I18nGlobal._t) {
            const supportedLocales = ['en-US', 'en-GB', 'en']
            const fallbackLocale = 'en-US'
            const locale = this.getLang(supportedLocales, fallbackLocale);
            document.documentElement.lang = locale;
            let i = createI18n({
                legacy: false, // you must set `false`, to use Composition API
                locale: locale,
                supportedLocales,
                fallbackLocale: fallbackLocale,
                globalInjection: true,
                messages: {
                    "en-US": resources,
                    "en-GB": resourcesEnGB,
                    "en": resources,
                },
                missing(locale: string, key: string) {
                    console.log('missing key - ' + key + ' for locale - ' + locale);
                }
            });
            I18nGlobal._t = i as I18n;                        
        }
        
    }

    static get t() {
        I18nGlobal.ensurei18nLoaded();
        return (I18nGlobal._t.global as any).t;
    }
}