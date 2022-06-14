import { NgModule } from '@angular/core';

import { AppLanguagePipe} from '../app-language.pipe'



@NgModule({
  declarations: [AppLanguagePipe],
  imports: [
   
  ],
  exports:[AppLanguagePipe]
})
export class TranslatePipeModule { }
