import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/service/highlight.service';
import { CdkDragDrop, CdkDropList, CdkDragStart, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.scss']
})
export class Ejercicio1Component implements OnInit {

  options: string[] = [
    'self.task_model.change_state(task_id, new_state)',
    'new_task = {"description": description, "state": "pending"}',
    'self.task_model.add_task(new_task)',
    'self.task_model.change_state(task_id, new_state)',
  ];
  selected: string = '';
  status_code: number = 1;
  search_param: string = `# PIEZA FALTANTE ${this.status_code}`

  code = `class TaskController:

      def __init__(self, task_model):
        self.task_model = task_model

      def create_task(self, description):
        # PIEZA FALTANTE 1

      def move_task(self, task_id, new_state):
          # PIEZA FALTANTE 2
`;


  constructor(
    private highlightService: HighlightService,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  onDragStarted(dragItem: CdkDrag<string>) {
    this.selected = dragItem.data;
    console.log('Elemento seleccionado para arrastrar:', dragItem.data);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.options, event.previousIndex, event.currentIndex);
    if (this.selected != '') {
      var code1_stand = "",
        code2_stand = "";
      code1_stand = this.code.split(this.search_param)[0]
      code2_stand = this.code.split(this.search_param)[1]
      this.code = `${code1_stand}${this.selected}${code2_stand}`
      const codeElement = this.el.nativeElement.querySelector('code');
      this.renderer.setProperty(codeElement, 'textContent', this.code);
    } else {
      this.selected = ''
    }
  }

  /* change() {
    const codeElement = this.el.nativeElement.querySelector('code');
    this.renderer.setProperty(codeElement, 'textContent', 'Aquí va tu nuevo texto');
    console.log("sale");
  } */

}
