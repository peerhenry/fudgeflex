import React from "react"
import { mainRed, lightRed } from '../Colors'

let imgsrc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTViMGZiNmJjMGUgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWIwZmI2YmMwZSI+PHJlY3Qgd2lkdGg9IjE3MSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI1OSIgeT0iOTQuOCI+MTcxeDE4MDwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="
let posterWidth = 1750
let posterHeight = 2475
let gr1, gr2, gr3

const renderImage = (ctx, src, offsetX, offsetY) => {
  var img = new Image();
  img.src = src;
  img.onload = () => {
    var w = 0.8*img.width;
    var h = 0.8*img.height;
    ctx.drawImage(img, offsetX + (posterWidth - w)/2, offsetY + 740 + (740-h)/2, w, h)
  };
}

const renderCanvas = (canvas) => {
  var ctx = canvas.getContext("2d");

  var lightGreen = "rgba(88,255,71,255)";
  var grey = "rgba(222,216,216,255)";

  // colors
  ctx.fillStyle="#000000";
  ctx.fillRect(0,0,posterWidth,740);
  ctx.fillStyle = lightGreen;
  ctx.fillRect(0,740,posterWidth,740);
  ctx.fillStyle = grey;
  ctx.fillRect(0,1480,posterWidth,740);
  ctx.fillStyle="#000000";
  ctx.fillRect(0,2220,posterWidth,255);

  // images
  renderImage(ctx, "img/happyhouse.png", 0, 0)
  renderImage(ctx, "img/emptyhouse.png", -400, 740)
  renderImage(ctx, "img/sadface.png", 400, 740)

  // text
  ctx.font = "128px Arial";
  ctx.fillStyle="#ff0";
  ctx.textAlign = "center";
  ctx.fillText("www.fuckflex.nl",canvas.width/2,2400);

  return ctx;
}

const buttonStyle = {fontWeight: 'bold', border: 0, borderRadius: 0, background: mainRed, color: 'white'}

export default class Posters extends React.Component{

  componentDidMount(){
    var c = document.getElementById("main-canvas");
    renderCanvas(c);
  }

  updateSlogan(event){
    var c = document.getElementById("main-canvas");
    var ctx = renderCanvas(c);
    var font  = '140pt Impact';
    ctx.font = font;
    ctx.fillStyle="#ff0";
    ctx.textAlign = "center";
    var text = event.target.value;
    var lines = text.split("\n");

    var counter = 0
    var nextline = lines[counter]
    while(nextline != null){
      ctx.fillText(nextline, c.width/2, 200 + counter*(140 + 30));
      counter++
      nextline = lines[counter]
    }
  }

  downloadPoster(){
    var canvas = document.getElementById("main-canvas");
    ReImg.fromCanvas(canvas).downloadPng();
  }

  render(){
    return(
      <div>
        <h1 style={{textAlign: 'center', marginBottom: '40px'}}>
          <strong>Maak nu je eigen poster!</strong>
        </h1>

        <div class="row">

          {/* Left side */}
          <div className="col-sm-6">

            <div id="canvas-wrapper">
              <canvas id="main-canvas" width="1750" height="2475" style={{height: '100%', width: '100%', maxHeight: '80vh'}}>
                Uw browser understeund geen canvas.
              </canvas>
            </div>

          </div>

          {/* Right side */}
          <div className="col-sm-6">

             <div class="form-group">
                <label for="comment">
                  <h3>
                    <strong>Schrijf je eigen slogan:</strong>
                  </h3>
                </label>
                <textarea class="form-control" rows="5" id="comment" onChange={this.updateSlogan}></textarea>
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
              <button class="btn btn-default" type="submit" style={buttonStyle} onClick={this.downloadPoster}>
                <span class="lead" style={{fontWeight: 'bold'}}>DOWNLOAD POSTER</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    );
  }
}