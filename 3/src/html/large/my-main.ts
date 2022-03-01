import { html, Template } from "../util";
import { WebComponent } from "../web-component";

export class MyMain extends WebComponent {
    
    static readonly template = Template.html`
    <link rel="stylesheet" type="text/css" href="./bootstrap.css"> 
    <style>
        main {
            background-color: black;
            height: 100%;
        }
        /* 
        * {
            margin: 0px;
            padding: 0px;
        } */

    </style>
    <main id="root">
        <div id="Demo">
            <h1>MAIN</h1>
            <p>This is main</p>
            <!-- <fast-menu-wrapper></fast-menu-wrapper> -->
            <my-dropdown-button>
            </my-dropdown-button>
            <!-- <bs-dropdown></bs-dropdown> -->
        </div>
        <div id="Graph">
            <h1>GRAPH</h1>
            <p>This is main</p>
            <!-- <fast-menu-wrapper></fast-menu-wrapper> -->
            <my-dropdown-button>
            </my-dropdown-button>
            <!-- <bs-dropdown></bs-dropdown> -->
        </div>
        <div id="Viewer">

        </div>
    </main>
        
    `;
        
    constructor(
        private currentTab: MainTab = MainTab.Demo,
    ) {
        super();
    }
    
    connectedCallback() {
        this.addFrom(MyMain.template);
        this.doTab(this.currentTab);
        this.listen(TabMainEvent, this.doTab.bind(this))
    }  

    doTab(selected: MainTab) {
        for (let option in MainTab) {
            let tab = MainTab[option];
            if (tab == selected) {
                this.get(tab).style.display = "";
            } else {
                this.get(tab).style.display = "none";
            }
        }
    }
}

customElements.define('my-main', MyMain);

export const TabMainEvent = "tabmain";

export enum MainTab {
    Demo="Demo",
    Graph="Graph",
    Viewer="Viewer"
}