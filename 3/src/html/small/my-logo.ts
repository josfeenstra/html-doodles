import { Template } from "../util";
import { WebComponent } from "../web-component";

customElements.define('my-logo', 
class MyLogo extends WebComponent {
    
    static template = Template.html`
        <style>
        svg {
            display: inline-block;
            width: 3rem;
            height: 3rem;   
        }
        </style>
        <div style="margin: 7px; padding-top: 4px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.9 -94 96.1 91.6">
                <path d="M12.4-41.3 38.3-19.2 67.1-35 53.3-44.6 71.7-35 38.8-12.8 2.8-34.9.9-41.4 25.1-81.4 47.8-89.1 26.6-79.1zM50.7-44.6 32.6-33.8 29-73.2 68.3-94 75.5-91.4 97-50.7 91.6-27.8 94-50.4 67.1-81 34.5-69.4 34.6-36.9ZM52-46.8 50.9-67.9 85.7-50.6 85-8.5 79.8-2.4 34.2-3 14.6-21.2 35.6-6.6 73.5-12.3 80-48.3 53.3-64.2Z" 
                fill="#ffffff"/>
            </svg>
        </div>
        `;
        
    connectedCallback() {
        this.addFrom(MyLogo.template);
    }  
});