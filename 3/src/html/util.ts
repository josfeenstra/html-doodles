/**
 * HTML utilities
 * 
 * Notes: 
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw
 */

/**
 * This passthrough function serves as syntax highlighting
 */
export function html(template: TemplateStringsArray, ...args: any[]) {
    return String.raw(template, ...args);
}

/**
 * This passthrough does nothing except syntax highlighting
 */
export function css(template: TemplateStringsArray, ...args: any[]) {
    return String.raw(template, ...args);
}


export namespace Div {
    /**
     * Creates html within a div
     */
    export function html(template: TemplateStringsArray, ...args: any[]) {
        const div = document.createElement("div");
        let str = String.raw(template, ...args);
        div.innerHTML = str;
        return div;
    }
}

export namespace Template {
    
    export function html(template: TemplateStringsArray, ...args: any[]) {
        const temp = document.createElement("template");
        let str = String.raw(template, ...args);
        temp.innerHTML = str;
        return temp;
    }

}