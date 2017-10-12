import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const CONTACT_URL = `./contacts.json`; //注意反斜号

@Injectable()
export class ContactService {
    constructor(private http: Http) { }

    getContactsData() {
        return this.get(CONTACT_URL);
    }

    get(url: string, opts?: Object) {
        return this.request(url, (<any>Object).assign({
            method: 'get'
        }, opts));
    }

    request(url: string, opts: any) {
        return this.http.request(url, new RequestOptions(opts))
            .map(res => {
                let _res = res.json();
                if (opts.id) {
                    for (let i = 0; i < _res.length; i++) {
                        if (_res[i].id == opts.id) {
                            _res = _res[i];
                        }
                    }
                }
                if (opts.collection) {
                    let temp: any = [];
                    for (let i = 0; i < _res.length; i++) {
                        if (_res[i].collection == opts.collection) {
                            temp.push(_res[i]);
                        }
                    }
                    _res = temp;
                }
                return _res;
            })
    }
}



