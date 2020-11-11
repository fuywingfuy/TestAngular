import { __decorate } from "tslib";
import { Component } from '@angular/core';
// Component 函数传入了一个 object 参数，一个Component对应一个class
// 装饰器
let AppComponent = 
// 对应 import， 定义类，认为类是Component
class AppComponent {
    constructor() {
        this.title = 'my-app';
        this.user = { name: 'John Doe', imageUrl: 'https://angular.io/generated/images/marketing/home/responsive-framework.svg' };
        this.url = 'https://angular.io/assets/images/logos/angular/angular.svg';
    }
    handleClick() {
        let temp = '';
        temp = this.url;
        this.url = this.user.imageUrl;
        this.user.imageUrl = temp;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    // 对应 import， 定义类，认为类是Component
], AppComponent);
export { AppComponent };
// Angular会将Component和class打包成一个class
//# sourceMappingURL=app.component.js.map