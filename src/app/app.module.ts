import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule} from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


// AoT requires an exported function for factories
    

export function createTranslateLoader(http: HttpClient) {
return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
 }



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpClientModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage:"en",
            loader: {
            
            provide: TranslateLoader,
            
            useFactory: createTranslateLoader,
            
            deps: [HttpClient]
            
            }
            
            }),
        ],
    declarations: [
        AppComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports:[TranslateModule]
 
})
export class AppModule { }
