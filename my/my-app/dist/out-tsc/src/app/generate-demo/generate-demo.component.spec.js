import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { GenerateDemoComponent } from './generate-demo.component';
describe('GenerateDemoComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [GenerateDemoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GenerateDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=generate-demo.component.spec.js.map