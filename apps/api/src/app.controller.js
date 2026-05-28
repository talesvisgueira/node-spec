"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const src_1 = __importDefault(require("logger/src"));
@(0, common_1.Controller)()
class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    @(0, common_1.Get)()
    getHello() {
        (0, src_1.default)('Abrindo o endpoint do Hello World!');
        return this.appService.getHello();
    }
}
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map