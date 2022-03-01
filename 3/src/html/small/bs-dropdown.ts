import { Template } from "../util";
import { WebComponent } from "../web-component";

class BsDropdown extends WebComponent {
    
    static readonly template = Template.html`
        <style>
            #root {
                --focus-stroke-width: 0;
                --stroke-width: 0;
                --corner-radius: 0;
                --control-corner-radius: 0;
                /* --design-unit: 0; */
            }
        </style>
  <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><a class="dropdown-item active" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
    </div>
    `;
        
    connectedCallback() {
        this.addFrom(BsDropdown.template);
        console.log("lalalal");
    }  

    setMenu(menu: Object) {
        // recursively go through the object, and try to find functions
        // create a dropdown menu based upon that
    }

};

customElements.define('bs-dropdown', BsDropdown);

declare global {
    interface HTMLElementTagNameMap {
        "bs-dropdown": BsDropdown;
    }

    interface WindowEventMap {
        // "message": CustomEvent;
    }
}