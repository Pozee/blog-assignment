import { Injectable } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ArtikelServiceService {
  articleData: any = [
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
      title: "Trump botade corona",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      readTime: "40",
      author: "Okänd"
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
      author: "Niklas Niklasson",
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
  }
  getTitles() {
    return this.articleData;
  }
  constructor() { }
}
