/**
 * Конфигурационный файл.
 *
 */

class Config {
    apiPrefix = 'http://172.18.1.137:3100';

    errors = {};

    errorsTitle = {};

    errorsSubtitle = {};

    defaultLogoForTeam = '';

    get apiMethods(): { [key: string]: string } {
        const { apiPrefix } = this;

        return {
            registerStart: `${apiPrefix}/registration/start`,
            registerCheck: `${apiPrefix}/registration/check`,
            registerFinish: `${apiPrefix}/registration/finish`,
            registerNewOtp: `${apiPrefix}/registration/newotp`,
        };
    }
}

const config = new Config();

export default config;
