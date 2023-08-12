"use strict";
/**
 * Конфигурационный файл.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor() {
        this.apiPrefix = '';
        this.gwApiPrefix = '';
        this.errors = {};
        this.errorsTitle = {};
        this.errorsSubtitle = {};
        this.defaultLogoForTeam = '';
    }
    get apiMethods() {
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
exports.default = config;
