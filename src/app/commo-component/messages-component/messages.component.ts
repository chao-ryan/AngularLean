import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../messageService.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /**
   * constructor 构造器
   * @param messageService  messageService 属性必须是公共属性，因为将会在模板中绑定到它
   */
  constructor(public messageService: MessageService) {}

  /**
   * ngOnInit 生命周期钩子
   */
  ngOnInit() {
    
  }

}