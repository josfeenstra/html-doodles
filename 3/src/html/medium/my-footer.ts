import { Template } from "../util";
import { WebComponent } from "../web-component";

customElements.define('my-footer', 
class MyFooter extends WebComponent {
    
    static readonly template = Template.html`
    
    <style>
        * {
            font-size: 95%
        }

        footer {
            -webkit-user-select: none; /* Safari */        
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            user-select: none; /* Standard */
            width: 100vw;
            height: 100%;
            background-color: var(--background-color-1);
            color: var(--background-color-4);
        }

        .footer-section {
            /* padding-left: 10px;  */
            margin: 0px 8px; 
            display: flex; 
            align-content: end; 
            align-items: center;
        }

        p {
            margin: 0px 8px;
        }

    </style>
    <footer style="display: flex; align-content: end" >
        <!-- title tag -->
        <div class="footer-section">
            <p id="pos">pos {x: 0, y: 0}</p>
        </div>
        <div class="footer-section" style="margin-left: auto; margin-right: 1rem">
            <p>© Geofront</p>
        </div>
        <div class="footer-section">
            <p id="version">version: 0.0.0</p>
        </div>
    </footer>  
    `;
        
    connectedCallback() {
        this.addFrom(MyFooter.template);
        window.addEventListener("mousemove", this.onMouseMove.bind(this))
        this.get("version").innerText = this.getVersion();
    }  

    onMouseMove(e: MouseEvent) {
        let x = e.clientX;
        let y = e.clientY;
        this.get("pos").innerText = `pos {x: ${x}, y: ${y}}`;
    }

    getVersion() {
        return "verstion: 0.0.3";
    }

    disconnectedCallback() {
        window.removeEventListener("mousemove", this.onMouseMove);
    }

});