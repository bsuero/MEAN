import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  newPost = 'NO CONTENT';
  newPostTwoWayBinding = '';
  enterValue = '';
  newPostForEnterValue = '';

  constructor() { }

  ngOnInit() {
  }

  onAddPost(postInput: HTMLTextAreaElement) {
    console.dir(postInput);
    this.newPost = postInput.value;
  }

  onAddPostTwoWayBinding(postInputTwoWayBinding: HTMLTextAreaElement) {
    console.dir(postInputTwoWayBinding);
    this.newPostTwoWayBinding = postInputTwoWayBinding.value;
  }

  onAddPostTwoWayBindingFeature() {
    this.newPostForEnterValue = this.enterValue;
  }
}
