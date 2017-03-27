import React from "react";

const Register = ({}) => (
  <div>
    <h2>Doe mee en meld je aan!</h2>

    <div class="panel panel-default">
      <div class="panel-heading">Aanmelden</div>
      <div class="panel-body">
        
          <form action="" className="form-horizontal">
            <div className="form-group">
              <label for="firstName" class="col-sm-offset-2 col-sm-2 control-label">Voornaam</label>
              <div className="col-sm-6">
                <input id="firstName" type="text" class="form-control"/>
              </div>
            </div>
            <div className="form-group">
              <label for="lastName" class="col-sm-offset-2 col-sm-2 control-label">Achternaam</label>
              <div className="col-sm-6">
                <input id="lastName" type="text" class="form-control"/>
              </div>
            </div>
            <div className="form-group">
              <label for="email" class="col-sm-offset-2 col-sm-2 control-label">Email</label>
              <div className="col-sm-6">
                <input id="email" type="text" class="form-control"/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-4 col-sm-10">
                <button type="submit" class="btn btn-default">Versturen</button>
              </div>
            </div>
          </form>

      </div>
    </div>
  </div>
)

export default Register