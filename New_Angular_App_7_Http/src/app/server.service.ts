import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  link = 'gs://angularhttp-6b951.appspot.com/data.json';
  storeServers(servers: any[]) {
    return this.http.post(this.link, servers);
  }
}
