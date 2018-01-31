import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://jsonplaceholder.typicode.com/';
    public ApiUrl = 'posts';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
