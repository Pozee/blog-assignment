import { Injectable } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ArtikelServiceService {
  articleData: any = [
    {
      title: "Trump botade corona",
      content: `Efter veckor utav kaos ser vi äntligen ljuset i tunneln, idag klockan 09:15 presenterade vita huset att Donald Trump har tagit fram ett botemedel för corona.
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
      title: "Ny planet visade sig vara smuts",
      content: "Ett par planetjägare som nyligen rapporterade att man hade upptäckt en ny planet tog idag tillbaka sitt uttalande. Efter en mer nogrann koll upptäckte man att det som man tidigare trott var en planet visade sig i detta fall vara smuts som satt sig på teleskopet. ",
      readTime: "5",
      author: "Niklas Niklasson",

    },
    {
      title: "Toalettpapper sälj för hundratals kronor",
      content: "Flera personer har blivit kontaktade utav en eller flera personer som försöker sälja taolettpapper för allt mellan 100:- till 500:-. Detta är helt orimligt då det flesta butiker har massor med papper på hyllorna eller på ingång.  ",
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
  }
  getTitles() {
    return this.articleData;
  }
  constructor() { }

}
