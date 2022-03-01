class ProgressBar extends HTMLElement {
    static css = css`
        :host {
            display: block;
            width: 250px;
            height: 40px;
            background: #eeeeee;
            border-radius: 4px;
            overflow: hidden;
        }

        .fill {
            width: 0%;
            height: 100%;
            background: var(--fill-color, #222222);
            transition: width 0.25s;
        }
    `;

    static html = html`
        <div>
    `

    static get observedAttributes() {
        return ["percent"];
    }

    constructor() {
        super();
    
        this.attachShadow({ mode: "open" });
    
        const style = document.createElement("style");
        const fill = document.createElement("div");
    
        style.innerHTML = ProgressBar.css;
        fill.classList.add("fill");
    
        this.shadowRoot.append(style, fill);
        }
    
        get percent() {
        const value = this.getAttribute("percent");
        const number = Number(value);

        if (isNaN(number)) {
            return 0;
        }
    
        if (number < 0) {
            return 0;
        }
    
        if (number > 100) {
            return 100;
        }
    
        return number;
    }
    
    set percent(value: number) {
        this.setAttribute("percent", value.toString());
        }
    
    attributeChangedCallback(name) {
        if (name === "percent") {
            let el = this.shadowRoot.querySelector(".fill") as HTMLElement;
            el.style.width = `${this.percent}%`;
        }
    }
}
    
customElements.define("progress-bar", ProgressBar);
