import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {PackageTreeComponent} from './components/package-tree/package-tree.component';
import {MatNestedTreeNode, MatTreeModule} from "@angular/material/tree";
import {CdkNestedTreeNode, CdkTree, CdkTreeNodeDef, CdkTreeNodeOutlet, CdkTreeNodeToggle} from "@angular/cdk/tree";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatIconButton, MatButtonModule} from "@angular/material/button";
import { PackagesComponent } from './components/packages/packages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestListComponent } from './components/test-list/test-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    PackageTreeComponent,
    PackagesComponent,
    MainComponent,
    TestListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNestedTreeNode,
    CdkNestedTreeNode,
    CdkTree,
    MatIcon,
    CdkTreeNodeDef,
    MatIconButton,
    CdkTreeNodeOutlet,
    CdkTreeNodeToggle,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
