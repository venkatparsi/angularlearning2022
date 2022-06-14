import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: '.app-profile-pic-card',
  templateUrl: './profile-pic-card.component.html',
  styleUrls: ['./profile-pic-card.component.css']
})
export class ProfilePicCardComponent implements OnInit {
  @Input('inData') inData: any;
  constructor(private elRef:ElementRef, private renderer: Renderer2) {
    console.log("indata:",this.inData)
   }

   @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
   }
   @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','none');
  }

  
  // --- Not working ---
  @HostListener('dragover', ['$event']) onDragOver(evt:Event) {
    console.log('dragover',evt)
    evt.preventDefault();
  }

  // --- Not working ---
  @HostListener('dragleave',['$event']) onDragLeave(evt:Event) {
    //evt.preventDefault();
   // evt.stopPropagation();
    console.log('dragleave')
  }

  // --- Not working ---
  @HostListener('drop', ['$event']) ondrop(evt:Event) {
    //evt.preventDefault();
   // evt.stopPropagation();
    console.log('dropped...',evt)
  }

  ngOnInit(): void {
  }

}
