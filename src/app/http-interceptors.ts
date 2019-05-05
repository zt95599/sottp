import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpHeaderResponse,
  HttpResponse,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { HttpRequestService } from "./http-request.service";
import {LoadingService } from "./loading.service"


/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private httpService: HttpRequestService,private loadingService: LoadingService) {
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.httpService.getAuthorizationToken();

    const authReq = req.clone({
      headers: req.headers.set("Authorization", authToken),
      url:req.url
    });


    return next.handle(authReq).pipe(
      tap(
        event => {
          this.loadingService.loadingShow();
          if (event instanceof HttpResponse) {
            console.log("success");
          }
        },
        error => {
          console.log("failed");
        }
      ),
      finalize(() => {
        this.loadingService.loadingHide();
      })
    );
  }

}
