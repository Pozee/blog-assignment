import { Injectable } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ArtikelServiceService {
  articleData: any = [
    {
      title: "Trump botade corona",
      content: `Efter veckor utav kaos ser vi äntligen juset i tunneln, idag klockan 09:15 presenterade vita huset att Donald Trump har tagit fram ett botemedel för corona.
      Dock vägrade han svara på hur han fått den kompetens som behövts utan nöjde sig med att säga "I got good genes, very good genes, the best genes".`,
      readTime: "40",
      author: "Barack Obama"
    },
    {
      title: "Pontus är bäst",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
           with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      readTime: "20",
      author: "Arthur Oresjö ",
    },
    {
      title: "Fem nya färger har upptäckts",
      content: "Helt galet, folk är vilda.",
      readTime: "5",
      author: "Niklas Niklasson",
    },
    {
      title: "Sex nya färger har upptäckts",
      content: "Helt galet, folk är vilda.",
      readTime: "5",
      author: "Abraham K",
    },
    {
      title: "Sju nya färger har upptäckts",
      content: "Helt galet, folk är vilda.",
      readTime: "5",
      author: "Niklas Niklasson",
    }, {
      title: "Åtta nya färger har upptäckts",
      content: "Helt galet, folk är vilda.",
      readTime: "5",
      author: "Niklas Niklasson",
    }

  ]
  getLatest() {
    return this.articleData[0];
  }
  showLatestFive() {
    return this.articleData;
  }
  addArticle(data: any) {
    this.articleData.unshift(data);
    localStorage.setItem("articleData", JSON.stringify(data));
  }

  constructor() {
    let storage = JSON.parse((localStorage.getItem("articleData")));
    if (storage !== null) {
      this.articleData.unshift(storage);
    };
  }


}
