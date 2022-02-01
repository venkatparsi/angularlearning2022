import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { ServerComponent } from '../server/server.component';
@Component({
  selector: 'app-component-creator',
  templateUrl: './component-creator.component.html',
  styleUrls: ['./component-creator.component.css']
})
export class ComponentCreatorComponent implements OnInit {

  constructor( private viewContainerRef: ViewContainerRef,
               private componentFactoryResolver: ComponentFactoryResolver
               ) { 

               }

  ngOnInit(): void {
    const como = this.componentFactoryResolver.resolveComponentFactory(ServerComponent);
    this.viewContainerRef.createComponent(como);
  }

}
