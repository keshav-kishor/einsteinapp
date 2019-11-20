(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../dist/common-lib/fesm5/common-lib.js":
/*!**********************************************************************************************!*\
  !*** C:/SourceCode/sfdc-einstein-app-package/SFEinstein/dist/common-lib/fesm5/common-lib.js ***!
  \**********************************************************************************************/
/*! exports provided: DatastoreKeys, AuthToken, AppConfig, AuthenticateSettings, AccessTokenService, LocalStorageService, SessionStorageService, StorageService, LoggerService, LogMonitorService, ValidationUtilsService, URLUtilsService, ParseUtil, LocalizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatastoreKeys", function() { return DatastoreKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthToken", function() { return AuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateSettings", function() { return AuthenticateSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessTokenService", function() { return AccessTokenService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageService", function() { return SessionStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogMonitorService", function() { return LogMonitorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationUtilsService", function() { return ValidationUtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLUtilsService", function() { return URLUtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseUtil", function() { return ParseUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return LocalizationService; });
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-logger */ "../../../node_modules/ngx-logger/esm5/ngx-logger.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jszip */ "../../../node_modules/jszip/lib/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "../../../node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DatastoreKeys = {
    AuthToken: 'authToken',
    AuthErrors: 'authErr',
    AuthSettings: 'authConfig',
    AuthIdpConfig: 'authIdp',
    AppLogs: 'appLogs',
    // Do we really need these?
    QueryString: 'qrystr',
    SessionId: 'sessionId',
    AgentSessionInfo: 'agentSessionInfo',
    AgentLeg: 'agentLeg',
    LocalTime: 'localTime',
    ServerTime: 'serverTime',
    StateInfo: 'stateInfo',
    AgentMessages: 'agentMsgs',
    BusinessUnit: 'businessUnit',
    Permissions: 'permissions',
    AgentSettings: 'agentSettings',
    AgentInfo: 'agentInfo',
    UnavailableCodes: 'unavailableCodes',
    DisableAutoLogin: 'disableAutoLogin',
    InitParam: 'initParam',
    RefreshTokenError: 'refreshTokenError',
    RouterUrl: 'routerUrl',
    CallContacts: 'callContacts',
    SfResult: 'sfResult',
    SFSessionId: 'sfSessionId',
    AgentSkillList: 'agentSkillList',
    Cx1Tab: 'cx1Tab',
    IsCx1Open: 'isCX1Open',
    WfoUrl: 'wfoUrl',
    TimezonesList: 'timezonesList',
    SkillMediaType: 'skillMediaType',
    AgentMuted: 'agentMuted',
    Indicators: 'Indicators',
    CommitmentReminderData: 'commitmentReminderData',
    LastAttentedContactId: 'lastAttentedContactId',
    LastDispoContactId: 'lastDispoContactId',
    NewUserId: "newUserUUID",
    TenantId: "tenantId",
    AccessSecretKey: "accessSecretKey",
    EvolveWebServerUrl: "evolveWebServerUrl",
    AdminUserName: "adminUserName",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthToken = /** @class */ (function () {
    function AuthToken() {
    }
    // parse access token response data for Central/Idp/UserHub
    // parse access token response data for Central/Idp/UserHub
    /**
     * @param {?} data
     * @return {?}
     */
    AuthToken.prototype.parseData = 
    // parse access token response data for Central/Idp/UserHub
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.accessToken = (data.access_token) ? data.access_token : data.accessToken;
        this.refreshToken = (data.refresh_token) ? data.refresh_token : data.refreshToken;
        this.expiresIn = (data.expires_in) ? data.expires_in : data.accessTokenExpiry;
        this.accessTokenTime = new Date().getTime();
        this.resourceUrl = (data.resource_server_base_uri) ? data.resource_server_base_uri : data.resourceUrl;
        this.businessUnit = (data.bus_no) ? data.bus_no : data.businessUnit;
    };
    return AuthToken;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.appId = 'SalesforceCXoneAgent@niceincontact';
        this.appSecret = 'MjIwNWFkODNmOTU3NDZiNWJiYTM0OGZiMmJjYTczZWI=';
    }
    return AppConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthenticateSettings = /** @class */ (function () {
    function AuthenticateSettings() {
        this.isUserHub = false;
        this.userHubLoginBaseUrl = 'https://auth.nice-incontact.com';
        this.userHubNotificationUrl = 'https://na1-ws.nice-incontact.com/ws/notifications';
        this.userHubWebBaseUrl = 'https://na1.nice-incontact.com';
        this.centralTokenUrl = 'https://api.incontact.com/InContactAuthorizationServer/Token';
        this.centralMyDomain = '';
        this.forgotPassword = '';
        this.resourceServerBaseURI = '';
    }
    // parse response from getCallCenterSettings and return AuthenticateSettings
    // parse response from getCallCenterSettings and return AuthenticateSettings
    /**
     * @param {?} data
     * @return {?}
     */
    AuthenticateSettings.prototype.parseAuthenticationSettings = 
    // parse response from getCallCenterSettings and return AuthenticateSettings
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var settings = new AuthenticateSettings();
        /** @type {?} */
        var authSettings = data;
        /** @type {?} */
        var icAuthUrl = (authSettings.icAuthorizationUrl__c) ? authSettings.icAuthorizationUrl__c : authSettings.icAuthorizationUrl__c;
        /** @type {?} */
        var authMode = authSettings.authMode__c ? authSettings.authMode__c : 'inContact';
        settings.centralTokenUrl = icAuthUrl ? icAuthUrl : authSettings.inContactTokenServiceUri__c;
        settings.isUserHub = (authMode && authMode.toLowerCase() === 'evolve' || authMode.toLowerCase() === 'userhub');
        settings.userHubLoginBaseUrl = (authSettings.evolveAuthUrl__c) ? authSettings.evolveAuthUrl__c : authSettings.evolveAuthUrl__c;
        settings.userHubNotificationUrl = (authSettings.evolveNotificationUrl__c) ? authSettings.evolveNotificationUrl__c
            : authSettings.evolveNotificationUrl__c;
        settings.userHubWebBaseUrl = (authSettings.evolveWebServerUrl__c) ? authSettings.evolveWebServerUrl__c
            : authSettings.evolveWebServerUrl__c;
        settings.centralMyDomain = (authSettings.icCustomDomain__c) ? authSettings.icCustomDomain__c : authSettings.icCustomDomain__c;
        settings.forgotPassword = (authSettings.forgotPassword__c) ? authSettings.forgotPassword__c : authSettings.forgotPassword__c;
        return settings;
    };
    return AuthenticateSettings;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return localStorage.getItem(key);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    LocalStorageService.prototype.set = /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    function (key, val) {
        return localStorage.setItem(key, val);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageService.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return localStorage.removeItem(key);
    };
    /**
     * @return {?}
     */
    LocalStorageService.prototype.clear = /**
     * @return {?}
     */
    function () {
        return localStorage.clear();
    };
    LocalStorageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ LocalStorageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function LocalStorageService_Factory() { return new LocalStorageService(); }, token: LocalStorageService, providedIn: "root" });
    return LocalStorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidationUtilsService = /** @class */ (function () {
    function ValidationUtilsService() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ValidationUtilsService.prototype.isNotNullOrUndefined = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== 'null' && value !== null && value !== 'undefined' && value !== undefined) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidationUtilsService.prototype.isNotNullOrEmpty = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isNotNullOrUndefined(value) && value !== '') {
            return true;
        }
        return false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidationUtilsService.prototype.isValidStationId = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var filter = /^[0-9]+$/;
        return filter.test(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidationUtilsService.prototype.isValidPhoneNumber = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var filter = /^(\+?)([0-9#\*])+$/;
        if (filter.test(value) && value.length <= 30) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidationUtilsService.prototype.isNullOrEmpty = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (value === undefined || value === null || value === '');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidationUtilsService.prototype.isNotNullOrEmptyArray = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === undefined || value === null || value === ''
            || typeof value !== 'object' || !this.isNumber(value.length) || value.length === 0) {
            return false;
        }
        return true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidationUtilsService.prototype.isNumber = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidationUtilsService.prototype.isValidObject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== null && typeof value === 'object' && Object.keys(value).length > 0;
    };
    ValidationUtilsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ ValidationUtilsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ValidationUtilsService_Factory() { return new ValidationUtilsService(); }, token: ValidationUtilsService, providedIn: "root" });
    return ValidationUtilsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccessTokenService = /** @class */ (function () {
    function AccessTokenService(storageSvc, validationUtilSvc) {
        this.storageSvc = storageSvc;
        this.validationUtilSvc = validationUtilSvc;
    }
    /**
     * @return {?}
     */
    AccessTokenService.prototype.getAccessToken = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var authToken = this.storageSvc.get(DatastoreKeys.AuthToken);
        return JSON.parse(authToken);
    };
    /**
     * @param {?} authToken
     * @return {?}
     */
    AccessTokenService.prototype.setAccessToken = /**
     * @param {?} authToken
     * @return {?}
     */
    function (authToken) {
        return this.storageSvc.set(DatastoreKeys.AuthToken, JSON.stringify(authToken));
    };
    /**
     * @return {?}
     */
    AccessTokenService.prototype.isTokenExpired = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var authToken = this.getAccessToken();
        if (this.validationUtilSvc.isNotNullOrEmpty(authToken)) {
            // If the token is going to expire in another 2 mins then also we need to refresh token
            return ((new Date().getTime() - authToken.accessTokenTime) / 1000) >= (authToken.expiresIn - (2 * 60));
        }
        return true;
    };
    AccessTokenService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AccessTokenService.ctorParameters = function () { return [
        { type: LocalStorageService },
        { type: ValidationUtilsService }
    ]; };
    /** @nocollapse */ AccessTokenService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function AccessTokenService_Factory() { return new AccessTokenService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(LocalStorageService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ValidationUtilsService)); }, token: AccessTokenService, providedIn: "root" });
    return AccessTokenService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SessionStorageService = /** @class */ (function () {
    function SessionStorageService() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    SessionStorageService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return sessionStorage.getItem(key);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    SessionStorageService.prototype.set = /**
     * @param {?} key
     * @param {?} val
     * @return {?}
     */
    function (key, val) {
        return sessionStorage.setItem(key, val);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionStorageService.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return sessionStorage.removeItem(key);
    };
    SessionStorageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ SessionStorageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function SessionStorageService_Factory() { return new SessionStorageService(); }, token: SessionStorageService, providedIn: "root" });
    return SessionStorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ StorageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
    return StorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LogMonitorService = /** @class */ (function () {
    function LogMonitorService(storageServiceSvc) {
        this.storageServiceSvc = storageServiceSvc;
    }
    /**
     * @param {?} log
     * @return {?}
     */
    LogMonitorService.prototype.onLog = /**
     * @param {?} log
     * @return {?}
     */
    function (log) {
        /** @type {?} */
        var logStatements = this.storageServiceSvc.get(DatastoreKeys.AppLogs);
        logStatements = logStatements ? logStatements : '';
        // store in session storage
        logStatements += this.getFormattedMessage(log);
        this.storageServiceSvc.set(DatastoreKeys.AppLogs, logStatements);
    };
    /**
     * @param {?} log
     * @return {?}
     */
    LogMonitorService.prototype.getFormattedMessage = /**
     * @param {?} log
     * @return {?}
     */
    function (log) {
        return log.timestamp + ' ' + ngx_logger__WEBPACK_IMPORTED_MODULE_0__["NgxLoggerLevel"][log.level] + ' [' + log.message + '] ' + log.additional + '\n';
    };
    /**
     * @return {?}
     */
    LogMonitorService.prototype.getAllLogs = /**
     * @return {?}
     */
    function () {
        return this.storageServiceSvc.get(DatastoreKeys.AppLogs);
    };
    LogMonitorService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LogMonitorService.ctorParameters = function () { return [
        { type: StorageService }
    ]; };
    /** @nocollapse */ LogMonitorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function LogMonitorService_Factory() { return new LogMonitorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(StorageService)); }, token: LogMonitorService, providedIn: "root" });
    return LogMonitorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoggerService = /** @class */ (function () {
    function LoggerService(logger, storageService) {
        this.logger = logger;
        this.storageService = storageService;
        this.logMonitorService = new LogMonitorService(storageService);
        this.logger.registerMonitor(this.logMonitorService);
    }
    /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.trace = /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    function (moduleName, message) {
        this.logger.trace(moduleName, message);
    };
    /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.debug = /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    function (moduleName, message) {
        this.logger.debug(moduleName, message);
    };
    /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.info = /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    function (moduleName, message) {
        this.logger.info(moduleName, message);
    };
    /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.log = /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    function (moduleName, message) {
        this.logger.log(moduleName, message);
    };
    /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.warn = /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    function (moduleName, message) {
        this.logger.warn(moduleName, message);
    };
    /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.error = /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    function (moduleName, message) {
        this.logger.error(moduleName, message);
    };
    /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.fatal = /**
     * @param {?} moduleName
     * @param {?} message
     * @return {?}
     */
    function (moduleName, message) {
        this.logger.fatal(moduleName, message);
    };
    /**
     * @return {?}
     */
    LoggerService.prototype.downloadLog = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var logStatements = this.logMonitorService.getAllLogs();
        /** @type {?} */
        var zip = new jszip__WEBPACK_IMPORTED_MODULE_1___default.a();
        zip.file('app-logs.txt', logStatements);
        zip.generateAsync({ type: 'blob' })
            .then((/**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(content, 'salesforce-logs.zip');
        }));
    };
    LoggerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoggerService.ctorParameters = function () { return [
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_0__["NGXLogger"] },
        { type: SessionStorageService }
    ]; };
    /** @nocollapse */ LoggerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function LoggerService_Factory() { return new LoggerService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ngx_logger__WEBPACK_IMPORTED_MODULE_0__["NGXLogger"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(SessionStorageService)); }, token: LoggerService, providedIn: "root" });
    return LoggerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var URLUtilsService = /** @class */ (function () {
    function URLUtilsService(logger) {
        this.logger = logger;
    }
    /**
     * @param {?} url
     * @param {?} map
     * @return {?}
     */
    URLUtilsService.prototype.appendQueryString = /**
     * @param {?} url
     * @param {?} map
     * @return {?}
     */
    function (url, map) {
        /** @type {?} */
        var queryString = '';
        /** @type {?} */
        var key = '';
        for (key in map) {
            if (map.hasOwnProperty(key)) {
                if (queryString !== '') {
                    queryString += '&';
                }
                queryString += key + '=' + encodeURIComponent(map[key]);
            }
        }
        if (url.indexOf('?') === -1) {
            url += (queryString === '') ? queryString : '?' + queryString;
        }
        else {
            url += (queryString === '') ? queryString : '&' + queryString;
        }
        return url;
    };
    /**
     * @param {?} queryStr
     * @param {?} name
     * @return {?}
     */
    URLUtilsService.prototype.getParameterByName = /**
     * @param {?} queryStr
     * @param {?} name
     * @return {?}
     */
    function (queryStr, name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        /** @type {?} */
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        /** @type {?} */
        var results = regex.exec(queryStr);
        return results == null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    /**
     * @param {?} url
     * @return {?}
     */
    URLUtilsService.prototype.isValidURL = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var validURL = /((?:https?\:\/\/|www\.)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*)/i;
        return validURL.test(url);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    URLUtilsService.prototype.addParamToQueryString = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var queryString = window.location.search;
        if (queryString === '') {
            queryString = '?';
        }
        else {
            queryString += '&';
        }
        queryString += params;
        return queryString;
    };
    /**
     * @param {?} queryString
     * @return {?}
     */
    URLUtilsService.prototype.parseQueryString = /**
     * @param {?} queryString
     * @return {?}
     */
    function (queryString) {
        /** @type {?} */
        var params = {};
        try {
            if (typeof queryString !== 'string') {
                return params;
            }
            if (queryString.charAt(0) === '?') {
                queryString = queryString.slice(1);
            }
            if (queryString.length === 0) {
                return params;
            }
            /** @type {?} */
            var pairs = queryString.split('&');
            for (var i = 0; i < pairs.length; i++) {
                /** @type {?} */
                var pair = pairs[i].split('=');
                params[pair[0]] = !!pair[1] ? decodeURIComponent(pair[1]) : null;
            }
        }
        catch (e) {
            this.logger.error(URLUtilsService.name, 'Error in parsing query string -' + e.message);
        }
        return params;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    URLUtilsService.prototype.getHostName = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (url) {
            /** @type {?} */
            var formattedUrl = new URL(url).hostname;
            return formattedUrl;
        }
        return '';
    };
    /**
     * @param {?} hostname
     * @return {?}
     */
    URLUtilsService.prototype.isSFDomain = /**
     * @param {?} hostname
     * @return {?}
     */
    function (hostname) {
        /** @type {?} */
        var forceDomainPatt = /\.force\.com$/i;
        /** @type {?} */
        var visualforceDomainPatt = /\.visualforce\.com$/i;
        // Salesforce Spring 18 release has this domain
        /** @type {?} */
        var sfDomainPatt = /\.salesforce\.com/i;
        if (forceDomainPatt.test(hostname) || sfDomainPatt.test(hostname) || visualforceDomainPatt.test(hostname)) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    URLUtilsService.prototype.parseUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var urlDom = document.createElement('a');
        urlDom.href = url;
        return {
            search: urlDom.search
        };
    };
    URLUtilsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    URLUtilsService.ctorParameters = function () { return [
        { type: LoggerService }
    ]; };
    /** @nocollapse */ URLUtilsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function URLUtilsService_Factory() { return new URLUtilsService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(LoggerService)); }, token: URLUtilsService, providedIn: "root" });
    return URLUtilsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ParseUtil = /** @class */ (function () {
    function ParseUtil() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ParseUtil.toBoolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== null && value !== undefined && value.toLowerCase() === 'true';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ParseUtil.toNumber = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== null && value !== undefined && isNaN(value) === false) {
            return parseInt(value, 10);
        }
        return 0;
    };
    /**
     * @param {?} phoneNumber
     * @return {?}
     */
    ParseUtil.formatPhoneNumber = /**
     * @param {?} phoneNumber
     * @return {?}
     */
    function (phoneNumber) {
        /** @type {?} */
        var format = /^(\d{3})(\d{3})(\d{4})$/;
        /** @type {?} */
        var match = phoneNumber.match(format);
        if (match) {
            return phoneNumber.replace(format, '($1) $2-$3');
        }
        return phoneNumber;
    };
    return ParseUtil;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalizationService = /** @class */ (function () {
    function LocalizationService(translate) {
        this.translate = translate;
        this.supportedLangs = ['de', 'en_US', 'es', 'fr', 'it', 'ja', 'ko', 'pt_BR', 'ru', 'zh_CN'];
        // list of supported languages
        translate.addLangs(this.supportedLangs);
        // set fallback language
        translate.setDefaultLang('en_US');
    }
    /**
     * @param {?} langCode
     * @return {?}
     */
    LocalizationService.prototype.setLanguage = /**
     * @param {?} langCode
     * @return {?}
     */
    function (langCode) {
        this.translate.use(langCode);
    };
    // Returns the localized value for the key if single key is passed
    // Returns the key value pair of localization key and its translated value if multiple localization keys are passed
    // Returns the localized value for the key if single key is passed
    // Returns the key value pair of localization key and its translated value if multiple localization keys are passed
    /**
     * @param {?} localizationKey
     * @return {?}
     */
    LocalizationService.prototype.getLocalizedValue = 
    // Returns the localized value for the key if single key is passed
    // Returns the key value pair of localization key and its translated value if multiple localization keys are passed
    /**
     * @param {?} localizationKey
     * @return {?}
     */
    function (localizationKey) {
        return this.translate.get(localizationKey);
    };
    LocalizationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LocalizationService.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    /** @nocollapse */ LocalizationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function LocalizationService_Factory() { return new LocalizationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); }, token: LocalizationService, providedIn: "root" });
    return LocalizationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=common-lib.js.map

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_success_login_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-success/login-success.component */ "./src/app/login-success/login-success.component.ts");





var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'loginSuccess', component: _login_success_login_success_component__WEBPACK_IMPORTED_MODULE_4__["LoginSuccessComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hr-sep {\n  margin: 10px 0px; }\n\n.btn-full_width {\n  width: calc(100%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRpbmVzcy1hcHAvYW5ndWxhci9hdXRoLWFwcC9zcmMvYXBwL0M6XFxTb3VyY2VDb2RlXFxzZmRjLWVpbnN0ZWluLWFwcC1wYWNrYWdlXFxTRkVpbnN0ZWluL3JlYWRpbmVzcy1hcHBcXGFuZ3VsYXJcXGF1dGgtYXBwXFxzcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQ0osRUFBQTs7QUFDQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InJlYWRpbmVzcy1hcHAvYW5ndWxhci9hdXRoLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oci1zZXAge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweFxyXG59XHJcbi5idG4tZnVsbF93aWR0aCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlKVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var common_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common-lib */ "../../../dist/common-lib/fesm5/common-lib.js");
/* harmony import */ var _common_apex_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/apex-params */ "./src/common/apex-params.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(localizationSvc) {
        this.localizationSvc = localizationSvc;
        this.title = 'auth-app';
        var initParam = _common_apex_params__WEBPACK_IMPORTED_MODULE_3__["ApexParams"].init();
        this.localizationSvc.setLanguage(initParam.langCode);
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'auth-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [common_lib__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-logger */ "../../../node_modules/ngx-logger/esm5/ngx-logger.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "../../../node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _common_apex_params__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/apex-params */ "./src/common/apex-params.ts");
/* harmony import */ var _login_success_login_success_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login-success/login-success.component */ "./src/app/login-success/login-success.component.ts");














var initParam = _common_apex_params__WEBPACK_IMPORTED_MODULE_12__["ApexParams"].init();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _login_success_login_success_component__WEBPACK_IMPORTED_MODULE_13__["LoginSuccessComponent"]
            ],
            imports: [
                ngx_logger__WEBPACK_IMPORTED_MODULE_9__["LoggerModule"].forRoot({ level: ngx_logger__WEBPACK_IMPORTED_MODULE_9__["NgxLoggerLevel"].DEBUG }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: function (http) { return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, initParam.resourceBase + '/assets/i18n/'); },
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                })
            ],
            providers: [{ provide: 'AuthenticationService', useClass: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].authenticationService }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login-success/login-success.component.css":
/*!***********************************************************!*\
  !*** ./src/app/login-success/login-success.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n    height: 100%;\r\n    height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */\r\n}\r\n.errorBox {\r\n    display: block;\r\n    white-space: pre;\r\n    border: 2px solid rgb(231, 4, 4);\r\n    padding: 0 1em 0 1em;\r\n    margin: 1em;\r\n    background-color: rgb(252, 137, 152);\r\n    color: black;\r\n    height: 50px;\r\n    font-size: 18px;\r\n}\r\n.successBox {\r\n    display: block;\r\n    white-space: pre;\r\n    border: 2px solid rgb(116, 130, 195);\r\n    padding: 0 1em 0 1em;\r\n    margin: 1em;\r\n    background-color: rgb(140, 189, 230);\r\n    color: black;\r\n    height: 150px;\r\n    font-size: 18px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRpbmVzcy1hcHAvYW5ndWxhci9hdXRoLWFwcC9zcmMvYXBwL2xvZ2luLXN1Y2Nlc3MvbG9naW4tc3VjY2Vzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QixHQUFHLDZDQUE2QztBQUNsRjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InJlYWRpbmVzcy1hcHAvYW5ndWxhci9hdXRoLWFwcC9zcmMvYXBwL2xvZ2luLXN1Y2Nlc3MvbG9naW4tc3VjY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAgLyogTW96aWxsYS1iYXNlZCBicm93c2VycyB3aWxsIGlnbm9yZSB0aGlzLiAqL1xyXG59XHJcbi5lcnJvckJveCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjMxLCA0LCA0KTtcclxuICAgIHBhZGRpbmc6IDAgMWVtIDAgMWVtO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAxMzcsIDE1Mik7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnN1Y2Nlc3NCb3gge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDExNiwgMTMwLCAxOTUpO1xyXG4gICAgcGFkZGluZzogMCAxZW0gMCAxZW07XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDE4OSwgMjMwKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login-success/login-success.component.html":
/*!************************************************************!*\
  !*** ./src/app/login-success/login-success.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form slds-box slds-grid slds-grid_vertical slds-grid_vertical-align-center slds-size-full\"\r\n  [style.background-image]=\"getBackground()\">\r\n  <div *ngIf=\"errorMessage.authSettingsError\" class=\"errorBox\" role=\"status\">\r\n    <p>{{errorMsg}}</p>\r\n  </div>\r\n  <div class=\"successBox\" role=\"status\">\r\n    <p>\r\n      Login Successful!\r\n    </p>\r\n    <p *ngIf=\"createUser\">Creating API Integration User. User Name : {{userName}}</p>\r\n    <p *ngIf=\"createUserSuccess\">User created Successfully! User Name : {{userName}}</p>\r\n    <p *ngIf=\"createAccesskey\">Creating Access key and access secret for the user...</p>\r\n    <p *ngIf=\"accessKeySuccess\">\r\n      Access key and Secret key saved to custom Metadata Settings!\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login-success/login-success.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login-success/login-success.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccessComponent", function() { return LoginSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var common_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common-lib */ "../../../dist/common-lib/fesm5/common-lib.js");
/* harmony import */ var _services_navigation_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation-util.service */ "./src/services/navigation-util.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_error_message_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/error-message.model */ "./src/model/error-message.model.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "../../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _common_apex_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/apex-params */ "./src/common/apex-params.ts");
/* harmony import */ var _services_http_wrapper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/http-wrapper.service */ "./src/services/http-wrapper.service.ts");









var LoginSuccessComponent = /** @class */ (function () {
    function LoginSuccessComponent(authService, accessTokenSvc, fb, localStorageSvc, sessionStorageSvc, logger, urlUtilSvc, validationUtilSvc, navigationUtilSvc, sanitizer, httpWrapper) {
        this.authService = authService;
        this.accessTokenSvc = accessTokenSvc;
        this.fb = fb;
        this.localStorageSvc = localStorageSvc;
        this.sessionStorageSvc = sessionStorageSvc;
        this.logger = logger;
        this.urlUtilSvc = urlUtilSvc;
        this.validationUtilSvc = validationUtilSvc;
        this.navigationUtilSvc = navigationUtilSvc;
        this.sanitizer = sanitizer;
        this.httpWrapper = httpWrapper;
        this.createUser = false;
        this.createUserSuccess = false;
        this.createAccesskey = false;
        this.accessKeySuccess = false;
        this.errorMessage = new _model_error_message_model__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"]();
    }
    LoginSuccessComponent_1 = LoginSuccessComponent;
    LoginSuccessComponent.prototype.ngOnInit = function () {
        this.initParam = _common_apex_params__WEBPACK_IMPORTED_MODULE_7__["ApexParams"].init();
        if (this.isCentral()) {
            this.userRegistrationCentral();
        }
        else {
            this.getTenatId();
            this.userRegistrationUH();
        }
    };
    LoginSuccessComponent.prototype.getTenatId = function () {
        var _this = this;
        this.authService.getTenatId().then(function (response) {
            _this.localStorageSvc.set(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].TenantId, response.tenantId);
            _this.logger.debug(LoginSuccessComponent_1.name, 'getTenatId success: tennantId:: ' + response.tenantId);
        }, function (error) {
            _this.logger.debug(LoginSuccessComponent_1.name, 'getTenatId error' + error);
            _this.errorMessage.authSettingsError = error;
            _this.errorMsg = error;
        });
    };
    LoginSuccessComponent.prototype.userRegistrationCentral = function () {
        var _this = this;
        this.logger.debug(LoginSuccessComponent_1.name, 'inside userRegistrationCentral');
        var buName = this.accessTokenSvc.getAccessToken().businessUnit;
        var userName = 'Albert@' + buName + '.com';
        this.createUser = true;
        this.userName = userName;
        this.authService.getAgentInfo(this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].AdminUserName)).then(function (response) {
            _this.logger.debug(LoginSuccessComponent_1.name, 'userRegistrationCentral in login component - ' + JSON.stringify(response));
            var payload = {
                "agents": [
                    {
                        "firstName": "Albert",
                        "lastName": "Einstein",
                        "emailAddress": response.emailAddress,
                        "country": response.country,
                        "profileId": response.profileId,
                        "teamId": response.teamId.toString(),
                        "userName": userName,
                        "timeZone": response.timeZone,
                        "city": response.city,
                        //"Password" : "Password",
                        "userType": "Agent"
                    }
                ]
            };
            _this.authService.userRegistration(payload, _this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].EvolveWebServerUrl)).then(function (response) {
                _this.logger.debug(LoginSuccessComponent_1.name, 'userRegistrationCentral in login component - ' + JSON.stringify(response));
                if (response.errorCount == 0) {
                    _this.localStorageSvc.set(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].NewUserId, response.agentResults[0].agentId);
                    _this.createUser = false;
                    _this.createUserSuccess = true;
                    _this.createAccessKeyAPI();
                }
                else if (response.errorCount == 1) {
                    if (response.agentResults[0].error.indexOf('unique') != -1) {
                        _this.logger.debug(LoginSuccessComponent_1.name, 'userRegistrationCentral : User already created.');
                        _this.createUser = false;
                        _this.createUserSuccess = true;
                        _this.authService.getAgentInfo(userName).then(function (response) {
                            _this.localStorageSvc.set(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].NewUserId, response.agentId);
                            _this.createAccessKeyAPI();
                        });
                    }
                }
            }, function (error) {
                _this.logger.debug(LoginSuccessComponent_1.name, 'userRegistrationCentral error' + error);
                _this.errorMessage.authSettingsError = response.agentResults[0].error;
                _this.errorMsg = response.agentResults[0].error;
            });
        }, function (error) {
            _this.logger.debug(LoginSuccessComponent_1.name, 'userRegistrationCentral error' + error);
            _this.errorMessage.authSettingsError = error;
            _this.errorMsg = error;
        });
    };
    LoginSuccessComponent.prototype.userRegistrationUH = function () {
        var _this = this;
        this.logger.debug(LoginSuccessComponent_1.name, 'inside userRegistrationUH');
        var buName = this.accessTokenSvc.getAccessToken().businessUnit;
        var userName = 'Albert@' + buName + '.com';
        this.createUser = true;
        this.userName = userName;
        this.authService.getUserInfo(userName).then(function (response) {
            var payload = {
                "firstName": "Albert",
                "lastName": "Einstein",
                "emailAddress": response.adminUser.emailAddress,
                "country": response.adminUser.country,
                "role": "Agent",
                "userName": userName
            };
            if (response.NewUserId != '') {
                _this.logger.debug(LoginSuccessComponent_1.name, 'userRegistrationUH: User already present');
                _this.localStorageSvc.set(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].NewUserId, response.NewUserId);
                _this.createUser = false;
                _this.createUserSuccess = true;
                if (response.status !== 'ACTIVE') {
                    _this.activateUser(userName, _this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].AdminUserName).toLowerCase());
                }
                else {
                    _this.createAccessKeyAPI();
                }
            }
            else {
                _this.authService.userRegistration(payload, _this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].EvolveWebServerUrl)).then(function (response) {
                    _this.logger.debug(LoginSuccessComponent_1.name, 'userRegistrationUH in login component - ' + JSON.stringify(response));
                    _this.localStorageSvc.set(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].NewUserId, response.uuid);
                    _this.createUser = false;
                    _this.createUserSuccess = true;
                    _this.activateUser(userName, _this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].AdminUserName).toLowerCase());
                }, function (error) {
                    _this.logger.debug(LoginSuccessComponent_1.name, 'userRegistrationUH error' + error);
                    _this.errorMessage.authSettingsError = error.error.details;
                    _this.errorMsg = error.error.details;
                });
            }
        }, function (error) {
            _this.logger.debug(LoginSuccessComponent_1.name, 'getUserInfo error' + error);
            _this.errorMessage.authSettingsError = error.error.details;
            _this.errorMsg = error.error.details;
        });
    };
    LoginSuccessComponent.prototype.activateUser = function (emailAddressesList, senderEmail) {
        var _this = this;
        this.logger.debug(LoginSuccessComponent_1.name, 'inside activateUser');
        this.authService.activateUser(emailAddressesList, senderEmail).then(function (response) {
            _this.logger.debug(LoginSuccessComponent_1.name, 'activateUser in login success component : Activation mail sent to the Admin User!');
            _this.createAccessKeyAPI();
        }, function (error) {
            _this.logger.debug(LoginSuccessComponent_1.name, 'activateUser error' + error);
            _this.errorMessage.authSettingsError = error;
            _this.errorMsg = error;
        });
    };
    LoginSuccessComponent.prototype.createAccessKeyAPI = function () {
        var _this = this;
        this.logger.debug(LoginSuccessComponent_1.name, 'inside createAccessKeyAPI');
        this.createAccesskey = true;
        this.authService.createAccessKeyAPI(this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].EvolveWebServerUrl)).then(function (response) {
            _this.logger.debug(LoginSuccessComponent_1.name, 'createAccessKeyAPI in login success component - ' + JSON.stringify(response));
            _this.localStorageSvc.set(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].AccessSecretKey, JSON.stringify(response));
            _this.createAccesskey = false;
            _this.storeAccessAndSecretKey();
        }, function (error) {
            _this.logger.debug(LoginSuccessComponent_1.name, 'createAccessKeyAPI error' + error);
            _this.errorMessage.authSettingsError = error;
            _this.errorMsg = error;
        });
    };
    LoginSuccessComponent.prototype.storeAccessAndSecretKey = function () {
        var _this = this;
        this.logger.debug(LoginSuccessComponent_1.name, 'inside storeAccessAndSecretKey');
        this.authService.storeAccessAndSecretKey().then(function (response) {
            _this.logger.debug(LoginSuccessComponent_1.name, 'storeAccessAndSecretKey in login component - ' + JSON.stringify(response));
            console.log("woooo... I acheived it!");
            _this.accessKeySuccess = true;
        }, function (error) {
            _this.logger.debug(LoginSuccessComponent_1.name, 'storeAccessAndSecretKey error' + error);
            _this.errorMessage.authSettingsError = error;
            _this.errorMsg = error;
        });
    };
    LoginSuccessComponent.prototype.getBackground = function () {
        var image = this.initParam.resourceBase + '/assets/images/background-pattern.svg';
        return this.sanitizer.bypassSecurityTrustStyle("url(" + image + "),linear-gradient(rgba(0, 158, 218), rgba(0, 124, 190))");
    };
    LoginSuccessComponent.prototype.isCentral = function () {
        return this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_2__["DatastoreKeys"].EvolveWebServerUrl) === 'Central';
    };
    var LoginSuccessComponent_1;
    LoginSuccessComponent = LoginSuccessComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'auth-login-success',
            template: __webpack_require__(/*! ./login-success.component.html */ "./src/app/login-success/login-success.component.html"),
            styles: [__webpack_require__(/*! ./login-success.component.css */ "./src/app/login-success/login-success.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('AuthenticationService')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, common_lib__WEBPACK_IMPORTED_MODULE_2__["AccessTokenService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            common_lib__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            common_lib__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            common_lib__WEBPACK_IMPORTED_MODULE_2__["LoggerService"],
            common_lib__WEBPACK_IMPORTED_MODULE_2__["URLUtilsService"],
            common_lib__WEBPACK_IMPORTED_MODULE_2__["ValidationUtilsService"],
            _services_navigation_util_service__WEBPACK_IMPORTED_MODULE_3__["NavigationUtilService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _services_http_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["HttpWrapperService"]])
    ], LoginSuccessComponent);
    return LoginSuccessComponent;
}());



/***/ }),

/***/ "./src/app/login/email-validator.ts":
/*!******************************************!*\
  !*** ./src/app/login/email-validator.ts ***!
  \******************************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
function EmailValidator(control) {
    var emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var isValid = emailPattern.test(control.value);
    return isValid ? null : { 'forbiddenName': true };
}


/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showLogin\">\r\n<div *ngIf=\"errorMessage.authSettingsError || errorMessage.refreshTokenError\" class=\"slds-box slds-clearfix\">\r\n  <div role=\"alert\">{{errorMessage.authSettingsError || errorMessage.refreshTokenError}}</div>\r\n  <button class=\"slds-button slds-button_neutral slds-m-top_x-small slds-float_right\" (click)='hideAuthSettingsError()'>{{'ok' | translate}}</button>\r\n</div>\r\n\r\n<div  *ngIf=\"errorMessage.callCenterError\"  class=\"slds-notify_container slds-is-relative\">\r\n  <div class=\"errorBox\" role=\"status\">\r\n    An error occurred while configuring the Call Center for authentication. <br/> Please contact your system adminstrator.\r\n  </div>\r\n</div>\r\n\r\n<div class=\"slds-spinner_container\" *ngIf=\"canShowSpinner\">\r\n  <div class=\"slds-align_absolute-center\">\r\n      <div class=\"slds-spinner slds-spinner_medium slds-spinner_brand\" role=\"status\">\r\n          <div class=\"slds-spinner__dot-a\"></div>\r\n          <div class=\"slds-spinner__dot-b\"></div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"isExternalAuthenticationEnabled || isCentralAuthenticationEnabled\" class=\"login-form slds-box slds-grid slds-grid_vertical slds-grid_vertical-align-center slds-size-full\" [style.background-image]=\"getBackground()\">\r\n  <div id=\"signInLabel\" class=\"slds-col slds-size_1-of-1 slds-small-size_1-of-1 slds-medium-size_2-of-3 slds-large-size_1-of-3 slds-p-bottom_medium slds-border_bottom slds-text-heading_small\">{{'signIn' | translate}}</div>  \r\n  <div *ngIf=\"isExternalAuthenticationEnabled\" class=\"slds-col slds-size_1-of-1 slds-small-size_1-of-1 slds-medium-size_2-of-3 slds-large-size_1-of-3 slds-p-top_medium\">\r\n    <div id=\"ssoHeader\" class=\"slds-text-align_left\">{{'ssoLoginInfo' | translate}}</div>\r\n    <div id=\"ssoErrorMessage\" class=\"slds-p-top_medium slds-col slds-size_1-of-1 slds-small-size_1-of-1 slds-medium-size_2-of-3 slds-large-size_1-of-3 errorMessage slds-text-color_error\" *ngIf=\"errorMessage.idpError\" role=\"alert\">{{ errorMessage.idpError }}</div>\r\n    <div class=\"slds-col slds-p-top_medium slds-p-bottom_medium\">\r\n      <button (click)=\"authenticateIdp()\" id=\"companySignIn\" class=\"slds-button slds-button_brand slds-size_1-of-1 slds-small-size_1-of-1 slds-medium-size_1-of-1 slds-large-size_1-of-1\">{{'companySignIn' | translate}}</button>\r\n    </div>\r\n  </div>\r\n  <div id=\"orLabel\" class=\"slds-p-top_medium slds-text-align_center\" *ngIf=\"isExternalAuthenticationEnabled && isCentralAuthenticationEnabled\">{{'or' | translate}}</div>\r\n  <form id=\"loginForm\" [formGroup]=\"loginForm\" *ngIf=\"isCentralAuthenticationEnabled\" class=\"slds-col slds-grid slds-grid_vertical slds-size_1-of-1 slds-small-size_1-of-1 slds-medium-size_2-of-3 slds-large-size_1-of-3 slds-p-top_medium\">\r\n    <div id=\"centralHeader\" class=\"slds-text-align_left\" *ngIf=\"isExternalAuthenticationEnabled\">{{'centralLoginInfo' | translate}}</div>\r\n    <div id=\"centralErrorMessage\" class=\"slds-m-top_x-small\" *ngIf=\"username.invalid && username.touched\">\r\n      <div *ngIf=\"username.errors?.required\" role=\"alert\">\r\n          <div id=\"requiredErrorMsg\" class=\"slds-text-color_error\">{{'usernameRequired' | translate}}</div>\r\n      </div>\r\n      <div *ngIf=\"!username.errors?.required && username.errors?.forbiddenName\" role=\"alert\">\r\n          <div id=\"invalidErrorMsg\" class=\"slds-text-color_error\">{{'usernameIsNotValid' | translate}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"slds-m-top_x-small\" *ngIf=\"errorMessage?.centralError\" role=\"alert\">\r\n      <div id=\"errorMsgFromAPI\" class=\"slds-text-color_error\">{{errorMessage.centralError}}</div>\r\n    </div>\r\n    <div class=\"slds-form-element slds-p-top_medium\">\r\n      <label id=\"usernameLabel\" class=\"slds-form-element__label\">{{'username' | translate}}</label>\r\n      <div class=\"slds-form-element__control\">\r\n        <input id=\"username\" class=\"slds-input\" type=\"text\" formControlName=\"username\" placeholder=\"{{'username' | translate}}\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"slds-form-element slds-p-top_medium\">\r\n      <label id=\"passwordLabel\" class=\"slds-form-element__label\">{{'password' | translate}}</label>\r\n      <div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon_right\">\r\n        <input id=\"password\" class=\"slds-input\" [type]=\"canShowPwd ? 'text' : 'password'\" placeholder=\"{{'password' | translate}}\" formControlName=\"password\" />\r\n        <button id=\"previewIcon\" class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" (click)=\"togglePassword()\">\r\n          <svg class=\"slds-button__icon slds-icon-text-light\" aria-hidden=\"true\">\r\n            <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" attr.xlink:href=\"/_slds/icons/utility-sprite/svg/symbols.svg#{{pwdIcon}}\" />\r\n          </svg>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"slds-form-element slds-p-top_medium\">\r\n      <div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon_right\">\r\n        <select formControlName=\"area\" class=\"slds-input\">\r\n          <option *ngFor=\"let area of areaMapping\" [ngValue]=\"area.name\" >\r\n            {{ area.abbrev }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"slds-form-element slds-p-top_medium\">\r\n      <div class=\"slds-form-element__control\">\r\n        <div class=\"slds-checkbox\">\r\n          <input type=\"checkbox\" name=\"rememberMe\" formControlName=\"rememberMe\" id=\"rememberMe\"  />\r\n          <label class=\"slds-checkbox__label\" for=\"rememberMe\">\r\n            <span class=\"slds-checkbox_faux\"></span>\r\n            <span id=\"rememberMeLabel\" class=\"slds-form-element__label\">{{'rememberMe' | translate}}</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"slds-p-top_medium slds-p-bottom_medium\">\r\n      <button id=\"signInButton\" class=\"slds-button slds-button_brand slds-size_1-of-1 slds-small-size_1-of-1 slds-medium-size_1-of-1 slds-large-size_1-of-1\" (click)=\"authenticateUser()\" [disabled]=\"canDisableSignIn()\">{{'signIn' | translate}}</button>\r\n    </div>\r\n  </form>\r\n  <div class=\"slds-col slds-size_1-of-1 slds-small-size_1-of-1 slds-medium-size_2-of-3 slds-large-size_1-of-3 slds-p-top_medium slds-border_top slds-text-align_center\" *ngIf=\"isForgotPassword\">\r\n    <a class=\"slds-button\" role=\"button\" id=\"forgotPassword\" (click)=\"recoverPassword()\">{{'forgotPwd' | translate}}?</a>\r\n  </div>\r\n  <div class=\"slds-col_bump-top slds-size_1-of-1 slds-small-size_1-of-1 slds-medium-size_2-of-3 slds-large-size_1-of-3\">\r\n    <img class=\"slds-float_right\" src=\"{{initParam.resourceBase}}/assets/images/branding-logo.svg\">\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errorMessage {\n  word-break: break-word; }\n\n.login-form {\n  height: 100%;\n  height: -webkit-fill-available;\n  /* Mozilla-based browsers will ignore this. */ }\n\n.errorBox {\n  display: block;\n  white-space: pre;\n  border: 2px solid #c77;\n  padding: 0 1em 0 1em;\n  margin: 1em;\n  background-color: #fdd;\n  color: black;\n  height: 70px;\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRpbmVzcy1hcHAvYW5ndWxhci9hdXRoLWFwcC9zcmMvYXBwL2xvZ2luL0M6XFxTb3VyY2VDb2RlXFxzZmRjLWVpbnN0ZWluLWFwcC1wYWNrYWdlXFxTRkVpbnN0ZWluL3JlYWRpbmVzcy1hcHBcXGFuZ3VsYXJcXGF1dGgtYXBwXFxzcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksWUFBWTtFQUNaLDhCQUE4QjtFQUFHLDZDQUFBLEVBQThDOztBQUduRjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZSxFQUFBIiwiZmlsZSI6InJlYWRpbmVzcy1hcHAvYW5ndWxhci9hdXRoLWFwcC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5lcnJvck1lc3NhZ2Uge1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAgLyogTW96aWxsYS1iYXNlZCBicm93c2VycyB3aWxsIGlnbm9yZSB0aGlzLiAqL1xyXG59XHJcblxyXG4uZXJyb3JCb3gge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2M3NztcclxuICAgIHBhZGRpbmc6IDAgMWVtIDAgMWVtO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _email_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-validator */ "./src/app/login/email-validator.ts");
/* harmony import */ var _common_apex_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../common/apex-params */ "./src/common/apex-params.ts");
/* harmony import */ var common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common-lib */ "../../../dist/common-lib/fesm5/common-lib.js");
/* harmony import */ var _model_error_message_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/error-message.model */ "./src/model/error-message.model.ts");
/* harmony import */ var _services_navigation_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/navigation-util.service */ "./src/services/navigation-util.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "../../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");









var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, accessTokenSvc, fb, localStorageSvc, sessionStorageSvc, logger, urlUtilSvc, validationUtilSvc, navigationUtilSvc, sanitizer) {
        this.authService = authService;
        this.accessTokenSvc = accessTokenSvc;
        this.fb = fb;
        this.localStorageSvc = localStorageSvc;
        this.sessionStorageSvc = sessionStorageSvc;
        this.logger = logger;
        this.urlUtilSvc = urlUtilSvc;
        this.validationUtilSvc = validationUtilSvc;
        this.navigationUtilSvc = navigationUtilSvc;
        this.sanitizer = sanitizer;
        this.defaultPwdIcon = 'preview';
        this.showLogin = true;
        this.isExternalAuthenticationEnabled = false;
        this.isCentralAuthenticationEnabled = false;
        this.errorMessage = new _model_error_message_model__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"]();
        this.canShowPwd = false;
        this.canShowSpinner = true;
        this.pwdIcon = this.defaultPwdIcon;
        this.isForgotPassword = false;
        this.areaMapping = [
            { name: 'na1', abbrev: 'North America' },
            { name: 'au1', abbrev: 'Australia' },
            { name: 'eu1', abbrev: 'Frankfurt' },
            { name: 'Central', abbrev: 'Central' },
            { name: 'naDev', abbrev: 'North America Dev' },
        ];
        this.selectedArea = 'na1';
    }
    LoginComponent_1 = LoginComponent;
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this.loginForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "rememberMe", {
        get: function () {
            return this.loginForm.get('rememberMe');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "area", {
        get: function () {
            return this.loginForm.get('area');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.logger.log(LoginComponent_1.name, 'Login component initialize');
        this.initParam = _common_apex_params__WEBPACK_IMPORTED_MODULE_4__["ApexParams"].init();
        this.createLoginForm();
        this.canShowSpinner = false;
        this.isCentralAuthenticationEnabled = true;
        this.areaURLs = {
            'na1': 'https://na1.nice-incontact.com',
            'au1': 'https://au1.nice-incontact.com',
            'eu1': 'https://eu1.niceincontact.com',
            'Central': 'Central',
            'naDev': 'https://na1.dev.nice-incontact.com'
        };
    };
    LoginComponent.prototype.createLoginForm = function () {
        this.logger.log(LoginComponent_1.name, 'Create login Form');
        var username = '';
        var rememberMe = false;
        var area = 'na1';
        if (this.validationUtilSvc.isNotNullOrUndefined(this.initParam.icUsername)) {
            username = this.initParam.icUsername;
        }
        if (this.validationUtilSvc.isNotNullOrUndefined(this.initParam.icRememberMe)) {
            rememberMe = this.initParam.icRememberMe;
        }
        this.loginForm = this.fb.group({
            username: [username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _email_validator__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"]]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rememberMe: [rememberMe],
            area: [area]
        });
    };
    LoginComponent.prototype.togglePassword = function () {
        this.canShowPwd = !this.canShowPwd;
        this.pwdIcon = this.canShowPwd ? 'hide' : this.defaultPwdIcon;
        this.logger.debug(LoginComponent_1.name, 'toggle password ' + this.canShowPwd);
    };
    LoginComponent.prototype.canDisableSignIn = function () {
        var disable = true;
        if (this.username.errors === null && this.password.errors === null && this.area.errors === null) {
            disable = false;
        }
        return disable;
    };
    LoginComponent.prototype.authenticateUser = function () {
        var _this = this;
        this.logger.log(LoginComponent_1.name, 'Authenticate user entry');
        this.errorMessage.centralError = '';
        var areaUrl = this.areaURLs[this.area.value];
        this.localStorageSvc.set(common_lib__WEBPACK_IMPORTED_MODULE_5__["DatastoreKeys"].EvolveWebServerUrl, areaUrl);
        this.authService.authenticateUser(this.username.value, this.password.value, areaUrl).then(function (response) {
            _this.logger.debug(LoginComponent_1.name, 'Authenticate user success ' + response);
            _this.accessTokenSvc.setAccessToken(response);
            _this.localStorageSvc.set(common_lib__WEBPACK_IMPORTED_MODULE_5__["DatastoreKeys"].AdminUserName, _this.username.value);
            _this.navigationUtilSvc.navigate(['/loginSuccess']);
        }, function (error) {
            _this.logger.error(LoginComponent_1.name, 'Authenticate user error ' + error);
            _this.errorMessage.centralError = error;
        });
    };
    LoginComponent.prototype.redirectToSFComp = function () {
        this.loginForm = false;
        window.location.href =
            window.location.ancestorOrigins[0] +
                '/lightning/n/' +
                this.initParam.namespacePrefix +
                '__InContact_Analytics?c__login=success';
    };
    LoginComponent.prototype.recoverPassword = function () {
        window.open(this.authSettings.forgotPassword, 'targetWindow', 'scrollbars=yes, resizable=yes, width=600px, height=600px, left=400px, top=40px');
    };
    LoginComponent.prototype.hideAuthSettingsError = function () {
        this.errorMessage.authSettingsError = '';
    };
    LoginComponent.prototype.getBackground = function () {
        var image = this.initParam.resourceBase + '/assets/images/background-pattern.svg';
        return this.sanitizer.bypassSecurityTrustStyle("url(" + image + "),linear-gradient(rgba(0, 158, 218), rgba(0, 124, 190))");
    };
    var LoginComponent_1;
    LoginComponent = LoginComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'auth-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('AuthenticationService')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, common_lib__WEBPACK_IMPORTED_MODULE_5__["AccessTokenService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            common_lib__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            common_lib__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"],
            common_lib__WEBPACK_IMPORTED_MODULE_5__["LoggerService"],
            common_lib__WEBPACK_IMPORTED_MODULE_5__["URLUtilsService"],
            common_lib__WEBPACK_IMPORTED_MODULE_5__["ValidationUtilsService"],
            _services_navigation_util_service__WEBPACK_IMPORTED_MODULE_7__["NavigationUtilService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/common/apex-params.ts":
/*!***********************************!*\
  !*** ./src/common/apex-params.ts ***!
  \***********************************/
/*! exports provided: ApexParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexParams", function() { return ApexParams; });
/* harmony import */ var common_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-lib */ "../../../dist/common-lib/fesm5/common-lib.js");

var ApexParams = /** @class */ (function () {
    function ApexParams() {
        this.authenticatorService = 'inc_Authenticator';
    }
    ApexParams.init = function () {
        var sessionStorageSvc = new common_lib__WEBPACK_IMPORTED_MODULE_0__["SessionStorageService"]();
        var param = new ApexParams();
        // this value set from Visualforce / HTML page
        var params = sessionStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_0__["DatastoreKeys"].InitParam);
        if (params) {
            var obj = JSON.parse(params);
            param.icUsername = obj.icUsername;
            param.icRememberMe = obj.icRememberMe ? JSON.parse(obj.icRememberMe) : false; // convert string to boolean
            param.authCallbackUrl = obj.authCallbackUrl;
            param.langCode = obj.langCode;
            param.resourceBase = obj.resourceBase;
            param.sfSessionId = obj.sfSessionId;
            param.namespacePrefix = obj.namespacePrefix;
            if (obj.namespacePrefix !== '') {
                param.authenticatorService = obj.namespacePrefix + '.' + param.authenticatorService;
            }
        }
        else {
            param.langCode = 'en_US';
            param.resourceBase = '.';
        }
        return param;
    };
    return ApexParams;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _services_salesforce_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/salesforce-authentication.service */ "./src/services/salesforce-authentication.service.ts");

var environment = {
    production: false,
    authenticationService: _services_salesforce_authentication_service__WEBPACK_IMPORTED_MODULE_0__["SalesforceAuthenticationService"]
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/model/error-message.model.ts":
/*!******************************************!*\
  !*** ./src/model/error-message.model.ts ***!
  \******************************************/
/*! exports provided: ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
var ErrorMessage = /** @class */ (function () {
    function ErrorMessage() {
        this.centralError = '';
        this.idpError = '';
        this.authSettingsError = '';
        this.refreshTokenError = '';
        this.callCenterError = '';
    }
    return ErrorMessage;
}());



/***/ }),

/***/ "./src/services/http-wrapper.service.ts":
/*!**********************************************!*\
  !*** ./src/services/http-wrapper.service.ts ***!
  \**********************************************/
/*! exports provided: HttpWrapperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpWrapperService", function() { return HttpWrapperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var common_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common-lib */ "../../../dist/common-lib/fesm5/common-lib.js");




var HttpWrapperService = /** @class */ (function () {
    function HttpWrapperService(httpClient, accessTokenSvc) {
        this.httpClient = httpClient;
        this.accessTokenSvc = accessTokenSvc;
    }
    HttpWrapperService_1 = HttpWrapperService;
    HttpWrapperService.prototype.getHeaders = function () {
        var authToken = this.accessTokenSvc.getAccessToken();
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': HttpWrapperService_1.JsonContent,
            'Authorization': 'bearer ' + authToken.accessToken
        });
    };
    HttpWrapperService.prototype.get = function (url, httpHeaders) {
        return this.httpClient.get(url, { headers: httpHeaders ? httpHeaders : this.getHeaders() });
    };
    HttpWrapperService.prototype.getText = function (url) {
        return this.httpClient.get(url, { responseType: 'text' });
    };
    HttpWrapperService.prototype.post = function (url, body, httpHeaders, withCredentials) {
        return this.httpClient.post(url, body, { headers: httpHeaders ? httpHeaders : this.getHeaders(), withCredentials: withCredentials });
    };
    HttpWrapperService.prototype.put = function (url, body, httpHeaders) {
        return this.httpClient.put(url, body, { headers: httpHeaders ? httpHeaders : this.getHeaders() });
    };
    HttpWrapperService.prototype.delete = function (url, httpHeaders) {
        return this.httpClient.delete(url, { headers: httpHeaders ? httpHeaders : this.getHeaders() });
    };
    HttpWrapperService.prototype.deleteWithBody = function (url, body, httpHeaders) {
        return this.httpClient.request('delete', url, { headers: httpHeaders ? httpHeaders : this.getHeaders(), body: body });
    };
    var HttpWrapperService_1;
    HttpWrapperService.JsonContent = 'application/json; charset=UTF-8';
    HttpWrapperService = HttpWrapperService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], common_lib__WEBPACK_IMPORTED_MODULE_3__["AccessTokenService"]])
    ], HttpWrapperService);
    return HttpWrapperService;
}());



/***/ }),

/***/ "./src/services/navigation-util.service.ts":
/*!*************************************************!*\
  !*** ./src/services/navigation-util.service.ts ***!
  \*************************************************/
/*! exports provided: NavigationUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationUtilService", function() { return NavigationUtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var common_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common-lib */ "../../../dist/common-lib/fesm5/common-lib.js");




var NavigationUtilService = /** @class */ (function () {
    function NavigationUtilService(router, urlUtilSvc) {
        this.router = router;
        this.urlUtilSvc = urlUtilSvc;
    }
    NavigationUtilService.prototype.getDefaultNavigationExtras = function () {
        var navigationExtras = {
            queryParams: this.urlUtilSvc.parseQueryString(window.location.search),
            skipLocationChange: true
        };
        return navigationExtras;
    };
    NavigationUtilService.prototype.navigate = function (commands, extras) {
        this.router.navigate(commands, extras ? extras : this.getDefaultNavigationExtras());
    };
    NavigationUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], common_lib__WEBPACK_IMPORTED_MODULE_3__["URLUtilsService"]])
    ], NavigationUtilService);
    return NavigationUtilService;
}());



/***/ }),

/***/ "./src/services/salesforce-authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/services/salesforce-authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: SalesforceAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesforceAuthenticationService", function() { return SalesforceAuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_apex_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/apex-params */ "./src/common/apex-params.ts");
/* harmony import */ var common_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common-lib */ "../../../dist/common-lib/fesm5/common-lib.js");
/* harmony import */ var _http_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-wrapper.service */ "./src/services/http-wrapper.service.ts");







var SalesforceAuthenticationService = /** @class */ (function () {
    function SalesforceAuthenticationService(http, httpWrapper, validationUtilSvc, logger, localStorageSvc, accessTokenSrv) {
        this.http = http;
        this.httpWrapper = httpWrapper;
        this.validationUtilSvc = validationUtilSvc;
        this.logger = logger;
        this.localStorageSvc = localStorageSvc;
        this.accessTokenSrv = accessTokenSrv;
        this.userRegisterUriUH = '/user/register';
        this.accessKeyUriUH = '/access-key-management/v1/access-keys';
        this.userRegisterUriCentral = 'services/v16.0/agents';
        this.accessKeyUriCentral = 'services/V15.0/access-keys';
        this.getTenantIdUri = 'services/v13.0/business-unit';
        this.userActivateUriUH = '/user/invite';
        this.invalidCredentialsMsg = 'You have entered a wrong username or password';
        this.accountLockedMsg = 'For security reasons, your account is locked. Please contact your manager to unlock your account.';
        this.accountLockedMsgFromAPI = 'Login failed. The account has been locked. Contact your system administrator.';
        this.initParam = _common_apex_params__WEBPACK_IMPORTED_MODULE_3__["ApexParams"].init();
    }
    SalesforceAuthenticationService_1 = SalesforceAuthenticationService;
    /* New Changes starts here */
    SalesforceAuthenticationService.prototype.authenticateUser = function (userName, password, uhUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var initParam = _common_apex_params__WEBPACK_IMPORTED_MODULE_3__["ApexParams"].init();
            sforce.apex.execute(initParam.authenticatorService, 'authenticateUser', { 'username': encodeURIComponent(userName), 'password': encodeURIComponent(password), 'uhUrl': uhUrl }, function (response) {
                try {
                    var responseObj = JSON.parse(response);
                    if (responseObj.statusCode === 200) {
                        _this.logger.debug(SalesforceAuthenticationService_1.name, 'authenticate response : ' + responseObj.data);
                        var authToken = new common_lib__WEBPACK_IMPORTED_MODULE_4__["AuthToken"]();
                        authToken.parseData(JSON.parse(JSON.parse(responseObj.data)));
                        resolve(authToken);
                    }
                    else {
                        _this.logger.debug(SalesforceAuthenticationService_1.name, 'authenticate<<error: ' + response);
                        reject(JSON.parse(JSON.parse(responseObj.data)).error_description || responseObj.error);
                    }
                }
                catch (error) {
                    _this.logger.error(SalesforceAuthenticationService_1.name, 'authenticate<<exception : ' + JSON.stringify(error));
                    reject(error);
                }
            });
        });
    };
    SalesforceAuthenticationService.prototype.getTenatId = function () {
        var _this = this;
        var authSetting = this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_4__["DatastoreKeys"].AuthSettings);
        this.authSettings = JSON.parse(authSetting);
        var params = '?fields=tenantId';
        var url = this.accessTokenSrv.getAccessToken().resourceUrl + this.getTenantIdUri + params;
        return new Promise(function (resolve, reject) {
            _this.httpWrapper.get(url).toPromise().then(function (response) {
                _this.logger.debug(SalesforceAuthenticationService_1.name, 'getTenatId - success: ' + response);
                resolve(response.businessUnits[0]);
            }, function (error) {
                _this.logger.error(SalesforceAuthenticationService_1.name, 'getTenatId - failed: ' + error);
                reject(error);
            });
        });
    };
    SalesforceAuthenticationService.prototype.getAgentInfo = function (userName) {
        var _this = this;
        var authSetting = this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_4__["DatastoreKeys"].AuthSettings);
        this.authSettings = JSON.parse(authSetting);
        var params = '?isActive=true&searchString=' + userName + '&fields=agentId,userName,emailAddress,teamId,profileId,country,city,timeZone';
        var url = this.accessTokenSrv.getAccessToken().resourceUrl + this.userRegisterUriCentral + params;
        return new Promise(function (resolve, reject) {
            _this.httpWrapper.get(url).toPromise().then(function (response) {
                _this.logger.debug(SalesforceAuthenticationService_1.name, 'getAgentInfo - success: ' + response);
                resolve(response.agents[0]);
            }, function (error) {
                _this.logger.error(SalesforceAuthenticationService_1.name, 'getAgentInfo - failed: ' + error);
                reject(error);
            });
        });
    };
    SalesforceAuthenticationService.prototype.getUserInfo = function (userName) {
        var _this = this;
        var url = this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_4__["DatastoreKeys"].EvolveWebServerUrl) + '/user';
        var adminUserName = this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_4__["DatastoreKeys"].AdminUserName).toLowerCase();
        return new Promise(function (resolve, reject) {
            _this.httpWrapper.get(url).toPromise().then(function (response) {
                var users = response.users.filter(function (entry) { return entry.userName === userName.toLowerCase(); });
                var userId = '';
                var status = 'ACTIVE';
                if (users.length == 1) {
                    userId = users[0].id;
                    status = users[0].status;
                    _this.logger.debug(SalesforceAuthenticationService_1.name, 'getUser - success: ' + userId);
                }
                var adminUser = response.users.filter(function (entry) { return entry.userName === adminUserName; })[0];
                var res = {
                    "NewUserId": userId,
                    "adminUser": adminUser,
                    "status": status
                };
                resolve(res);
            }, function (error) {
                _this.logger.error(SalesforceAuthenticationService_1.name, 'getUser - failed: ' + error);
                reject(error);
            });
        });
    };
    SalesforceAuthenticationService.prototype.activateUser = function (emailAddressesList, senderEmail) {
        var _this = this;
        var url = this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_4__["DatastoreKeys"].EvolveWebServerUrl) + this.userActivateUriUH;
        var payload = {
            "emailAddressesList": [emailAddressesList],
            "senderEmail": senderEmail
        };
        return new Promise(function (resolve, reject) {
            _this.httpWrapper.post(url, payload).toPromise().then(function (response) {
                _this.logger.debug(SalesforceAuthenticationService_1.name, 'activateUser - success: ' + response);
                resolve(response);
            }, function (error) {
                _this.logger.error(SalesforceAuthenticationService_1.name, 'activateUser - failed: ' + error);
                reject(error);
            });
        });
    };
    SalesforceAuthenticationService.prototype.userRegistration = function (payload, evolveWebServerUrl) {
        var _this = this;
        var url = '';
        if (evolveWebServerUrl !== 'Central') {
            url = url + evolveWebServerUrl + this.userRegisterUriUH;
        }
        else {
            url = url + this.accessTokenSrv.getAccessToken().resourceUrl + this.userRegisterUriCentral;
        }
        return new Promise(function (resolve, reject) {
            _this.httpWrapper.post(url, payload).toPromise().then(function (response) {
                _this.logger.debug(SalesforceAuthenticationService_1.name, 'userRegistration - success: ' + response);
                resolve(response);
            }, function (error) {
                _this.logger.error(SalesforceAuthenticationService_1.name, 'userRegistration - failed: ' + error);
                reject(error);
            });
        });
    };
    SalesforceAuthenticationService.prototype.createAccessKeyAPI = function (evolveWebServerUrl) {
        var _this = this;
        var url = '';
        var payload = {};
        if (evolveWebServerUrl !== 'Central') {
            url = url + evolveWebServerUrl + this.accessKeyUriUH;
            payload = {
                "userId": this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_4__["DatastoreKeys"].NewUserId),
                "tenantId": this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_4__["DatastoreKeys"].TenantId)
            };
        }
        else {
            url = url + this.accessTokenSrv.getAccessToken().resourceUrl + this.accessKeyUriCentral;
            payload = {
                "agentId": parseInt(this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_4__["DatastoreKeys"].NewUserId))
            };
        }
        return new Promise(function (resolve, reject) {
            _this.httpWrapper.post(url, payload).toPromise().then(function (response) {
                _this.logger.debug(SalesforceAuthenticationService_1.name, 'createAccessKeyAPI - success: ' + response);
                resolve(response);
            }, function (error) {
                _this.logger.error(SalesforceAuthenticationService_1.name, 'createAccessKeyAPI - failed: ' + error);
                reject(error);
            });
        });
    };
    SalesforceAuthenticationService.prototype.storeAccessAndSecretKey = function () {
        var _this = this;
        this.logger.log(SalesforceAuthenticationService_1.name, 'storeAccessKeySecret');
        return new Promise(function (resolve, reject) {
            try {
                var initParam1 = _common_apex_params__WEBPACK_IMPORTED_MODULE_3__["ApexParams"].init();
                var accessKeySec = JSON.parse(_this.localStorageSvc.get(common_lib__WEBPACK_IMPORTED_MODULE_4__["DatastoreKeys"].AccessSecretKey));
                sforce.apex.execute(initParam1.authenticatorService, 'storeAccessKeySecret', { 'accessKeyId': encodeURIComponent(accessKeySec.accessKey.accessKeyId),
                    'accessKeySecret': encodeURIComponent(accessKeySec.accessKey.accessKeySecret) }, function (response) {
                    _this.logger.debug(SalesforceAuthenticationService_1.name, 'storeAccessKeySecret - ' + JSON.stringify(response));
                    var apexResponse = JSON.parse(response);
                    if (apexResponse.success === 'true') {
                        resolve(true);
                    }
                    else {
                        reject(apexResponse.error);
                    }
                });
            }
            catch (e) {
                _this.logger.error(SalesforceAuthenticationService_1.name, 'Error in storeAccessKeySecret...' + e);
                reject(e.message);
            }
        });
    };
    var SalesforceAuthenticationService_1;
    SalesforceAuthenticationService = SalesforceAuthenticationService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _http_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["HttpWrapperService"], common_lib__WEBPACK_IMPORTED_MODULE_4__["ValidationUtilsService"], common_lib__WEBPACK_IMPORTED_MODULE_4__["LoggerService"],
            common_lib__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], common_lib__WEBPACK_IMPORTED_MODULE_4__["AccessTokenService"]])
    ], SalesforceAuthenticationService);
    return SalesforceAuthenticationService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\SourceCode\sfdc-einstein-app-package\SFEinstein\readiness-app\angular\auth-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map