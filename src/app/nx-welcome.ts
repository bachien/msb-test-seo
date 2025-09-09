import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
    <div>
      <h1> SEO MSB. Digibank Chanel</h1>
      <h3>Hello, I'm Chris</h3>
      <div>Author is Chris | phibachien.</div>
      <div>
        MSB Business Banking | Digibank Chanel | Chris | MSB | SMO | Chienpb
      </div>
      <div>This is a web created by Angular Nx.</div>
      <div>tag: msb-test-seo, phibachien, digibank chanel</div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
