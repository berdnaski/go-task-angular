import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/components/header/header.component";
import { MainContentComponent } from "./components/components/main-content/main-content.component";
import { TaskFormModalComponent } from "./components/components/task-form-modal/task-form-modal.component";
import { TaskCommentsModalComponent } from "./components/components/task-comments-modal/task-comments-modal.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainContentComponent, TaskFormModalComponent, TaskCommentsModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'go-task-angular';
}
