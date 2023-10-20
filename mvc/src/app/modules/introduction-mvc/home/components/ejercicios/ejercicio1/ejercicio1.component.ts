import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/service/highlight.service';
import { CdkDragDrop, CdkDropList, CdkDragStart, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { OptionsExercise1 } from '../../../interfaces/exercise.interface';


@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.scss']
})
export class Ejercicio1Component implements OnInit {

  options: OptionsExercise1[] = [
    {
      code: 'self.task_model.change_state(task_id, new_state)',
      status: false
    },
    {
      code: 'new_task = {"description": description, "state": "pending"}',
      status: false
    },
    {
      code: 'self.task_model.add_task(new_task)',
      status: false
    },
    {
      code: 'self.task_model.change_state(task_id, new_state)',
      status: false
    },
  ];
  selected: string = '';
  status_code: number = 1;
  search_param: string = `# PIEZA FALTANTE ${this.status_code}`
  max_code = 3;
  code_test:boolean = true

  correct_codes: string[] = [
    'new_task = {"description": description, "state": "pending"}',
    'self.task_model.add_task(new_task)',
    'self.task_model.change_state(task_id, new_state)'
  ]
  adding_code: string [] = []

  code = `class TaskController:

      def __init__(self, task_model):
        self.task_model = task_model

      def create_task(self, description):
        # PIEZA FALTANTE 1
        # PIEZA FALTANTE 2

      def move_task(self, task_id, new_state):
          # PIEZA FALTANTE 3
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

  /* onDragStarted(dragItem: CdkDrag<OptionsExercise1>) {
    this.selected = dragItem.data.code;
  }

  onDrop(event: CdkDragDrop<OptionsExercise1[]>) {
    moveItemInArray(this.options, event.previousIndex, event.currentIndex);
    if (this.selected != '') {
      var code1_stand = "",
        code2_stand = "";
      code1_stand = this.code.split(this.search_param)[0]
      code2_stand = this.code.split(this.search_param)[1]
      this.code = `${code1_stand}${this.selected}${code2_stand}`
      const codeElement = this.el.nativeElement.querySelector('code');
      this.renderer.setProperty(codeElement, 'textContent', this.code);
      this.status_code += 1;
      this.search_param = `# PIEZA FALTANTE ${this.status_code}`


      for (let i = 0; i < this.options.length; i++) {
        const element = this.options[i];
        console.log(element);

        if (element.code === this.selected){
          this.options[i].status = true;
          break
        }
      }
    } else {
      this.selected = ''
    }
  } */

  codeTest = () => {
    for (let index = 0; index < this.options.length; index++) { this.options[index].status = true }
    this.code_test = false
  }

  testCode = () => {
    let cont = 0;
    for (let index = 0; index < this.adding_code.length; index++) {
      const element = this.adding_code[index];
      if(element == this.correct_codes[index]){
        cont ++;
      }
    }
    if(cont === this.max_code){
      alert("El código es correcto")
    }else{
      alert("El código no es correcto")
    }
  }

  addCode = (option: OptionsExercise1) => {
    if(!option.status && this.code_test){
      var code1_stand = "",
          code2_stand = "";
        code1_stand = this.code.split(this.search_param)[0]
        code2_stand = this.code.split(this.search_param)[1]
        this.adding_code.push(option.code)
        this.code = `${code1_stand}${option.code}${code2_stand}`
        const codeElement = this.el.nativeElement.querySelector('code');
        this.renderer.setProperty(codeElement, 'textContent', this.code);
        this.status_code += 1;
        this.search_param = `# PIEZA FALTANTE ${this.status_code}`
        option.status = true
    }
    if(this.status_code == this.max_code + 1){
      this.codeTest()
    }
  }
}
