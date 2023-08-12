/**
 * Конфигурационный файл.
 *
 */
declare class Config {
    apiPrefix: string;
    gwApiPrefix: string;
    errors: {};
    errorsTitle: {};
    errorsSubtitle: {};
    defaultLogoForTeam: string;
    get apiMethods(): {
        [key: string]: string;
    };
}
declare const config: Config;
export default config;
