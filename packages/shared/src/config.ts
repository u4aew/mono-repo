/**
 * Конфигурационный файл.
 *
 */

class Config {
    apiPrefix = '';

    gwApiPrefix = '';

    errors = {};

    errorsTitle = {};

    errorsSubtitle = {};

    defaultLogoForTeam = '';

    get apiMethods(): { [key: string]: string } {
        const { apiPrefix, gwApiPrefix } = this;

        return {
            registerStart: `${apiPrefix}/registration/start`,
            registerCheck: `${apiPrefix}/registration/check`,
            registerFinish: `${apiPrefix}/registration/finish`,
            registerNewOtp: `${apiPrefix}/registration/newotp`,
            registerPasswordValidate: `${apiPrefix}/registration/password/validate`,
            registerGetBusinessInfo: `${apiPrefix}/registration/business/data`,
        };
    }
}

const config = new Config();

export default config;
