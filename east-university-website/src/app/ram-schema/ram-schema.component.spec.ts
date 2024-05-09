import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamSchemaComponent } from './ram-schema.component';

describe('RamSchemaComponent', () => {
  let component: RamSchemaComponent;
  let fixture: ComponentFixture<RamSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamSchemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
