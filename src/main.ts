import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
bootstrapApplication(AppComponent, {
  providers: [provideAnimationsAsync()]
}).catch(e => console.error(e));
// Этот код запускает приложение в виде ранее определенного компонента AppComponent