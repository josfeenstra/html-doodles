import { Template } from "../util";
import { WebComponent } from "../web-component";

customElements.define('my-viewer', 
class MyViewer extends WebComponent {
    
    static readonly template = Template.html` 
    <style>
        
    </style>
        <canvas id="canvas">
        </canvas>
        <div id="interface" style="display: none">
            <p>This is created just so things are 'as normal' for the currently used viewer</p>
        </div>
    `;
        
    connectedCallback() {
        this.addFrom(MyViewer.template);
        this.initialize();
    }  

    onResize() {
        
    }

    initialize() {

        // get references of all items on the canvas
        let canvas = this.get('canvas') as HTMLCanvasElement;
        let ui = document.getElementById("interface") as HTMLDivElement;
    
        // init core
        // let gl = HelpGl.initWebglContext(canvas)!;
        // let core = new Core(canvas, gl, ui);
        // HelpGl.resizeViewportToCanvas(gl);
    
        // //@ts-ignore
        // window.core = core;
    
        // // init swap app
        // let appCollection = [
        //     SphericalNoise,
        //     WaveApp,
        //     MicApp,
        //     MarchingCubeApp,
        //     SkyboxApp,
        //     LeastSquaresCircleApp,
        //     DrawTargetApp,
        //     CannyApp,
        //     TorusApp,
        //     ZebraApp,
        //     CubesPhongApp,
        //     PhongApp,
        //     MultiRendererApp,
        //     BillboardApp,
        //     PerlinApp,
        //     SurfaceApp,
        //     BezierApp,
        //     BezierCpApp,
        //     SurfaceCpApp,
        //     SplineApp,
        //     LoftApp,
        //     SphericalApp,
        //     SphericalThreeApp,
        //     // SphericalTwoApp, // I broke this...
        //     SphericalOneApp,
        //     IcosahedronApp,
        //     DotApp3,
        //     LeastSquaresApp,
        //     MeshInspectorApp,
        //     ObjLoaderApp,
        // ];
    
        // let swapApp = new SwapApp(gl, core, appCollection);
        // core.addApp(swapApp);
    
        // // check if the hash matches one of the app names, if so, switch to that app. if not, goto the default start app.
        // let defaultIndex = 0;
        // swapApp.swapFromUrl(location.hash, defaultIndex);
    
        // // time
        // let accumulated = 0;
        // let counter = FpsCounter.new();
    
        // infinite loop
        function loop(elapsed: number) {
            // let dt = elapsed - accumulated;
            // accumulated = elapsed;
    
            // counter._update(dt);
            // document.title = "fps: " + counter.getFps();
    
            // core.update(dt);
            // core.draw();
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);

    }
});