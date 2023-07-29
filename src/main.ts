import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import "./polyfills";
declare const window: {
  [key: string]: any;
};
platformBrowserDynamic().bootstrapModule(AppModule)
.then(ref=>{
  if (window["ngRef"]) {
    window["ngRef"].destroy();
  }
  window["ngRef"] = ref;
})
  .catch(err => console.error(err));
