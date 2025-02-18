"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: '*',
            credentials: true,
            methods: 'GET,HEAD,OPTIONS,POST,PUT',
            allowedHeaders: 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
        },
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
    .then(() => {
    console.log(`Servidor rodando na porta ${process.env.PORT ?? 3000}`);
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=main.js.map