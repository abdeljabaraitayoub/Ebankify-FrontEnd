import { Injectable } from '@angular/core';
import { 
  HttpRequest, 
  HttpHandler, 
  HttpEvent, 
  HttpInterceptor 
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  private readonly baseUrl = environment.baseUrl;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith('http://') || request.url.startsWith('https://')) {
      return next.handle(request);
    }

    const modifiedRequest = request.clone({
      url: `${this.baseUrl}${request.url}`
    });

    return next.handle(modifiedRequest);
  }
}
