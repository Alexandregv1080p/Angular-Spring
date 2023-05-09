import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@NgModule({
    exports:[
        MatCardModule,
        MatTableModule,
        MatToolbarModule,
        MatDialogModule,
        MatProgressSpinnerModule
    ],
    entryComponents: [ErrorDialogComponent]
    
})
export class AppMaterialModule {}