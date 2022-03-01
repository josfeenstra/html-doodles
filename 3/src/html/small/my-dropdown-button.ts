import { Template } from "../util";
import { WebComponent } from "../web-component";

class MyDropdownButton extends WebComponent {
    
    static readonly template = Template.html`
        <style>
        .dropbtn {
            background-color: #04AA6D;
            color: white;
            padding: 16px;
            font-size: 16px;
            border: none;
            cursor: pointer;
        }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown-content 
        {
            display: none;
            position: absolute;
            right: 0;
            background-color: var(--background-color-4);
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }

        .dropdown-content a {
            color: white;
            padding: 5px 10px;
            text-decoration: none;
            display: block;
        }

        .divider {
            height: 1px;
            width: 100% - 20px;
            background-color: white;
            margin: 10px 10px;
        }

        /* .dropdown:hover .dropbtn {background-color: #3e8e41;} */
        .dropdown-content a:hover {background-color: #f1f1f1;}
        .dropdown:hover .dropdown-content {display: block;}
        </style>
        <div class="dropdown" style="float:left;">
            <button class="dropbtn">Left</button>
            <div class="dropdown-content" style="left:0;">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <p class="divider"></p>
                <slot></slot>
            </div>
        </div>
    `;
        
    connectedCallback() {
        this.addFrom(MyDropdownButton.template);
    }  

    setMenu(menu: Object) {
        // recursively go through the object, and try to find functions
        // create a dropdown menu based upon that
    }

};

customElements.define('my-dropdown-button', MyDropdownButton);

declare global {
    interface HTMLElementTagNameMap {
        "my-dropdown-button": MyDropdownButton;
    }

    interface WindowEventMap {
        // "message": CustomEvent;
    }
}