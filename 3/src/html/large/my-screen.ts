import { Template } from "../util";
import { WebComponent } from "../web-component";

customElements.define('my-screen', 
class MyScreen extends WebComponent {
    
    static readonly template = Template.html`
    
    <link rel="stylesheet" type="text/css" href="./bootstrap.css">  
    <style>

        #screen {
            overflow: hidden;
            display: flex;
            min-height: 100vh;
            flex-direction: column;
        }

        #main {
            padding: 0px;
            margin: 0px;
        }

        my-header {
            top: 0;
            height: 60px;
        }

        #content {
            flex: 1;
            width:100%;
            padding: 0px;
            margin: 0px;
        }

        my-footer {
            overflow: hidden;
            left: 0;
            right: 0;
            bottom: 0;
            height: 20px;
        }

        .left {
            -ms-flex: 0 0 30px;
            flex: 0 0 30px;
            width: 30px;
            background-color: var(--background-color-2); 
        } 

        .right {
            -ms-flex: 0 0 270px;
            flex: 0 0 270px;
            width: 270px;
            background-color: var(--background-color-2);
        } 

        @media (max-width: 500px) {
            .right {
                display: none; 
            } 
        }

    </style>
    <section id="screen">
        <my-header></my-header>
        <section class="row" id="content">
            <div class="col left px-0">
                <my-left-panel></my-left-panel>
            </div>
            <div class="col p-0">
                <my-main></my-main>
            </div>
            <div class="col right">
                <my-right-panel></my-right-panel>
            </div>
            <!-- <my-left-panel class="col-4"></my-left-panel>
            <my-main style="width:80%"></my-main>
            <my-right-panel></my-right-panel> -->
        </section>
        <my-footer></my-footer>
    </section>
        
    `;
        
    connectedCallback() {
        this.addFrom(MyScreen.template);
    }  

});