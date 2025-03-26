import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// Angular Material Modules
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';

import { SAUDE_FACIL_ROUTING } from './saude.routing';

import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatStepperModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatSelectModule,
    MatCommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatBadgeModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatSortModule,
    MatTabsModule,
    MatIconModule,
    AsyncPipe,

    // Routing
    RouterModule.forChild(SAUDE_FACIL_ROUTING),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SaudeModule { }
