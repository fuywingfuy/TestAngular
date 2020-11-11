import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
// bootstrapModule 启动一个 AppModule（一个程序是一个Module）
// app -> app.module.ts
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
//# sourceMappingURL=main.js.map