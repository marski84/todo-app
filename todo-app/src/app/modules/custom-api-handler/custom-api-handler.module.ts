import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractApiHandler } from './abstract-api-handler';
import { LocalStorageApiHandlerService } from './local-storage-api-handler.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: AbstractApiHandler, useClass: LocalStorageApiHandlerService },
  ],
})
export class CustomApiHandlerModule {}
