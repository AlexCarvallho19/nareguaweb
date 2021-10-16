import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Neymar JR - Moicano', date: '2021-10-13' },
      { title: 'Wiliam Bonner - Corte Simples', date: '2021-10-11' }
    ]
  };

  handleDateClick(arg:any) {
    alert('Realize um agendamento nesta data! ' + arg.dateStr )
  }
  
  
}
