import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
  courseForm!: FormGroup;

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      title : new FormControl('', [Validators.required, Validators.minLength(2)]),
      description : new FormControl('', [Validators.required, Validators.minLength(2)]),
      author : new FormControl('', [ ]),
      duration : new FormControl('', [Validators.required, Validators.min(0)])
    });
  }
  // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.
  onSubmit() {
    console.log(this.courseForm.value);
  }
}
