import { HttpEvent, HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest, } from "@angular/common/http";
import { Observable } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    const authToken = localStorage.getItem("token");
    const protectedPatterns = [
        /user\/account/,                      // Matches user/account
        /user\/add/,                          // Matches user/add
        /user\/delete/,                        // Matches user/remove
        /order\/create/,
        /order\/get-order/,
    ];  
    
    const isProtected = protectedPatterns.some(pattern => pattern.test(req.url));
    if (isProtected && authToken) {
        const authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authToken}`
            }
        });
        return next(authReq);
    }

    return next(req);
}
