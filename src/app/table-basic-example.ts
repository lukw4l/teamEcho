import { Component } from '@angular/core';

export interface PeriodicElement {
  massnahme: string;
  position: number;
  zieldatum: String;
  prio: string;
  erledigt: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    massnahme: 'Maßnahme soll folgendermaßen umgesetzt werden...',
    zieldatum: '01.01.2021',
    prio: 'hoch',
    erledigt: 'N'
  },
  {
    position: 2,
    massnahme: 'Maßnahme soll folgendermaßen umgesetzt werden...',
    zieldatum: '04.07.2021',
    prio: 'hoch',
    erledigt: 'N'
  },
  {
    position: 3,
    massnahme: 'Die Maßnahme abc soll so umgesetzt werden...',
    zieldatum: '07.12.2022',
    prio: 'hoch',
    erledigt: 'N'
  },
  {
    position: 4,
    massnahme:
      'Die Maßnahme soll durch einen sehr langen, oder auch sehr langen Text umgesetzt werden, um die Tabellenausteilung zu sehen',
    zieldatum: '01.01.2022',
    prio: 'mittel',
    erledigt: 'N'
  },
  {
    position: 5,
    massnahme: 'Maßnahme zu folgendem Problem:...',
    zieldatum: '14.10.2021',
    prio: 'mittel',
    erledigt: 'N'
  },
  {
    position: 6,
    massnahme: 'Maßnahme zu dem und dem',
    zieldatum: '26.09.2021',
    prio: 'mittel',
    erledigt: 'N'
  },
  {
    position: 7,
    massnahme: 'Maßnahme dazu',
    zieldatum: '01.01.2021',
    prio: 'mittel',
    erledigt: 'N'
  },
  {
    position: 8,
    massnahme: 'Maßnahme',
    zieldatum: '16.06.2022',
    prio: 'gering',
    erledigt: 'N'
  },
  {
    position: 9,
    massnahme: 'Maßnahme',
    zieldatum: '25.03.2022',
    prio: 'gering',
    erledigt: 'N'
  },
  {
    position: 10,
    massnahme: 'Maßnahme',
    zieldatum: '04.08.2021',
    prio: 'gering',
    erledigt: 'N'
  }
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html'
})
export class TableBasicExample {
  displayedColumns: string[] = [
    'position',
    'massnahme',
    'zieldatum',
    'prio',
    'erledigt'
  ];
  dataSource = ELEMENT_DATA;
}
