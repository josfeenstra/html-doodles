import { Template } from "../util";
import { WebComponent } from "../web-component";

class FastMenuWrapper extends WebComponent {

    static template = Template.html`

    <style>
        fast-menu {
            background-color: var(--background-color-2);
        }
    </style>

    <!-- <fast-design-system-provider use-defaults> -->
        <section>
            <h1 >Geofront</h1>
            <p >Modern geoprocessing<p>
        
            <fast-button>Clickme</fast-button>
    
            <br><br><br>
            <fast-slider 
                aria-label="Example slider" 
                tabindex="0" 
                role="slider" 
                class="horizontal" 
                aria-valuenow="10" 
                aria-valuemin="0" 
                aria-valuemax="10" 
                aria-orientation="horizontal" 
                current-value="10" 
                min="0" 
                max="10" 
                step="1" 
                orientation="horizontal" 
                mode="single-value">
                <input min="0" max="10" step="1" style="display: none;" slot="form-associated-proxy" type="range">
            </fast-slider>
            <br>
            <br>
            <fast-menu slot="submenu">
                <fast-menu-item>
                    Menu item 1
                    <fast-menu slot="submenu">
                        <fast-menu-item>Menu item 1.1</fast-menu-item>
                        <fast-menu-item>Menu item 1.2</fast-menu-item>
                        <fast-menu-item>Menu item 1.3</fast-menu-item>
                    </fast-menu>
                </fast-menu-item>
                <fast-menu-item>
                    Menu item 2
                    <fast-menu slot="submenu">
                        <fast-menu-item>Menu item 2.1</fast-menu-item>
                        <fast-menu-item>Menu item 2.2</fast-menu-item>
                        <fast-menu-item>Menu item 2.3</fast-menu-item>
                    </fast-menu>
                </fast-menu-item>
                <fast-menu-item>
                    Menu item 3
                    <fast-menu slot="submenu">
                        <fast-menu-item>Menu item 3.1</fast-menu-item>
                        <fast-menu-item>Menu item 3.2</fast-menu-item>
                        <fast-menu-item>Menu item 3.3</fast-menu-item>
                    </fast-menu>
                </fast-menu-item>
            </fast-menu>
        </section>
    <!-- </fast-design-system-provider> -->
    `

    connectedCallback() {
        this.addFrom(FastMenuWrapper.template);
    }
}

customElements.define('fast-menu-wrapper', FastMenuWrapper);