import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    requestCount = 0;
    constructor(public loaderService: LoaderService) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.requestCount++;
        this.loaderService.show();
        return next.handle(req).pipe(
            finalize(() => {
                this.requestCount--;
                if (this.requestCount === 0) {
                    this.loaderService.hide();
                }
            })
        );
    }
}