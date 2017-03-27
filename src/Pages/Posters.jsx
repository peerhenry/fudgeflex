import React from "react";

let imgsrc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTViMGZiNmJjMGUgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWIwZmI2YmMwZSI+PHJlY3Qgd2lkdGg9IjE3MSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI1OSIgeT0iOTQuOCI+MTcxeDE4MDwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="
let imgW = 1750
let imgH = 2475
let gr1, gr2, gr3

export default class Posters extends React.Component{

  componentDidMount(){
    var c = document.getElementById("main-canvas");
    var ctx = c.getContext("2d");
    //ctx.moveTo(0,0);
    //ctx.lineTo(1750,2475);
    //ctx.stroke();

    gr1 = ctx.createLinearGradient(0,0,0,imgH);
    gr1.addColorStop(0,"red");
    gr1.addColorStop(1,"yellow");

    gr2 = ctx.createLinearGradient(0,0,0,imgH);
    gr2.addColorStop(0,"green");
    gr2.addColorStop(1,"blue");

    gr3 = ctx.createLinearGradient(0,0,0,imgH);
    gr3.addColorStop(0,"purple");
    gr3.addColorStop(1,"pink");

    ctx.fillStyle=gr2;
    ctx.fillRect(0,0,imgW,imgH);
  }

  render(){
    return(
      <div>
        <h2>Maak nu je eigen poster!</h2>

        <div class="row">

          {/* Left side */}
          <div className="col-sm-6">

            <div id="canvas-wrapper">
              <canvas id="main-canvas" width="1750" height="2475" style={{height: '100%', width: '100%', maxHeight: '90vh'}}>
                Uw browser understeund geen canvas.
              </canvas>
            </div>

          </div>

          {/* Right side */}
          <div className="col-sm-6">

            <div class="col-xs-6 col-md-3">
              <a href="#" class="thumbnail">
                <img src={imgsrc} alt="..." />
              </a>
            </div>

            <div class="col-xs-6 col-md-3">
              <a href="#" class="thumbnail">
                <img src={imgsrc} alt="..." />
              </a>
            </div>

            <div class="col-xs-6 col-md-3">
              <a href="#" class="thumbnail">
                <img src={imgsrc} alt="..." />
              </a>
            </div>

            <div class="text-center">
              <button class="btn btn-default" type="submit">
                <span class="lead">Download poster</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    );
  }
}