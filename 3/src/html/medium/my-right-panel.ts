import { Template } from "../util";
import { WebComponent } from "../web-component";

customElements.define('my-right-panel', 
class MyRightPanel extends WebComponent {
    
    static readonly template = Template.html`
    <link rel="stylesheet" type="text/css" href="./bootstrap.css">  
    <style>
        * {
            /* background-color: red; */
            border: 5px;
            border-color: red;
        }
    </style>
    <div>
        <h3 class="pt-3">Settings</h3>
        <p>The Right Panel</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eaque iusto asperiores recusandae voluptatum aspernatur totam molestiae obcaecati esse eveniet sapiente id, odit laborum culpa possimus officia natus adipisci ipsa ratione? Obcaecati temporibus dignissimos laborum tenetur excepturi optio sapiente, officia autem eius necessitatibus ipsa deleniti maxime? Est aliquam nihil adipisci!</p>
    </div>  
    `;
        
    connectedCallback() {
        this.addFrom(MyRightPanel.template);
    }  
});