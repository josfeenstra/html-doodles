import { Template } from "../util";
import { WebComponent } from "../web-component";

customElements.define('my-header', 
class MyHeader extends WebComponent {
    
    static readonly template = Template.html`
    
    <style>
        header {
            -webkit-user-select: none; /* Safari */        
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            user-select: none; /* Standard */
            width: 100vw;
            height: 100%;
            background-color: var(--background-color-1);
        }

        .header-section {
            /* padding-left: 10px;  */
            margin: 8px; 
            display: flex; 
            align-content: end; 
            align-items: end
        }

        #title {
            padding: 0px; 
            margin: 0px;
            font-weight: 500;
            margin-bottom: -10px;
        }
            
        #subtitle {
            padding: 0px; 
            margin: 0px; 
            color: darkgrey; 
            margin-bottom: -12px;
        }

    </style>
    <header style="display: flex; align-content: end" >
        <!-- title tag -->
        <div style="display: flex; align-items: center">
            <my-logo></my-logo>
            <div>
                <h1 id="title">Geofront</h1>
            </div>
        </div>
        <div class="header-section">
            <my-button>File</my-button>
            <my-button>Edit</my-button>
            <my-button>Add</my-button>
            <my-button>View</my-button>
            <my-button>Help</my-button>
        </div>
        <div class="header-section" style="margin-left: auto; margin-right: 1rem">
            <my-button>Settings</my-button>
        </div>
    </header>
        
    `;
        
    connectedCallback() {
        this.addFrom(MyHeader.template);
    }  

});