import { MainTab, MyMain, TabMainEvent } from "../large/my-main";
import { Template } from "../util";
import { WebComponent } from "../web-component";

customElements.define('my-left-panel', 
class MyLeftPanel extends WebComponent {
    
    static readonly template = Template.html`
    <!-- <link rel="stylesheet" type="text/css" href="./bootstrap.css">   -->
    <!-- <link rel="stylesheet" type="text/css" href="./index.css"/>    -->
    <style>

    /* NOTE: keep this around: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ */
    #panel {
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: flex-end;
        height: 100%;
    }

    </style>
    <div id="panel">
        <my-small-button id="show-demo-btn">D</my-small-button>
        <my-small-button id="show-graph-btn">G</my-small-button>
        <my-small-button id="show-viewer-btn"> V</my-small-button>
    </div>
    `;
        
    connectedCallback() {
        this.addFrom(MyLeftPanel.template);
        this.get("show-demo-btn").addEventListener("click", () => this.onToggleMainButtonPressed(MainTab.Demo));
        this.get("show-graph-btn").addEventListener("click", () => this.onToggleMainButtonPressed(MainTab.Graph));
        this.get("show-viewer-btn").addEventListener("click", () => this.onToggleMainButtonPressed(MainTab.Viewer));
    }  

    onToggleMainButtonPressed(tab: MainTab) {
        this.dispatch(TabMainEvent, tab);
    }
});